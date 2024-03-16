import { Container } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageBox from '@/components/ImageBox';
import Cards from '@/components/Cards';

export default function Home() {
  return (
    <Container maxW='1200px'>
      <Header />

      <main>
        <ImageBox src='/01.JPG' />

        <ImageBox src='/02.JPG' imagePosition='right' />

        <ImageBox src='/03.JPG' />

        <ImageBox src='/04.JPG' imagePosition='right' />

        <Cards
          srcs={[
            '/01.JPG',
            '/02.JPG',
            '/03.JPG',
            '/04.JPG',
            '/01.JPG',
            '/02.JPG',
            '/03.JPG',
            '/04.JPG',
            '/01.JPG',
            '/02.JPG',
            '/03.JPG',
            '/04.JPG',
          ]}
        />
      </main>

      <Footer />
    </Container>
  );
}
