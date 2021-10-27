import { 
Container,
VStack,
Wrap, 
WrapItem,
SimpleGrid,
Box,
Center
 } 
 from "@chakra-ui/react";
import Head from 'next/head'
const test =()=> {
  return (
    <>
    <Head>
      <title>Test Having Html Header</title>
    </Head>
  <VStack w="full" h="full" bg="pink.900">
  <Container maxW="container.xl"  bg="green.500">
      <SimpleGrid columns={2} spacing={10}>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
      <Box bg="tomato" height="80px"></Box>
    </SimpleGrid> 
  </Container>
  </VStack>
    </>
  )
}
export default test