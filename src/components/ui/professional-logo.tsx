import { cn } from "@/lib/utils";

interface ProfessionalLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
  variant?: "default" | "gradient" | "glow";
}

export const ProfessionalLogo = ({
  size = "md",
  className,
  showText = true,
  variant = "default",
}: ProfessionalLogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-12 h-12", text: "text-2xl" },
  };

  const variants = {
    default: "bg-gradient-to-br from-primary via-blue-500 to-purple-500",
    gradient:
      "bg-gradient-to-br from-primary via-blue-500 to-purple-500 animate-gradient-shift",
    glow: "bg-gradient-to-br from-primary via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(14,210,247,0.5)]",
  };

  return (
    <div className={cn("flex items-center space-x-3", className)}>
      {/* Logo Icon */}
      <div
        className={cn(
          "relative rounded-xl flex items-center justify-center overflow-hidden",
          sizes[size].icon,
          variants[variant],
        )}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="8"
                height="8"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,4 L8,4 M4,0 L4,8"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.6"
                />
                <circle cx="4" cy="4" r="1" fill="currentColor" opacity="0.8" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Main Icon */}
        <div className="relative z-10 text-white font-bold text-sm">
          <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>

        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-700" />
      </div>

      {/* Company Name */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={cn(
              "font-bold text-foreground leading-none",
              sizes[size].text,
            )}
          >
            Inlighn Tech
          </span>
          <span className="text-xs text-muted-foreground font-medium">
            Future Ready Solutions
          </span>
        </div>
      )}
    </div>
  );
};

interface LogoLoaderProps {
  className?: string;
}

export const LogoLoader = ({ className }: LogoLoaderProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <ProfessionalLogo size="lg" showText={false} variant="glow" />

        {/* Rotating Ring */}
        <div className="absolute inset-0 border-2 border-transparent border-t-primary rounded-xl animate-spin" />

        {/* Pulsing Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-blue-500/20 to-purple-500/20 rounded-xl animate-pulse blur-sm" />

        {/* Orbiting Dots */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "3s" }}
        >
          <div className="absolute w-2 h-2 bg-primary rounded-full top-0 left-1/2 transform -translate-x-1/2 -translate-y-1" />
          <div className="absolute w-2 h-2 bg-blue-500 rounded-full top-1/2 right-0 transform translate-x-1 -translate-y-1/2" />
          <div className="absolute w-2 h-2 bg-purple-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1" />
          <div className="absolute w-2 h-2 bg-green-400 rounded-full top-1/2 left-0 transform -translate-x-1 -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
};
