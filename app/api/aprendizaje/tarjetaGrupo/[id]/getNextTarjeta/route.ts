import { findOne, genericFunction } from '@/app/api/utils'

export const GET = genericFunction<{ id: string }, null>(async (params) => {
  const toReview = await findOne(
    'tarjetas',
    {
      dueDate: { $lt: new Date() },
      'reviewLog.repetition': { $ne: 0 },
      _tarjetaGrupoId: params.id
    },
    { sort: [['reviewLog.dueDate', 'asc']] }
  )

  if (!!toReview) {
    return toReview
  }

  const toLearn = await findOne(
    'tarjetas',
    {
      dueDate: null,
      _tarjetaGrupoId: params.id
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
