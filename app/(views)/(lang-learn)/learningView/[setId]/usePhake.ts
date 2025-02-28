import dayjs from 'dayjs'
import useForm from '@repo/shared-stuff/hooks/forms/useForm'
import { useParams } from 'next/navigation'
import usePatchRequest from '@repo/shared-stuff/hooks/queries/usePatchRequest'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import { useEffect } from 'react'
import useDeleteRequest from '@repo/shared-stuff/hooks/queries/useDeleteRequest'
import CardModel from '@/app/models/CardModel'
import SetModel from '@/app/models/SetModel'

export const getMidnightToday = () => {
  const d = new Date()
  d.setHours(0, 0, 0)
  return d
}
interface Form {
  score: number
  currentCard: (CardModel & { startDefault: number; endDefault: number }) | null
}
const useData = () => {
  const { setId } = useParams()
  const { data: card, refetch: getNextCard } = useGetRequest<CardModel | null>(
    `/cards/getNext/${setId}`
  )
  const { data: set, refetch: refetchSet } = useGetRequest<SetModel>(
    `/sets/${setId}`
  )
  const { learnedToday, revisedToday } = set

  const { setValue, handleSubmit, formValues, register } = useForm<Form>({
    defaultValues: {
      currentCard: card ? { ...card, startDefault: 0, endDefault: 0 } : null,
      score: 0
    },
    validates: {}
  })

  useEffect(() => {
    setValue(
      'currentCard',
      card ? { ...card, startDefault: 0, endDefault: 0 } : null
    )
  }, [card])

  const updateCard = usePatchRequest<{}>(`/cards/${card?._id}/updateCard`)
  const deleteCard = useDeleteRequest(`/cards/${card?._id}`)

  const onClickSiguiente = handleSubmit(async ({ currentCard }) => {
    if (currentCard) {
      const { endDefault, startDefault, ...toPost } = currentCard

      try {
        await updateCard({})
        await getNextCard()
        await refetchSet()
      } catch (err) {
        throw err
      }
    }
  })
  const onClickSave = async () => {
    const doSubmit = handleSubmit(async ({ currentCard }) => {
      if (currentCard) {
        const newCard = {
          ...currentCard
        }
        try {
          const { startDefault, endDefault, ...rest } = newCard
          await updateCard(newCard)
          setValue('currentCard', newCard)
        } catch (err) {
          throw err
        }
      }
    })
    return doSubmit()
  }
  const onClickDelete = handleSubmit(async ({ currentCard }) => {
    if (currentCard) {
      try {
        await deleteCard()
        await getNextCard()
      } catch (err) {
        throw err
      }
    }
  })

  return {
    onClickDelete,
    onClickSave,
    onClickSiguiente,
    register,
    currentCard: formValues?.currentCard,
    learnedToday,
    revisedToday
  }
}

export default useData
