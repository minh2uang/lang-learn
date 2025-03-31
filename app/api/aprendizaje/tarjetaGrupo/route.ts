import { createOne, findMany, genericFunction } from '../../utils'
import TarjetaGrupoModel from '@/app/models/aprendizaje/TarjetaGrupoModel'

export const GET = genericFunction<null, null>(
  async () => await findMany('tarjetaGrupos', {})
)

export const POST = genericFunction<null, TarjetaGrupoModel>(
  async (params, body) => await createOne('tarjetaGrupos', body)
)
