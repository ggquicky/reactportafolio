import Navbar from "./navbar/navbar";
import About from "./about/about";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import { Flex } from "@chakra-ui/react";
import cogs from "./floating-cogs.svg";

export default function App() {
  return (
    <Flex
      p={{ base: "16px", sm: "32px" }}
      rowGap="120px"
      backgroundImage={cogs}
      flexDirection="column"
    >
      <About />
      <MyWork />
      <ContactMe />
      <Navbar />
    </Flex>
  );
}
