import {useThree} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";


export function Controls () {
    const camera = useThree(scene => scene.camera)


    return (
        <OrbitControls onChange={()=>{console.log(camera.position)}}  makeDefault/>
    )
}