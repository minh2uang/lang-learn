import { DbModel } from '@/app/models/DbModel'
import DbService from '@/app/services/DbService'
import getNonNullUser from '@/app/services/users/getNonNullUser'

export const GET = async (
  request: Request,
  { params }: { params: { resource: string; id: string } }
) => {
  const resource: keyof DbModel = params.resource as keyof DbModel

  const _id: string = params.id
  return Response.json(
    await DbService()
      .getCollection(resource)
      .findOne({
        _id,
        _createdBy: (await getNonNullUser()).email
      })
  )
}

export const DELETE = async (
  request: Request,
  { params }: { params: { resource: string; id: string } }
) => {
  const resource: keyof DbModel = params.resource as keyof DbModel

  const _id: string = params.id
  return Response.json(
    await DbService()
      .getCollection(resource)
      .findOneAndDelete({
        _id,
        _createdBy: (await getNonNullUser()).email
      })
  )
}

export const PATCH = async (
  request: Request,
  { params }: { params: { resource: string; id: string } }
) => {
  const resource: keyof DbModel = params.resource as keyof DbModel
  const validator = DbModel.shape[resource]
  const _id: string = params.id
  const { _id: _, ...rest } = validator.parse(await request.json())
  return Response.json(
    await DbService()
      .getCollection(resource)
      .findOneAndUpdate(
        { _id, _createdBy: (await getNonNullUser()).email },
        {
          $set: rest
        }
      )
  )
}
