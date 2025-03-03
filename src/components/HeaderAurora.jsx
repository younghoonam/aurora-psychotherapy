import { Canvas, useFrame } from "@react-three/fiber";
import vertexShader from "raw-loader!glslify-loader!../shaders/ectoplasmVertex.glsl";
import fragmentShader from "raw-loader!glslify-loader!../shaders/ectoplasmFragment.glsl";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { ChromaticAberration, EffectComposer, Noise, Sepia } from "@react-three/postprocessing";

function Aurora() {
  const materialRef = useRef();

  const shaderParams = {
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    uniforms: {
      uTime: { value: 0 },
    },
  };

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta / 10;
    }
  });

  return (
    <mesh>
      {/* <planeGeometry args={[10, 5, 1000, 1000]} /> */}
      <icosahedronGeometry args={[1, 35]} />
      {/* <ringGeometry args={[0.1, 1, 300, 300]} /> */}
      <shaderMaterial ref={materialRef} args={[shaderParams]} />
    </mesh>
  );
}

export default function HeaderAurora() {
  return (
    <div className="header-illustration">
      <Canvas dpr={[0.5, 1]} gl={{ powerPreference: "high-performance" }} camera={{ position: [0, -1, 2] }}>
        {/* <OrbitControls /> */}
        <Aurora />
        <EffectComposer resolutionScale={0.0001}>
          <Noise opacity={0.1} />
          <Sepia intensity={0.2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
