
import React from 'react'
import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import initAuth from '../utils/initAuth'
import { ChakraProvider } from "@chakra-ui/react"

initAuth()

function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp