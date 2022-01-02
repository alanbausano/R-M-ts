import { useQuery } from "react-query";
import { getCharacters } from "./api";

const useCharacterDetails = (query: string | undefined, page: number) => {
  const { data, isLoading, isError } = useQuery(
    ["characters", { query, page }],
    () => getCharacters(query, page),
    {
      retry: false,
    }
  );

  let totalCount = data?.info.pages;

  return {
    characters: data,
    isLoading,
    isError,
    totalCount,
  };
};

export { useCharacterDetails };
