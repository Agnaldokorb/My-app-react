// Layout.tsx
import { ChakraProvider, Box, defaultSystem } from "@chakra-ui/react";
import { Footer } from "./Footer";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <Header />
        <Box flex="1">{children}</Box> {/* Conteúdo principal */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
};