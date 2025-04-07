"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// 🔥 Правильный способ импортировать типы:
import type { Engine } from "tsparticles-engine";
import type { Container } from "tsparticles-engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: You can perform actions after particles are loaded
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: "#00f0ff",
          },
          links: {
            color: "#00f0ff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
        },
      }}
    />
  );
}