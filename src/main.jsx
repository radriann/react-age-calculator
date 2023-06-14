import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme.js'
import { AgeContextProvider } from './context/AgeContext.jsx'

import '@fontsource/poppins/400.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/800.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <AgeContextProvider>
        <App />
      </AgeContextProvider>
    </ChakraProvider>
  </React.StrictMode>
)
