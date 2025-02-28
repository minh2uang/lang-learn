import DbService, { LangLearnDatabase } from '@/app/services/DbService'
import getNonNullUser from '@/app/services/users/getNonNullUser'
import dayjs from 'dayjs'

export const getMidnightToday = () => {
  const d = new Date()
  d.setHours(0, 0, 0)
  return d
}
export const GET = async (
  _: Request,
  { params: { setId } }: { params: { setId: string } }
) => {
  const cardsCollection = DbService().getCollection('cards')
  try {
    let card = await cardsCollection.findOne(
      {
        _setId: setId,
        _createdBy: (await getNonNullUser()).email,
        nivel: { $lt: 5 },
        dueDate: { $lt: dayjs(getMidnightToday()).add(1, 'hours').toDate() }
      },
      {
        sort: [
          ['nivel', 'desc'],
          ['start', 'asc']
        ]
      }
    )

    return Response.json(
      card && {
        ...card,
        _id: card._id.toString(),
        _setId: card._setId.toString(),
        startDefault: card.start,
        endDefault: card.end
      }
    )
  } catch (e) {
    throw e
  }
}
