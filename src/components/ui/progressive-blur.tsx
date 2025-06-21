import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ProgressiveBlurProps {
  children: React.ReactNode;
  className?: string;
  isBlurred?: boolean;
  blurIntensity?: "light" | "medium" | "heavy";
  transitionDuration?: number;
  direction?: "horizontal" | "vertical" | "radial";
}

export const ProgressiveBlur = ({
  children,
  className,
  isBlurred = false,
  blurIntensity = "medium",
  transitionDuration = 500,
  direction = "radial",
}: ProgressiveBlurProps) => {
  const intensityValues = {
    light: "blur-sm",
    medium: "blur-md",
    heavy: "blur-lg",
  };

  return (
    <div
      className={cn(
        "transition-all ease-out",
        isBlurred && intensityValues[blurIntensity],
        className,
      )}
      style={{
        transitionDuration: `${transitionDuration}ms`,
        filter: isBlurred ? undefined : "blur(0px)",
      }}
    >
      {children}
    </div>
  );
};

interface FocusBlurBackgroundProps {
  children: React.ReactNode;
  isModalOpen: boolean;
  className?: string;
  blurIntensity?: number;
}

export const FocusBlurBackground = ({
  children,
  isModalOpen,
  className,
  blurIntensity = 8,
}: FocusBlurBackgroundProps) => {
  return (
    <div
      className={cn(
        "transition-all duration-300 ease-out",
        isModalOpen && `blur-[${blurIntensity}px]`,
        className,
      )}
      style={{
        filter: isModalOpen ? `blur(${blurIntensity}px)` : "blur(0px)",
      }}
    >
      {children}
    </div>
  );
};

interface ScrollBlurEffectProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  maxBlur?: number;
}

export const ScrollBlurEffect = ({
  children,
  className,
  threshold = 100,
  maxBlur = 10,
}: ScrollBlurEffectProps) => {
  const [scrollY, setScrollY] = useState(0);
  const [blurAmount, setBlurAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      if (currentScrollY > threshold) {
        const blurProgress = Math.min(
          (currentScrollY - threshold) / threshold,
          1,
        );
        setBlurAmount(blurProgress * maxBlur);
      } else {
        setBlurAmount(0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, maxBlur]);

  return (
    <div
      className={cn("transition-all duration-200 ease-out", className)}
      style={{
        filter: `blur(${blurAmount}px)`,
      }}
    >
      {children}
    </div>
  );
};

interface ImageProgressiveLoadProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
}

export const ImageProgressiveLoad = ({
  src,
  alt,
  className,
  placeholder,
  onLoad,
}: ImageProgressiveLoadProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const handleLoad = () => {
      setIsLoaded(true);
      setIsLoading(false);
      onLoad?.();
    };

    const handleError = () => {
      setIsLoading(false);
    };

    img.addEventListener("load", handleLoad);
    img.addEventListener("error", handleError);

    return () => {
      img.removeEventListener("load", handleLoad);
      img.removeEventListener("error", handleError);
    };
  }, [onLoad]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Placeholder with blur */}
      {!isLoaded && placeholder && (
        <img
          src={placeholder}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover blur-lg scale-110 transition-opacity duration-500"
        />
      )}

      {/* Loading overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/50 via-slate-700/30 to-slate-800/50 animate-pulse" />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-700 ease-out",
          isLoaded
            ? "opacity-100 blur-0 scale-100"
            : "opacity-0 blur-sm scale-105",
        )}
      />

      {/* Sharpening overlay effect */}
      {isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/5 animate-sharpen-sweep" />
      )}
    </div>
  );
};

interface HoverBlurEffectProps {
  children: React.ReactNode;
  className?: string;
  blurOnHover?: boolean;
  blurIntensity?: number;
}

export const HoverBlurEffect = ({
  children,
  className,
  blurOnHover = true,
  blurIntensity = 4,
}: HoverBlurEffectProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn("transition-all duration-300 ease-out", className)}
      style={{
        filter:
          isHovered && blurOnHover ? `blur(${blurIntensity}px)` : "blur(0px)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
};

interface DepthOfFieldProps {
  children: React.ReactNode;
  className?: string;
  focusPoint?: { x: number; y: number };
  focusRadius?: number;
  maxBlur?: number;
}

export const DepthOfField = ({
  children,
  className,
  focusPoint = { x: 50, y: 50 },
  focusRadius = 30,
  maxBlur = 8,
}: DepthOfFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState(focusPoint);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setMousePosition({ x, y });
    };

    const element = ref.current;
    element?.addEventListener("mousemove", handleMouseMove);

    return () => {
      element?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", className)}
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent ${focusRadius}%, rgba(0,0,0,0.1) 100%)`,
      }}
    >
      <div
        className="transition-all duration-200 ease-out"
        style={{
          filter: `blur(0px)`,
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, transparent ${focusRadius}%, rgba(255,255,255,0.1) 100%)`,
        }}
      >
        {children}
      </div>
    </div>
  );
};

interface BlurRevealProps {
  children: React.ReactNode;
  className?: string;
  isRevealed?: boolean;
  revealDirection?: "top" | "bottom" | "left" | "right" | "center";
}

export const BlurReveal = ({
  children,
  className,
  isRevealed = false,
  revealDirection = "center",
}: BlurRevealProps) => {
  const maskPositions = {
    top: "linear-gradient(to bottom, transparent 0%, black 100%)",
    bottom: "linear-gradient(to top, transparent 0%, black 100%)",
    left: "linear-gradient(to right, transparent 0%, black 100%)",
    right: "linear-gradient(to left, transparent 0%, black 100%)",
    center: "radial-gradient(circle, transparent 0%, black 100%)",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div
        className={cn(
          "transition-all duration-1000 ease-out",
          isRevealed ? "blur-0" : "blur-lg",
        )}
        style={{
          mask: isRevealed ? "none" : maskPositions[revealDirection],
          WebkitMask: isRevealed ? "none" : maskPositions[revealDirection],
        }}
      >
        {children}
      </div>
    </div>
  );
};
