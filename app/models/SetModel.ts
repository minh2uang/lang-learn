import { z } from 'zod'
import { DocumentId } from './Zod'

const SetModel = z.object({
  _id: DocumentId,
  _createdBy: z.string(),
  name: z.string(),
  description: z.string().optional(),
  revisedToday: z.number().default(0),
  learnedToday: z.number().default(0),
  lastLearnedTime: z
    .string()
    .transform((i) => (i ? new Date(i) : new Date()))
    .default(new Date().toString()),
  isHidden: z.boolean().optional(),
  setGroup: z.string().optional()
})

type SetModel = z.infer<typeof SetModel>
export type SetModelClient = z.input<typeof SetModel>

export default SetModel
