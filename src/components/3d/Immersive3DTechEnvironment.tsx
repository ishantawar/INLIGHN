import { useEffect, useRef, useState } from "react";

interface TechNode {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  size: number;
  color: string;
  type: "cube" | "sphere" | "pyramid" | "ring";
  pulsing: boolean;
}

interface Immersive3DTechEnvironmentProps {
  className?: string;
  intensity?: "low" | "medium" | "high" | "ultra";
  theme?: "cybersecurity" | "development" | "datascience" | "analysis";
}

export const Immersive3DTechEnvironment = ({
  className = "",
  intensity = "medium",
  theme = "development",
}: Immersive3DTechEnvironmentProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [scrollY, setScrollY] = useState(0);
  const [nodes, setNodes] = useState<TechNode[]>([]);

  const intensitySettings = {
    low: { nodeCount: 6, complexity: 1 },
    medium: { nodeCount: 10, complexity: 2 },
    high: { nodeCount: 16, complexity: 2 },
    ultra: { nodeCount: 20, complexity: 3 },
  };

  const themeColors = {
    cybersecurity: {
      primary: "#0ED2F7",
      secondary: "#00B4D8",
      accent: "#0891B2",
      danger: "#FB7185",
    },
    development: {
      primary: "#A855F7",
      secondary: "#9333EA",
      accent: "#7C3AED",
      danger: "#EC4899",
    },
    datascience: {
      primary: "#A3E635",
      secondary: "#84CC16",
      accent: "#65A30D",
      danger: "#FBBF24",
    },
    analysis: {
      primary: "#0ED2F7",
      secondary: "#A855F7",
      accent: "#A3E635",
      danger: "#FB7185",
    },
  };

  const settings = intensitySettings[intensity];
  const colors = themeColors[theme];

  useEffect(() => {
    const generateNodes = (): TechNode[] => {
      const nodeTypes: TechNode["type"][] = [
        "cube",
        "sphere",
        "pyramid",
        "ring",
      ];
      const colorPalette = Object.values(colors);

      return Array.from({ length: settings.nodeCount }, (_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        z: Math.random() * 100,
        rotationX: Math.random() * 360,
        rotationY: Math.random() * 360,
        rotationZ: Math.random() * 360,
        size: Math.random() * 60 + 20,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        type: nodeTypes[Math.floor(Math.random() * nodeTypes.length)],
        pulsing: Math.random() > 0.5,
      }));
    };

    setNodes(generateNodes());
  }, [intensity, theme]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNode = (node: TechNode, index: number) => {
    const baseTransform = `
      translate3d(
        ${node.x + (mousePosition.x - 50) * 0.02}%,
        ${node.y + (mousePosition.y - 50) * 0.02}%,
        ${node.z + scrollY * 0.01}px
      )
      rotateX(${node.rotationX + mousePosition.y * 0.1}deg)
      rotateY(${node.rotationY + mousePosition.x * 0.1}deg)
      rotateZ(${node.rotationZ}deg)
    `;

    const nodeStyle = {
      position: "absolute" as const,
      width: `${node.size}px`,
      height: `${node.size}px`,
      transform: baseTransform,
      transformStyle: "preserve-3d" as const,
      animation: `
        techNodeFloat ${3 + index * 0.2}s ease-in-out infinite ${index * 0.1}s,
        ${node.pulsing ? `techNodePulse ${2 + Math.random() * 2}s ease-in-out infinite` : ""}
      `,
      opacity: 0.8 - (node.z / 100) * 0.3,
    };

    const nodeContent = () => {
      switch (node.type) {
        case "cube":
          return (
            <div
              className="tech-cube-3d"
              style={{
                background: `linear-gradient(135deg, ${node.color}40, ${node.color}20)`,
                border: `1px solid ${node.color}60`,
                backdropFilter: "blur(10px)",
              }}
            >
              <div
                className="cube-face front"
                style={{ background: `${node.color}30` }}
              />
              <div
                className="cube-face back"
                style={{ background: `${node.color}20` }}
              />
              <div
                className="cube-face right"
                style={{ background: `${node.color}25` }}
              />
              <div
                className="cube-face left"
                style={{ background: `${node.color}25` }}
              />
              <div
                className="cube-face top"
                style={{ background: `${node.color}35` }}
              />
              <div
                className="cube-face bottom"
                style={{ background: `${node.color}15` }}
              />
            </div>
          );

        case "sphere":
          return (
            <div
              className="tech-sphere-3d"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${node.color}60, ${node.color}20, transparent)`,
                border: `1px solid ${node.color}40`,
                borderRadius: "50%",
                backdropFilter: "blur(8px)",
                boxShadow: `0 0 ${node.size * 0.5}px ${node.color}30`,
              }}
            />
          );

        case "pyramid":
          return (
            <div className="tech-pyramid-3d">
              <div
                className="pyramid-face"
                style={{
                  background: `linear-gradient(45deg, ${node.color}40, ${node.color}20)`,
                  borderBottom: `${node.size}px solid ${node.color}30`,
                  borderLeft: `${node.size / 2}px solid transparent`,
                  borderRight: `${node.size / 2}px solid transparent`,
                }}
              />
            </div>
          );

        case "ring":
          return (
            <div
              className="tech-ring-3d"
              style={{
                border: `${node.size * 0.1}px solid ${node.color}60`,
                borderRadius: "50%",
                background: `conic-gradient(from 0deg, ${node.color}40, transparent, ${node.color}40)`,
                backdropFilter: "blur(6px)",
              }}
            />
          );

        default:
          return null;
      }
    };

    return (
      <div key={index} style={nodeStyle} className="tech-node-3d">
        {nodeContent()}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{
        perspective: "1200px",
        perspectiveOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
      }}
    >
      {/* Tech Environment Nodes */}
      <div className="relative w-full h-full">
        {nodes.map((node, index) => renderNode(node, index))}
      </div>

      {/* Atmospheric Effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Grid Lines */}
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient
              id={`techGrid-${theme}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={colors.primary} stopOpacity="0.3" />
              <stop
                offset="50%"
                stopColor={colors.secondary}
                stopOpacity="0.1"
              />
              <stop offset="100%" stopColor={colors.accent} stopOpacity="0.3" />
            </linearGradient>
          </defs>

          {/* Horizontal lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`h-${i}`}
              x1="0"
              y1={i * 50}
              x2="1000"
              y2={i * 50}
              stroke={`url(#techGrid-${theme})`}
              strokeWidth="1"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                animation: `techGridPulse ${3 + i * 0.1}s ease-in-out infinite`,
              }}
            />
          ))}

          {/* Vertical lines */}
          {Array.from({ length: 20 }).map((_, i) => (
            <line
              key={`v-${i}`}
              x1={i * 50}
              y1="0"
              x2={i * 50}
              y2="1000"
              stroke={`url(#techGrid-${theme})`}
              strokeWidth="1"
              style={{
                transform: `translateX(${mousePosition.x * 0.1}px)`,
                animation: `techGridPulse ${2.5 + i * 0.1}s ease-in-out infinite`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Data Flow Streams */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: settings.complexity * 3 }).map((_, i) => (
          <div
            key={`stream-${i}`}
            className="absolute w-1 h-full"
            style={{
              left: `${(i * 15) % 100}%`,
              background: `linear-gradient(to bottom, transparent, ${colors.primary}60, transparent)`,
              transform: `translateY(${scrollY * (0.02 + i * 0.001)}px)`,
              animation: `dataStream ${4 + Math.random() * 3}s linear infinite`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glow */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${colors.primary} 0%, transparent 60%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, ${colors.secondary} 0%, transparent 60%)
          `,
        }}
      />

      <style jsx>{`
        @keyframes techNodeFloat {
          0%,
          100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-15px) rotateX(10deg);
          }
        }

        @keyframes techNodePulse {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }

        @keyframes techGridPulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes dataStream {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .tech-cube-3d {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }

        .cube-face {
          position: absolute;
          width: 100%;
          height: 100%;
          opacity: 0.8;
        }

        .cube-face.front {
          transform: rotateY(0deg) translateZ(50%);
        }
        .cube-face.back {
          transform: rotateY(180deg) translateZ(50%);
        }
        .cube-face.right {
          transform: rotateY(90deg) translateZ(50%);
        }
        .cube-face.left {
          transform: rotateY(-90deg) translateZ(50%);
        }
        .cube-face.top {
          transform: rotateX(90deg) translateZ(50%);
        }
        .cube-face.bottom {
          transform: rotateX(-90deg) translateZ(50%);
        }

        .tech-sphere-3d,
        .tech-ring-3d {
          width: 100%;
          height: 100%;
        }

        .tech-pyramid-3d {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pyramid-face {
          width: 0;
          height: 0;
        }
      `}</style>
    </div>
  );
};
