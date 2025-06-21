
import { useEffect, useState, useRef } from 'react';

export const InteractiveGlobe = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const globeRef = useRef<HTMLDivElement>(null);
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

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

    const handleClick = (e: MouseEvent) => {
      const rect = globeRef.current?.getBoundingClientRect();
      if (rect) {
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        const newRipple = {
          id: Date.now(),
          x,
          y,
          delay: 0
        };
        
        setRipples(prev => [...prev, newRipple]);
        
        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 2000);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClick);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Main Globe Container */}
      <div 
        ref={globeRef}
        className="absolute top-1/2 left-1/2 w-96 h-96 pointer-events-auto"
        style={{
          transform: `
            translate(-50%, -50%)
            translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)
            translateY(${scrollY * 0.1}px)
          `,
        }}
      >
        {/* Globe Base */}
        <div 
          className="globe-container w-full h-full relative"
          style={{
            transform: `
              rotateX(${mousePosition.y * 0.1}deg)
              rotateY(${mousePosition.x * 0.1}deg)
            `,
          }}
        >
          {/* Globe Sphere */}
          <div className="globe-sphere absolute inset-0 rounded-full border-2 border-primary/30 bg-gradient-to-br from-primary/10 via-transparent to-purple-500/10 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-primary/5 to-transparent animate-pulse-glow" />
          </div>

          {/* Network Grid Lines */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            {/* Latitude Lines */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={`lat-${i}`}
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent"
                style={{
                  top: `${(i + 1) * 12}%`,
                  animation: `pulse-glow ${3 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
            
            {/* Longitude Lines */}
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={`lng-${i}`}
                className="absolute top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-primary/40 to-transparent"
                style={{
                  left: `${(i + 1) * 8}%`,
                  transform: `rotate(${i * 15}deg)`,
                  transformOrigin: 'center center',
                  animation: `pulse-glow ${2.5 + i * 0.1}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>

          {/* Connection Points */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={`point-${i}`}
              className="absolute w-2 h-2 bg-primary rounded-full shadow-lg"
              style={{
                top: `${20 + Math.random() * 60}%`,
                left: `${20 + Math.random() * 60}%`,
                animation: `pulse-glow ${1.5 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`,
                boxShadow: '0 0 15px currentColor',
              }}
            />
          ))}

          {/* Network Connection Lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 384 384">
            {Array.from({ length: 15 }).map((_, i) => {
              const x1 = 50 + Math.random() * 284;
              const y1 = 50 + Math.random() * 284;
              const x2 = 50 + Math.random() * 284;
              const y2 = 50 + Math.random() * 284;
              
              return (
                <line
                  key={`line-${i}`}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#networkGradient)"
                  strokeWidth="1"
                  opacity="0.6"
                  className="animate-pulse-glow"
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                />
              );
            })}
            <defs>
              <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ED2F7" stopOpacity="0" />
                <stop offset="50%" stopColor="#0ED2F7" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#A855F7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ripple Effects */}
          {ripples.map((ripple) => (
            <div
              key={ripple.id}
              className="absolute pointer-events-none"
              style={{
                left: `${ripple.x}%`,
                top: `${ripple.y}%`,
                transform: 'translate(-50%, -50%)',
              }}
            >
              <div className="ripple-effect w-4 h-4 border-2 border-primary rounded-full animate-ripple" />
              <div className="ripple-effect w-4 h-4 border-2 border-purple-500 rounded-full animate-ripple animation-delay-200" />
              <div className="ripple-effect w-4 h-4 border-2 border-lime-400 rounded-full animate-ripple animation-delay-400" />
            </div>
          ))}
        </div>

        {/* Orbiting Satellites */}
        <div className="absolute inset-0 animate-mega-rotate">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={`satellite-${i}`}
              className="absolute w-3 h-3 bg-gradient-to-r from-primary to-purple-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                transform: `
                  translate(-50%, -50%)
                  rotate(${i * 60}deg)
                  translateY(-220px)
                `,
                boxShadow: '0 0 10px currentColor',
                animation: `pulse-glow ${1 + i * 0.2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Particle Field */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: `
                translate(${mousePosition.x * (0.005 + i * 0.0002)}px, ${mousePosition.y * (0.005 + i * 0.0002)}px)
                translateY(${scrollY * (0.01 + i * 0.0005)}px)
              `,
              animation: `pulse-glow ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Ambient Background Glow */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `
            radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #0ED2F7 0%, transparent 60%),
            radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, #A855F7 0%, transparent 60%)
          `,
        }}
      />
    </div>
  );
};
