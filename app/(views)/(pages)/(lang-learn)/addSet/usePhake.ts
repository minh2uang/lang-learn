import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import { useGetUser } from '@/app/setup/UserProvider'
import usePostRequest from '@repo/shared-stuff/hooks/queries/usePostRequest'
import SetModel from '@/app/models/lang-learn/SetModel'

interface Form {
  name: string
  description: string
}

const usePhake = () => {
  const { register, clearForm, handleSubmit, isSubmittable } = useForm<Form>({})
  const user = useGetUser()
  const createSet = usePostRequest<Partial<SetModel>>('/dynamic/sets')
  const onClickCreateButton = handleSubmit(async (toSubmit) => {
    await createSet({
      ...toSubmit,
      _createdBy: user.email,
      revisedToday: 0,
      learnedToday: 0
    })
    clearForm()
  })
  return { onClickCreateButton, register, isSubmittable }
}

export default usePhake
