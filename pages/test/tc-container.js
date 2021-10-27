import { 
Container,
VStack
 } 
 from "@chakra-ui/react";
import Head from 'next/head'
const test =()=> {
  return (
    <>
    <Head>
      <title>Test Having Html Header</title>
    </Head>
   <VStack>
  <Container maxW="container.xl"  bg="green.500">Extra-Large Container</Container>
  <Container maxW="container.lg"  bg="red.200">Large Container</Container>
  <Container maxW="container.md"  bg="blue.200">Medium Container</Container>
  <Container maxW="container.sm"  bg="yellow.200">Small Container</Container>
</VStack>
    </>
  )
}
export default test