import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { getSortedList } from '../lib/data';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 
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


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      
        <img
          className="d-block w-100"
          src="images/todo.jpg"
          alt="Todo App"
        />
         
        <Carousel.Caption>
        <Link href="/todo" >
          <p className="ccaption">Todo App</p>
        </Link>
          <p className="ccaption2">First firebase db app - Read and Delete Only</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/contact.jpg"
          alt="contact"
        />
        <Carousel.Caption>
        <Link href="/contact" >
          <p className="ccaption">Contacts</p>
        </Link>
          <p className="ccaption3">Contacts management: Read/Add/Edit/Delete</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/event.jpg"
          alt="event app"
        />

        <Carousel.Caption>
        <Link href="/events" >
          <p className="ccaption">Events</p>
        </Link>
          <p className="ccaption2">Events management: Read/Add/Edit/Delete</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/wp.jpg"
          alt="word press contents"
        />

        <Carousel.Caption>
        
          <Link href="/wp" >
          <p className="ccaption">Wordpress</p>
        </Link>
          <p className="ccaption3">List of posts retrived from Wordpress site (head-less cms)</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}

const Home = ({allData}) => {
  const AuthUser = useAuthUser()
  return (
    <div>
      <Header email={AuthUser.email} signOut={AuthUser.signOut} />
      <ControlledCarousel />
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