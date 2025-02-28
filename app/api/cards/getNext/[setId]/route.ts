import DbService, { LangLearnDatabase } from '@/app/services/DbService'
import getNonNullUser from '@/app/services/users/getNonNullUser'
import getMidnightToday from '@/app/utils/getMidnightTonight'
import dayjs from 'dayjs'

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
        dueDate: { $lt: dayjs(getMidnightToday()).add(15, 'hour').toDate() }
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
