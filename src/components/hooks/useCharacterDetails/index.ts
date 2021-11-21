import { useQuery } from 'react-query'
import { getCharacters } from './api'

const onError = () => {
    alert('Error getting characters')
}

const useCharacterDetails = () => {
  const { data, isLoading } = useQuery('characters', () => getCharacters(), {
    onError,
  })

  return {
    characters: data,
    isLoading,
  }
}

export { useCharacterDetails }
