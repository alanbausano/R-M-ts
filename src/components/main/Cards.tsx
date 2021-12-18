import { Dispatch, SetStateAction, useContext } from "react";
import { PacmanLoader } from "react-spinners";
import { QueryContext } from "../context/QueryContext";
import { useCharacterDetails } from "../hooks/useCharacterDetails/index";
import CardDetails from "./CardDetails";

interface CardProps {
  pageNumber: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}

const Cards: React.FC<CardProps> = ({ pageNumber, setPageNumber }) => {
  const { state } = useContext(QueryContext);
  const { characters, isLoading, isError } = useCharacterDetails(
    state,
    pageNumber
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <PacmanLoader color="#376956" loading={isLoading} />
      </div>
      <section className="cards">
        <CardDetails characters={characters?.results} />
      </section>
      {isError && (
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          No characters found
        </h1>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px",
          perspective: "420px",
        }}
      >
        <button
          className="btn1"
          onClick={() => setPageNumber((old) => Math.max(old - 1, 1))}
          disabled={pageNumber === 1}
        >
          Prev page
        </button>
        <div className="pageNumber">
          Page {pageNumber}/{characters?.info.pages}
        </div>
        <button
          className="btn2"
          disabled={!characters || !characters.info.next}
          onClick={() =>
            setPageNumber((old) =>
              !characters || !characters?.info.next ? old : old + 1
            )
          }
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export { Cards };
