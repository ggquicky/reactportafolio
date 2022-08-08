import Navbar from "./navbar/navbar";
import About from "./about/about";
import Mywork from "./mywork/Mywork";
import ContactMe from "./contactme/Contactme";
import { Flex } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex
      p={{ base: "16px", sm: "32px" }}
      rowGap="120px"
      bg="bGround"
      flexDirection="column"
    >
      <About />
      <Mywork />
      <ContactMe />
      <Navbar />
    </Flex>
  );
}
