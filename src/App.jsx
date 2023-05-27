import Navbar from "./navbar/navbar";
import About from "./about/About";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import { Flex, Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";

// import Stars from "./Stars/Stars";

import { OrbitControls } from "@react-three/drei";
import { MarsModel } from "./about/Mars";
import {EnAvantar} from "./about/EnAvatar";




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
      <Box h="500px">
        <Canvas camera={[0, 0, 0]}>
          <ambientLight intensity={1} />
            <EnAvantar />
          {/*<MarsModel />*/}
          <OrbitControls  />
        </Canvas>
      </Box>

      <Navbar />
    </Flex>
  );
}
