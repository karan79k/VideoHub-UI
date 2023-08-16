import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1 (1).gif';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.png';
import img5 from '../assets/5 (2).jpg';
import img6 from '../assets/6.jpg';

const headingOption = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: ['4x1','10x1'],
};
function Home() {
  return (
    <Box id="home">
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          m={'auto'}
          textTransform={'uppercase'}
          py={'2'}
          w={'fit-content'}
          borderBottom={'2px solid'}
        >
          Services
        </Heading>
        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={img6} h={['40', '400']} filter={'hue-rotate(-100deg)'} />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={"center"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            sequi sapiente necessitatibus ipsa qui id, unde quo, eius omnis a
            fuga. Rem labore facilis quis. Eos sed nisi aliquid facilis fuga
            laudantium accusantium? Dolore, ducimus harum eum sed vel blanditiis
            inventore quia repellat officiis quisquam qui nostrum, consequatur
            quibusdam ratione.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showArrows={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOption}>
        Magic of AI
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}> 
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOption}>
        Coder will change the world
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOption}>
        Magic of AI
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img5} />
      <Heading bgColor={'blackAlpha.500'} color={'white'} {...headingOption}>
        Coder will change the world
      </Heading>
    </Box>
  </Carousel>
);
export default Home;
