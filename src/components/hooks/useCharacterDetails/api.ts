import { Character, Info } from "../../types/index";
import axios from "axios";

interface GetCharactersResponse {
  results: Character[]
  info: Info
}

export const getCharacters = async (
  query: string | undefined,
  page: number,
) => {
  const result = await axios.get<GetCharactersResponse>(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${query}`
  );
  console.log(result.data);
  return result.data;
};

// export const getCharacters = async (query: string | undefined) => {
//     const result = await axios.get<GetCharactersResponse>(`https://rickandmortyapi.com/api/character?name=${query}`)
//     console.log(result.data)
//     return result.data.results
//   }
