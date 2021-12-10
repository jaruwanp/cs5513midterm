import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedList } from '../lib/data';
import React, { useState } from 'react';
 
 
import {
  useAuthUser,
  withAuthUser,
  withAuthUserTokenSSR,
} from 'next-firebase-auth'
import Header from '../components/Header'
import Layout from '../components/layout';
import {
  Box,
  Text,
  Stack,
  Heading
} from '@chakra-ui/react';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },
    revalidate: 60 // set this to seconds before ISR invoked
  }
}

const styles = {
  content: {
    padding: 32,
  },
  infoTextContainer: {
    marginBottom: 32,
  },
}


 

const Home = ({allData}) => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      
       <Layout home>
        <p className="H1">List of Posts: Headless CMS-Powered App</p>
        <ul className="list-group">
          {allData.map(({ id, name }) => (
            
              <li className="list-group-item list-group-item-action">
                <Link key={id} href={`wp/${id}`}>
                {name}
                </Link>
                </li>
            
          ))}
        </ul>

      </Layout>

    </div>
  )
}

//export const getServerSideProps = withAuthUserTokenSSR()()

export default withAuthUser()(Home)