import { Torus } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import texture from "./../../img/texture-4.png";

const TorusObj = () => {
  const donut = useLoader(TextureLoader, texture);

  return (
    <group>
      <Torus
        rotation={[50, 50, 0]}
        visible
        args={[10, 5, 24, 100, 6.29]}
        scale={0.15}
      >
        {/* <meshLambertMaterial attach="material" color="#8352FD" /> */}
        <meshStandardMaterial map={donut} />
      </Torus>
    </group>
  );
};

export { TorusObj };
