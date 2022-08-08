import Navbar from "./navbar/navbar";
import About from "./about/about";
import MyWork from "./mywork/MyWork";
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
      <MyWork />
      <ContactMe />
      <Navbar />
    </Flex>
  );
}
