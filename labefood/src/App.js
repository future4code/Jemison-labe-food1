import { Router } from "./routes";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles';
import GlobalState from './context/globalState.js';

const App = () => {
  return (

    <GlobalState>
      <ChakraProvider theme={theme}>
        <Router />
      </ChakraProvider>
    </GlobalState>
  );
}

export default App;