'use client';

import {
  Box,
  Container,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import links from '@/data/links';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as='header'
      width='100%'
      position='fixed'
      top={0}
      left={0}
      py={3}
      bg={'rgba(255, 255, 255, 0.7)'}
    >
      <Container maxW='1200px' display={'flex'} justifyContent={'flex-end'}>
        <Button colorScheme='teal' onClick={onOpen}>
          Menu
        </Button>
        <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
            <DrawerBody>
              <UnorderedList>
                {links.map((link, i) => {
                  return (
                    <ListItem key={i}>
                      <Link color='teal.500' href={link.href}>
                        {link.name}
                      </Link>
                    </ListItem>
                  );
                })}
              </UnorderedList>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
    </Box>
  );
};

export default Header;
