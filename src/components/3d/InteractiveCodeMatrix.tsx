import { useEffect, useRef, useState } from "react";

interface CodeRain {
  column: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
  color: string;
}

interface InteractiveCodeMatrixProps {
  className?: string;
  density?: "light" | "medium" | "heavy" | "ultra";
  language?: "javascript" | "python" | "java" | "sql" | "mixed";
  interactive?: boolean;
  color?: "matrix" | "cyber" | "neon" | "rainbow";
}

export const InteractiveCodeMatrix = ({
  className = "",
  density = "medium",
  language = "mixed",
  interactive = true,
  color = "matrix",
}: InteractiveCodeMatrixProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const rainDropsRef = useRef<CodeRain[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  const densitySettings = {
    light: 20,
    medium: 35,
    heavy: 50,
    ultra: 80,
  };

  const codeCharsets = {
    javascript:
      "function(){};const let var if else for while return true false null undefined console.log => async await",
    python:
      "def class if elif else for while import from return True False None print lambda try except",
    java: "public private class static void int String boolean if else for while try catch return new",
    sql: "SELECT FROM WHERE JOIN INNER LEFT RIGHT GROUP BY ORDER BY HAVING COUNT SUM AVG MAX MIN",
    mixed:
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  const colorSchemes = {
    matrix: ["#0F0", "#0A0", "#080", "#060"],
    cyber: ["#0ED2F7", "#00B4D8", "#0891B2", "#0369A1"],
    neon: ["#A855F7", "#9333EA", "#7C3AED", "#6D28D9"],
    rainbow: ["#0ED2F7", "#A855F7", "#A3E635", "#FB7185", "#FBBF24"],
  };

  const chars = codeCharsets[language].split("");
  const colors = colorSchemes[color];
  const columnCount = densitySettings[density];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initializeRainDrops();
    };

    const initializeRainDrops = () => {
      const columnWidth = canvas.width / columnCount;
      rainDropsRef.current = Array.from({ length: columnCount }, (_, i) => ({
        column: i,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1,
        chars: Array.from(
          { length: 20 },
          () => chars[Math.floor(Math.random() * chars.length)],
        ),
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const drawRainDrop = (drop: CodeRain) => {
      const columnWidth = canvas.width / columnCount;
      const x = drop.column * columnWidth;
      const fontSize = columnWidth * 0.8;

      ctx.font = `${fontSize}px 'Fira Code', 'Courier New', monospace`;
      ctx.textAlign = "center";

      drop.chars.forEach((char, index) => {
        const charY = drop.y - index * fontSize;
        if (charY > -fontSize && charY < canvas.height + fontSize) {
          const alpha = Math.max(0, drop.opacity - index * 0.05);
          const brightness = Math.max(0.3, 1 - index * 0.1);

          // Glow effect
          ctx.shadowColor = drop.color;
          ctx.shadowBlur = 10;
          ctx.fillStyle = `${drop.color}${Math.floor(alpha * 255 * brightness)
            .toString(16)
            .padStart(2, "0")}`;

          ctx.fillText(char, x + columnWidth / 2, charY);

          // Extra bright leading character
          if (index === 0) {
            ctx.shadowBlur = 20;
            ctx.fillStyle = drop.color;
            ctx.fillText(char, x + columnWidth / 2, charY);
          }
        }
      });

      ctx.shadowBlur = 0;
    };

    const updateRainDrop = (drop: CodeRain) => {
      drop.y += drop.speed;

      // Mouse interaction
      if (interactive) {
        const columnWidth = canvas.width / columnCount;
        const dropX = drop.column * columnWidth + columnWidth / 2;
        const dx = mouseRef.current.x - dropX;
        const dy = mouseRef.current.y - drop.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          drop.speed += force * 0.5;
          drop.opacity = Math.min(1, drop.opacity + force * 0.1);

          // Change characters more frequently near mouse
          if (Math.random() < force * 0.3) {
            drop.chars = drop.chars.map(
              () => chars[Math.floor(Math.random() * chars.length)],
            );
          }
        }
      }

      // Reset when off screen
      if (drop.y > canvas.height + 100) {
        drop.y = -Math.random() * 200;
        drop.speed = Math.random() * 3 + 1;
        drop.chars = Array.from(
          { length: 20 },
          () => chars[Math.floor(Math.random() * chars.length)],
        );
        drop.opacity = Math.random() * 0.8 + 0.2;
        drop.color = colors[Math.floor(Math.random() * colors.length)];
      }

      // Randomly change characters
      if (Math.random() < 0.01) {
        const randomIndex = Math.floor(Math.random() * drop.chars.length);
        drop.chars[randomIndex] =
          chars[Math.floor(Math.random() * chars.length)];
      }
    };

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rainDropsRef.current.forEach((drop) => {
        updateRainDrop(drop);
        drawRainDrop(drop);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleClick = (e: MouseEvent) => {
      if (!interactive) return;

      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      const columnWidth = canvas.width / columnCount;
      const clickedColumn = Math.floor(clickX / columnWidth);

      // Create explosion effect at click
      const explosionDrops = Array.from({ length: 5 }, (_, i) => ({
        column: clickedColumn + (i - 2),
        y: clickY,
        speed: Math.random() * 5 + 2,
        chars: Array.from(
          { length: 15 },
          () => chars[Math.floor(Math.random() * chars.length)],
        ),
        opacity: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      })).filter((drop) => drop.column >= 0 && drop.column < columnCount);

      rainDropsRef.current.push(...explosionDrops);

      // Remove extra drops after a delay
      setTimeout(() => {
        rainDropsRef.current = rainDropsRef.current.slice(0, columnCount);
      }, 2000);
    };

    // Setup
    resizeCanvas();
    setIsVisible(true);
    animate();

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("click", handleClick);
    }
    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (interactive) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("click", handleClick);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [density, language, interactive, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{
        background: "rgba(0, 0, 0, 0.1)",
        mixBlendMode: "screen",
        filter: "contrast(1.2) brightness(1.1)",
      }}
    />
  );
};
