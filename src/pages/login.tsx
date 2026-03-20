import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Layout } from "../components/Layout"
import { FormLogin } from "../components/FormLogin";

const Login = () => {
  return (
    <ChakraProvider value={defaultSystem}>
        <Layout>
            <FormLogin />
        </Layout>
    </ChakraProvider>
  )
}

export default Login;