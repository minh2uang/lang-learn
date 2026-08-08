import DbService from '@/app/services/DbService'

export const DELETE = async (
  request: Request,
  { params }: { params: { cardId: string } }
) => {
  const { cardId } = params
  await DbService().getCollection('cards').deleteOne({
    _id: cardId
  })
  return Response.json({})
}
