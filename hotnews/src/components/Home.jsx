import React from 'react';
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,SimpleGrid,VStack, Icon,
} from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa';

export default function CallToActionWithVideo() {
  return (
    <>
      <Container maxW={'full'} roundedBottom={'3xl'} bgColor={'whiteAlpha.100'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '7xl' }}
            lineHeight={'130%'}
          >
            Best gaming Cafe <br />
            <Text as={'span'} color={'orange.400'}>
              YoloGaming
            </Text>
          </Heading>
          <Text color={'gray.500'}>
            Monetize your content by charging your most loyal readers and reward
            them loyalty points. Give back to your loyal readers by granting
            them access to your pre-releases and sneak-peaks.
          </Text>
        </Stack>
      </Container>
      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={2}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text as={'span'} position={'relative'}>
                Yolo Gaming
              </Text>
              <br />
            </Heading>
            <Text as="p" marginTop={1} align={'start'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              dolor quasi sunt ex animi qui incidunt quisquam ipsum, esse,
              cumque dolorem neque laudantium vero totam quis itaque,
              voluptatibus corporis aspernatur?
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                objectFit={'cover'}
                align={'center'}
                w={'full'}
                h={'full'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <Container maxW={'7xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                alt={'Hero Image'}
                objectFit={'cover'}
                align={'center'}
                w={'full'}
                h={'full'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Stack>
          <Flex
            flex={1}
            flexDirection={'column'}
            justifyContent={'center'}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Heading
              lineHeight={2}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text as={'span'} position={'relative'}>
                Explore Gaming
              </Text>
              <br />
            </Heading>
            <Text as="p" marginTop={2} align={'center'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
              dolor quasi sunt ex animi qui incidunt quisquam ipsum, esse,
              cumque dolorem neque laudantium vero totam quis itaque,
              voluptatibus corporis aspernatur?
            </Text>
          </Flex>
        </Stack>
      </Container>
      <Container
        maxW={'full'}
        roundedBottom={'3xl'}
        minH={200}
        p={8}
        roundedBottomEnd={'2xl'}
        mb={2}
      >
        <Box p={4} m={4}>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Box p={2}>
              <VStack align={'start'}>
                <Icon as={FaFacebook} w={30} h={30} />
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perferendis, nobis!
                </Text>
              </VStack>
            </Box>
            <Box p={2}>
              <VStack align={'start'}>
                <Icon as={FaFacebook} w={30} h={30} />
                <Text>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla, tenetur!
                </Text>
              </VStack>
            </Box>
            <Box p={2}>
              <VStack align={'start'}>
                <Icon as={FaFacebook} w={30} h={30} />
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  cupiditate!
                </Text>
              </VStack>
            </Box>
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
