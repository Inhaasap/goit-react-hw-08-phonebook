import { Box, Text } from '@chakra-ui/react';
// import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks';

export default function HomePage() {
  const { isLoggedIn } = useAuth();
  return (
    // <Grid
    // bgImage="url('https://ik.imagekit.io/irinavn2011/mobile-phone-1572901.jpg?updatedAt=1684181964478')"
    //   bgPosition="center"
    //   bgRepeat="no-repeat"
    //   bgSize="cover"
    //   width="100%"
    //   height="100%"
    //   opacity=".2"
    //   position= "relative">
    <Box
      maxW="800px"
      m="0 auto"
    >
      <Text textAlign="center" fontSize="2xl" fontWeight="bold">
        Contacts Application Book
      </Text>
      <Text textAlign="center" fontSize="xl" my="20px">
        Contacts Application Book is a convenient and easy-to-use application that helps
        you saving and viewing your contacts. Here you can always find the
        necessary information quickly and efficiently.
      </Text>
      {!isLoggedIn && (
        <Link to="/login">
          <Text
            textAlign="center"
            bgGradient="linear(to-l, teal, gray)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
          >
            Welcome, happy user!
          </Text>
        </Link>
      )}
      </Box>
      // </Grid>
  );
}
