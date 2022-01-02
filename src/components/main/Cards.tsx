import { Pagination } from "@mui/material";
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
  const { characters, isLoading, isError, totalCount } = useCharacterDetails(
    state,
    pageNumber
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageNumber(value);
  };

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

      <Pagination
        count={totalCount}
        onChange={handleChange}
        style={{ display: "flex", justifyContent: "center", margin: "35px" }}
        variant="outlined"
        color="primary"
        defaultPage={1}
        page={pageNumber}
      />
    </>
  );
};

export { Cards };
