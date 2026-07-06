"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  end,
  suffix = "",
  duration = 1.8,
  className = "",
}: AnimatedCounterProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp
          end={end}
          duration={duration}
          separator=","
          suffix={suffix}
          className={className}
        />
      ) : (
        <span className={className}>0{suffix}</span>
      )}
    </div>
  );
}