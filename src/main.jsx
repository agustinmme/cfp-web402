import React from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from "@chakra-ui/react"
import App from './routes/AppRouter'
import Campus from './pages/Campus'
import Contact from './pages/Courses'
ReactDOM.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
