/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { fadeOnBeforeCompile } from "../utils/fadeMaterial";

useGLTF.preload("./models/cloud/model.gltf");

export function Cloud({ sceneOpacity, ...props }) {
  let nodes = null;
  try {
    nodes = useGLTF("./models/cloud/model.gltf").nodes;
  } catch (error) {
    console.error("Error loading GLTF model:", error);
    if (materialRef.current) {
      materialRef.current.opacity = sceneOpacity.current;
      }
    }

  const materialRef = useRef();

  useFrame(() => {
    materialRef.current.opacity = sceneOpacity.current;
  });

useEffect(() => {
  useGLTF.preload("./models/cloud/model.gltf");
}, []);

return (
  <group {...props} dispose={null}>
    {nodes && nodes.Mball001 && (
      <mesh geometry={nodes.Mball001.geometry}>
        <meshStandardMaterial
          ref={materialRef}
          onBeforeCompile={fadeOnBeforeCompile}
          envMapIntensity={2}
          transparent
        />
      </mesh>
    )}
    </group>
    );
  }

useGLTF.preload("./models/cloud/model.gltf");
