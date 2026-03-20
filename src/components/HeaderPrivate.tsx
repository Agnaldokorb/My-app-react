import { Button, Flex, Heading, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function HeaderPrivate() {
    
    const Navigate = useNavigate();

  return (
    <Flex
      as="header"
      bg="#03045e"
      color={'#00b4d8'}
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
        <Link to="../private/home">Home</Link>
        <Link to="../private/service">Serviço</Link>
        <Link to="../private/technology">tecnologia</Link>
        <Button color={'#00b4d8'} variant="outline" size="sm" onClick={() => {
          localStorage.removeItem("user");
          Navigate ("../login");
        }}>
          Sair
        </Button>
      </HStack>
    </Flex>
  );
}
