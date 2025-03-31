import { findOne, genericFunction } from '@/app/api/utils'

export const GET = genericFunction<{ id: string }, null>(async (params) => {
  const toReview = await findOne(
    'tarjetas',
    {
      'reviewLog.dueDate': { $lt: new Date() },
      'reviewLog.repetition': { $not: 0 }
    },
    { sort: [['reviewLog.dueDate', 'asc']] }
  )

  if (!!toReview) {
    return toReview
  }

  const toLearn = await findOne(
    'tarjetas',
    {
      'reviewLog.repetition': 0
    },
    {
      sort: [['_createdAt', 'asc']]
    }
  )
  if (!!toLearn) {
    return toLearn
  }
  return null
})
