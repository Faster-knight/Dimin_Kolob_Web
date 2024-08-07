import { useLoader, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";

function SphereFragmentAnimate() {
    const sphereRef = useRef();
    const textureMap = useLoader(TextureLoader, window.location.origin + "/test.jpg");
    useFrame((state, delta) => {
        sphereRef.current.rotation.y += delta;
        sphereRef.current.rotation.x += delta;
      });
    return (
        <mesh ref={sphereRef}>
            <sphereGeometry args={[2, 64, 64]} />
            <meshStandardMaterial color={0xFFDAB9} map={textureMap} />
        </mesh>
    );
}

export default SphereFragmentAnimate;