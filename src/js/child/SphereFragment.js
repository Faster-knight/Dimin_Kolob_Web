import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

function SphereFragment() {
    const textureMap = useLoader(TextureLoader, window.location.origin + "/test.jpg");
    return (
        <mesh position={[0, 0, -2]}>
            <sphereGeometry args={[2, 64]} />
            <meshStandardMaterial color={0xFFDAB9} map={textureMap} />
        </mesh>
    )
}

export default SphereFragment;