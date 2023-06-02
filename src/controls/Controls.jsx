import {OrbitControls} from "@react-three/drei";


export function Controls() {
    
    return (
        <OrbitControls autoRotate enableZoom={false} makeDefault/>
    )
}