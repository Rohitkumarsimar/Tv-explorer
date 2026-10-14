import { useEffect, useState } from "react";

export default function Typewriter() {
  const words = "Hello world";

  const [text, setText] = useState("");

  useEffect(() => {
    let index = 0;
    let isDeleting = false;
    let timeoutId;

    function typingEffect() {
      if (!isDeleting && index === words.length) {
        isDeleting = true;

        timeoutId = setTimeout(typingEffect, 800);
        return;
      }

      if (isDeleting && index === 0) {
        isDeleting = false;

        timeoutId = setTimeout(typingEffect, 300);
        return;
      }

      timeoutId = setTimeout(() => {
        if (isDeleting) {
          index--;
        } else {
          index++;
        }

        setText(words.slice(0, index));
        typingEffect();
      }, isDeleting ? 50 : 100);
    }

    typingEffect();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <h1 className="font-mono text-2xl font-bold">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
}