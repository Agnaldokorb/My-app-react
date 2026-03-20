import { Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="#03045e"
      color="white"
      px={8}
      py={4}
      align="center"
      justify="space-between"
      boxShadow="md"
    >
      <Heading size="lg" display="flex" alignItems="center" gap={2}>
       <Text color={'#0077b6'}>Meu</Text><Text color={'#caf0f8'}>App</Text>
      </Heading>

      <HStack gap={6} >
        <Link color={'#00b4d8'} to="/">Home</Link>
        <Link color={'#00b4d8'} to="/about">About</Link>
        <Link color={'#00b4d8'} to="/contact">Contact</Link>
        <Link color={'#00b4d8'} to="/login">Login</Link>
      </HStack>
    </Flex>
  );
}
