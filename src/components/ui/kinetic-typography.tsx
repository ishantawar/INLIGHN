import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface KineticTypographyProps {
  text: string;
  className?: string;
  animation?: "wave" | "stretch" | "rotate" | "morph" | "bounce" | "glitch";
  trigger?: "load" | "hover" | "scroll" | "click";
  speed?: "slow" | "normal" | "fast";
  stagger?: boolean;
}

export const KineticTypography = ({
  text,
  className,
  animation = "wave",
  trigger = "load",
  speed = "normal",
  stagger = true,
}: KineticTypographyProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const speedValues = {
    slow: "0.8s",
    normal: "0.6s",
    fast: "0.4s",
  };

  useEffect(() => {
    if (trigger === "load") {
      setTimeout(() => setIsAnimating(true), 100);
    }
  }, [trigger]);

  useEffect(() => {
    if (trigger === "scroll" && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setIsAnimating(true);
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  const handleTrigger = () => {
    if (trigger === "hover" || trigger === "click") {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 2000);
    }
  };

  const characters = text.split("").map((char, index) => {
    const delay = stagger ? index * 0.05 : 0;

    return (
      <span
        key={index}
        className={cn(
          "inline-block transition-all duration-300",
          isAnimating && animation === "wave" && "animate-kinetic-wave",
          isAnimating && animation === "stretch" && "animate-kinetic-stretch",
          isAnimating && animation === "rotate" && "animate-kinetic-rotate",
          isAnimating && animation === "morph" && "animate-kinetic-morph",
          isAnimating && animation === "bounce" && "animate-kinetic-bounce",
          isAnimating && animation === "glitch" && "animate-kinetic-glitch",
        )}
        style={{
          animationDelay: `${delay}s`,
          animationDuration: speedValues[speed],
        }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    );
  });

  return (
    <div
      ref={ref}
      className={cn("kinetic-typography", className)}
      onMouseEnter={() => trigger === "hover" && handleTrigger()}
      onClick={() => trigger === "click" && handleTrigger()}
    >
      {characters}
    </div>
  );
};

interface AnimatedHeadingProps {
  children: React.ReactNode;
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  animation?: "slide-up" | "fade-in" | "split" | "typewriter";
  trigger?: "load" | "scroll";
}

export const AnimatedHeading = ({
  children,
  className,
  level = 1,
  animation = "slide-up",
  trigger = "scroll",
}: AnimatedHeadingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (trigger === "load") {
      setTimeout(() => setIsVisible(true), 200);
      return;
    }

    if (trigger === "scroll" && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.3 },
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [trigger]);

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animation === "slide-up" &&
          (isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"),
        animation === "fade-in" && (isVisible ? "opacity-100" : "opacity-0"),
        animation === "split" && isVisible && "animate-split-reveal",
        animation === "typewriter" && isVisible && "animate-typewriter",
        className,
      )}
    >
      {children}
    </HeadingTag>
  );
};

interface MorphingTextProps {
  texts: string[];
  className?: string;
  interval?: number;
}

export const MorphingText = ({
  texts,
  className,
  interval = 3000,
}: MorphingTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <span
        className={cn(
          "block transition-all duration-300 ease-in-out",
          isTransitioning
            ? "opacity-0 transform scale-95 blur-sm"
            : "opacity-100 transform scale-100 blur-0",
        )}
      >
        {texts[currentIndex]}
      </span>
    </div>
  );
};

interface CounterAnimationProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const CounterAnimation = ({
  value,
  duration = 2000,
  className,
  suffix = "",
  prefix = "",
}: CounterAnimationProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 },
      );
      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount(Math.floor(progress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};
