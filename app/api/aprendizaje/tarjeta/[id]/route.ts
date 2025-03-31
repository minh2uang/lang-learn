import { deleteOne, findOne, genericFunction, updateOne } from '@/app/api/utils'
import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'

export const PATCH = genericFunction<{ id: string }, Partial<TarjetaModel>>(
  async (params, body) => await updateOne('tarjetas', { _id: params.id }, body)
)

export const GET = genericFunction<{ id: string }, null>(
  async (params) => await findOne('tarjetas', { _id: params.id })
)

export const DELETE = genericFunction<{ id: string }, Partial<TarjetaModel>>(
  async (params, body) => await deleteOne('tarjetas', { _id: params.id })
)
