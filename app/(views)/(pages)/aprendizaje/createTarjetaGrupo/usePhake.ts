import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import { useParams, useRouter } from 'next/navigation'
import TarjetaGrupoModel from '@/app/models/aprendizaje/TarjetaGrupoModel'
import usePostRequest from '@repo/shared-stuff/hooks/queries/usePostRequest'

const usePhake = () => {
  const router = useRouter()
  const { register, handleSubmit, isSubmitting, formValues, clearForm } =
    useForm<TarjetaGrupoModel>({})

  const doCreateTarjetaGrupo = usePostRequest<Partial<TarjetaGrupoModel>>(
    `/aprendizaje/tarjetaGrupo`
  )

  const onClickCreate = handleSubmit(async () => {
    await doCreateTarjetaGrupo(formValues)
    clearForm()
  })

  return { onClickCreate, register, isSubmitting }
}

export default usePhake
