import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.600'} minH={'40'} p={'16'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack py={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to our updates
          </Heading>
          <HStack w={'full'}>
            <Input
              type={'text'}
              placeholder={'example@gmail.com'}
              _placeholder={{
                color: 'white',
              }}
              color={'white'}
              outline={'none'}
              borderRadius={'0'}
              border={'none'}
              borderBottom={'2px solid white'}
              focusBorderColor={'none'}
            />
            <Button
              variant={'ghost'}
              colorScheme={'purple'}
              p={'3'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'30'} />
            </Button>
          </HStack>
        </VStack>
        <VStack py={'4'}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Subscribe to our updates
          </Heading>
          <HStack w={'full'}>
            <Input
              type={'text'}
              placeholder={'example@gmail.com'}
              _placeholder={{
                color: 'white',
              }}
              color={'white'}
              outline={'none'}
              borderRadius={'0'}
              border={'none'}
              borderBottom={'2px solid white'}
              focusBorderColor={'none'}
            />
            <Button
              variant={'ghost'}
              colorScheme={'purple'}
              p={'3'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={'30'} />
            </Button>
          </HStack>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
