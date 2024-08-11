import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme} from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'

const styles ={
  global:(props) => ({
    body:{
      bg:mode("white","#ffff")(props),
      color:mode("gray.800","gray.900")(props),
    },
  }),
}


const theme=extendTheme({styles})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ChakraProvider theme={theme}>
     <App/>
     </ChakraProvider>
  </React.StrictMode>,
)
