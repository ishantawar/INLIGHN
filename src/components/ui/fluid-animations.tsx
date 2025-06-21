import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface FluidButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

export const FluidButton = ({
  children,
  className,
  onClick,
  variant = "primary",
  disabled = false,
}: FluidButtonProps) => {
  const [ripples, setRipples] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const newRipple = { id: Date.now(), x, y };
      setRipples((prev) => [...prev, newRipple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 600);
    }

    onClick?.();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "relative overflow-hidden rounded-lg px-6 py-3 font-semibold transition-all duration-300",
        "transform hover:scale-105 active:scale-95",
        variant === "primary"
          ? "bg-gradient-to-r from-primary via-blue-500 to-purple-500 text-white"
          : "bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white border border-gray-600",
        disabled ? "opacity-50 cursor-not-allowed" : "hover:shadow-2xl",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        className,
      )}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute pointer-events-none animate-fluid-ripple"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

interface FluidBackgroundProps {
  className?: string;
  children?: React.ReactNode;
  intensity?: "low" | "medium" | "high";
}

export const FluidBackground = ({
  className,
  children,
  intensity = "medium",
}: FluidBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;
    const waves = Array.from(
      { length: intensity === "high" ? 8 : intensity === "medium" ? 5 : 3 },
      (_, i) => ({
        amplitude: 20 + i * 10,
        frequency: 0.01 + i * 0.005,
        phase: (i * Math.PI) / 3,
        color: `hsla(${180 + i * 30}, 70%, 60%, 0.1)`,
      }),
    );

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.fillStyle = wave.color;

        for (let x = 0; x <= canvas.width; x += 2) {
          const y =
            canvas.height / 2 +
            Math.sin(x * wave.frequency + time + wave.phase) * wave.amplitude +
            Math.sin(x * wave.frequency * 2 + time * 1.5 + wave.phase) *
              (wave.amplitude / 2);

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
      });

      time += 0.02;
      animationIdRef.current = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [intensity]);

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

interface FluidLoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const FluidLoader = ({ size = "md", className }: FluidLoaderProps) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  return (
    <div className={cn("relative", sizes[size], className)}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 animate-fluid-spin">
        <div className="absolute inset-1 rounded-full bg-background" />
      </div>
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-fluid-wave" />
    </div>
  );
};

interface FluidCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const FluidCard = ({
  children,
  className,
  hover = true,
}: FluidCardProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden rounded-xl p-6 backdrop-blur-lg border border-white/10",
        "transition-all duration-300 transform",
        hover && "hover:scale-[1.02] hover:shadow-2xl",
        className,
      )}
      style={{
        background: isHovered
          ? `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(14, 210, 247, 0.15), rgba(168, 85, 247, 0.05), transparent)`
          : "rgba(255, 255, 255, 0.05)",
      }}
    >
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePos.x * 100}%`,
            top: `${mousePos.y * 100}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-32 h-32 bg-gradient-to-r from-primary/20 via-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-fluid-pulse" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface WaveTransitionProps {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export const WaveTransition = ({
  isVisible,
  children,
  className,
  direction = "up",
}: WaveTransitionProps) => {
  const directions = {
    up: "translate-y-4",
    down: "translate-y-[-16px]",
    left: "translate-x-4",
    right: "translate-x-[-16px]",
  };

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0 translate-x-0"
          : `opacity-0 ${directions[direction]}`,
        className,
      )}
      style={{
        transitionDelay: "0.1s",
      }}
    >
      {children}
    </div>
  );
};
