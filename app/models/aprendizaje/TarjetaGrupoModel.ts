import { z } from 'zod'
import { DocumentId } from '../Zod'

const SetModel = z.object({
  _id: DocumentId,
  _createdBy: z.string(),
  name: z.string(),
  learnSettings: z
    .object({
      learnedToday: z.number(),
      learnedTarget: z.number(),
      reviewedToday: z.number(),
      reviewedTarget: z.number(),
      lastActiveTime: z.date()
    })
    .default({
      learnedTarget: 15,
      reviewedTarget: 15,
      reviewedToday: 0,
      learnedToday: 0,
      lastActiveTime: new Date()
    })
})

type SetModel = z.infer<typeof SetModel>
export type SetModelClient = z.input<typeof SetModel>

export default SetModel
