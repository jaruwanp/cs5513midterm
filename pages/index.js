import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import {
  Box,
  Text,
  Stack,
  Heading
} from '@chakra-ui/react';

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}

const Home = () => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <div style={styles.content}>
        <div style={styles.infoTextContainer}>
          <h1 style={{ fontSize: "2rem"}}>CS55.13 Midterm Project</h1>
          <h2>
           Weeks 9-10: Assignment 10: Final Data-Driven Full-Stack App
          </h2>
        <Text noOfLines={[1, 2, 3]}>
        Extend the application to support the display, creation, and editing of a minimum of three datasets
          <p>
          <b>Data relationships:</b> Conforming the data model approach that all of the datasets use.
          </p>
          <p>
          <b>Full CRUD support: </b>Supporting all four common data operations for each document in the Firestore database.
          </p>

        </Text>
        <Image
              priority
              src="/images/crud.png"
              alt="Jaruwan Pattanasing"
              width={650}
              height={343}
            />
       
        </div>
         
      </div>
    </div>
  )
}

export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Home)