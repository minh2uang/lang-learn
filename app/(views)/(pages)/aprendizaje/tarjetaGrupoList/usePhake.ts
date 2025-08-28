'use client'
import TarjetaGrupoModel from '@/app/models/aprendizaje/TarjetaGrupoModel'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import { useRouter } from 'next/navigation'

const usePhake = () => {
  const router = useRouter()
  const { data: tarjetaGrupos } = useGetRequest<TarjetaGrupoModel[]>(
    '/aprendizaje/tarjetaGrupo'
  )
  const onClickTarjetaGrupo = (tarjetaGrupoId: string) =>
    router.push(`/aprendizaje/learning/${tarjetaGrupoId}`)
  const onClickEdit = (tarjetaGrupoId: string) =>
    router.push(`/aprendizaje/editTarjetaGrupo/${tarjetaGrupoId}`)
  const onClickAddTarjetaGrupo = () =>
    router.push('/aprendizaje/createTarjetaGrupo')
  const onClickAddTarjetas = (tarjetaGrupoId: string) =>
    router.push(`/aprendizaje/createTarjeta/${tarjetaGrupoId}`)

  const onClickViewTarjetas = (tarjetaGrupoId: string) =>
    router.push(`/aprendizaje/tarjetaList/${tarjetaGrupoId}`)
  return {
    onClickTarjetaGrupo,
    onClickEdit,
    onClickAddTarjetaGrupo,
    tarjetaGrupos,
    onClickAddTarjetas,
    onClickViewTarjetas
  }
}
export default usePhake
