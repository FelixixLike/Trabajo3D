import { useNavigate } from 'react-router-dom';

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";
import { Model } from "../../components/Model";

import './styles.css'; // Asegúrate de tener un archivo CSS para tus estilos

export default function ExperienceCompleta() {
  const navigate = useNavigate();
  const sphere = useRef();
  const cube = useRef();

  const handleBack = () => {
    navigate(-1); // Retrocede a la ruta anterior
  };

  return (
    <>
      <Canvas dpr={[1, 2]}>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* Centrar el modelo en las coordenadas 0,0,0 */}
        <Model position={[-4.5, -0.9, 3]} />

        <mesh rotation-x={-Math.PI * 0.5} position-y={-1} scale={8}>
          <planeGeometry />
          <MeshReflectorMaterial />
        </mesh>
      </Canvas>

      {/* Botón "Volver" */}
      <button
        onClick={handleBack}
        className="back-button"
      >
        Volver
      </button>
    </>
  );
}
