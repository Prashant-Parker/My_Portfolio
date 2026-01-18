import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function AvatarModel() {
  const { scene } = useGLTF("/Models/avatar.glb");

  // 🔍 Build a reliable bone map
  const bones = useMemo(() => {
    const map = {};

    scene.traverse((o) => {
      if (o.isBone) {
        map[o.name.toLowerCase()] = o;
      }
    });

    return {
      head: map["head"] || map["headtop_end"],

      spine: map["spine"] || map["spine1"] || map["spine2"] || map["chest"],

      leftUpperArm: map["leftarm"] || map["upperarm_l"] || map["l_upperarm"],

      rightUpperArm: map["rightarm"] || map["upperarm_r"] || map["r_upperarm"],

      leftLowerArm: map["leftforearm"] || map["lowerarm_l"] || map["l_forearm"],

      rightLowerArm:
        map["rightforearm"] || map["lowerarm_r"] || map["r_forearm"],

      leftHand: map["lefthand"] || map["hand_l"],

      rightHand: map["righthand"] || map["hand_r"],
    };
  }, [scene]);

  useFrame(({ mouse }) => {
    /* =========================
       HEAD (subtle, parallel)
    ========================== */
    if (bones.head) {
      bones.head.rotation.y = -0.05 + mouse.x * 0.08;
      bones.head.rotation.x = mouse.y * 0.08;
    }

    /* =========================
       SPINE (locked attention)
    ========================== */
    if (bones.spine) {
      bones.spine.rotation.set(0, 0, 0);
    }

    /* =========================
       SHOULDERS (down & relaxed)
    ========================== */
    if (bones.leftUpperArm) {
      bones.leftUpperArm.rotation.set(
        0.25, // arm down
        0.15, // slight outward
        0
      );
    }

    if (bones.rightUpperArm) {
      bones.rightUpperArm.rotation.set(0.25, -0.15, 0);
    }

    /* =========================
       ELBOWS (natural bend)
    ========================== */
    if (bones.leftLowerArm) {
      bones.leftLowerArm.rotation.set(-0.45, 0, 0);
    }

    if (bones.rightLowerArm) {
      bones.rightLowerArm.rotation.set(-0.45, 0, 0);
    }

    /* =========================
       HANDS (neutral attention)
    ========================== */
    if (bones.leftHand) {
      bones.leftHand.rotation.copy(new THREE.Euler(0, 0, 0));
    }

    if (bones.rightHand) {
      bones.rightHand.rotation.copy(new THREE.Euler(0, 0, 0));
    }
  });

  return (
    <group
      scale={1.05}
      position={[-0.7, -1.35, 0]}
      rotation={[0, -Math.PI / 2, 0]} // true side profile
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/Models/avatar.glb");
