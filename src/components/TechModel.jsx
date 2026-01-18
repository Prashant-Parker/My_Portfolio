import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { ContactShadows } from "@react-three/drei";

export default function TechModel() {
  const group = useRef();
  const ringRef = useRef();
  const particlesRef = useRef();
  const debrisRef = useRef();

  // ring particle positions
  const ringPositions = useMemo(() => {
    const count = 600;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.1 + Math.random() * 1.0; // spread of ring
      const x = Math.cos(angle) * radius;
      const y = (Math.random() - 0.5) * 0.05; // slight thickness
      const z = Math.sin(angle) * radius;
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    }
    return arr;
  }, []);

  // debris orbits
  const debrisData = useMemo(() => {
    return Array.from({ length: 14 }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      radius: 2.8 + Math.random() * 2.2,
      speed: 0.15 + Math.random() * 0.5,
      size: 0.04 + Math.random() * 0.12,
      yOffset: (Math.random() - 0.5) * 0.6,
      color: new THREE.Color().setHSL(
        0.65 + Math.random() * 0.1,
        0.6,
        0.05 + Math.random() * 0.1
      ),
    }));
  }, []);

  // procedural noise texture for surface roughness / bump-like effect
  const noiseTexture = useMemo(() => {
    const size = 128;
    const data = new Uint8Array(size * size * 3);
    for (let i = 0; i < size * size; i++) {
      const v = Math.floor(200 + Math.random() * 55);
      const stride = i * 3;
      data[stride] = v;
      data[stride + 1] = v;
      data[stride + 2] = v;
    }
    const tex = new THREE.DataTexture(data, size, size, THREE.RGBFormat);
    tex.needsUpdate = true;
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(6, 6);
    return tex;
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.y = t * 0.15;
      group.current.rotation.x = Math.sin(t * 0.1) * 0.04;
    }

    if (ringRef.current) ringRef.current.rotation.z = t * 0.08;
    if (particlesRef.current) particlesRef.current.rotation.y = t * 0.12;

    // animate debris
    if (debrisRef.current) {
      debrisRef.current.children.forEach((m, i) => {
        const d = debrisData[i];
        const ang = d.angle + t * d.speed;
        m.position.x = Math.cos(ang) * d.radius;
        m.position.z = Math.sin(ang) * d.radius;
        m.position.y = Math.sin(t * d.speed * 1.5 + i) * 0.06 + d.yOffset;
        m.rotation.x += 0.02 + (i % 2) * 0.01;
        m.rotation.y += 0.015 + (i % 3) * 0.01;
      });
    }
  });

  return (
    <group ref={group} scale={1.4}>
      {/* Lights */}
      <ambientLight intensity={0.25} />
      <pointLight position={[2, 2, 2]} color="#9AD8FF" intensity={1.2} />
      <pointLight position={[-2, -1, -1]} color="#6E46FF" intensity={0.6} />

      {/* Planet core: darker, higher detail with roughness map */}
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1, 6]} />
        <meshPhysicalMaterial
          color="#020007"
          roughness={0.55}
          metalness={0.18}
          clearcoat={0.6}
          clearcoatRoughness={0.25}
          reflectivity={0.7}
          envMapIntensity={0.9}
          roughnessMap={noiseTexture}
        />
      </mesh>

      {/* Rim glow: slightly larger transparent additive mesh for atmospheric rim */}
      <mesh scale={1.07}>
        <icosahedronGeometry args={[1.02, 6]} />
        <meshBasicMaterial
          color="#8B63FF"
          transparent
          opacity={0.2}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Strong core highlight (bright center) - subtle emissive layer */}
      <mesh scale={0.98} position={[0, 0.02, 0]}>
        <sphereGeometry args={[0.9, 32, 32]} />
        <meshStandardMaterial
          color="#110016"
          emissive="#5A3BFF"
          emissiveIntensity={0.55}
          roughness={0.48}
        />
      </mesh>

      {/* Subtle translucent atmosphere */}
      <mesh scale={1.12}>
        <sphereGeometry args={[1.08, 32, 32]} />
        <meshBasicMaterial
          color="#6f44ff"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Inner rings (solid torus) */}
      <group ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <mesh>
          <torusGeometry args={[2.15, 0.06, 16, 300]} />
          <meshPhysicalMaterial
            color="#BCE6FF"
            emissive="#7C5CFF"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.08}
            reflectivity={0.7}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh rotation={[0, 0.06, 0]}>
          <torusGeometry args={[2.5, 0.03, 12, 400]} />
          <meshStandardMaterial
            color="#DDEBFF"
            emissive="#9A78FF"
            emissiveIntensity={0.28}
            metalness={0.65}
            roughness={0.04}
            transparent
            opacity={0.95}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* soft additive ring for glow */}
        <mesh rotation={[0, 0.04, 0]} scale={[1.01, 1, 1]}>
          <torusGeometry args={[2.55, 0.12, 8, 200]} />
          <meshBasicMaterial
            color="#8B63FF"
            transparent
            opacity={0.12}
            blending={THREE.AdditiveBlending}
            depthWrite={false}
          />
        </mesh>
      </group>

      {/* Ring particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={ringPositions}
            count={ringPositions.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#EAF6FF"
          size={0.04}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.95}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Orbiting debris */}
      <group ref={debrisRef}>
        {debrisData.map((d, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(d.angle) * d.radius,
              d.yOffset,
              Math.sin(d.angle) * d.radius,
            ]}
            scale={[d.size, d.size, d.size]}
          >
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color={d.color.getStyle()}
              roughness={0.9}
              metalness={0.05}
              emissive={d.color.getStyle()}
              emissiveIntensity={0.06}
            />
          </mesh>
        ))}
      </group>

      {/* subtle contact shadow for realism */}
      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.6}
        scale={4}
        blur={4}
        far={2}
      />
    </group>
  );
}
