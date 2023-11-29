import styles from "./IntroText.module.scss";
import { useCallback, useContext, useEffect, useState } from "react";
import { DataContext } from "@/context/DataContext";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const IntroText = () => {
  const data = useContext(DataContext);
  const [clickCount, setClickCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [hasFiguredEasterEgg, setHasFiguredEasterEgg] = useState(false);
  const easterEggWord = "egg";

  const easterEggMessages = [
    "Woah, easter EGG found, 1/9 points so far",
    "Nice, you found it again! 2/9 points.",
    "Ok, now you have to stop, or? 3/5 points.",
    "You're getting close to the end now. 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, a hint was shown in the first message. 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Nope, a hint was shown in the very first message. ⌨️ 4/5 points.",
    "Nope, still not here. 4/5 points.",
    "⌨️⌨️⌨️ 🍳 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Restarting...",
  ];
  const { h1 } = data.introText;

  const handleClick = () => {
    let message = easterEggMessages[clickCount % easterEggMessages.length];

    if (clickCount === 20) {
      setClickCount(0);
      message = easterEggMessages[clickCount % easterEggMessages.length];
    }

    alert(message);
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    const handleKeyPress = (event: { key: any }) => {
      const { key } = event;
      const updatedTyped = typed + key;

      if (updatedTyped.endsWith(easterEggWord)) {
        alert(
          "Wow, nice job, you actually typed in " +
            "🥚" +
            easterEggWord +
            "🥚. Instant 5/5!! 🎆"
        );
        setHasFiguredEasterEgg(true);
        setTyped("");
      } else {
        setTyped(updatedTyped);
      }
    };

    document.addEventListener("keypress", handleKeyPress);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, [typed]);

  // @ts-ignore
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    console.log(container);
  }, []);

  return (
    <section className={styles.introTextContainer}>
      <div className={styles.introTextBox}>
        <div>
          <h1>{h1}</h1>
        </div>
        <div>
          <h2>developer</h2>
        </div>
        <div>
          <h3>
            Frontend-focused fullstack developer based in Oslo. <br />
            Fly fishing and brazilian jiu-jitsu is my jam.
          </h3>
        </div>
      </div>
      <div className={styles.awesomeContent}>
        {!hasFiguredEasterEgg ? (
          <p onClick={handleClick}>
            🪄super cool content missing, coming soon near you🪄
          </p>
        ) : (
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: "none",
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
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#319197",
                },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.1,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce",
                  },
                  random: false,
                  speed: 0.1,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  value: { min: 3, max: 3 },
                },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default IntroText;
