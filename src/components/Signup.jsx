import {
  Container,
  Input,
  InputGroup,
  VStack,
  InputRightElement,
  Button,
  Heading,
  color,
  Text,
  Avatar,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Container maxW={'container.xl'} p={'4'} h={'100vh'}>
      <form>
        <VStack
          justifyContent={'flex-start'}
          alignItems={'strech'}
          w={['full', '96']}
          m={'auto'}
          my={'16'}
          spacing={'8'}
          p={'8'}
          py={'8'}
          borderRadius={'20px'}
          boxShadow={'0 0 5px 1px #dad9d9'}
        >
          <Heading
            textAlign={'center'}
            m={'0'}
            color={'#545353'}
            textTransform={'uppercase'}
            fontSize={'25px'}
          >
            Video HUB
          </Heading>
          <Avatar alignSelf={'center'} />

          <Input
            placeholder={'Name'}
            _placeholder={{ color: 'gray' }}
            type={'text'}
            focusBorderColor={'#dad9d9'}
            required
          />
          <Input
            placeholder={'Email'}
            _placeholder={{ color: 'gray' }}
            type={'email'}
            focusBorderColor={'#dad9d9'}
            required
          />
          <Button colorScheme={'purple'}>Sign Up</Button>

          <Text textAlign={'center'}>
            Already Signed Up?{' '}
            <Button
              colorScheme={'purple'}
              variant={'link'}
              size={'10'}
              alignSelf={'flex-end'}
            >
              <Link to="/login">Login</Link>
            </Button>{' '}
            Here
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Signup;
