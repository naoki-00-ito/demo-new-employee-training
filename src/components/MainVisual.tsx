import { Flex, Box, Heading, Text } from '@chakra-ui/react';

const MainVisual = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} height={'100vh'}>
      <Box display={'inline-block'}>
        <Heading as={'h1'} textAlign={'center'}>
          DEMO APP
        </Heading>
        <Text align={'center'}>Featuring. Charo</Text>
      </Box>
    </Flex>
  );
};

export default MainVisual;
