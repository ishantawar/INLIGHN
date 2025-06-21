import { useEffect, useState } from "react";

export const Professional3DAnimation = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Professional 3D Geometric Grid */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <linearGradient
              id="professionalGrad1"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#1e40af" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0891b2" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#065f46" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient
              id="professionalGrad2"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#374151" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#4f46e5" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#1f2937" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i}>
              <polygon
                points={`${50 + i * 80},50 ${90 + i * 80},90 ${50 + i * 80},130 ${10 + i * 80},90`}
                fill="url(#professionalGrad1)"
                style={{
                  transform: `translateY(${scrollY * 0.1}px) rotate(${i * 30}deg)`,
                  transformOrigin: `${50 + i * 80}px 90px`,
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            </g>
          ))}
        </svg>
      </div>

      {/* Professional Corporate Floating Elements */}
      <div
        className="absolute w-96 h-96 rounded-full opacity-10"
        style={{
          top: "15%",
          right: "5%",
          background:
            "conic-gradient(from 90deg, #1e40af, #0891b2, #065f46, #374151, #1e40af)",
          transform: `
            translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) 
            translateY(${scrollY * 0.05}px)
            rotateX(${mousePosition.y * 0.1}deg)
            rotateY(${mousePosition.x * 0.1}deg)
          `,
          animation: "professional-rotate 30s linear infinite",
        }}
      />

      {/* Sophisticated Geometric Shapes */}
      <div
        className="absolute w-64 h-64 border-2 border-slate-600/30 rounded-lg backdrop-blur-sm"
        style={{
          top: "25%",
          left: "8%",
          background:
            "linear-gradient(135deg, rgba(30, 64, 175, 0.15), rgba(8, 145, 178, 0.1), rgba(6, 95, 70, 0.05))",
          transform: `
            translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)
            translateY(${scrollY * 0.08}px)
            rotateX(${mousePosition.y * 0.15}deg)
            rotateY(${mousePosition.x * 0.15}deg)
            rotateZ(15deg)
          `,
          animation: "professional-float 6s ease-in-out infinite",
        }}
      />

      {/* Executive Suite Hexagons */}
      <div
        className="absolute w-48 h-48"
        style={{
          top: "60%",
          right: "20%",
          transform: `
            translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)
            translateY(${scrollY * 0.06}px)
            rotateZ(${mousePosition.x * 0.1}deg)
          `,
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill="none"
            stroke="url(#professionalGrad1)"
            strokeWidth="1"
            style={{ animation: "professional-pulse 4s ease-in-out infinite" }}
          />
          <polygon
            points="50,15 80,30 80,70 50,85 20,70 20,30"
            fill="url(#professionalGrad2)"
            opacity="0.3"
            style={{
              animation: "professional-pulse 4s ease-in-out infinite",
              animationDelay: "2s",
            }}
          />
        </svg>
      </div>

      {/* Professional Particle Network */}
      <div className="absolute inset-0 opacity-25">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: `${15 + (i % 8) * 10}%`,
              left: `${10 + Math.floor(i / 8) * 20}%`,
              background:
                i % 3 === 0 ? "#1e40af" : i % 3 === 1 ? "#0891b2" : "#065f46",
              transform: `
                translate(${mousePosition.x * (0.01 + i * 0.0003)}px, ${mousePosition.y * (0.01 + i * 0.0003)}px)
                translateY(${scrollY * (0.01 + i * 0.0005)}px)
              `,
              animation: `professional-glow ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.1}s`,
              boxShadow: "0 0 6px currentColor",
            }}
          />
        ))}
      </div>

      {/* Corporate Network Lines */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1={`${10 + i * 12}%`}
              y1="20%"
              x2={`${20 + i * 10}%`}
              y2="80%"
              stroke="#0891b2"
              strokeWidth="1"
              style={{
                animation: `professional-line-fade ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Professional Tech Cubes */}
      <div
        className="absolute w-32 h-32 rounded-xl backdrop-blur-sm border border-slate-500/20"
        style={{
          top: "70%",
          left: "15%",
          background:
            "linear-gradient(135deg, rgba(55, 65, 81, 0.4), rgba(79, 70, 229, 0.2), rgba(31, 41, 55, 0.3))",
          transform: `
            translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)
            translateY(${scrollY * 0.1}px)
            rotateX(${mousePosition.y * 0.2}deg)
            rotateY(${mousePosition.x * 0.2}deg)
          `,
          animation: "professional-cube-rotate 8s ease-in-out infinite",
        }}
      >
        <div className="absolute inset-2 rounded-lg bg-gradient-to-br from-blue-900/30 to-teal-700/20 backdrop-blur-sm" />
      </div>

      {/* Ambient Professional Glow */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #1e40af 0%, transparent 60%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #0891b2 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, #065f46 0%, transparent 80%)
          `,
        }}
      />

      {/* Professional Depth Layers */}
      <div
        className="absolute w-full h-full opacity-10"
        style={{
          background:
            "linear-gradient(45deg, transparent 40%, rgba(30, 64, 175, 0.1) 50%, transparent 60%)",
          transform: `translateY(${scrollY * 0.02}px) skewY(1deg)`,
        }}
      />
    </div>
  );
};

// Professional CSS animations to add to the global styles
export const professionalAnimationStyles = `
  @keyframes professional-rotate {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.05); }
    100% { transform: rotate(360deg) scale(1); }
  }

  @keyframes professional-float {
    0%, 100% { transform: translateY(0px) rotateX(0deg); }
    50% { transform: translateY(-10px) rotateX(5deg); }
  }

  @keyframes professional-pulse {
    0%, 100% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.05); }
  }

  @keyframes professional-glow {
    0%, 100% { opacity: 0.6; box-shadow: 0 0 6px currentColor; }
    50% { opacity: 1; box-shadow: 0 0 12px currentColor; }
  }

  @keyframes professional-line-fade {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.6; }
  }

  @keyframes professional-cube-rotate {
    0% { transform: rotateX(0deg) rotateY(0deg); }
    25% { transform: rotateX(15deg) rotateY(90deg); }
    50% { transform: rotateX(0deg) rotateY(180deg); }
    75% { transform: rotateX(-15deg) rotateY(270deg); }
    100% { transform: rotateX(0deg) rotateY(360deg); }
  }
`;
