import { z } from 'zod'
import { DocumentId } from '../Zod'

const FieldsModel = z.object({
  pregunta: z.string(),
  respuesta: z.string(),
  type: z.literal('default').default('default')
})

const ReviewLogModel = z.object({
  interval: z.number(),
  efactor: z.number(),
  repetition: z.number()
})

const TarjetaModel = z.object({
  _id: DocumentId,
  _createdBy: z.string(),
  _createdAt: z.date().default(new Date()),
  _tarjetaGrupoId: z.string(),
  fieldsModel: FieldsModel,
  reviewLog: ReviewLogModel.default({
    interval: 0,
    efactor: 2.5,
    repetition: 0
  }),
  dueDate: z
    .string()
    .default('')
    .transform((i) => (i ? new Date(i) : new Date()))
})

type TarjetaModel = z.infer<typeof TarjetaModel>

export type CardModelClient = z.input<typeof TarjetaModel>
export default TarjetaModel
