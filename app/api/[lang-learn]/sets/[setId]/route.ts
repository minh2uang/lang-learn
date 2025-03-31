import { DbModel } from '@/app/models/DbModel'
import DbService from '@/app/services/DbService'

export const DELETE = async (
  request: Request,
  { params }: { params: { setId: string } }
) => {
  await DbService().getCollection('cards').deleteMany({
    _setId: params.setId
  })
  await DbService().getCollection('sets').findOneAndDelete({
    _id: params.setId
  })
  return Response.json({})
}

export const GET = async (
  request: Request,
  { params }: { params: { setId: string } }
) => {
  return Response.json(
    await DbService().getCollection('sets').findOne({
      _id: params.setId
    })
  )
}

export const PATCH = async (
  request: Request,
  { params }: { params: { resource: string; setId: string } }
) => {
  const validator = DbModel.shape['sets'].partial()
  const { _id: _, ...rest } = validator.parse(await request.json())

  await DbService().getCollection('sets').findOneAndUpdate(
    { _id: params.setId },
    {
      $set: rest
    }
  )

  return Response.json(
    await DbService().getCollection('sets').findOne({ _id: params.setId })
  )
}
