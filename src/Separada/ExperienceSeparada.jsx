import { useNavigate } from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import { Html, Text, OrbitControls, MeshReflectorMaterial } from "@react-three/drei";
import { useRef, useState } from "react";
import { Model2 } from "../../components/Model2";
import './styles.css'; // Asegúrate de tener un archivo CSS para tus estilos

export default function ExperienceSeparada() {
  const navigate = useNavigate();
  const sphere = useRef();
  const cube = useRef();
  const [showText, setShowText] = useState(false); // Estado para controlar la visibilidad del texto

  const handleBack = () => {
    navigate(-1); // Retrocede a la ruta anterior
  };

  const toggleText = () => {
    setShowText(!showText); // Cambia el estado de visibilidad
  };

  return (
    <>
      <Canvas dpr={[1, 2]}>
        <OrbitControls makeDefault />
        <directionalLight position={[1, 2, 3]} intensity={1.5} />
        <ambientLight intensity={0.5} />

        {/* Centrar el modelo en las coordenadas 0,0,0 */}
        <Model2 position={[-6, -1 , 3]} />

        {/* Renderiza el texto solo si showText es true */}
        {showText && (
          <>
            <Text color={'red'} position={[-1.5,3,-1]} fontSize={0.5}>Campana extractora </Text>
            <Text color={'red'} position={[-5,2.5,-1]} fontSize={0.3} maxWidth={2}>Parrilla de gratinado </Text>
            <Text color={'red'} position={[-3.8,0.5,-1]} fontSize={0.3} maxWidth={2}>Microondas Industrial</Text>
            <Text color={'red'} position={[-6.5,-0.4,-1]} fontSize={0.2} maxWidth={1} textAlign={'center'}>Mesa de trabajo Con almacenamiento</Text>
            <Text color={'red'} position={[-0.5,-0.6,1]} fontSize={0.5}>Zona de fritado </Text>
            <Text color={'red'} position={[3,2,-1]} fontSize={0.3} maxWidth={2}>Cuarto de Crecimiento </Text>
            <Text color={'red'} position={[6,1,-1]} fontSize={0.4} maxWidth={2}>Batidora Industrial </Text>
          </>
        )}

        <mesh rotation-x={-Math.PI * 0.5} position={[-0.2, -1, 0]} scale={[13, 10, 1]}>
          <planeGeometry />
          <MeshReflectorMaterial />
        </mesh>
      </Canvas>

      {/* Botón "Volver" */}
      <button onClick={handleBack} className="back-button">Volver</button>

      {/* Botón "Aparecer letras" */}
      <button onClick={toggleText} className="hidden-button">
        {showText ? "Ocultar texto" : "Mostrar texto"}
      </button>
    </>
  );
}
