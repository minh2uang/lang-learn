'use client'

import TarjetaGrupoModel from '@/app/models/aprendizaje/TarjetaGrupoModel'
import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import usePostRequest from '@repo/shared-stuff/hooks/queries/usePostRequest'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

const usePhake = () => {
  // Form and server actions
  const { tarjetaGrupoId } = useParams()
  const router = useRouter()
  const { data: tarjeta, refetch: refetchTarjeta } =
    useGetRequest<TarjetaModel | null>(
      `/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}/getNextTarjeta`
    )

  const { data: tarjetaGrupo, refetch: refetchTarjetaGrupo } =
    useGetRequest<TarjetaGrupoModel>(
      `/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`
    )

  const doLearnTarjeta = usePostRequest<{ score: 1 | 2 | 3 | 4 | 5 }>(
    `/aprendizaje/tarjeta/${tarjeta?._id}/learnTarjeta`
  )

  const [isRespuestaShown, setIsRespuestaShown] = useState<boolean>(false)

  // Event handlers
  const onClickAScore = async (score: 1 | 2 | 3 | 4 | 5) => {
    await doLearnTarjeta({ score })
    await refetchTarjeta()
    await refetchTarjetaGrupo()
    setIsRespuestaShown(false)
  }

  const onClickShowRespuesta = () => setIsRespuestaShown(true)

  return {
    onClickAScore,
    tarjeta,
    onClickShowRespuesta,
    isRespuestaShown,
    tarjetaGrupo
  }
}
export default usePhake
