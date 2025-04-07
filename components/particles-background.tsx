"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import type { ISourceOptions, Container } from "tsparticles-engine";
import type { Engine } from "tsparticles-engine/types/Engine";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Optional: Add any initialization after particles are loaded
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