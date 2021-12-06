import { Character } from '../../types/index'
import axios from 'axios';

interface GetCharactersResponse {
  results: Character[]
}

export const getPagination = async (page: number) => {
    const result = await axios.get<GetCharactersResponse>(`https://rickandmortyapi.com/api/character/?page=${page}`)
    console.log(result.data.results)
    return result.data.results
  }

export const getCharacters = async (query: string | undefined) => {
    const result = await axios.get<GetCharactersResponse>(`https://rickandmortyapi.com/api/character?name=${query}`)
    console.log(result.data.results)
    return result.data.results
  }

  