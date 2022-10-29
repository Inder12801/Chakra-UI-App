import React from 'react';
import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingProperties = {
  bgColor: '#c3c3c3',
  color: 'white',
  pos: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  p: '16px',
  size: '2xl',
  textTransform: 'uppercase',
};

const imageProps = {};
const Home = () => {
  return (
    <Box width={'100vw'}>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        width={'100vw'}
        border={'2px'}
        borderColor={'yellow'}
        borderStyle={'solid'}
      >
        <Box>
          <Img src={img1} {...imageProps} border />
          <Heading {...headingProperties}>Watch Our Collection</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Img src={img2} {...imageProps} />
          <Heading {...headingProperties}>Future Of Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Img src={img3} {...imageProps} />
          <Heading {...headingProperties}>Future Of Gaming</Heading>
        </Box>
        <Box w={'full'} h={'100vh'}>
          <Img src={img4} {...imageProps} />
          <Heading {...headingProperties}>Future Of Gaming</Heading>
        </Box>
        {/* <Box w={'full'} h={'100vh'}>
          <Img src={img5} {...imageProps} />
          <Heading {...headingProperties}>Future Of Gaming</Heading>
        </Box> */}
      </Carousel>
      <Container p="5" h={'full'} minW={'100vw'} bgColor={'white'}>
        <Heading
          w={'fit-content'}
          borderBottom={'2px solid'}
          fontSize={'30px'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          //   w={'100vw'}
          h={'full'}
          padding={'4'}
          direction={['column', 'row']}
          alignItems={'center'}
          justifyContent={'center'}
          p={'4'}
        >
          <Img src={img5} filter={'hue-rotate(-110deg)'} h={['40', '400']} />
          <Text
            letterSpacing={'widest'}
            textAlign={'justify'}
            lineHeight={'190%'}
            p={['4', '16']}
            fontSize={'15px'}
            // width={['50%', '90%']}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            luctus nibh sapien, eu tincidunt risus dignissim id. Nam rhoncus, ex
            sed pretium pharetra, ante neque pulvinar ligula, id hendrerit arcu
            leo sit amet mi. Vivamus rhoncus imperdiet magna, in molestie magna
            vulputate a. Nullam tempus et nunc non efficitur. Vestibulum blandit
            mi vel ullamcorper blandit. Nulla nunc enim, varius nec maximus vel,
            ullamcorper ac nibh. Aenean non porttitor nibh. Pellentesque
            bibendum luctus justo non egestas. Mauris quis venenatis nisi.
            Suspendisse tincidunt vulputate imperdiet. Phasellus varius, diam
            non consequat scelerisque, odio enim ullamcorper metus, et euismod
            consequat luctus id sed metus.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
