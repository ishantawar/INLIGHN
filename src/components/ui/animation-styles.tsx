import { useEffect } from "react";

// This component ensures all animation styles are loaded
export const AnimationStylesProvider = () => {
  useEffect(() => {
    // Add any additional animation styles to the document
    const style = document.createElement("style");
    style.textContent = `
      /* Enhanced 3D Transform Utilities */
      .transform-3d {
        transform-style: preserve-3d;
      }
      
      .perspective-1000 {
        perspective: 1000px;
      }
      
      .perspective-2000 {
        perspective: 2000px;
      }

      /* Professional Gradient Utilities */
      .professional-gradient {
        background: linear-gradient(135deg, #1e40af 0%, #0891b2 50%, #065f46 100%);
      }

      .corporate-gradient {
        background: linear-gradient(135deg, #374151 0%, #4f46e5 50%, #1f2937 100%);
      }

      /* Enhanced Glass Effects */
      .glass-pro {
        background: rgba(255, 255, 255, 0.03);
        backdrop-filter: blur(20px) saturate(200%);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 16px;
      }

      .glass-pro:hover {
        background: rgba(255, 255, 255, 0.06);
        border-color: rgba(14, 210, 247, 0.3);
        box-shadow: 0 20px 40px rgba(14, 210, 247, 0.1);
      }

      /* Professional Text Effects */
      .text-corporate {
        background: linear-gradient(135deg, #1e40af, #0891b2, #065f46);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      /* Enhanced Focus States */
      .focus-ring-pro:focus-visible {
        outline: 2px solid #0ed2f7;
        outline-offset: 2px;
        box-shadow: 0 0 0 4px rgba(14, 210, 247, 0.1);
      }

      /* Custom Scrollbar */
      .custom-scrollbar::-webkit-scrollbar {
        width: 6px;
      }

      .custom-scrollbar::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 3px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb {
        background: linear-gradient(135deg, #0ed2f7, #00b4d8);
        border-radius: 3px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(135deg, #00b4d8, #0ed2f7);
      }

      /* Performance Optimized Animations */
      .will-change-transform {
        will-change: transform;
      }

      .will-change-opacity {
        will-change: opacity;
      }

      .will-change-auto {
        will-change: auto;
      }

      /* Enhanced Interaction Feedback */
      .click-feedback {
        transition: all 0.1s ease;
      }

      .click-feedback:active {
        transform: scale(0.98);
      }

      /* Professional Loading States */
      .loading-shimmer {
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.0) 0%,
          rgba(255, 255, 255, 0.05) 20%,
          rgba(14, 210, 247, 0.1) 50%,
          rgba(255, 255, 255, 0.05) 80%,
          rgba(255, 255, 255, 0.0) 100%
        );
        background-size: 200% 100%;
        animation: shimmer 2.5s infinite linear;
      }

      /* Accessibility Enhancements */
      @media (prefers-reduced-motion: reduce) {
        *, 
        *::before, 
        *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }

      /* High Contrast Mode Support */
      @media (prefers-contrast: high) {
        .glass-effect,
        .glass-pro {
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid currentColor;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return null;
};

// Export utility functions for dynamic animations
export const triggerRippleEffect = (
  element: HTMLElement,
  x: number,
  y: number,
) => {
  const ripple = document.createElement("div");
  ripple.style.position = "absolute";
  ripple.style.left = `${x - 10}px`;
  ripple.style.top = `${y - 10}px`;
  ripple.style.width = "20px";
  ripple.style.height = "20px";
  ripple.style.borderRadius = "50%";
  ripple.style.background = "rgba(14, 210, 247, 0.6)";
  ripple.style.pointerEvents = "none";
  ripple.style.animation = "liquid-ripple 0.6s ease-out";

  element.appendChild(ripple);

  setTimeout(() => {
    element.removeChild(ripple);
  }, 600);
};

export const addLiquidHover = (element: HTMLElement) => {
  const handleMouseEnter = () => {
    element.style.transform = "scale(1.02)";
    element.style.filter = "brightness(1.1)";
  };

  const handleMouseLeave = () => {
    element.style.transform = "scale(1)";
    element.style.filter = "brightness(1)";
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};
