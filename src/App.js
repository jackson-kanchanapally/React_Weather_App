import * as React from 'react'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Weather from './componets/Weather'

export default function App() {
  
  return (
    <ChakraProvider>
     <Weather/>
    </ChakraProvider>
  )
}
