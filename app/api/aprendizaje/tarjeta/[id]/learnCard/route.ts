import { findOne, genericFunction, updateOne } from '@/app/api/utils'
import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'
import dayjs from 'dayjs'
import { supermemo, SuperMemoGrade } from 'supermemo'

export const POST = genericFunction<{ id: string }, { score: SuperMemoGrade }>(
  async (params, body) => {
    const tarjeta = await findOne('tarjetas', { _id: params.id })
    if (!!!tarjeta) {
      return null
    }
    const newReviewLog = supermemo(tarjeta.reviewLog, body.score)

    return await updateOne(
      'tarjetas',
      { _id: params.id },
      {
        reviewLog: newReviewLog,
        dueDate: dayjs(tarjeta.dueDate)
          .add(newReviewLog.interval, 'days')
          .toDate()
      }
    )
  }
)
