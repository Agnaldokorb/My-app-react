import { Flex, Box, Heading, HStack, Link } from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as="header"
      bg="blue.600"
      color="white"
      px={8}
      py={4}
      align="center"
      justify="space-between"
      boxShadow="md"
    >
      <Box>
        <Heading size="md">My App</Heading>
      </Box>

      <HStack gap={6}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </HStack>
    </Flex>
  );
}
