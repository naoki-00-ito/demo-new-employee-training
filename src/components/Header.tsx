'use client';

import {
  Box,
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

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      as='header'
      width='100%'
      position='sticky'
      top={0}
      py={3}
      bg={'rgba(255, 255, 255, 0.7)'}
    >
      <Button colorScheme='blue' onClick={onOpen}>
        Menu Open
      </Button>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              <ListItem>
                <Link color='teal.500' href='/html'>
                  HTML Only
                </Link>
              </ListItem>
              <ListItem>
                <Link color='teal.500' href='/html-css'>
                  HTML + CSS
                </Link>
              </ListItem>
              <ListItem>
                <Link color='teal.500' href='/html-css-js'>
                  HTML + CSS + JavaScript
                </Link>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
