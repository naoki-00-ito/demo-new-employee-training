import { Inter } from 'next/font/google';
import { ChakraProvider } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <ChakraProvider cssVarsRoot='body'>{children}</ChakraProvider>
      </body>
    </html>
  );
}
