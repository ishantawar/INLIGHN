
import { useEffect, useState } from 'react';

export const FloatingElements = () => {
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
      {/* Floating Cubes */}
      <div 
        className="absolute w-20 h-20 bg-gradient-to-br from-tech-purple to-tech-cyan rounded-lg opacity-20 animate-float"
        style={{
          top: '20%',
          left: '10%',
          transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          animationDelay: '0s',
        }}
      />
      
      <div 
        className="absolute w-16 h-16 bg-gradient-to-br from-tech-cyan to-tech-purple rounded-lg opacity-30 animate-float"
        style={{
          top: '60%',
          right: '15%',
          transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
          animationDelay: '2s',
        }}
      />
      
      <div 
        className="absolute w-12 h-12 bg-gradient-to-br from-tech-purple to-tech-cyan rounded-full opacity-25 animate-float"
        style={{
          top: '40%',
          left: '80%',
          transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
          animationDelay: '4s',
        }}
      />

      {/* Geometric Shapes */}
      <div 
        className="absolute w-24 h-24 border-2 border-tech-cyan/30 rotate-45 animate-rotate-slow"
        style={{
          top: '70%',
          left: '5%',
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`,
        }}
      />
      
      <div 
        className="absolute w-32 h-32 border border-tech-purple/20 rounded-full animate-pulse-slow"
        style={{
          top: '10%',
          right: '20%',
          transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
        }}
      />

      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-tech-cyan rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
