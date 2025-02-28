import { useRouter } from 'next/navigation'
import useGetRequest from '@repo/shared-stuff/hooks/queries/useGetRequest'
import SetModel from '@/app/models/SetModel'
import { useState } from 'react'
import { Select } from '@repo/shared-stuff/forms/TcSelectField'

const usePhake = () => {
  const [setGroup, setSetGroup] = useState<Select>()
  const router = useRouter()
  const { data: sets } = useGetRequest<SetModel[]>('/dynamic/sets')
  const onClickSet = (setId: string) => router.push(`/learningView/${setId}`)
  const onClickEdit = (setId: string) => router.push(`/editSet/${setId}`)
  const onClickAddSet = () => router.push('/addSet')

  const filteredSets = !!setGroup
    ? sets.filter((set) => set.setGroup === setGroup?._id)
    : sets

  const setGroups: Select[] = [
    ...new Set(sets.map((set) => set.setGroup || ''))
  ].map((setGroup) => ({ _id: setGroup, name: setGroup || '(Blank)' }))

  return {
    onClickSet,
    onClickEdit,
    onClickAddSet,
    sets,
    filteredSets,
    setSetGroup,
    setGroups,
    setGroup
  }
}

export default usePhake
