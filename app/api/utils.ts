import {
  Filter,
  FindOptions,
  OptionalUnlessRequiredId,
  UpdateFilter
} from 'mongodb'
import DbService, { Database } from '../services/DbService'
import getNonNullUser from '../services/users/getNonNullUser'
import { DbModel } from '../models/DbModel'

export const genericFunction =
  <PathParamType, BodyType>(
    doSomething: (params: PathParamType, body: BodyType) => Promise<any>
  ) =>
  async (request: Request, { params }: { params: PathParamType }) => {
    let body = null
    try {
      body = await request.json()
    } catch (e) {
    } finally {
      return Response.json(await doSomething(params, body))
    }
  }

export const findOne = async <CollectionName extends keyof Database>(
  collectionName: CollectionName,
  query: Filter<Database[CollectionName]>,
  options?: FindOptions
) =>
  await DbService()
    .getCollection(collectionName)
    .findOne({ ...query, _createdBy: getNonNullUser }, options)

export const findMany = async <CollectionName extends keyof Database>(
  collectionName: CollectionName,
  query: Filter<Database[CollectionName]>
) =>
  await DbService()
    .getCollection(collectionName)
    .find({ ...query, _createdBy: getNonNullUser })
    .toArray()

export const updateOne = async <CollectionName extends keyof Database>(
  collectionName: CollectionName,
  filter: Filter<Database[CollectionName]>,
  update: Partial<Database[CollectionName]>
) => {
  const validator = DbModel.shape[collectionName]
  const { _id, ...rest } = validator.partial().parse(update)

  return await DbService()
    .getCollection(collectionName)
    .updateOne(
      { ...filter, _createdBy: getNonNullUser },
      { $set: rest as Partial<Database[CollectionName]> }
    )
}

export const createOne = async <CollectionName extends keyof Database>(
  collectionName: CollectionName,
  newItem: Database[CollectionName]
) => {
  const validator = DbModel.shape[collectionName]
  const parsed = validator.parse({
    ...newItem,
    _createdBy: (await getNonNullUser()).email
  }) as OptionalUnlessRequiredId<Database[CollectionName]>
  return await DbService().getCollection(collectionName).insertOne(parsed)
}

export const deleteOne = async <CollectionName extends keyof Database>(
  collectionName: CollectionName,
  filter: Filter<Database[CollectionName]>
) =>
  await DbService()
    .getCollection(collectionName)
    .deleteOne({ ...filter, _createdBy: getNonNullUser })

export const deleteMany = async <CollectionName extends keyof Database>(
  collectionName: CollectionName,
  filter: Filter<Database[CollectionName]>
) =>
  await DbService()
    .getCollection(collectionName)
    .deleteMany({ ...filter, _createdBy: getNonNullUser })
