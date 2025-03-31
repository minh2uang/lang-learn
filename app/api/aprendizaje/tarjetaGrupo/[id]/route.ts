import {
  deleteMany,
  deleteOne,
  findOne,
  genericFunction,
  updateOne
} from '@/app/api/utils'
import TarjetaModel from '@/app/models/aprendizaje/TarjetaGrupoModel'

const PATCH = genericFunction<{ id: string }, Partial<TarjetaModel>>(
  async (params, body) =>
    await updateOne('tarjetaGrupos', { _id: params.id }, body)
)

const GET = genericFunction<{ id: string }, null>(
  async (params) => await findOne('tarjetaGrupos', { _id: params.id })
)

const DELETE = genericFunction<{ id: string }, Partial<TarjetaModel>>(
  async (params, body) => {
    await deleteMany('tarjetas', { _tarjetaGrupoId: params.id })
    return await deleteOne('tarjetaGrupos', { _id: params.id })
  }
)

export { PATCH, GET, DELETE }
