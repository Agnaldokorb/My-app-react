import {
  Center,
  ChakraProvider,
  defaultSystem,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "../components/LayoutPrivate";
import CardInfo from "../components/CardInfo";
import { useEffect, useState } from "react";
import { api } from "../api";


interface UserData {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
}

const Service = () => {
  const [userData, setUserData] = useState<null | UserData>(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api;
      setUserData(data);
    };
    getData();
  }, []);

  const actualDate = new Date();

  if (userData && id !== userData.id) {
    navigate("/");
  }

  return (
    <ChakraProvider value={defaultSystem}>
      <Layout>
        <Center paddingTop={16}>
          <SimpleGrid columns={2} gap={8} paddingTop={16}>
            {!userData ? (
              <Spinner size="xl" color="#03045e" />
            ) : (
              <>
                <CardInfo
                  title={"Bem vindo(a) "}
                  name={userData.name}
                  description={`${actualDate.toLocaleDateString("pt-BR")} - ${actualDate.toLocaleTimeString("pt-BR")}`}
                />
              </>
            )}
          </SimpleGrid>
        </Center>
      </Layout>
    </ChakraProvider>
  );
};

export default Service;