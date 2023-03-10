import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import {Button , Flex, Heading, Text} from '@chakra-ui/react'
import Nav from '../components/Nav'




export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to myHealthRecord</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex>
          <Nav/>
      </Flex>
    </>
  )
}

