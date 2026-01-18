import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useMemo } from "react";
import * as THREE from "three";
import { CrystalCube } from "./CrystalCube";

export default function TechCanvas() {
  const cubes = useMemo(
    () =>
      Array.from({ length: 18 }).map(() => ({
        position: [
          THREE.MathUtils.randFloatSpread(7), // ⬅ more horizontal space
          THREE.MathUtils.randFloatSpread(5), // ⬅ more vertical space
          THREE.MathUtils.randFloatSpread(4), // ⬅ more depth space
        ],
        color: new THREE.Color(
          `hsl(${Math.random() * 360}, 100%, 60%)` // brighter colors
        ),
        speed: THREE.MathUtils.randFloat(0.12, 0.25),
      })),
    []
  );

  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 45 }}
      className="absolute inset-0"
    >
      {/* darker base lighting */}
      <ambientLight intensity={0.03} />

      <directionalLight position={[4, 6, 7]} intensity={1.4} />

      {/* subtle rim light */}
      <pointLight position={[-6, -4, 6]} intensity={0.8} color="#ffffff" />

      {cubes.map((cube, i) => (
        <CrystalCube key={i} {...cube} />
      ))}

      {/* restrained bloom */}
      <EffectComposer>
        <Bloom
          intensity={0.6} // ⬅ less glow
          luminanceThreshold={0.45}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </Canvas>
  );
}
