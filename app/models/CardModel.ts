import { z } from 'zod'
import { DocumentId } from './Zod'

const CardModel = z.object({
  start: z.number(),
  end: z.number(),
  videoId: z.string(),
  dueDate: z
    .string()
    .nullable()
    .transform((i) => (i ? new Date(i) : null)),
  nivel: z.number(),
  _setId: DocumentId,
  _id: DocumentId,
  _createdBy: z.string()
})

type CardModel = z.infer<typeof CardModel>
export type CardModelClient = z.input<typeof CardModel>
export default CardModel
