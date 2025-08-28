import { findOne, genericFunction, updateOne } from '@/app/api/utils'
import dayjs from 'dayjs'
import { supermemo, SuperMemoGrade } from 'supermemo'

const TIME_THRESHOLD = 22 * 60 * 60 * 1000 // 22 hours
export const POST = genericFunction<{ id: string }, { score: SuperMemoGrade }>(
  async (params, body) => {
    const tarjeta = await findOne('tarjetas', { _id: params.id })
    if (!!!tarjeta) {
      return null
    }
    const tarjetaGrupo = await findOne('tarjetaGrupos', {
      _id: tarjeta._tarjetaGrupoId
    })
    if (!!!tarjetaGrupo) {
      return null
    }

    const newReviewLog = supermemo(tarjeta.reviewLog, body.score)

    const shouldReset = (): boolean =>
      new Date().getTime() -
        tarjetaGrupo.learnSettings.lastActiveTime.getTime() >
      TIME_THRESHOLD

    const isNewTarjeta = tarjeta.dueDate === null
    await updateOne(
      'tarjetas',
      { _id: params.id },
      {
        reviewLog: newReviewLog,
        dueDate: dayjs().add(newReviewLog.interval, 'days').toDate()
      }
    )

    isNewTarjeta &&
      (await updateOne(
        'tarjetaGrupos',
        { _id: tarjetaGrupo._id },
        {
          learnSettings: {
            ...tarjetaGrupo.learnSettings,
            learnedToday: shouldReset()
              ? 1
              : tarjetaGrupo.learnSettings.learnedToday + 1,
            lastActiveTime: new Date()
          }
        }
      ))
    return findOne('tarjetas', { _id: tarjeta._id })
  }
)
