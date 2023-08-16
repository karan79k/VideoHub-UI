import { Button, Heading, Stack, VStack, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import video1 from '../assets/stock-footage-airplane-flies-over-business-skyscrapers-against-sunset-clouds-beautiful-d-animation-k-ultra-hd.webm'
import video2 from '../assets/stock-footage-business-network-concept-teamwork-partner-ship-shaking-hands.webm'
import video3 from '../assets/stock-footage-portrait-of-a-black-man-working-on-computer-typing-lines-of-code-that-appear-on-big-screens.webm'
import video4 from '../assets/stock-footage-smart-little-boy-wearing-augmented-reality-headset-plays-with-space-learning-software-with.webm'
function Videos() {
  const videoArray = [
   video1,video2,video3,video4
   ];
  const [VideoArr, setVideoArr] = useState(videoArray[0]);
  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          
          src={VideoArr}
          controls
          controlsList="download"
          style={{ width: '100%' }}
        ></video>
        <VStack alignItems={'flex-start'} p={'8'} w={'full'} overflowY={'auto'}>
          <Heading>Sample Video 1</Heading>
          <Text >
            Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusamus officia animi itaque repellendus totam quia nemo rem
            fugiat eum, aut eaque expedita architecto eius soluta voluptas?
            Atque quae aliquid distinctio eos, harum pariatur facere nemo
            voluptates repudiandae architecto rerum alias illum quos est quas
            ab? Quod possimus alias repudiandae eligendi? ipsum dolor sit amet
            consectetur adipisicing elit. Dignissimos, iure!
          </Text>
        </VStack>
      </VStack>

      <VStack
        w={['full', 'xl']}
        alignItems={'stretch'}
        p={'8'}
        spacing={'0'}
        overflowY={'auto'}
      >
        {
        videoArray.map((item, index) => (
          <Button p={'7'} variant={'ghost'} colorScheme="purple" onClick={()=>setVideoArr(item)}>
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
}

export default Videos;
/*
 */
/**
 *
 */
/*

*/
