import React, { useEffect, useState } from "react";
import ParticleEffect from "@/components/particles/ParticleEffect";
import { track } from "@vercel/analytics";

const EASTEREGGWORD = "egg";

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [hasFiguredEasterEgg, setHasFiguredEasterEgg] = useState(false);

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
  const handleClick = () => {
    let message = easterEggMessages[clickCount % easterEggMessages.length];

    if (clickCount === 20) {
      setClickCount(0);
      message = easterEggMessages[clickCount % easterEggMessages.length];
    }
    track(`Message: ${message} - Click count: ${clickCount}`);

    alert(message);
    setClickCount(clickCount + 1);
  };

  useEffect(() => {
    // handles the easter egg typed in
    const handleKeyPress = (event: { key: any }) => {
      const { key } = event;
      const updatedTyped = typed + key;

      if (updatedTyped.endsWith(EASTEREGGWORD)) {
        alert(
          "Wow, nice job, you actually typed in " +
            "🥚" +
            EASTEREGGWORD +
            "🥚. Instant 5/5!! 🎆"
        );
        setHasFiguredEasterEgg(true);
        track("User found easter egg, awesome feature unlocked");
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

  // feature below has not been released yet
  /*  useEffect(() => {
      // sets the easter egg state from local storage
      const saved = localStorage.getItem("hasFiguredEasterEgg");
      if (saved) {
        setHasFiguredEasterEgg(saved === "true");
      }
    }, []);
  
    useEffect(() => {
      localStorage.setItem("hasFiguredEasterEgg", hasFiguredEasterEgg.toString());
    }, [hasFiguredEasterEgg]);*/

  return (
    <>
      {!hasFiguredEasterEgg ? (
        <p onClick={handleClick}>
          🪄super cool content missing, coming soon near you🪄
        </p>
      ) : (
        <ParticleEffect />
      )}
    </>
  );
};

export default EasterEgg;
