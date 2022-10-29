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
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Login = () => {
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
          py={'16'}
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
            Login
          </Heading>
          <Input
            placeholder={'Email'}
            _placeholder={{ color: 'gray' }}
            type={'email'}
            focusBorderColor={'#dad9d9'}
            required
          />
          <InputGroup>
            <Input
              placeholder={'Password'}
              _placeholder={{ color: 'gray' }}
              type={showPassword ? 'text' : 'password'}
              focusBorderColor={'#dad9d9'}
              required
            />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme={'purple'}>Login</Button>
          <Button
            colorScheme={'purple'}
            variant={'ghost'}
            size={'10'}
            alignSelf={'flex-end'}
          >
            <Link to="/forgotpassword">Forgot Password?</Link>
          </Button>
          <Text textAlign={'center'}>
            New User{' '}
            <Button
              colorScheme={'purple'}
              variant={'link'}
              size={'10'}
              alignSelf={'flex-end'}
            >
              <Link to="/signup">Sign Up</Link>
            </Button>{' '}
            Here
          </Text>
        </VStack>
      </form>
    </Container>
  );
};

export default Login;
