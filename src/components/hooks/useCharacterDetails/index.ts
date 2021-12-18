import { useQuery } from 'react-query'
import { getCharacters } from './api'

const useCharacterDetails = (query: string | undefined, page:number) => {
  const { data, isLoading, isError } = useQuery(['characters',  {query, page}], () => getCharacters(query, page), {
    retry: false
  })

  return {
    characters: data,
    isLoading,
    isError,
  }
}

export { useCharacterDetails }
