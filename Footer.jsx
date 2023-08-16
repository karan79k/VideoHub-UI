import { Box, Button, HStack, Heading, Input, Stack,Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

function Footer() {
  return (<>
  <Box bgColor={"blackAlpha.900"} minH={"40"} p="16" color={"white"}>
      <Stack direction={["column","row"]}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
                <Input focusBorderColor='none' placeholder='enter email here..' border={'none'} borderRadius={'none'} outline={'none'}/>
                <Button p={'0'} colorScheme='purple' variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                    <AiOutlineSend size={20}/>
                </Button>
            </HStack>
            
        </VStack>

        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
           <Heading textAlign={'center'} textTransform={'uppercase'}>VIDEO HUB</Heading>
           <Text >All Rights Reserved</Text>
        </VStack>

        <VStack w={'full'} >
        <Heading pt={'2'} size={'md'} textAlign={'center'} textTransform={'uppercase'}>social media</Heading>
          <HStack direction={["column","row"]}>
            <Button p={'2'} variant={'link'} colorScheme={'purple'} >
                <a href="https://github.com/karan79k">Github</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'} >
                <a href="https://github.com/karan79k">youtube</a>
            </Button>
            <Button variant={'link'} colorScheme={'purple'} >
                <a href="https://github.com/karan79k">Instagram</a>
            </Button>
            </HStack>
        </VStack>

      </Stack>
  </Box>
  </>
  )
} 

export default Footer