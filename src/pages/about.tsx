import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { Layout } from "../components/Layout"

const About = () => {
  return (
    <ChakraProvider value={defaultSystem}>
        <Layout>
            <h1>About</h1>
        </Layout>
    </ChakraProvider>
  )
}

export default About;