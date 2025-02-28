import { useState } from 'react'
import CardModel from '@/app/models/CardModel'
import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import dayjs from 'dayjs'
import { useGetUser } from '@/app/setup/UserProvider'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import usePostRequest from '@repo/shared-stuff/hooks/queries/usePostRequest'
import SetModel from '@/app/models/SetModel'

type Form = {
  card: CardModel & {
    readonly startDefault: number
    readonly endDefault: number
  }
  videoId: string
  set: SetModel
}
const useData = () => {
  const [submitting, setSubmitting] = useState<boolean>(false)
  const user = useGetUser()
  const { formValues, setValue, register } = useForm<Form>({
    defaultValues: {
      card: {
        start: 0,
        end: 10,
        videoId: '',
        startDefault: 0,
        endDefault: 10,
        nivel: 0,
        dueDate: new Date(),
        _setId: '',
        _id: '',
        _createdBy: user.email
      },
      videoId: ''
    },
    validates: {}
  })

  const { videoId, end, start } = formValues.card
  const { data: sets } = useGetRequest<SetModel[]>('/dynamic/sets')
  const createCard = usePostRequest<CardModel>('/dynamic/cards')
  const doCreateCard = async () => {
    if (user) {
      try {
        setSubmitting(true)
        if (!!!videoId) {
          throw new Error('Not valid')
        }
        const toInsert = {
          start,
          end,
          videoId,
          dueDate: dayjs(new Date())
            .add(-1, 'days')
            .set('hour', 0)
            .set('minute', 0)
            .set('second', 0)
            .set('millisecond', 0)
            .toDate(),
          nivel: 0,
          _setId: formValues.set._id,
          _createdBy: user.email,
          _id: ''
        }

        await createCard(toInsert)

        setValue('card', {
          ...formValues.card,
          start: end,
          end: end + 3
        })
      } catch (err) {
        console.log(err)
        alert('Failed!!!')
      } finally {
        setSubmitting(false)
      }
    }
  }

  const registerVideoIdField = () => ({
    ...register('videoId'),
    onChange: (newValue: string) => {
      register('videoId').onChange(newValue)
      setValue('card', { ...formValues.card, videoId: newValue })
    }
  })
  return {
    doCreateCard,
    card: formValues.card,
    sets,
    setValue,
    submitting,
    register,
    registerVideoIdField
  }
}

export default useData
