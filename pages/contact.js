import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    Flex,
    Heading,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Text,
    IconButton,
    Divider,
} from "@chakra-ui/react"
import { AddIcon, DeleteIcon, StarIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import {
    useAuthUser,
    withAuthUser,
    withAuthUserTokenSSR,
    AuthAction,
} from 'next-firebase-auth'
//import getAbsoluteURL from '../utils/getAbsoluteURL'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Header from '../components/Header'
import Layout from '../components/layout';


const Contact = () => {
const AuthUser = useAuthUser()

const [inputName, setInputName] = useState('')
const [inputBirthDate, setInputBirthDate] = useState('')
const [inputPhone, setInputPhone] = useState('')
const [inputEmail, setInputEmail] = useState('')
const [inputWebsite, setInputWebsite] = useState('')

const [contacts, setContacts] = useState([])

  useEffect(() => {
    AuthUser.id &&
      firebase
        .firestore()
        .collection("contacts")
        .where( 'user', '==', AuthUser.id )
        .onSnapshot(
          snapshot => {
            setContacts(
              snapshot.docs.map(
                doc => {
                  return {
                    contactId: doc.id,
                    contactName: doc.data().name,
                    contactPhone: doc.data().phone,
                    contactEmail: doc.data().email,
                    contactWebsite: doc.data().website,
                    contactBirthdate: doc.data().birthdate.toDate().toDateString()
                  }
                }
              )
            );
          }
        )
  })

  const sendData = () => {
    try {
      // try to update doc
      firebase
        .firestore()
        .collection("contacts") // all users will share one collection
        .add({
          name: inputName,
          phone: inputPhone,
          email: inputEmail,
          website: inputWebsite,
          birthdate: firebase.firestore.Timestamp.fromDate( new Date(inputBirthDate) ),
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          user: AuthUser.id
        })
        .then(console.log('Data was successfully sent to cloud firestore!'));
      // flush out the user-entered values in the input elements onscreen
      setInputName('');
      setInputBirthDate('');
      setInputPhone('');
      setInputEmail('');
      setInputWebsite('');

    } catch (error) {
      console.log(error)
    }
  }

  const deleteContact = (t) => {
    try {
      firebase
        .firestore()
        .collection("contacts")
        .doc(t)
        .delete()
        .then(console.log('Data was successfully deleted!'))
    } catch (error) {
      console.log(error)
    }
  }

    return (
      <>
       <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <div>
      <Layout home>
      <Flex flexDir="column" maxW={1000} align="center" justify="start" minH="60vh" m="auto" px={4}>
        <Flex justify="space-between" w="100%" align="center">
          <Heading mb={4}>Welcome, {AuthUser.email}!</Heading>
          <Flex>
            
            <IconButton ml={2} onClick={AuthUser.signOut} icon={<ArrowForwardIcon />} />
          </Flex>
        </Flex>

        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<AddIcon color="gray.300" />}
          />
        <Input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Fullname" />
       
        <Input type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
         <Input type="text" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} placeholder="Phone number" />
        <br/> 
        <Input type="date" value={inputBirthDate} onChange={(e) => setInputBirthDate(e.target.value)} placeholder="Birthdate" />
        <Input type="text" value={inputWebsite} onChange={(e) => setInputWebsite(e.target.value)} placeholder="Website" />
          <Button
            ml={2}
            onClick={() => sendData()}
          >
            Add
          </Button>
        </InputGroup>

        {contacts.map((item, i) => {
          return (
            <React.Fragment key={i}>
              {i > 0 && <Divider />}
              <Flex
                w="100%"
                p={5}
                my={2}
                align="center"
                borderRadius={5}
                justifyContent="space-between"
              >
                <Flex align="center">
                  <Text fontSize="xl" mr={4}>{i + 1}.</Text>
                 
                  <Link key={item.contactID} href={`contacts/${item.contactId}`}>
                 <a title='view detail..'><b> {item.contactName}{ }</b>
                 <br/>
                 <i><small>Email: {item.contactEmail}, Tel:{item.contactPhone}</small></i>
                 </a>
                  </Link>
                </Flex>
                <IconButton onClick={() => deleteContact(item.contactID)} icon={<DeleteIcon />} />
              </Flex>
            </React.Fragment>
          )
        })}
      </Flex>
      </Layout>
      </div>
      </>
    )
}

export const getServerSideProps = withAuthUserTokenSSR({
  whenUnauthed: AuthAction.REDIRECT_TO_LOGIN,
})(async ({ AuthUser, req }) => {
  return {
    props: {
    }
  }
})

export default withAuthUser({
  whenUnauthedAfterInit: AuthAction.REDIRECT_TO_LOGIN,
  whenUnauthedBeforeInit: AuthAction.REDIRECT_TO_LOGIN,
})(Contact)