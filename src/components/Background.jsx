import { Environment, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Gradient, LayerMaterial } from "lamina";
import { useRef } from "react";

import * as THREE from "three";

export const GradientBackground = ({ backgroundColors }) => {
  const start = 0.2;
  const end = -0.5;

  const gradientRef = useRef(null);
  const gradientEnvRef = useRef(null);

  const colorA = new THREE.Color();
  const colorB = new THREE.Color();

  useFrame(() => {
    colorA.set(backgroundColors.current.colorA);
    colorB.set(backgroundColors.current.colorB);
    gradientRef.current.colorA = colorA;
    gradientRef.current.colorB = colorB;
    gradientEnvRef.current.colorA = colorA;
    gradientEnvRef.current.colorB = colorB;
  });

  return (
    <>
      {/* Large Sphere Background */}
      <Sphere scale={[500, 500, 500]} rotation-y={Math.PI / 2}>
        <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
          <Gradient ref={gradientRef} axes={"y"} start={start} end={end} />
        </LayerMaterial>
      </Sphere>

      {/* Environment Sphere */}
      <Environment resolution={256} frames={Infinity}>
        <Sphere
          scale={[100, 100, 100]}
          rotation-y={Math.PI / 2}
          rotation-x={Math.PI}
        >
          <LayerMaterial color={"#ffffff"} side={THREE.BackSide}>
            <Gradient ref={gradientEnvRef} axes={"y"} start={start} end={end} />
          </LayerMaterial>
        </Sphere>
      </Environment>
    </>
  );
};
