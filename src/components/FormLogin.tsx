import {
  Button,
  ChakraProvider,
  defaultSystem,
  Input,
  Box,
} from "@chakra-ui/react";
import { login } from "../services/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleLogin = async () => {
  const user = await login(email, password);

  if (user) {
    navigate(`/private/home/${user.id}`);
  }
};

  return (
    <ChakraProvider value={defaultSystem}>
      <Box alignItems="center" gap={1} padding={20}>
        <Box
          minHeight="50vh"
          bg="#023e8a"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={5}
          padding={30}
          borderRadius={25}
        >
          <Box
            fontSize={20}
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="8%"
            color={"#caf0f8"}
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
            <Input
              bg="#caf0f8"
              color={"#023e8a"}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              bg="#caf0f8"
              color={"#023e8a"}
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button
            onClick={handleLogin}
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
