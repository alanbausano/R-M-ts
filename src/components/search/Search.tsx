import { Dispatch, SetStateAction, useContext } from "react";
import { QueryContext } from "../context/QueryContext";

interface SearchProps {
  setPageNumber: Dispatch<SetStateAction<number>>;
}

export const Search: React.FC<SearchProps> = ({ setPageNumber }) => {
  const { state, setState } = useContext(QueryContext);
  const handleChange = (q: string) => {
    setState(q);
    setPageNumber(1);
    if (q.length === 0) {
      setPageNumber(1);
    }
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          placeholder="Search characters..."
          value={state}
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </section>
  );
};
