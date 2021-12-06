import { useQuery } from 'react-query'
import { getCharacters } from './api'

const onError = () => {
    alert('Error getting characters')
}

const useCharacterDetails = (query: string | undefined) => {
  const { data, isLoading, isSuccess } = useQuery(['characters',  {query}], () => getCharacters(query), {
    onError,
  })

  return {
    characters: data,
    isLoading,
    isSuccess,
  }
}

export { useCharacterDetails }
