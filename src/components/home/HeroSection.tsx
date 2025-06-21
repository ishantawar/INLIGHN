import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  FluidBackground,
  FluidButton,
  WaveTransition,
  FluidLoader,
} from "@/components/ui/fluid-animations";
import {
  LiquidButton,
  FluidBackground as NewFluidBg,
} from "@/components/ui/liquid-animations";
import {
  KineticTypography,
  AnimatedHeading,
} from "@/components/ui/kinetic-typography";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Professional3DAnimation } from "@/components/3d/Professional3DAnimation";
import { SkeletonLoader, SkeletonText } from "@/components/ui/skeleton-loader";
import { LogoLoader } from "@/components/ui/professional-logo";

export const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <NewFluidBg
      intensity="high"
      colorScheme="cool"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Professional 3D Animation Background */}
      <Professional3DAnimation />

      {/* Enhanced Morphing Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/10 via-cyan-500/15 to-teal-500/10 animate-liquid-morph backdrop-blur-3xl" />
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-slate-600/10 via-slate-500/15 to-slate-400/10 animate-liquid-morph backdrop-blur-2xl"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/2 left-3/4 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-600/10 via-teal-500/15 to-cyan-500/10 animate-liquid-morph backdrop-blur-xl"
          style={{ animationDelay: "6s" }}
        />
      </div>

      {/* Professional Flowing Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-liquid-flow"
            style={{
              top: `${15 + i * 10}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <WaveTransition isVisible={true}>
          <div className="space-y-8">
            <AnimatedHeading
              level={1}
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              animation="slide-up"
            >
              <KineticTypography
                text="Future-Ready"
                className="text-foreground drop-shadow-2xl text-shadow block"
                animation="wave"
                trigger="scroll"
                speed="normal"
              />
              <br />
              <KineticTypography
                text="Internships in Tech"
                className="text-primary-brand animate-gradient-shift bg-gradient-to-r from-primary via-blue-500 to-purple-500 bg-clip-text text-transparent block"
                animation="morph"
                trigger="scroll"
                speed="slow"
                stagger={true}
              />
            </AnimatedHeading>

            <ProgressiveBlur isBlurred={false} transitionDuration={800}>
              <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                <KineticTypography
                  text="Immersive internship programs in Cybersecurity, Full Stack Development, Data Science, and Data Analysis. Launch your tech career with hands-on experience."
                  animation="stretch"
                  trigger="scroll"
                  speed="fast"
                  stagger={false}
                />
              </div>
            </ProgressiveBlur>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/programs">
                <LiquidButton
                  variant="primary"
                  liquidIntensity="medium"
                  className="px-8 py-3 text-lg font-semibold"
                >
                  <KineticTypography
                    text="Explore Programs"
                    animation="bounce"
                    trigger="hover"
                    speed="fast"
                  />
                </LiquidButton>
              </Link>
              <Link to="/verify-certificate">
                <LiquidButton
                  variant="ghost"
                  liquidIntensity="subtle"
                  className="px-8 py-3 text-lg font-semibold"
                >
                  <KineticTypography
                    text="Verify Certificate"
                    animation="rotate"
                    trigger="hover"
                    speed="normal"
                  />
                </LiquidButton>
              </Link>
            </div>
          </div>
        </WaveTransition>

        {/* Enhanced Liquid Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden liquid-glass animate-focus-pulse">
            <div className="w-2 h-6 bg-gradient-to-b from-primary via-blue-500 to-purple-500 rounded-full mt-1 animate-liquid-drop" />
          </div>
        </div>
      </div>
    </NewFluidBg>
  );
};
