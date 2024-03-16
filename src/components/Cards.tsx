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
import { FaTiktok, FaInstagram } from 'react-icons/fa';

type Props = {
  srcs: string[];
};

const Cards = ({ srcs }: Props) => {
  return (
    <Flex flexWrap={'wrap'} justifyContent={'center'} gap={1}>
      {srcs.map((src, i) => {
        return (
          <Card maxW='sm' key={i}>
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
  );
};

export default Cards;
