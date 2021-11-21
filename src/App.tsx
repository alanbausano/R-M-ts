import Cards from "./components/main/Cards";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryContextProvider } from "./components/context/QueryContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <QueryContextProvider>
          <Cards />
        </QueryContextProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
