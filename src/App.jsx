import Navbar from "./navbar/navbar";
import About from "./about/about";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import { Flex } from "@chakra-ui/react";

export default function App() {
  return (
    <Flex
      p={{ base: "16px", sm: "32px" }}
      rowGap="120px"
      bgGradient="linear-gradient(0deg, rgba(2,0,36,0.2945553221288515) 0%, rgba(9,9,121,0.34217436974789917) 50%, rgba(0,212,255,0.39539565826330536) 100%)"
      flexDirection="column"
    >
      <About />
      <MyWork />
      <ContactMe />
      <Navbar />
    </Flex>
  );
}
