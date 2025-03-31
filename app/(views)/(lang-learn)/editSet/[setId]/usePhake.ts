import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import { useParams, useRouter } from 'next/navigation'
import useDeleteRequest from '@repo/shared-stuff/hooks/queries/useDeleteRequest'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import { SetModelClient } from '@/app/models/lang-learn/SetModel'
import { CardModelClient } from '@/app/models/lang-learn/CardModel'
import usePatchRequest from '@repo/shared-stuff/hooks/queries/usePatchRequest'

interface Form {
  name: string
  description: string
}

const usePhake = () => {
  const { setId } = useParams()
  const { data: set } = useGetRequest<SetModelClient>(`/dynamic/sets/${setId}`)
  const { register, handleSubmit, isSubmitting, formValues } =
    useForm<SetModelClient>({
      defaultValues: set
    })
  const doDeleteSet = useDeleteRequest(`/dynamic/sets/${setId}`)
  const doPatchSet = usePatchRequest<Partial<SetModelClient>>(
    `/dynamic/sets/${setId}`
  )

  const router = useRouter()

  const onClickDelete = handleSubmit(async () => {
    await doDeleteSet()
    router.push(`/`)
  })

  const onClickUpdate = handleSubmit(async () => await doPatchSet(formValues))

  return { onClickDelete, register, isSubmitting, onClickUpdate }
}

export default usePhake
