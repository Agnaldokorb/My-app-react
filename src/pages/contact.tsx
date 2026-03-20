import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Layout } from "../components/Layout"

const Contact = () => {
  return (
    <ChakraProvider value={defaultSystem}>
        <Layout>
            <h1>Contact</h1>
        </Layout>
    </ChakraProvider>
  )
}

export default Contact;