import {
  ColorModeScript,
  ChakraProvider,
  extendTheme,
  theme,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
// import './index.scss';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// const colors = {
//   brand: {
//     900: '#1a665d',
//     800: '#153e75',
//     700: '#2a69ac',
//   },
// };
// const theme = extendTheme({ colors });
root.render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher zIndex={'4'} />
      <App />
    </ChakraProvider>
  </StrictMode>
);
