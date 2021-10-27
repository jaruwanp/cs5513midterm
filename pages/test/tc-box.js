import { 
Box,
Center
 } 
 from "@chakra-ui/react";
import Head from 'next/head'
const test =()=> {
  return (
    <>
<Box border="1px" 
  borderColor="gray.200"
  backgroundImage="url('/images/bg.jpg')"
  backgroundPosition="center"
  backgroundRepeat="no-repeat"
  backgroundSize="cover"
  h="100vh"
  py={0}
>
  Card
</Box>
    </>
  )
}
export default test