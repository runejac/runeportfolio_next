import React, { useEffect, useState } from "react";
import ParticleEffect from "@/components/particles/ParticleEffect";

const EasterEgg = () => {
  const EASTEREGGWORD = process.env.NEXT_PUBLIC_EASTER_EGG_WORD!;
  const hurrayMessage = `Nice work! You found the easter egg! Click 'OK' to see it 🎆`;
  const [clickCount, setClickCount] = useState(0);
  const [typed, setTyped] = useState("");
  const [hasFiguredEasterEgg, setHasFiguredEasterEgg] = useState(false);

  const easterEggMessages = [
    "Woah, can this be an easter egg?, 1/9 points so far. Try it again!",
    "Nice, you found it again! 2/9 points.",
    "You clicked again... Hm ok, giving you 3/5 points.",
    "You're getting close to the end now, soon empty of points here. Or? 4/5 points.",
    "Still 4/5 points.",
    "Nope, you got it right in front of you. 4/5 points.",
    "Nope, a hint was shown in the first message. 4/5 points.",
    "Nope, try something different... In front of you. 4/5 points.",
    "Nope, probably a couple of centimeters away from you. 4/5 points.",
    "Still not getting more than 4/5 points.",
    "A hint was shown in the very first message. New hint: ⌨️ ",
    "Did you get something out of that hint? 4/5 points.",
    "New hint: ⌨️⌨️⌨️ 🍳 ",
    "That was a nice hint, wasn't it? Still 4/5 points though.",
    "Restarting...",
  ];

  const handleClick = () => {
    let nextMessage = easterEggMessages[clickCount % easterEggMessages.length];

    if (clickCount === 15) {
      setClickCount(0);
      nextMessage = easterEggMessages[0];
    } else {
      setClickCount(clickCount + 1);
    }
    alert(nextMessage);
    window.umami.track(
      `Egg tracker at index: ${clickCount}/${easterEggMessages.length - 1}`,
      {
        name: nextMessage,
      }
    );
  };

  useEffect(() => {
    // handles the easter egg typed in
    const handleKeyPress = (event: { key: any }) => {
      const { key } = event;
      const updatedTyped = typed + key;

      if (updatedTyped.endsWith(EASTEREGGWORD)) {
        alert(hurrayMessage);
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
    if (hasFiguredEasterEgg) {
      window.umami.track("🥚🥚🥚", { name: hurrayMessage, id: 69 });
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
