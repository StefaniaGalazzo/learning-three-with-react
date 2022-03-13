import styled from "styled-components";
import { Suspense } from "react";
import { Text } from "./components/Text.jsx";
import { Box } from "./components/Geometry/Box.js";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { AnimatedSphere } from "./components/Geometry/Sphere.js";
import { TorusObj } from "./components/Geometry/Torus.js";

function App() {
  return (
    <Wrapper className="App">
      <Text />
      <CanvasTitle>Rotate the cube with your mouse</CanvasTitle>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>

      <CanvasTitle>Click on the blob!</CanvasTitle>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>

      <CanvasTitle>Mega donut</CanvasTitle>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} autoRotate={true} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, 2]} intensity={0.3} />
        <Suspense fallback={null}>
          <TorusObj />
        </Suspense>
      </Canvas>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 80%);
  padding-bottom: 100px;

  canvas {
    height: 600px;
  }
`;
const CanvasTitle = styled.h3`
  margin-top: 120px;
`;
export default App;
