import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "frosted" | "crystal" | "neon";
  intensity?: "light" | "medium" | "heavy";
  interactive?: boolean;
}

export const GlassCard = ({
  children,
  className,
  variant = "default",
  intensity = "medium",
  interactive = true,
}: GlassCardProps) => {
  const baseStyles = "relative overflow-hidden transition-all duration-300";

  const variantStyles = {
    default: "bg-white/5 border border-white/10",
    frosted: "bg-white/8 border border-white/20",
    crystal:
      "bg-gradient-to-br from-white/10 to-white/5 border border-white/15",
    neon: "bg-gradient-to-br from-primary/10 to-purple-500/5 border border-primary/20",
  };

  const intensityStyles = {
    light: "backdrop-blur-sm",
    medium: "backdrop-blur-md",
    heavy: "backdrop-blur-lg",
  };

  const interactiveStyles = interactive
    ? "hover:bg-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
    : "";

  return (
    <div
      className={cn(
        baseStyles,
        variantStyles[variant],
        intensityStyles[intensity],
        interactiveStyles,
        "rounded-xl",
        className,
      )}
    >
      {/* Glass reflection effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 rounded-xl" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface GlassButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost" | "neon";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
}

export const GlassButton = ({
  children,
  className,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}: GlassButtonProps) => {
  const baseStyles = `
    relative overflow-hidden transition-all duration-300 
    backdrop-blur-md rounded-xl font-semibold
    disabled:opacity-50 disabled:cursor-not-allowed
    transform hover:scale-105 active:scale-95
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-primary/20 to-blue-500/20 
      border border-primary/30 text-primary 
      hover:from-primary/30 hover:to-blue-500/30 
      hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20
    `,
    secondary: `
      bg-white/5 border border-white/20 text-white
      hover:bg-white/10 hover:border-white/40
      hover:shadow-2xl hover:shadow-white/10
    `,
    ghost: `
      bg-transparent border border-primary/30 text-primary
      hover:bg-primary/10 hover:border-primary/50
    `,
    neon: `
      bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20
      border border-primary/30 text-white
      hover:from-primary/30 hover:via-purple-500/30 hover:to-pink-500/30
      hover:shadow-2xl hover:shadow-primary/30
    `,
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {/* Glass reflection */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {/* Shine effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />

      {/* Content */}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

interface GlassNavbarProps {
  children: React.ReactNode;
  className?: string;
  fixed?: boolean;
}

export const GlassNavbar = ({
  children,
  className,
  fixed = true,
}: GlassNavbarProps) => {
  return (
    <nav
      className={cn(
        "backdrop-blur-lg bg-black/20 border-b border-white/10",
        "transition-all duration-300",
        fixed && "fixed top-0 left-0 right-0 z-50",
        className,
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-purple-500/5" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </nav>
  );
};

interface GlassModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export const GlassModal = ({
  children,
  isOpen,
  onClose,
  className,
}: GlassModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "relative max-w-lg w-full mx-auto",
          "bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl",
          "shadow-2xl shadow-primary/10",
          "animate-fade-in",
          className,
        )}
      >
        {/* Glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

interface GlassInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const GlassInput = ({
  label,
  error,
  icon,
  className,
  ...props
}: GlassInputProps) => {
  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-white/80">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">
            {icon}
          </div>
        )}

        <input
          className={cn(
            "w-full bg-white/5 backdrop-blur-md border border-white/20 rounded-xl",
            "px-4 py-3 text-white placeholder-white/60",
            "focus:bg-white/10 focus:border-primary/50 focus:outline-none",
            "transition-all duration-300",
            icon && "pl-12",
            error && "border-red-400/50",
            className,
          )}
          {...props}
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}
    </div>
  );
};

interface GlassTooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "top" | "bottom" | "left" | "right";
}

export const GlassTooltip = ({
  children,
  content,
  position = "top",
}: GlassTooltipProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const positionStyles = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div
          className={cn(
            "absolute z-50 px-3 py-2 text-sm text-white",
            "bg-black/80 backdrop-blur-md border border-white/20 rounded-lg",
            "whitespace-nowrap animate-fade-in",
            positionStyles[position],
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
