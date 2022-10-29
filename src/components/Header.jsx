import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  // useDisclosure hook provides us functionality to use drawer of chakra ui in our react app
  // isOpen - tells wether drawer is open or close
  // onOpen - a callback when drawer is open
  // onClose - a callback when drawer is close
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(isOpen);
  return (
    <>
      <Button
        pos={'fixed'}
        top={'5px'}
        left={'5px'}
        colorScheme={'purple'}
        padding={'0'}
        p={'0px'}
        borderRadius={'50%'}
        zIndex={'4'}
        onClick={!isOpen ? onOpen : onClose}
      >
        <BiMenuAltLeft size={'23px'} />
      </Button>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size={['full', 'xs']}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton p={'0'} />
          <DrawerHeader>Video HUB</DrawerHeader>
          <DrawerBody>
            <VStack
              alignItems={'flex-start'}
              justifyItems={'center'}
              padding={'3'}
              //   style={{ background: 'yellow' }}
            >
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/'}>Home</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'ghost'}
                onClick={onClose}
              >
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>
            <HStack
              marginTop={'30px'}
              pos={'absolute'}
              left={'30px'}
              bottom={'30px'}
              width={'80%'}
              display={'flex'}
              justifyContent={'space-evenly'}
              alignItems={'center'}
            >
              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button
                colorScheme={'purple'}
                variant={'outline'}
                onClick={onClose}
              >
                <Link to={'/signup'}>Sign up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
