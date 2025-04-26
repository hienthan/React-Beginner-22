import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import Cat from "./components/Cat";
import useToggle from "./components/useToggle";
import useCount from "./components/useCount";

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
  const { count, increase, decrease, restart } = useCount();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}
        <Cat />
      </QueryClientProvider>
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={restart}>Restart</button>
        <h1>{count}</h1>
      </div>
    </div>
  );
}

export default App;
