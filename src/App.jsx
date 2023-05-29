import Navbar from "./navbar/navbar";
import About from "./about/About";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import { Flex, Box } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";

// import Stars from "./Stars/Stars";

import {
  Environment,
  OrbitControls, PerspectiveCamera,

} from "@react-three/drei";

import { EnAvantar } from "./about/EnAvatar";
import { useControls } from "leva";

export default function App() {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Standing", "Falling", "Typing"],
    },
  });

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
        <Canvas >
          <PerspectiveCamera makeDefault fov={100} position={[0, 2, 2]} resolution={1024} />

          <Environment preset={"sunset"} />
          <EnAvantar animation={animation} />

          <OrbitControls />
        </Canvas>
      </Box>

      <Navbar />
    </Flex>
  );
}
