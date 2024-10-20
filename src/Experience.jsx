import {
  OrbitControls,
  PivotControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import { Model } from "../components/Model";

export default function Experience() {
  const sphere = useRef();
  const cube = useRef();
  
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      {/* Centrar el modelo en las coordenadas 0,0,0 */}
      <Model position={[-4.5, -0.9, 3]} />
     
      <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={8}>
        <planeGeometry />
        {/* <meshStandardMaterial color="green" /> */}
        <MeshReflectorMaterial />
      </mesh>
    </>
  );
}
