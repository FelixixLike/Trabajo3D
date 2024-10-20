import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { StrictMode } from "react";
import { Leva } from "leva";
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <StrictMode>
    <Leva />
    <>
      <Canvas dpr={[1, 2]}>.
        <Experience />
      </Canvas>
    </>
  </StrictMode>
);
