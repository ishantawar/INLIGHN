import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate" | "blur";
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  intensity?: "subtle" | "medium" | "dramatic";
}

export const ScrollReveal = ({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 600,
  threshold = 0.2,
  once = true,
  intensity = "medium",
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const intensityValues = {
    subtle: {
      translate: 20,
      scale: 0.95,
      rotate: 5,
      blur: 2,
    },
    medium: {
      translate: 40,
      scale: 0.9,
      rotate: 10,
      blur: 4,
    },
    dramatic: {
      translate: 80,
      scale: 0.8,
      rotate: 20,
      blur: 8,
    },
  };

  const intensity_val = intensityValues[intensity];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, delay, once]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translateY(${intensity_val.translate}px)`;
      case "down":
        return `translateY(-${intensity_val.translate}px)`;
      case "left":
        return `translateX(${intensity_val.translate}px)`;
      case "right":
        return `translateX(-${intensity_val.translate}px)`;
      case "scale":
        return `scale(${intensity_val.scale})`;
      case "rotate":
        return `rotate(${intensity_val.rotate}deg)`;
      case "blur":
        return "translateY(20px)";
      default:
        return `translateY(${intensity_val.translate}px)`;
    }
  };

  const getVisibleTransform = () => {
    switch (direction) {
      case "blur":
        return "translateY(0px)";
      default:
        return "translateY(0px) translateX(0px) scale(1) rotate(0deg)";
    }
  };

  const getInitialFilter = () => {
    return direction === "blur" ? `blur(${intensity_val.blur}px)` : "blur(0px)";
  };

  return (
    <div
      ref={elementRef}
      className={cn("transition-all ease-out", className)}
      style={{
        transform: isVisible ? getVisibleTransform() : getInitialTransform(),
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "blur(0px)" : getInitialFilter(),
        transitionDuration: `${duration}ms`,
        transitionDelay: isVisible ? `${delay}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
};

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "vertical" | "horizontal";
}

export const ParallaxContainer = ({
  children,
  className,
  speed = 0.5,
  direction = "vertical",
}: ParallaxContainerProps) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;

      if (direction === "vertical") {
        setOffset(rate);
      } else {
        setOffset(rate * 0.5); // Reduce horizontal movement
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed, direction]);

  return (
    <div
      ref={elementRef}
      className={cn("transition-transform duration-75 ease-out", className)}
      style={{
        transform:
          direction === "vertical"
            ? `translateY(${offset}px)`
            : `translateX(${offset}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface ScrollProgressProps {
  className?: string;
  color?: string;
  thickness?: number;
}

export const ScrollProgress = ({
  className,
  color = "#0ED2F7",
  thickness = 4,
}: ScrollProgressProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalHeight) * 100;
      setProgress(currentProgress);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 z-50 transition-all duration-300",
        className,
      )}
      style={{
        width: `${progress}%`,
        height: `${thickness}px`,
        background: `linear-gradient(90deg, ${color}, ${color}80)`,
        boxShadow: `0 0 10px ${color}40`,
      }}
    />
  );
};

interface ScrollTriggerProps {
  children: React.ReactNode;
  onEnter?: () => void;
  onLeave?: () => void;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export const ScrollTrigger = ({
  children,
  onEnter,
  onLeave,
  threshold = 0.2,
  once = false,
  className,
}: ScrollTriggerProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onEnter?.();
          if (once) {
            observer.unobserve(entry.target);
          }
        } else {
          onLeave?.();
        }
      },
      { threshold },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [onEnter, onLeave, threshold, once]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
};

interface StaggeredRevealProps {
  children: React.ReactNode[];
  className?: string;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

export const StaggeredReveal = ({
  children,
  className,
  staggerDelay = 100,
  direction = "up",
  threshold = 0.2,
}: StaggeredRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getTransform = (index: number) => {
    if (isVisible) return "translateY(0px) translateX(0px)";

    switch (direction) {
      case "up":
        return "translateY(40px)";
      case "down":
        return "translateY(-40px)";
      case "left":
        return "translateX(40px)";
      case "right":
        return "translateX(-40px)";
      default:
        return "translateY(40px)";
    }
  };

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className="transition-all duration-600 ease-out"
          style={{
            transform: getTransform(index),
            opacity: isVisible ? 1 : 0,
            transitionDelay: isVisible ? `${index * staggerDelay}ms` : "0ms",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

interface InfiniteScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  pauseOnHover?: boolean;
}

export const InfiniteScroll = ({
  children,
  className,
  speed = 50,
  direction = "left",
  pauseOnHover = true,
}: InfiniteScrollProps) => {
  const [isPaused, setIsPaused] = useState(false);

  const getAnimationDirection = () => {
    switch (direction) {
      case "left":
        return "scroll-left";
      case "right":
        return "scroll-right";
      case "up":
        return "scroll-up";
      case "down":
        return "scroll-down";
      default:
        return "scroll-left";
    }
  };

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={`flex ${direction === "up" || direction === "down" ? "flex-col" : ""}`}
        style={{
          animation: `${getAnimationDirection()} ${speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div className="flex-shrink-0">{children}</div>
        <div className="flex-shrink-0">{children}</div>
      </div>
    </div>
  );
};

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  range?: number;
}

export const Magnetic = ({
  children,
  className,
  strength = 0.2,
  range = 100,
}: MagneticProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        const force = (range - distance) / range;
        setPosition({
          x: deltaX * strength * force,
          y: deltaY * strength * force,
        });
      } else {
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setPosition({ x: 0, y: 0 });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength, range]);

  return (
    <div
      ref={elementRef}
      className={cn("transition-transform duration-200 ease-out", className)}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
};
