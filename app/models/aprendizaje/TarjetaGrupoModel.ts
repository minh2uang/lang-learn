import { z } from 'zod'
import { DocumentId } from '../Zod'

const SetModel = z.object({
  _id: DocumentId,
  _createdBy: z.string(),
  name: z.string()
})

type SetModel = z.infer<typeof SetModel>
export type SetModelClient = z.input<typeof SetModel>

export default SetModel
