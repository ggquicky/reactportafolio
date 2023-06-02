import Navbar from "./navbar/navbar";
import About from "./about/About";
import MyWork from "./mywork/MyWork";
import ContactMe from "./contactme/ContactMe";
import {Box, Flex} from "@chakra-ui/react";
import {Canvas} from "@react-three/fiber";

// import Stars from "./Stars/Stars";
import {Environment, PerspectiveCamera,} from "@react-three/drei";
import {PlanetModel} from "./about/PlanetModel";

export default function App() {
    // const {animation} = useControls({
    //     animation: {
    //         value: "Typing",
    //         options: ["Standing", "Falling", "Typing"],
    //     },
    // });
    
    return (
        <Flex
            p={{base: "16px", sm: "32px"}}
            rowGap="120px"
            bg="bgApp"
            flexDirection="column"
        >
            <About/>
            <MyWork/>
            <ContactMe/>
            <Box h="500px">
                <Canvas>
                    <PerspectiveCamera makeDefault fov={50} position={[0, 3, 5.2]}/>
                    <ambientLight intensity={1} />
                    <Environment preset={"sunset"}/>

                    <group>

                            <PlanetModel />

                    </group>


                </Canvas>
            </Box>

            <Navbar/>
        </Flex>
    );
}
