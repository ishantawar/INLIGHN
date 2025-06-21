
import { useEffect, useState } from 'react';

export const Mega3DAnimation = () => {
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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mega 3D Sphere */}
      <div 
        className="mega-3d-sphere"
        style={{
          top: '10%',
          right: '10%',
          transform: `
            translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) 
            translateY(${scrollY * 0.1}px)
            rotateX(${mousePosition.y * 0.1}deg)
            rotateY(${mousePosition.x * 0.1}deg)
          `,
        }}
      />

      {/* Floating Rings System */}
      <div 
        className="floating-rings"
        style={{
          top: '20%',
          left: '5%',
          transform: `
            translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)
            translateY(${scrollY * 0.05}px)
          `,
        }}
      />

      {/* Giant Floating Cubes */}
      <div 
        className="absolute w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-3xl backdrop-blur-sm"
        style={{
          top: '60%',
          right: '15%',
          transform: `
            translate(${mousePosition.x * 0.04}px, ${mousePosition.y * 0.04}px)
            translateY(${scrollY * 0.08}px)
            rotateX(${mousePosition.y * 0.2}deg)
            rotateY(${mousePosition.x * 0.2}deg)
            rotateZ(45deg)
          `,
          animation: 'float 8s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />

      <div 
        className="absolute w-24 h-24 bg-gradient-to-br from-purple-500/30 to-primary/30 rounded-2xl backdrop-blur-sm"
        style={{
          top: '40%',
          left: '70%',
          transform: `
            translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.06}px)
            translateY(${scrollY * 0.12}px)
            rotateX(${mousePosition.y * 0.3}deg)
            rotateY(${mousePosition.x * 0.3}deg)
            rotateZ(-30deg)
          `,
          animation: 'float-reverse 10s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />

      {/* Massive Geometric Shapes */}
      <div 
        className="absolute w-48 h-48 border-2 border-primary/20 rounded-full backdrop-blur-sm"
        style={{
          top: '70%',
          left: '20%',
          transform: `
            translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)
            translateY(${scrollY * 0.06}px)
            scale(${1 + Math.sin(Date.now() * 0.001) * 0.1})
          `,
          background: 'conic-gradient(from 90deg, transparent, rgba(14, 210, 247, 0.1), transparent)',
          animation: 'mega-rotate 40s linear infinite',
        }}
      />

      {/* Triangular Prisms */}
      <div 
        className="absolute"
        style={{
          top: '25%',
          left: '40%',
          transform: `
            translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)
            translateY(${scrollY * 0.07}px)
            rotateX(${mousePosition.y * 0.15}deg)
            rotateY(${mousePosition.x * 0.15}deg)
          `,
        }}
      >
        <div 
          className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] border-l-transparent border-r-transparent border-b-purple-500/40"
          style={{ animation: 'pulse-glow 3s ease-in-out infinite' }}
        />
      </div>

      {/* Particle Grid Enhanced */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `
                translate(${mousePosition.x * (0.01 + i * 0.0005)}px, ${mousePosition.y * (0.01 + i * 0.0005)}px)
                translateY(${scrollY * (0.02 + i * 0.001)}px)
              `,
              animation: `pulse-glow ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* Orbiting Elements */}
      <div 
        className="absolute w-64 h-64"
        style={{
          top: '50%',
          left: '50%',
          transform: `
            translate(-50%, -50%)
            translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)
            translateY(${scrollY * 0.03}px)
          `,
          animation: 'mega-rotate-reverse 60s linear infinite',
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-primary to-purple-500 rounded-full"
            style={{
              top: '50%',
              left: '50%',
              transform: `
                translate(-50%, -50%)
                rotate(${i * 45}deg)
                translateY(-120px)
              `,
              boxShadow: '0 0 15px currentColor',
              animation: `pulse-glow ${1.5 + i * 0.2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Layered Background Gradients */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #0ED2F7 0%, transparent 50%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #A855F7 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
};
