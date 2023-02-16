import Navbar from "./navbar/navbar";
import About from "./about/About";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import { Flex, Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";

import Stars from "./Stars/Stars";

export default function App() {
  return (
    <Flex
      p={{ base: "16px", sm: "32px" }}
      rowGap="120px"
      bg="bgApp"
      flexDirection="column"
    >
      <About />
      <MyWork />
      <ContactMe />
      <Navbar />
      <Box pos="absolute" h="100%" w="100%" zIndex={-1} top={0} left={0}>
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Stars />
        </Canvas>
      </Box>
    </Flex>
  );
}
