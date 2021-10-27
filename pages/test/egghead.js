import {
Container,
Flex,
VStack,
Text,
SimpleGrid,
GridItem,
Heading,
FormControl,
FormLabel,
Select,
Checkbox,
Button,
Input,
useBreakpointValue,
} 
from "@chakra-ui/react";
import Head from 'next/head'

const test =()=> {
  const colSpan= useBreakpointValue({ base: 2, md:1 });
  return (
    <>
    <Head>
      <title>Test Having Html Header</title>
    </Head>
    <Container maxW="container.xl" p={0}>
      <Flex h = {{ base:'auto', md:'100vh' }} py= {[0, 10, 20]} direction={{ base: 'column-reverse', md:'row' }}>
        <VStack 
        w="full"
        h="full"
        p={10}
        spacing={10}
        bg="blue.50"
        alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl">Your Details</Heading>
            <Text>If you already have an account, Click here</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="John"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input placeholder="Cox"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="5005 Marigold Ln"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="San Francisco"/>
              </FormControl>
            </GridItem>
            <GridItem colSpan={colSpan}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value="usa">United States of America</option>
                  <option value="thai">Thai</option>
                  <option value="Spain">Spain</option>
                  <option value="Taiwan">Taiwan</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked>Ship to billing address</Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <Button size="lg" w="full">Place Order</Button>
            </GridItem>
          </SimpleGrid>
        </VStack>  

        <VStack
        w="full"
        h="full"
        p={10}
        spacing={10}
        alignItems="flex-start"
        bg="gray.100">
      <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Semper viverra nam libero justo laoreet sit amet cursus sit. Purus in mollis nunc sed id semper. Enim ut sem viverra aliquet. Dictum sit amet justo donec enim. Interdum consectetur libero id faucibus nisl. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Bibendum ut tristique et egestas quis ipsum suspendisse ultrices. Eu consequat ac felis donec et odio pellentesque diam volutpat. Fusce ut placerat orci nulla pellentesque. Pulvinar mattis nunc sed blandit libero.

Ut tellus elementum sagittis vitae et leo duis. Volutpat ac tincidunt vitae semper quis lectus nulla at. Cras semper auctor neque vitae tempus quam. Tortor at auctor urna nunc id cursus metus. Aliquam etiam erat velit scelerisque. Eu facilisis sed odio morbi. Tristique et egestas quis ipsum suspendisse. Nec feugiat in fermentum posuere urna nec tincidunt praesent semper. Cursus vitae congue mauris rhoncus aenean vel. Ullamcorper morbi tincidunt ornare massa eget egestas. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Amet volutpat consequat mauris nunc. Sit amet consectetur adipiscing elit duis tristique. Egestas sed tempus urna et pharetra pharetra. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Fermentum iaculis eu non diam phasellus vestibulum. Arcu non odio euismod lacinia at quis risus sed vulputate. Nunc consequat interdum varius sit amet mattis vulputate enim nulla.

      </Text>
       </VStack>  
      </Flex>
    </Container>
    </>
  )
}
export default test