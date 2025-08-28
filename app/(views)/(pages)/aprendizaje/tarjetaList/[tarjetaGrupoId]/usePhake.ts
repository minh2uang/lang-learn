'use client'

import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'
import useDeleteRequest from '@repo/shared-stuff/hooks/queries/useDeleteRequest'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import { useParams } from 'next/navigation'

const usePhake = () => {
  // prepare data
  const { data: tarjetaArray } = useGetRequest<Array<TarjetaModel>>(
    '/aprendizaje/tarjeta'
  )
  const { tarjetaGrupoId } = useParams()
  const tarjetaArrayByList = tarjetaArray.filter(
    (i) => i._tarjetaGrupoId === tarjetaGrupoId
  )
  return { tarjetaArrayByList }
}

export default usePhake
