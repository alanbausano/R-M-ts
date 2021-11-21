import { Character } from '../../types/index'
import axios from 'axios';

interface GetCharactersResponse {
  results: Character[]
}

export const getCharacters = async () => {
    const result = await axios.get<GetCharactersResponse>(`https://rickandmortyapi.com/api/character`)
    console.log(result.data.results)
    return result.data.results
  }

  