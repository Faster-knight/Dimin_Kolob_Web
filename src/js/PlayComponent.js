import { Canvas } from "@react-three/fiber";
import SphereFragmentAnimate from './child/SphereFragmentAnimate';
import SphereFragment from "./child/SphereFragment";
import '../css/PlayComponent.css';
import {Link} from 'react-router-dom';
import { useState } from "react";

function PlayComponent() {
    const [animate, setAnimate] = useState(false);

    const clickStartAnimate = (event) => {
        setAnimate(!animate);
    }
    return (
        <div className="PlayComponent">
            <Link to="/"><button>Back</button></Link>
            <button onClick={clickStartAnimate}>Start animate</button>
            <Canvas className="play-canvas-scene" camera={{fov: 90, position: [8, 0, 2]}}>
                {/* todo */}
                <ambientLight intensity={0.1} />
                <directionalLight position={[1, 1, 1]} intensity={0.8} />
                {animate ? <SphereFragmentAnimate /> : <SphereFragment />}
            </Canvas>
        </div>
    )
}

export default PlayComponent;