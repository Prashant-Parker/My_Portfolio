import { Canvas } from "@react-three/fiber";
import AvatarModel from "./AvatarModel";

export default function Avatar3D() {
  return (
    <Canvas
      camera={{
        position: [-4, 0, 0], // parallel to face
        fov: 26,
      }}
      gl={{ alpha: true }}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      <ambientLight intensity={0.9} />

      <directionalLight position={[3, 4, 0]} intensity={1.2} />

      <directionalLight position={[1, 2, -2]} intensity={0.4} />

      <AvatarModel />
    </Canvas>
  );
}
