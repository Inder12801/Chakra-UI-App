import { Button, Container, HStack, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const Upload = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'4'}>
      <VStack color={'purple.600'} h={'full'} justifyContent={'center'}>
        <AiOutlineCloudUpload size={'10vmax'} />
        <form>
          <HStack>
            <Input
              required
              type={'file'}
              p={'2'}
              border={'0'}
              css={{
                '&::file-selector-button': {
                  borderColor: 'transparent',
                  color: '#8363D9',
                  width: 'fit-content',
                  background: 'white',
                  borderRadius: '10px',
                  marginRight: '20px',
                },
              }}
            />
            <Button colorScheme={'purple'} type={'submit'}>
              Upload
            </Button>
          </HStack>
        </form>
      </VStack>
    </Container>
  );
};

export default Upload;
