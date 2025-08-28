'use client'

import TarjetaModel from '@/app/models/aprendizaje/TarjetaModel'
import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import usePostRequest from '@repo/shared-stuff/hooks/queries/usePostRequest'
import { useParams } from 'next/navigation'

const usePhake = () => {
  // Prepare form and api functions
  const { tarjetaGrupoId } = useParams()
  const form = useForm<TarjetaModel['fieldsModel']>({})
  const doCreateTarjeta =
    usePostRequest<Partial<TarjetaModel>>(`/aprendizaje/tarjeta`)

  // Event handlers
  const onClickCreate = form.handleSubmit(async () => {
    await doCreateTarjeta({
      fieldsModel: form.formValues,
      _tarjetaGrupoId: tarjetaGrupoId as string
    })
    form.clearForm()
  })

  return { onClickCreate, form, doCreateTarjeta }
}

export default usePhake
