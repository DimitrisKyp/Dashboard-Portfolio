import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [themeColors, setThemeColors] = useState({
    background: "rgba(32, 34, 36, 1)",
    particles: "rgba(202, 251, 253, 1)",
  });
  const theme = useSelector((state: RootState) => state.preferences.theme);

  const updateThemeColors = () => {
    if (theme === "dark") {
      setThemeColors({
        background: "rgba(32, 34, 36, 1)",
        particles: "rgba(202, 251, 253, 1)",
      });
    } else if (theme === "light") {
      setThemeColors({
        background: "rgba(248, 242, 234, 1)",
        particles: "rgba(189, 179, 166, 1)",
      });
    }
  };

  useEffect(() => {
    updateThemeColors();
    initParticlesEngine(async engine => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, [theme]);

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: themeColors.background,
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 50,
            duration: 0.4,
          },
        },
      },
      particles: {
        links: {
          color: themeColors.particles,
          distance: 200,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.right,
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 250,
        },
        shape: {
          type: "line",
        },
      },
      detectRetina: true,
    }),
    [themeColors],
  );

  if (init) {
    return <Particles id="tsparticles" options={options} />;
  }

  return <></>;
}
