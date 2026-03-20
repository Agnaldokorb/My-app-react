import { ChakraProvider, Box, defaultSystem } from "@chakra-ui/react";
import { Footer } from "./Footer";
import HeaderPrivate from "./HeaderPrivate";

interface LayoutPrivate {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutPrivate) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box bg={'#90e0ef'} minHeight="100vh" display="flex" flexDirection="column">
        <HeaderPrivate />
        <Box flex="1">{children}</Box> {/* Conteúdo principal */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
};