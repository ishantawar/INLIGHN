import { useEffect, useRef, useState } from "react";
import { ProfessionalLogo } from "@/components/ui/professional-logo";

interface InteractiveLiquidLoaderProps {
  duration?: number;
  onComplete?: () => void;
}

export const InteractiveLiquidLoader = ({
  duration = 2500,
  onComplete,
}: InteractiveLiquidLoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Progress animation
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress < 100) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => onComplete?.(), 300);
      }
    };
    animate();
  }, [duration, onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();

    // Liquid distortion animation - Performance optimized
    let time = 0;
    let lastMouseUpdate = 0;
    let cachedMouseX = canvas.width / 2;
    let cachedMouseY = canvas.height / 2;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update mouse position cache less frequently for performance
      const now = Date.now();
      if (now - lastMouseUpdate > 16) {
        // ~60fps
        cachedMouseX = (mousePosition.x / 100) * canvas.width;
        cachedMouseY = (mousePosition.y / 100) * canvas.height;
        lastMouseUpdate = now;
      }

      // Create liquid waves with reduced complexity
      const waveCount = isHovered ? 4 : 2; // Reduced from 6/3
      const amplitude = isHovered ? 30 : 15; // Reduced amplitude
      const mouseInfluence = isHovered ? 0.2 : 0.05; // Reduced influence

      for (let i = 0; i < waveCount; i++) {
        // Use cached gradient colors for better performance
        const baseHue = 189 + i * 40;
        const hue1 = (baseHue + time * 20) % 360;
        const hue2 = (baseHue + 80 + time * 15) % 360;

        const gradient = ctx.createLinearGradient(
          0,
          0,
          canvas.width,
          canvas.height,
        );
        gradient.addColorStop(
          0,
          `hsla(${hue1}, 70%, 60%, ${0.08 + i * 0.015})`,
        );
        gradient.addColorStop(
          0.5,
          `hsla(${hue2}, 70%, 50%, ${0.04 + i * 0.01})`,
        );
        gradient.addColorStop(
          1,
          `hsla(${hue1}, 70%, 40%, ${0.06 + i * 0.015})`,
        );

        ctx.fillStyle = gradient;
        ctx.beginPath();

        // Optimized wave calculation with fewer points
        const step = 6; // Increased step for fewer calculations
        for (let x = 0; x <= canvas.width; x += step) {
          // Simplified distance calculation
          const dx = x - cachedMouseX;
          const dy = canvas.height / 2 - cachedMouseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const mouseEffect = Math.max(0, 1 - distance / 150) * mouseInfluence;

          // Simplified wave calculation
          const baseY =
            canvas.height / 2 +
            Math.sin(x * 0.006 + time + i * 0.8) * amplitude +
            Math.sin(x * 0.002 + time * 0.8 + i) * (amplitude * 0.4);

          const y = baseY + mouseEffect * amplitude * Math.sin(time * 1.5 + i);

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

      time += 0.015; // Slightly slower for smoother animation
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition, isHovered]);

  const lastMouseMoveRef = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const now = Date.now();
    if (now - lastMouseMoveRef.current < 16) return; // Throttle to ~60fps

    lastMouseMoveRef.current = now;

    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Liquid Distortion Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          filter: "blur(0.5px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Main Content - Single Layer */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        {/* Logo */}
        <div className="mb-12 transform transition-all duration-500 hover:scale-110">
          <ProfessionalLogo size="lg" variant="glow" />
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-6 max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Initializing Future-Ready Experience
          </h2>

          <p className="text-gray-400 text-sm">
            Preparing immersive 3D experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-80 max-w-full">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            {/* Progress Fill */}
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full transition-all duration-100 ease-out"
              style={{
                width: `${progress}%`,
                boxShadow: `0 0 20px rgba(14, 210, 247, 0.5)`,
              }}
            />

            {/* Shimmer Effect */}
            <div
              className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"
              style={{
                left: `${Math.max(0, progress - 10)}%`,
                opacity: progress > 5 ? 1 : 0,
              }}
            />
          </div>

          {/* Progress Text */}
          <div className="flex justify-between items-center mt-3 text-sm text-gray-400">
            <span>Loading...</span>
            <span className="font-mono">{Math.round(progress)}%</span>
          </div>
        </div>

        {/* Interactive Hint */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 animate-pulse">
            Move your mouse to interact with the liquid effects
          </p>
        </div>

        {/* Floating Elements - Performance Optimized */}
        <div className="absolute inset-0 pointer-events-none">
          {["🔒", "💻", "📊", "🗄️"].map((icon, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-30 transition-transform duration-500 ease-out"
              style={{
                top: `${20 + i * 20}%`,
                left: `${10 + i * 20}%`,
                transform: `translate3d(${(mousePosition.x - 50) * 0.08}px, ${(mousePosition.y - 50) * 0.08}px, 0)`,
                animationDelay: `${i * 0.5}s`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                willChange: "transform",
              }}
            >
              {icon}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </div>
  );
};
