'use client';

import { useRef } from 'react';
import { Flex, Center, Image, Heading } from '@chakra-ui/react';
import useScrollScaleUp from '@/hooks/useScrollScaleUp';
import imagePath from '@/libs/imagePath';

type Props = {
  src: string;
  imagePosition?: 'left' | 'right';
  noJs?: boolean;
};

const ImageBox = ({ src, imagePosition = 'left', noJs }: Props) => {
  const imageBoxRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useScrollScaleUp({
    ref: imageBoxRef,
    imageRef: imageRef,
    textRef: textRef,
    invalid: noJs,
  });

  return (
    <Flex height={'100vh'} py={3} ref={imageBoxRef}>
      <Center flex={1} order={imagePosition === 'right' ? 2 : 1}>
        <Image src={imagePath(src)} alt='' ref={imageRef} />
      </Center>

      <Center flex={1} order={imagePosition === 'right' ? 1 : 2}>
        <Heading size={'lg'} ref={textRef}>
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
