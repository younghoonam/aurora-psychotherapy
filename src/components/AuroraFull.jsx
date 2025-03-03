import { Canvas } from "@react-three/fiber";

import vertexShader from "raw-loader!glslify-loader!../shaders/ectoplasmVertex.glsl";
import fragmentShader from "raw-loader!glslify-loader!../shaders/ectoplasmFragment.glsl";
import planeVertexShader from "raw-loader!glslify-loader!../shaders/vertex.glsl";
import planeFragmentShader from "raw-loader!glslify-loader!../shaders/fragment.glsl";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { ChromaticAberration, EffectComposer, Noise, Sepia } from "@react-three/postprocessing";

function PlaneAurora() {
  const materialRef = useRef();

  const shaderParams = {
    vertexShader: planeVertexShader,
    fragmentShader: planeFragmentShader,
    uniforms: {
      uTime: { value: Math.random() * 10000 },
    },
  };

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta / 10;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[20, 10]} />
      <shaderMaterial ref={materialRef} args={[shaderParams]} transparent={true} />
    </mesh>
  );
}

export default function Aurora() {
  return (
    <figure className="full-illustration">
      <Canvas dpr={[0.5, 1]} gl={{ powerPreference: "low-power" }}>
        {/* <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={50} /> */}
        {/* <OrbitControls /> */}
        {/* <EctoplasmGrid columns={5} rows={4} /> */}
        <PlaneAurora />
        {/* <EctoplasmLayer /> */}
        <EffectComposer multisampling={0} resolutionScale={0.000001}>
          <Noise opacity={0.1} />
          <Sepia intensity={0.2} />
        </EffectComposer>
      </Canvas>
    </figure>
  );
}
