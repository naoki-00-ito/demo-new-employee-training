import { Flex, Center, Box, Image, Heading } from '@chakra-ui/react';

type Props = {
  src: string;
  imagePosition?: 'left' | 'right';
};

const ImageBox = ({ src, imagePosition }: Props) => {
  return (
    <Flex height={'100vh'} py={3}>
      <Center flex={1} order={imagePosition === 'right' ? 2 : 1}>
        <Image src={src} alt='' />
      </Center>

      <Center flex={1} order={imagePosition === 'right' ? 1 : 2}>
        <Heading size={'lg'}>
          マルプーのチャロです。
          <br />
          犬界で一番可愛いです。
          <br />
          異論は認めません。
        </Heading>
      </Center>
    </Flex>
  );
};

export default ImageBox;
