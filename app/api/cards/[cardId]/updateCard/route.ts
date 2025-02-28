import DbService from '@/app/services/DbService'
import getMidnightToday from '@/app/utils/getMidnightTonight'
import dayjs from 'dayjs'

const getNivel = (nivel: number): number =>
  nivel > 5 ? 5 : nivel < 0 ? 0 : nivel

export const PATCH = async (
  request: Request,
  { params }: { params: { cardId: string } }
) => {
  const card = await DbService()
    .getCollection('cards')
    .findOne({ _id: params.cardId })
  const set = await DbService()
    .getCollection('sets')
    .findOne({ _id: card?._setId })

  if (!!!card || !!!set) {
    return Response.json(null)
  }

  await DbService()
    .getCollection('cards')
    .findOneAndUpdate(
      { _id: params.cardId },
      {
        $set: {
          nivel: getNivel(card.nivel + 1),
          dueDate:
            card.nivel + 1 <= 5
              ? dayjs(getMidnightToday()).add(1, 'days').toDate()
              : null
        }
      }
    )

  await DbService()
    .getCollection('sets')
    .findOneAndUpdate(
      { _id: card._setId },
      {
        $set:
          getMidnightToday().getTime() < set.lastLearnedTime?.getTime()
            ? {
                revisedToday:
                  card.nivel === 0 ? set.revisedToday : set.revisedToday + 1,
                learnedToday:
                  card.nivel === 0 ? set.learnedToday + 1 : set.learnedToday,
                lastLearnedTime: new Date()
              }
            : {
                revisedToday: card.nivel === 0 ? 0 : 1,
                learnedToday: card.nivel === 0 ? 1 : 0,
                lastLearnedTime: new Date()
              }
      }
    )
  return Response.json(
    await DbService().getCollection('cards').findOne({ _id: params.cardId })
  )
}
