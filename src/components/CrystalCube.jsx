import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

export function CrystalCube({ position, color, speed = 0.2 }) {
  const cube = useRef();
  const innerLight = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * speed;

    // very slow rotation
    cube.current.rotation.x = t * 0.4;
    cube.current.rotation.y = t * 0.6;

    // subtle inner pulse (reduced)
    innerLight.current.intensity = 2.2 + Math.sin(t * 1.5) * 0.3;
  });

  return (
    <group position={position}>
      {/* inner colored light (reduced intensity) */}
      <pointLight
        ref={innerLight}
        color={color}
        intensity={2.2}
        distance={2.4}
      />

      <RoundedBox
        ref={cube}
        args={[1.1, 1.1, 1.1]}
        radius={0.06}
        smoothness={6}
      >
        <meshPhysicalMaterial
          transmission={1}
          thickness={2.0}
          roughness={0.01}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0}
          ior={1.6}
          color="#ffffff"
          attenuationColor={color}
          attenuationDistance={0.5} // stronger color, less light
        />
      </RoundedBox>
    </group>
  );
}
