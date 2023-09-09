import React from 'react'
import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Icon,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';

import { Link } from "react-router-dom"

import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from "react-icons/fa"

const Footer = () => {
  return (
    <Container maxW={'full'} bgColor={'blackAlpha.900'} color={"whitesmoke"}>
      <Box p={4} m={4}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box p={2}>
            <Text>
              <Heading my={4} >Connect on</Heading>
            </Text>
            <HStack mr={4}>
              <Link>
                <Icon as={FaFacebook} w={30} h={30} />
              </Link>
              <Link>
                <Icon as={FaYoutube} w={30} h={30} />
              </Link>
              <Link>
                <Icon as={FaTwitter} w={30} h={30} />
              </Link>
              <Link>
                <Icon as={FaInstagram} w={30} h={30} />
              </Link>
              <Link>
                <Icon as={FaLinkedin} w={30} h={30} />
              </Link>
            </HStack>
          </Box>
          <Box p={2}>
            <VStack align={'start'}>
                <Text fontSize={'3xl'} fontWeight={'bold'} align={'start'}>
                  For Readers
                </Text>

              <Link to='/terms'>
                <Text>Terms and Conditions</Text>
              </Link>
              <Link to='/privacyPolicy'>
                <Text>Privacy Policy</Text>
              </Link>
            </VStack>
          </Box>
          <Box>
            <VStack align="start">
              <Heading >Explore</Heading>
              <Text variant={'unstyled'} color={'white'}>
                <Link to="/">About us</Link>
              </Text>
              <Text variant={'unstyled'} color={'white'}>
                <Link to="/">Blog</Link>
              </Text>
              <Text variant={'unstyled'} color={'white'}>
                <Link to="/">categories</Link>
              </Text>
              <Text variant={'unstyled'} color={'white'}>
                <Link to="/">Tags</Link>
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default Footer