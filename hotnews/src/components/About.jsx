import { Heading, VStack,Text, Container } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Container maxW={'5xl'} height={'lg'}>
      <VStack my={6}>
        <Heading mb={4}>About us</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam
          iure necessitatibus fugiat possimus ullam, cupiditate non, eveniet hic
          earum doloribus temporibus totam nihil adipisci! Accusamus totam modi
          quos blanditiis!.There are many benefits to a joint design and development system.
            Not only does it bring benefits to the design team, but it also
            brings benefits to engineering teams. It makes sure that our
            experiences have a consistent look and feel, not just in our design
            specs, but in production
          
        </Text>
      </VStack>
    </Container>
  );
}

export default About