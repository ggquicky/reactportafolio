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
      bgGradient="linear-gradient(to right top, #1f409b, #3353aa, #4666b9, #5879c7, #6b8dd5, #689ee2, #67afee, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)"
      flexDirection="column"
    >
      <About />
      <MyWork />
      <ContactMe />
      <Navbar />
    </Flex>
  );
}
