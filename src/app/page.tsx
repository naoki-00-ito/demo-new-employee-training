import { Container } from '@chakra-ui/react';
import Header from '@/components/Header';
import ImageBox from '@/components/ImageBox';

export default function Home() {
  return (
    <Container maxW='1200px'>
      <Header />

      <main>
        <ImageBox src='/01.JPG' />

        <ImageBox src='/02.JPG' imagePosition='right' />

        <ImageBox src='/03.JPG' />

        <ImageBox src='/04.JPG' imagePosition='right' />
      </main>
    </Container>
  );
}
