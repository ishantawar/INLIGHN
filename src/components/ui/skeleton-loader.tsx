import { cn } from "@/lib/utils";

interface SkeletonLoaderProps {
  className?: string;
  variant?: "shimmer" | "wave" | "pulse" | "fluid";
  children?: React.ReactNode;
}

export const SkeletonLoader = ({
  className,
  variant = "shimmer",
  children,
  ...props
}: SkeletonLoaderProps) => {
  const variants = {
    shimmer: "skeleton",
    wave: "skeleton-wave",
    pulse: "skeleton-pulse",
    fluid: "liquid-glass animate-fluid-pulse",
  };

  return (
    <div
      className={cn(variants[variant], "rounded-md animate-pulse", className)}
      {...props}
    >
      {children}
    </div>
  );
};

interface SkeletonCardProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeletonHeight?: string;
  variant?: "shimmer" | "wave" | "pulse";
}

export const SkeletonCard = ({
  isLoading,
  children,
  skeletonHeight = "h-32",
  variant = "shimmer",
}: SkeletonCardProps) => {
  if (isLoading) {
    return (
      <div className="glass-effect p-6 rounded-lg border glow-teal">
        <div className="space-y-4">
          <SkeletonLoader
            className={`w-16 h-16 rounded-full mx-auto`}
            variant="pulse"
          />
          <SkeletonLoader className="h-6 w-3/4 mx-auto" variant="wave" />
          <SkeletonLoader
            className={`h-4 w-full ${skeletonHeight}`}
            variant={variant}
          />
          <SkeletonLoader className="h-4 w-2/3 mx-auto" variant="shimmer" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

interface SkeletonTextProps {
  lines?: number;
  className?: string;
  variant?: "shimmer" | "wave" | "pulse";
}

export const SkeletonText = ({
  lines = 3,
  className = "",
  variant = "shimmer",
}: SkeletonTextProps) => {
  return (
    <div className={cn("space-y-2", className)}>
      {Array.from({ length: lines }).map((_, index) => (
        <SkeletonLoader
          key={index}
          className={`h-4 ${index === lines - 1 ? "w-2/3" : "w-full"}`}
          variant={variant}
        />
      ))}
    </div>
  );
};

interface SkeletonImageProps {
  className?: string;
  variant?: "shimmer" | "wave" | "pulse";
}

export const SkeletonImage = ({
  className = "w-full h-48",
  variant = "wave",
}: SkeletonImageProps) => {
  return (
    <SkeletonLoader className={cn("rounded-lg", className)} variant={variant} />
  );
};
