"use client";

import { useCallback } from "react";
import ReactParticles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadAll(engine);
  }, []);

  const options: ISourceOptions = {
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
  };

  return (
    <ReactParticles id="tsparticles" options={options} onInit={particlesInit} />
  );
}