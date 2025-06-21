import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface LiquidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  liquidIntensity?: "subtle" | "medium" | "intense";
}

export const LiquidButton = ({
  children,
  className,
  onClick,
  variant = "primary",
  liquidIntensity = "medium",
}: LiquidButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = { id: Date.now(), x, y };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 800);
    }
    onClick?.();
  };

  const intensityClasses = {
    subtle: "before:scale-110 hover:before:scale-125",
    medium: "before:scale-125 hover:before:scale-150",
    intense: "before:scale-150 hover:before:scale-200",
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden px-6 py-3 font-semibold rounded-xl",
        "transition-all duration-500 transform",
        "before:absolute before:inset-0 before:rounded-xl before:transition-all before:duration-500",
        "before:bg-gradient-to-r before:opacity-0 hover:before:opacity-100",
        variant === "primary" && [
          "bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 text-white",
          "before:from-blue-500 before:via-cyan-400 before:to-teal-400",
          "shadow-lg hover:shadow-2xl hover:shadow-cyan-500/25",
        ],
        variant === "secondary" && [
          "bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500 text-white",
          "before:from-slate-600 before:via-slate-500 before:to-slate-400",
          "shadow-lg hover:shadow-xl hover:shadow-slate-500/25",
        ],
        variant === "ghost" && [
          "bg-transparent border-2 border-cyan-500/50 text-cyan-400",
          "before:bg-gradient-to-r before:from-cyan-500/20 before:to-blue-500/20",
          "hover:border-cyan-400 hover:text-cyan-300",
        ],
        intensityClasses[liquidIntensity],
        "hover:-translate-y-1 active:translate-y-0 active:scale-95",
        className,
      )}
    >
      {/* Liquid Ripple Effects */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-liquid-ripple"
          style={{
            left: ripple.x - 30,
            top: ripple.y - 30,
            width: 60,
            height: 60,
          }}
        />
      ))}

      {/* Liquid Morphing Background */}
      {isHovered && (
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-liquid-flow" />
        </div>
      )}

      <span className="relative z-10">{children}</span>
    </button>
  );
};

interface LiquidLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  color?: "primary" | "secondary" | "accent";
}

export const LiquidLoader = ({
  size = "md",
  className,
  color = "primary",
}: LiquidLoaderProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const colors = {
    primary: "from-blue-500 via-cyan-400 to-teal-500",
    secondary: "from-slate-500 via-slate-400 to-slate-300",
    accent: "from-purple-500 via-pink-400 to-rose-500",
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      {/* Main Liquid Container */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-20 animate-liquid-morph",
            colors[color],
          )}
        />

        {/* Liquid Wave */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t animate-liquid-wave",
            colors[color],
          )}
        />

        {/* Floating Bubbles */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "absolute rounded-full bg-gradient-to-br opacity-60 animate-liquid-bubble",
              colors[color],
            )}
            style={{
              width: `${20 + i * 10}%`,
              height: `${20 + i * 10}%`,
              left: `${20 + i * 25}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

interface FluidBackgroundProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "low" | "medium" | "high";
  colorScheme?: "cool" | "warm" | "monochrome";
}

export const FluidBackground = ({
  children,
  className,
  intensity = "medium",
  colorScheme = "cool",
}: FluidBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const colorSchemes = {
      cool: [
        "rgba(14, 210, 247, 0.1)",
        "rgba(8, 145, 178, 0.08)",
        "rgba(6, 95, 70, 0.05)",
      ],
      warm: [
        "rgba(251, 113, 133, 0.1)",
        "rgba(250, 204, 21, 0.08)",
        "rgba(245, 101, 101, 0.05)",
      ],
      monochrome: [
        "rgba(55, 65, 81, 0.1)",
        "rgba(107, 114, 128, 0.08)",
        "rgba(156, 163, 175, 0.05)",
      ],
    };

    const waveCount = intensity === "high" ? 6 : intensity === "medium" ? 4 : 2;
    const colors = colorSchemes[colorScheme];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < waveCount; i++) {
        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height,
        );
        gradient.addColorStop(0, colors[i % colors.length]);
        gradient.addColorStop(0.5, colors[(i + 1) % colors.length]);
        gradient.addColorStop(1, colors[(i + 2) % colors.length]);

        ctx.fillStyle = gradient;
        ctx.beginPath();

        const waveHeight = (canvas.height / waveCount) * (i + 1);
        const frequency = 0.005 + i * 0.002;
        const amplitude = 30 + i * 15;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            waveHeight +
            Math.sin(x * frequency + time + i) * amplitude +
            Math.sin(x * frequency * 2 + time * 1.5 + i) * (amplitude / 3);

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();
        ctx.fill();
      }

      time += 0.01;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [intensity, colorScheme]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface InkDropEffectProps {
  trigger: boolean;
  onComplete?: () => void;
  color?: string;
  size?: "sm" | "md" | "lg";
}

export const InkDropEffect = ({
  trigger,
  onComplete,
  color = "rgba(14, 210, 247, 0.3)",
  size = "md",
}: InkDropEffectProps) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setIsActive(true);
      const timer = setTimeout(() => {
        setIsActive(false);
        onComplete?.();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [trigger, onComplete]);

  const sizeClasses = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
  };

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
      <div
        className={cn("rounded-full animate-ink-drop", sizeClasses[size])}
        style={{
          background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
};
