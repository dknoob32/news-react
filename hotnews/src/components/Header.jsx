import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('login');
  };

  const authb = localStorage.getItem('user');
  return (
    <>
      <HStack
        p={'6'}
        bgColor={'blackAlpha.900'}
        shadow={'base'}
        color={'white'}
        w={'full'}
        spacing={['10%', '60%']}
      >
        <Button
          zIndex={'overlay'}
          pos={'fixed'}
          top={'5'}
          left={'4'}
          colorScheme="purple"
          p={'0'}
          w={'10'}
          h={'10'}
          borderRadius={'full'}
          onClick={onOpen}
        >
          <BiMenuAltLeft size={'20'} />
        </Button>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />

          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Categories</DrawerHeader>
            <DrawerBody>
              <VStack alignItems={'flex-start'}>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'black'}
                >
                  <Link to={'/allnews'}>All News</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'Black'}
                >
                  <Link to={'/india'}>India</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'black'}
                >
                  <Link to={'/business'}>Business</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'Black'}
                >
                  <Link to={'/sports'}>Sports</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'Black'}
                >
                  <Link to={'/World'}>World</Link>
                </Button>
                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'Black'}
                >
                  <Link to={'/politics'}>Politics</Link>
                </Button>

                <Button
                  onClick={onClose}
                  variant={'ghost'}
                  colorScheme={'Black'}
                >
                  <Link to={'/entertainment'}>Entertainment</Link>
                </Button>
              </VStack>

              <HStack
                pos={'absolute'}
                bottom={'10'}
                left={'0'}
                w={'full'}
                justifyContent={'space-evenly'}
              >
                <Button onClick={onClose} colorScheme={'purple'}>
                  {auth ? (
                    <Link onClick={logout} to={'/login'}>
                      Logout
                    </Link>
                  ) : (
                    <Link to={'/login'}>Log In</Link>
                  )}
                </Button>
              </HStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        <HStack spacing={'5'} fontSize="lg">
          <Button variant={'unstyled'} color={'white'}>
            <Link to="/">Home</Link>
          </Button>
          <Button variant={'unstyled'} color={'white'}>
            <Link to="/about">About us</Link>
          </Button>
          { authb ?
            <Button color={'white'} variant={'outline'}>
              <Link to="/createblog">+Create Blog</Link>
            </Button>: <Link></Link>          }
          
        </HStack>
      </HStack>
    </>
  );
};

export default Header;
