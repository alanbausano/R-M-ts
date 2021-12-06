import Cards from "./components/main/Cards";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryContextProvider } from "./components/context/QueryContext";
import { Search } from "./components/search/Search";
import { Logo } from "./components/logo/Logo";




function App() {
  const queryClient = new QueryClient();
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <QueryContextProvider>
          <Logo />
          <Search />
          <Cards />
        </QueryContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
