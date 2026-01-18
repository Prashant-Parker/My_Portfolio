import { useMemo } from "react";
import * as THREE from "three";

export default function GradientBackground() {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;

    const ctx = canvas.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 512);

    gradient.addColorStop(0, "#243b55");
    gradient.addColorStop(0.5, "#141e30");
    gradient.addColorStop(1, "#020202");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;

    return texture;
  }, []);

  return (
    <mesh position={[0, 0, -12]} scale={[30, 30, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
