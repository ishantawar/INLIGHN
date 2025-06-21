import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  life: number;
  maxLife: number;
}

interface Enhanced3DParticleSystemProps {
  className?: string;
  particleCount?: number;
  interactive?: boolean;
  colorScheme?: "primary" | "secondary" | "rainbow";
}

export const Enhanced3DParticleSystem = ({
  className = "",
  particleCount = 150,
  interactive = true,
  colorScheme = "primary",
}: Enhanced3DParticleSystemProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const colorSchemes = {
    primary: ["#0ED2F7", "#00B4D8", "#0891B2", "#0369A1"],
    secondary: ["#A855F7", "#9333EA", "#7C3AED", "#6D28D9"],
    rainbow: ["#0ED2F7", "#A855F7", "#A3E635", "#FB7185", "#FBBF24"],
  };

  const colors = colorSchemes[colorScheme];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 1000,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      vz: (Math.random() - 0.5) * 2,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: Math.random() * 100 + 100,
      maxLife: Math.random() * 100 + 100,
    });

    const initParticles = () => {
      particlesRef.current = Array.from(
        { length: particleCount },
        createParticle,
      );
    };

    const updateParticle = (particle: Particle) => {
      // Physics
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      particle.life--;

      // Mouse interaction
      if (interactive) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.vx += (dx / distance) * force * 0.1;
          particle.vy += (dy / distance) * force * 0.1;
        }
      }

      // Boundaries
      if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
      if (particle.z < 0 || particle.z > 1000) particle.vz *= -1;

      // Regenerate if dead
      if (particle.life <= 0) {
        Object.assign(particle, createParticle());
      }
    };

    const drawParticle = (particle: Particle) => {
      const perspective = 800;
      const scale = perspective / (perspective + particle.z);
      const x2d = particle.x * scale + (canvas.width * (1 - scale)) / 2;
      const y2d = particle.y * scale + (canvas.height * (1 - scale)) / 2;
      const size = particle.size * scale;
      const alpha = (particle.life / particle.maxLife) * scale;

      // Convert hex to rgba for proper alpha handling
      const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      // Create gradient
      const gradient = ctx.createRadialGradient(
        x2d,
        y2d,
        0,
        x2d,
        y2d,
        size * 2,
      );
      gradient.addColorStop(0, hexToRgba(particle.color, alpha));
      gradient.addColorStop(1, hexToRgba(particle.color, 0));

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
      ctx.fill();

      // Add glow effect
      ctx.shadowColor = particle.color;
      ctx.shadowBlur = size * 2;
      ctx.globalCompositeOperation = "screen";
      ctx.beginPath();
      ctx.arc(x2d, y2d, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = "source-over";
      ctx.shadowBlur = 0;
    };

    const drawConnections = () => {
      const particles = particlesRef.current;

      // Skip connections if too many particles for performance
      if (particles.length > 100) return;

      // Helper function to convert hex to rgba (cached for performance)
      const hexToRgba = (hex: string, alpha: number) => {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
      };

      ctx.lineWidth = 1;

      // Limit connection checks for performance
      const maxConnections = Math.min(particles.length, 50);

      for (let i = 0; i < maxConnections; i++) {
        for (let j = i + 1; j < maxConnections; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            // Reduced connection distance for performance
            const alpha = (1 - distance / 100) * 0.15; // Reduced alpha for subtlety
            ctx.strokeStyle = hexToRgba(colors[0], alpha);

            const perspective1 = 800 / (800 + particles[i].z);
            const perspective2 = 800 / (800 + particles[j].z);

            const x1 =
              particles[i].x * perspective1 +
              (canvas.width * (1 - perspective1)) / 2;
            const y1 =
              particles[i].y * perspective1 +
              (canvas.height * (1 - perspective1)) / 2;
            const x2 =
              particles[j].x * perspective2 +
              (canvas.width * (1 - perspective2)) / 2;
            const y2 =
              particles[j].y * perspective2 +
              (canvas.height * (1 - perspective2)) / 2;

            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Sort particles by z-depth for proper 3D rendering
      particlesRef.current.sort((a, b) => b.z - a.z);

      // Draw connections first
      drawConnections();

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleResize = () => {
      resizeCanvas();
    };

    // Setup
    resizeCanvas();
    initParticles();
    setIsVisible(true);
    animate();

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [particleCount, interactive, colorScheme]);

  return (
    <canvas
      ref={canvasRef}
      className={`canvas-container particle-system absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        background: "transparent",
        filter: "contrast(1.1) brightness(1.1)",
        willChange: "auto",
      }}
    />
  );
};
