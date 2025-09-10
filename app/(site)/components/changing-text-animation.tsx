"use client";
import { useTypewriter } from "react-simple-typewriter";

export default function ChangingTextAnimation({ words }: { words: string[] }) {
  const [text] = useTypewriter({
    words,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 100,
  });
  return (
    <span className="text-center whitespace-nowrap leading-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      {text}
    </span>
  );
}
