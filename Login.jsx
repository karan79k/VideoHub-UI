import { Button, Container, Heading,Text, Input, VStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container w={'full'} h={'100vh'} alignItems={'center'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'4'}
          w={['full', '96']}
          my={'16'}
        >
          <Heading>Welocome!</Heading>
          <Input
            type="email"
            placeholder="Email"
            required
            focusBorderColor="purple"
          />
          <Input
            type="password"
            placeholder="Password"
            required
            focusBorderColor="purple"
          />

          <Button variant={'link'} alignSelf={'flex-end'} colorScheme="purple">
            <Link to={'/forgetpassword'}>Forget Password</Link>
          </Button>
          <Button type="submit" colorScheme="purple">
            Login In
          </Button>

          <Text textAlign={'right'}>New User? {""}
          <Button  variant={'link'}  colorScheme="purple"> 
            <Link to={'/signup'}>Sign Up</Link>
          </Button>
          
          </Text>
          
        </VStack>
      </form>
    </Container>
  );
}

export default Login;
