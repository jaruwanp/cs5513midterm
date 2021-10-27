import { 
Container,
VStack,
Wrap, 
WrapItem,
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
   <VStack>
  <Container maxW="container.xl"  bg="green.500">
  
  <Wrap>
  <WrapItem>
    <Center w="180px" h="80px" bg="red.200">
      Box 1
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="green.200">
      Box 2
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="tomato">
      Box 3
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w="180px" h="80px" bg="blue.200">
      Box 4
    </Center>
  </WrapItem>
</Wrap>
  
  
  </Container>

</VStack>
    </>
  )
}
export default test