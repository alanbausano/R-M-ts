import { Cards } from "./components/main/Cards";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryContextProvider } from "./components/context/QueryContext";
import { Search } from "./components/search/Search";
import { Logo } from "./components/logo/Logo";
import { useState } from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(1);
  const queryClient = new QueryClient();
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <QueryContextProvider>
          <Logo />
          <Search setPageNumber={setPageNumber} />
          <Cards pageNumber={pageNumber} setPageNumber={setPageNumber} />
        </QueryContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
