"use client";
import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: number;
  duration?: number;
}

export default function Counter({ value, duration = 3000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const increment = value / (duration / 16);

    const step = () => {
      start += increment;
      if (start < value) {
        setCount(Math.ceil(start));
        requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <div ref={ref} className="text-3xl font-bold flex items-start">
      <span className="flex items-center">{count}</span>
      <span className="flex items-center text-2xl">+</span>
    </div>
  );
}
