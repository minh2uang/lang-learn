import { z } from 'zod'
import CardModel from './lang-learn/CardModel'
import SetModel from './lang-learn/SetModel'
import TarjetaModel from './aprendizaje/TarjetaModel'
import TarjetaGrupoModel from './aprendizaje/TarjetaGrupoModel'

const LangLearnModel = z.object({
  cards: CardModel,
  sets: SetModel
})

const AprendizajeModel = z.object({
  tarjetas: TarjetaModel,
  tarjetaGrupos: TarjetaGrupoModel
})

export const DbModel = z
  .object({})
  .merge(LangLearnModel)
  .merge(AprendizajeModel)
export type DbModel = z.infer<typeof DbModel>
