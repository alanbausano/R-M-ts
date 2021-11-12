import { Character } from '../../types/index'
import axios from 'axios';

interface GetCharactersResponse {
  character: Character
}

export const getCharacters = async () => {
    const result = await axios.get<GetCharactersResponse>(`https://rickandmortyapi.com/api`)
    
    return result.data.character
  }