import DbService from '@/app/services/DbService'
import getMidnightToday from '@/app/utils/getMidnightTonight'

export const POST = async (
  request: Request,
  { params }: { params: { resource: string; setId: string } }
) => {
  const { searchParams } = new URL(request.url)
  const isNew: boolean = searchParams.get('isNew')?.toLowerCase() === 'true'
  const set = await DbService()
    .getCollection('sets')
    .findOne({ _id: params.setId })

  if (!!!set) {
    return Response.json(null)
  }

  await DbService()
    .getCollection('sets')
    .findOneAndUpdate(
      { _id: params.setId },
      {
        $set:
          getMidnightToday().getTime() < set.lastLearnedTime?.getTime()
            ? {
                revisedToday: isNew ? set.revisedToday : set.revisedToday + 1,
                learnedToday: isNew ? set.learnedToday + 1 : set.learnedToday,
                lastLearnedTime: new Date()
              }
            : {
                revisedToday: 1,
                learnedToday: 1,
                lastLearnedTime: new Date()
              }
      }
    )

  return Response.json(
    await DbService().getCollection('sets').findOne({ _id: params.setId })
  )
}
