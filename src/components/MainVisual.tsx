'use client';

import { useRef } from 'react';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';
import useFadeIn from '@/hooks/useFadeIn';
import loading from '@/data/loading';

type Props = {
  noJs?: boolean;
};

const MainVisual = ({ noJs }: Props) => {
  const ref = useRef(null);

  if (!noJs) {
    useFadeIn({ ref: ref, delay: loading + 0.5 });
  }

  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Box display={'inline-block'} ref={ref}>
        <Heading as={'h1'} textAlign={'center'}>
          DEMO APP
        </Heading>
        <Text align={'center'}>Featuring. Charo</Text>
      </Box>
    </Flex>
  );
};

export default MainVisual;
