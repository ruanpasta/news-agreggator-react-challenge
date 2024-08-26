import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {/* In a project with more than one page we can use routes to deal with other pages */}
          <Home />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
