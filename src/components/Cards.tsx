'use client';

import useScrollSlide from '@/hooks/useScrollSlide';
import {
  Flex,
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useRef } from 'react';
import { FaTiktok, FaInstagram } from 'react-icons/fa';

type Props = {
  srcs: string[];
};

const Cards = ({ srcs }: Props) => {
  const ref = useRef(null);
  const containrRef = useRef(null);

  useScrollSlide({ ref: ref, containrRef: containrRef });

  return (
    <Flex ref={ref} alignItems={'center'} height={'100vh'} py={3} overflowX={'hidden'}>
      <Flex
        flexWrap={'wrap'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        gap={1}
        ref={containrRef}
      >
        {srcs.map((src, i) => {
          return (
            <Card maxW='sm' key={i} className='ts-scroll-slide'>
              <CardBody>
                <Image src={src} alt='' borderRadius='lg' />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>チャロ</Heading>
                  <Text>可愛い。</Text>
                  <Text color='blue.600' fontSize='2xl'>
                    2022.07.24生まれ
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button
                    as={'a'}
                    variant='solid'
                    color={'white'}
                    bg={'black'}
                    _hover={{
                      opacity: 0.7,
                    }}
                    href='https://www.tiktok.com/@malpoo.charo'
                    target='_blank'
                    rel='noopener noreferrer'
                    leftIcon={<FaTiktok />}
                  >
                    TikTok
                  </Button>
                  <Button
                    as={'a'}
                    variant='ghost'
                    color={'white'}
                    bg={'#CF2E92'}
                    _hover={{
                      opacity: 0.7,
                    }}
                    href='https://www.instagram.com/malpoo.charo'
                    target='_blank'
                    rel='noopener noreferrer'
                    leftIcon={<FaInstagram />}
                  >
                    Instagram
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Cards;
