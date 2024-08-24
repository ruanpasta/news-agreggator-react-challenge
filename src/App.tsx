import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Header from "./componesnts/Header";
import theme from "./theme";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
      </ChakraProvider>
    </>
  );
}

export default App;
