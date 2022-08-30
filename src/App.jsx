import Navbar from "./navbar/navbar";
import About from "./about/About";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import { Flex } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex
      p={{ base: "16px", sm: "32px" }}
      rowGap="120px"
      bgGradient="linear-gradient(to right, #757f9a, #d7dde8)"
      flexDirection="column"
    >
      <About />
      <MyWork />
      <ContactMe />
      <Navbar />
    </Flex>
  );
}
