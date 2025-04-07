"use client";

import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { motion } from "framer-motion-3d";

function CoinModel() {
  const coin = useGLTF("https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/coin/model.gltf");
  
  return (
    <motion.group
      animate={{
        rotateY: 360,
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <primitive object={coin.scene} scale={2} />
    </motion.group>
  );
}

export default function CryptoScene() {
  const groupRef = useRef();

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <CoinModel />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
    </Canvas>
  );
}