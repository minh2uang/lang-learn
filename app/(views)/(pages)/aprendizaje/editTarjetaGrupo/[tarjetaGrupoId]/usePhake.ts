import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import { useParams, useRouter } from 'next/navigation'
import useDeleteRequest from '@repo/shared-stuff/hooks/queries/useDeleteRequest'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import usePatchRequest from '@repo/shared-stuff/hooks/queries/usePatchRequest'
import TarjetaGrupoModel from '@/app/models/aprendizaje/TarjetaGrupoModel'

const usePhake = () => {
  const { tarjetaGrupoId } = useParams()
  const { data: tarjetaGrupo } = useGetRequest<TarjetaGrupoModel>(
    `/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`
  )
  const { register, handleSubmit, isSubmitting, formValues } =
    useForm<TarjetaGrupoModel>({
      defaultValues: tarjetaGrupo
    })
  const doDeleteTarjetaGrupo = useDeleteRequest(
    `/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`
  )
  const doPatchTarjetaGrupo = usePatchRequest<Partial<TarjetaGrupoModel>>(
    `/aprendizaje/tarjetaGrupo/${tarjetaGrupoId}`
  )

  const router = useRouter()

  const onClickDelete = handleSubmit(async () => {
    await doDeleteTarjetaGrupo()
    router.push(`/`)
  })

  const onClickUpdate = handleSubmit(
    async () => await doPatchTarjetaGrupo(formValues)
  )

  return { onClickDelete, register, isSubmitting, onClickUpdate }
}

export default usePhake
