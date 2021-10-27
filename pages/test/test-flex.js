import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import {
    Flex,
    Box,
    Center,
    Spacer,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Square,
    Button,
    Text,
    IconButton,
    Divider,
    Link,
} from "@chakra-ui/react";

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

 const Demo = () => {
   return (
    <div>
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <h3>Home</h3>
          <Flex color="white">
            <Center w="100px" bg="green.500">
              <Text>Box 1</Text>
            </Center>
            <Square bg="green.200" size="150px">
              <Text>Box 2</Text>
            </Square>
            <Box flex="1" bg="blue.100">
              <Text>Box 3</Text>
            </Box>
          </Flex>

          <h2>Using the Spacer#</h2>
          <p>
            As an alternative to Stack, you can combine Flex and Spacer to create stackable and responsive layouts.
            </p>
            <Flex>
              <Box p="8" bg="red.400">
                Box 1
              </Box>
              <Spacer />
              <Box p="8" bg="green.400">
                Box 2
              </Box>
            </Flex>
            
            <p>A good use case for Spacer is to create a navbar with a signup/login button aligned to the right.
            </p>
            <Flex>
              <Box p="2">
                <Heading size="md">Chakra App</Heading>
              </Box>
              <Spacer />
              <Box>
                <Button colorScheme="teal" mr="4">
                  Sign Up
                </Button>
                <Button colorScheme="teal">Log in</Button>
              </Box>
            </Flex>
        </div>
      </div>
    </div>
  )
 }


export default (Demo)