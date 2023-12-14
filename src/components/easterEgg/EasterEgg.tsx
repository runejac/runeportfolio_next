import React, { useEffect, useState } from "react";
import ParticleEffect from "@/components/particles/ParticleEffect";

const EASTEREGGWORD = "egg";

const EasterEgg = () => {
  const [clickCount, setClickCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [hasFiguredEasterEgg, setHasFiguredEasterEgg] = useState(false);

  const easterEggMessages = [
    "Woah, easter EGG found, 1/9 points so far",
    "Nice, you found it again! 2/9 points.",
    "Ok, now you have to stop, or do you want to continue? 3/5 points.",
    "You're getting close to the end now, soon empty of points here. 4/5 points.",
    "Nope, big nope 4/5 points.",
    "Nope, you got it right in front of you. 4/5 points.",
    "Nope. 4/5 points.",
    "Nope, a hint was shown in the first message. 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Nope. 4/5 points.",
    "Nope, try something different... In front of you. 4/5 points.",
    "Nope. 4/5 points.",
    "Nope, probably a couple of centimeters away from you. 4/5 points.",
    "Nope, try something different... 4/5 points.",
    "Nope, a hint was shown in the very first message. ⌨️ 4/5 points.",
    "Nope, did you come up with something now? 4/5 points.",
    "⌨️⌨️⌨️ 🍳 4/5 points.",
    "That was a nice hint, wasn't it? 4/5 points.",
    "Restarting...",
  ];

  let message = easterEggMessages[clickCount % easterEggMessages.length];
  const handleClick = () => {
    if (clickCount === 18) {
      setClickCount(0);
      message = easterEggMessages[clickCount % easterEggMessages.length];
    }

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

  useEffect(() => {
    if (hasFiguredEasterEgg && window.umami) {
      window.umami.trackEvent("Easter egg unlocked", "SPECIAL EVENT OCCURRED");
    }
  }, [hasFiguredEasterEgg]);

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
        <p onClick={handleClick} data-umami-event={message}>
          🪄super cool content missing, coming soon near you🪄
        </p>
      ) : (
        <ParticleEffect />
      )}
    </>
  );
};

export default EasterEgg;
