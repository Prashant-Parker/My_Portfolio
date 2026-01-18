import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useTheme } from "../ThemeContext";
import TechModel from "./TechModel";

export default function TechBackground() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        camera={{ position: [0.9, 0.5, 8.2], fov: 45 }}
      >
        <ambientLight intensity={dark ? 0.6 : 1.2} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={dark ? 2 : 1}
          color={dark ? "#ffffff" : "#cccccc"}
        />
        <pointLight position={[0, 0, -6]} intensity={dark ? 2 : 0.5} />

        <TechModel />

        <Environment preset={dark ? "city" : "studio"} />
      </Canvas>
    </div>
  );
}
