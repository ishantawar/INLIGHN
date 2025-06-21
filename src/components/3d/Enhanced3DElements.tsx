
import { useEffect, useState } from 'react';

export const Enhanced3DElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Morphing Blob */}
      <div 
        className="absolute w-32 h-32 neon-gradient opacity-20 animate-morph"
        style={{
          top: '15%',
          left: '5%',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          filter: 'blur(20px)',
        }}
      />
      
      {/* 3D Rotating Cubes */}
      <div 
        className="absolute w-20 h-20 electric-gradient rounded-lg opacity-30 animate-rotate-3d"
        style={{
          top: '25%',
          right: '10%',
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          transformStyle: 'preserve-3d',
        }}
      />
      
      <div 
        className="absolute w-16 h-16 bg-neon-purple rounded-full opacity-40 animate-float-reverse"
        style={{
          top: '60%',
          left: '15%',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          boxShadow: '0 0 30px rgba(147, 51, 234, 0.6)',
        }}
      />

      {/* Floating Geometric Shapes */}
      <div 
        className="absolute w-24 h-24 border-2 border-neon-cyan/40 rotate-45 animate-pulse-glow"
        style={{
          top: '70%',
          right: '20%',
          transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
        }}
      />
      
      <div 
        className="absolute w-28 h-28 border border-neon-pink/30 rounded-full animate-float"
        style={{
          top: '40%',
          left: '80%',
          transform: `translate(${mousePosition.x * 0.12}px, ${mousePosition.y * 0.12}px)`,
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
        }}
      />

      {/* Enhanced Particle Grid */}
      <div className="absolute inset-0 opacity-15">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-neon-cyan rounded-full animate-pulse-glow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* Floating Triangles */}
      <div 
        className="absolute w-0 h-0 border-l-[15px] border-r-[15px] border-b-[26px] border-l-transparent border-r-transparent border-b-neon-green/40 animate-float"
        style={{
          top: '30%',
          left: '25%',
          transform: `translate(${mousePosition.x * 0.18}px, ${mousePosition.y * 0.18}px)`,
          animationDelay: '1s',
        }}
      />
      
      <div 
        className="absolute w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-neon-orange/50 animate-float-reverse"
        style={{
          top: '50%',
          right: '30%',
          transform: `translate(${mousePosition.x * 0.22}px, ${mousePosition.y * 0.22}px)`,
          animationDelay: '3s',
        }}
      />
    </div>
  );
};
