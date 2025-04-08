// src/components/ParticleBackground.jsx
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "rgba(10, 10, 20, 0.8)" }, // transparent dark blue/gray
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 50,
          density: {
            enable: true,
            area: 800,
          },
        },
        color: {
          value: "#00ffff", // subtle neon cyan
        },
        links: {
          enable: true,
          distance: 120,
          color: "#00ffff",
          opacity: 0.1,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.5,
          direction: "none",
          outModes: { default: "bounce" },
        },
        size: {
          value: { min: 0.5, max: 2 },
        },
        opacity: {
          value: 0.2,
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 120,
            links: {
              opacity: 0.25,
            },
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) return null;

  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        zIndex: -1,
        top: 0,
        left: 0,
      }}
    >
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

export default ParticleBackground;
