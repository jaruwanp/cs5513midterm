import React, { useState, useEffect } from 'react';
import {
    Flex,
    Container,
    Box,
    VStack,
    Text,
    SimpleGrid,
    GridItem,
    Center,
    InputGroup,
    InputLeftElement,
    Square,
    IconButton,
    Link,
    FormControl,
    FormLabel,
    Button,
    Input,
    useBreakpointValue,
} from "@chakra-ui/react";
 


import { AddIcon } from "@chakra-ui/icons";
import { useAuthUser, withAuthUser, withAuthUserTokenSSR, AuthAction } from 'next-firebase-auth';
import { getFirebaseAdmin } from 'next-firebase-auth';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Header from '../../components/Header';

const SingleContact = ({itemData}) => {
  const AuthUser = useAuthUser();
  const [inputName, setInputName] = useState(itemData.name);
  const [inputEmail, setInputEmail] = useState(itemData.email);
  const [inputPhone, setInputPhone] = useState(itemData.phone);
  const [inputWebsite, setInputWebsite] = useState(itemData.website);
  const [inputBirthdate, setInputBirthdate] = useState(itemData.birthdate);
   
  //doc.data().date.toDate().toDateString()
  const [statusMsg, setStatusMsg] = useState('');
  
  const sendData = async () => {
    try {
      console.log("sending!");
      // try to update doc
      const docref = await firebase.firestore().collection("contacts").doc(itemData.id);
      const doc = docref.get();

      if (!doc.empty) {
        docref.update(
          {
            name: inputName,
            phone: inputPhone,
            email:inputEmail,
            website: inputWebsite,
            birthdate: firebase.firestore.Timestamp.fromDate( new Date(inputBirthdate)),
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
              
          }
        );
        setStatusMsg("Updated!");
      }

    } catch (error) {
      console.log(error);
    } 
  }
const colSpan= useBreakpointValue({ base: 2, md:1 });
  return (
    <>
      <Header email={AuthUser.email}  signOut={AuthUser.signOut} />
     <Container maxW="container.xl" p={10}>
       <InputGroup>
         <SimpleGrid columns={2} columnGap={1} rowGap={2} w="full">
            <GridItem colSpan={colSpan}>
                <FormLabel>Fullname</FormLabel>
                    <InputLeftElement
                    pointerEvents="none"
                    children={<AddIcon color="gray.300" />}
                  />
                <Input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Fullname" />
            </GridItem>
            <GridItem colSpan={colSpan}>
                <FormLabel>Email</FormLabel>
                <Input type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
            </GridItem>
            <GridItem colSpan={colSpan}>
                <FormLabel>Phone</FormLabel>
                <Input type="text" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} placeholder="Phone Number" />
            </GridItem>
            <GridItem colSpan={colSpan}>
                <FormLabel>Birthdate</FormLabel>
                  <Input type="text" value={inputBirthdate} onChange={(e) => setInputBirthdate(e.target.value)} placeholder="Birthdate" />
                  
            </GridItem>
            <GridItem colSpan={2}>
                <FormLabel>Website</FormLabel>
                 <Input type="text" value={inputWebsite} onChange={(e) => setInputWebsite(e.target.value)} placeholder="Website" />
            </GridItem>
             <GridItem colSpan={2}>
                 <Button
                    ml={2}
                    onClick={() => sendData()}
                  >
                    Update
                  </Button>
            </GridItem>
             <GridItem colSpan={2}>
               <Text>
                  {statusMsg}
                </Text>
            </GridItem>
         </SimpleGrid>
       </InputGroup>
      </Container>
    </>
  );
};

export const getServerSideProps = withAuthUserTokenSSR(
  {
    whenUnauthed: AuthAction.REDIRECT_TO_LOGIN
  }
)(
  async ({ AuthUser, params }) => {
    // take the id parameter from the url and construct a db query with it
    const db = getFirebaseAdmin().firestore();
    const doc = await db.collection("contacts").doc(params.id).get();
    let itemData;
    if (!doc.empty) {
      // document was found
      let docData = doc.data();
      itemData = {
        id: doc.id,
        name: docData.name,
        email: docData.email,
        website: docData.website,
        phone: docData.phone,
        birthdate: docData.birthdate.toDate().toDateString()
      };
    } else {
      // no document found
      itemData = null;
    }
    // return the data
    return {
      props: {
        itemData
      }
    }
  }
)

export default withAuthUser(
  {
    whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
    whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_LOGIN
  }
)(SingleContact)