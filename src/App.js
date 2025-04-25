import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Cat from "./components/Cat";
import useToggle from "./components/useToggle";

function App() {
  // This is for get Cat
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

  const [isVisible, toggle] = useToggle();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}
        <Cat />
      </QueryClientProvider>
    </div>
  );
}

export default App;
