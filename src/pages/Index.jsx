import { useState } from "react";
import { Box, Container, Flex, Heading, HStack, IconButton, Image, Link, Table, Tbody, Td, Th, Thead, Tr, VStack, Text, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaMoon, FaSun, FaTshirt } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");
  const color = useColorModeValue("black", "white");

  return (
    <Flex as="nav" bg={bg} color={color} padding={4} justifyContent="space-between" alignItems="center" boxShadow="md" position="fixed" width="100%" zIndex="1">
      <HStack spacing={4}>
        <FaTshirt size="24px" />
        <Heading size="md">POLLUX</Heading>
      </HStack>
      <HStack spacing={4}>
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#products">Products</Link>
        <Link href="#contact">Contact</Link>
        <IconButton aria-label="Toggle Color Mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </HStack>
    </Flex>
  );
};

const Home = () => (
  <MotionBox id="home" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Heading>Welcome to POLLUX</Heading>
    <Text>Your one-stop shop for the latest fashion trends.</Text>
  </MotionBox>
);

const About = () => (
  <MotionBox id="about" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Heading>About Us</Heading>
    <Text>POLLUX is a leading clothing brand known for its quality and style.</Text>
  </MotionBox>
);

const Products = () => (
  <MotionBox id="products" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Heading>Our Products</Heading>
    <Table variant="simple" mt={4}>
      <Thead>
        <Tr>
          <Th>Product</Th>
          <Th>Price</Th>
          <Th>Category</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>T-Shirt</Td>
          <Td>$20</Td>
          <Td>Casual</Td>
        </Tr>
        <Tr>
          <Td>Jeans</Td>
          <Td>$40</Td>
          <Td>Denim</Td>
        </Tr>
        <Tr>
          <Td>Jacket</Td>
          <Td>$60</Td>
          <Td>Outerwear</Td>
        </Tr>
      </Tbody>
    </Table>
  </MotionBox>
);

const Contact = () => (
  <MotionBox id="contact" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
    <Heading>Contact Us</Heading>
    <Text>Feel free to reach out to us at contact@pollux.com.</Text>
  </MotionBox>
);

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Container maxW="container.md" pt={20}>
        <VStack spacing={10}>
          <Home />
          <About />
          <Products />
          <Contact />
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
