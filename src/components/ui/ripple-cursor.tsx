import { useEffect, useState, useRef } from "react";

interface RippleData {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export const RippleCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<RippleData[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleClick = (e: MouseEvent) => {
      const newRipple: RippleData = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setRipples((prev) => [...prev, newRipple]);

      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples((prev) =>
          prev.filter((ripple) => ripple.id !== newRipple.id),
        );
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      {/* Cursor Follower */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-200 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Main cursor dot */}
        <div className="w-4 h-4 bg-primary/60 rounded-full animate-pulse" />

        {/* Outer ring */}
        <div
          className="absolute inset-0 w-8 h-8 border border-primary/30 rounded-full animate-ping"
          style={{ transform: "translate(-25%, -25%)" }}
        />
      </div>

      {/* Click Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="w-4 h-4 border-2 border-primary/50 rounded-full animate-ripple-expand" />
          <div className="absolute inset-0 w-4 h-4 bg-primary/20 rounded-full animate-ripple-fade" />
        </div>
      ))}
    </>
  );
};

// Add these styles to your CSS
export const rippleCursorStyles = `
  @keyframes ripple-expand {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(20);
      opacity: 0;
    }
  }

  @keyframes ripple-fade {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    100% {
      transform: scale(15);
      opacity: 0;
    }
  }

  .animate-ripple-expand {
    animation: ripple-expand 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  .animate-ripple-fade {
    animation: ripple-fade 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Hide default cursor on hover areas */
  body {
    cursor: none;
  }

  /* Show default cursor on interactive elements */
  button, a, input, textarea, select, [role="button"], [tabindex="0"] {
    cursor: pointer !important;
  }

  /* Special cursor for text selection areas */
  p, span, div, h1, h2, h3, h4, h5, h6 {
    cursor: none;
  }
`;
