import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'
import { createOne, findMany, genericFunction } from '../../utils'

export const GET = genericFunction<null, null>(
  async () => await findMany('tarjetas', {})
)

export const POST = genericFunction<null, TarjetaModel>(
  async (params, body) => await createOne('tarjetas', body)
)
