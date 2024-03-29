import {OrbitControls, useGLTF} from "@react-three/drei";

export function PlanetModel(props) {
  const { nodes, materials } = useGLTF("./earth-transformed.glb", false, true);
  console.log(nodes, materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        
        scale={[0.005, 0.005, 0.005]}
        position={[0, 0, 0]}
        name="Cube008"
        geometry={nodes.Cube001.geometry}
        material={materials["Default OBJ"]}
      />
        <OrbitControls autoRotate enableZoom={false} makeDefault/>
    </group>
  );
}

useGLTF.preload("./earth-transformed.glb");
