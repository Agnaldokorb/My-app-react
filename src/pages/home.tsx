import {
  Center,
  ChakraProvider,
  defaultSystem,
  SimpleGrid,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";

const Home = () => {
  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <Center paddingTop={16}>
          <SimpleGrid columns={2} gap={8} paddingTop={16}>
            
          </SimpleGrid>
        </Center>
      </Layout>
    </ChakraProvider>
  );
};

export default Home;
