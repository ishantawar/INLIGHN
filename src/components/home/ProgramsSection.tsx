import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { SkeletonCard } from "@/components/ui/skeleton-loader";
import {
  KineticTypography,
  AnimatedHeading,
  CounterAnimation,
} from "@/components/ui/kinetic-typography";
import {
  LiquidButton,
  FluidBackground,
} from "@/components/ui/liquid-animations";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const programs = [
  {
    title: "Cybersecurity",
    description: "Learn ethical hacking, network security, and threat analysis",
    icon: "🔒",
    duration: "12 weeks",
    level: "Beginner to Advanced",
  },
  {
    title: "Full Stack Development",
    description: "Master frontend and backend technologies",
    icon: "💻",
    duration: "16 weeks",
    level: "Beginner to Advanced",
  },
  {
    title: "Data Science",
    description: "Machine learning, AI, and predictive analytics",
    icon: "📊",
    duration: "14 weeks",
    level: "Intermediate to Advanced",
  },
  {
    title: "Data Analysis",
    description: "Business intelligence and data visualization",
    icon: "📈",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
  },
];

export const ProgramsSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <FluidBackground
      intensity="low"
      colorScheme="monochrome"
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedHeading
            level={2}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            animation="slide-up"
          >
            <KineticTypography
              text="Our "
              animation="wave"
              trigger="scroll"
              speed="normal"
            />
            <KineticTypography
              text="Programs"
              className="text-primary-brand"
              animation="morph"
              trigger="scroll"
              speed="slow"
            />
          </AnimatedHeading>
          <ProgressiveBlur isBlurred={false} transitionDuration={600}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <KineticTypography
                text="Choose from our comprehensive internship programs designed to prepare you for the tech industry"
                animation="stretch"
                trigger="scroll"
                speed="fast"
                stagger={false}
              />
            </p>
          </ProgressiveBlur>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <SkeletonCard
              key={index}
              isLoading={isLoading}
              skeletonHeight="h-40"
              variant={
                index % 3 === 0 ? "shimmer" : index % 3 === 1 ? "wave" : "pulse"
              }
            >
              <ProgressiveBlur
                isBlurred={false}
                transitionDuration={300 + index * 100}
                className="h-full"
              >
                <Card className="glass-effect hover:scale-105 transition-all duration-500 group cursor-pointer hover:glow-teal border-border/50 h-full relative overflow-hidden">
                  {/* Liquid Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-cyan-500/5 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquid-morph" />

                  <CardContent className="p-6 text-center relative z-10">
                    <div className="text-4xl mb-4 group-hover:animate-kinetic-bounce transition-all duration-300">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      <KineticTypography
                        text={program.title}
                        animation="rotate"
                        trigger="hover"
                        speed="fast"
                      />
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {program.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="text-primary font-semibold">
                        Duration:{" "}
                        <CounterAnimation
                          value={parseInt(program.duration)}
                          suffix=" weeks"
                        />
                      </div>
                      <div className="text-muted-foreground">
                        {program.level}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ProgressiveBlur>
            </SkeletonCard>
          ))}
        </div>

        {/* Call to Action with Liquid Button */}
        <div className="text-center mt-12">
          <LiquidButton
            variant="primary"
            liquidIntensity="intense"
            className="px-8 py-3 text-lg font-semibold"
          >
            <KineticTypography
              text="View All Programs"
              animation="glitch"
              trigger="hover"
              speed="fast"
            />
          </LiquidButton>
        </div>
      </div>
    </FluidBackground>
  );
};
