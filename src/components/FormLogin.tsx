import { 
  Button,
  ChakraProvider, 
  defaultSystem,
  Input,
  Box,
} from "@chakra-ui/react";
import { login } from "../services/login";

export function FormLogin() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Box alignItems="center" justifyContent="center" gap={1} padding={20}>
        <Box
          minHeight="100vh"
          bg="gray.100"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
          padding={30}
        >
          <Box
            fontSize={20}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="8%"
          >
            Faça seu login!
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
            width="50%"
          >
            <Input bg="white" placeholder="Email" />
            <Input bg="white" placeholder="password" type="password" />
          </Box>
          <Button
            onClick={login}
            colorPalette="green"
            bg="green.500"
            _hover={{ bg: "green.600" }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
