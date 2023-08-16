import { Button, Container, Heading,Text, Input, VStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
function SignUp() {
    
  return (
    <Container w={'full'} h={'100vh'} alignItems={'center'}>
        <form>
        <VStack
          alignItems={'stretch'}
          spacing={'4'}
          w={['full', '96']}
          my={'16'}
        >
          <Heading>Sign Up!</Heading>
          <Input
            type="text"
            placeholder="Name"
            required
            focusBorderColor="purple"
          />
          <Input
            type="email"
            placeholder="Email"
            required
            focusBorderColor="purple"
          />
          <Input
            type="number"
            placeholder="Mobile No."
            required
            focusBorderColor="purple"
          />
          
          <Input
            type="password"
            placeholder="Set Password"
            required
            focusBorderColor="purple"
          />
          <Input
            type="date"
            placeholder="DOB"
            required
            focusBorderColor="purple"
          />
          <Text textAlign={"right"}>
             Already have an account ?{" "}
          <Button variant={'link'} alignSelf={'flex-end'} colorScheme="purple">
            <Link to={'/login'}>Login</Link>
          </Button>
          </Text>
          <Button type="submit" colorScheme="purple" >
            Create Account
          </Button>

          
        </VStack>
      </form>

    </Container>
  )
}

export default SignUp