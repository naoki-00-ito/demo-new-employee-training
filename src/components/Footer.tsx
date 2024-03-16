import { Box, UnorderedList, ListItem, Link, Text } from '@chakra-ui/react';
import links from '@/data/links';

const Footer = () => {
  return (
    <Box as='footer' py={'100px'}>
      <UnorderedList
        display={'flex'}
        justifyContent={'center'}
        flexWrap={'wrap'}
        gap={5}
        listStyleType={'none'}
      >
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

      <Text align={'center'} mt={10}>
        &copy; 2024 Naoki
      </Text>
    </Box>
  );
};

export default Footer;
