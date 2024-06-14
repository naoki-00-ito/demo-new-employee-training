'use client';

import { useRef } from 'react';
import { Box, Container, Spinner } from '@chakra-ui/react';
import useLoading from '@/hooks/useLoading';

const Loading = () => {
  const ref = useRef(null);
  useLoading({ ref: ref });

  return (
    <Box
      width={'100vw'}
      height={'100vh'}
      position={'fixed'}
      top={0}
      left={0}
      background={'white'}
      zIndex={999}
      ref={ref}
    >
      <Container
        maxW='1200px'
        height={'100%'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Spinner size='xl' speed='0.85s' color='teal' emptyColor='gray.200' />
      </Container>
    </Box>
  );
};

export default Loading;
