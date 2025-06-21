import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronDown,
  Play,
  ArrowRight,
  Code,
  Shield,
  BarChart3,
  Database,
} from "lucide-react";
import { Enhanced3DParticleSystem } from "@/components/3d/Enhanced3DParticleSystem";
import { Immersive3DTechEnvironment } from "@/components/3d/Immersive3DTechEnvironment";
import { InteractiveCodeMatrix } from "@/components/3d/InteractiveCodeMatrix";
import { GlassCard, GlassButton } from "@/components/ui/glassmorphism";
import {
  ScrollReveal,
  ParallaxContainer,
} from "@/components/ui/scroll-animations";
import {
  KineticTypography,
  AnimatedHeading,
} from "@/components/ui/kinetic-typography";

export const EnhancedHeroSection = () => {
  const [currentProgram, setCurrentProgram] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const programs = [
    {
      icon: Shield,
      name: "Cybersecurity",
      description: "Protect digital frontiers",
      color: "#0ED2F7",
      participants: "2,500+",
    },
    {
      icon: Code,
      name: "Full Stack Development",
      description: "Build the future web",
      color: "#A855F7",
      participants: "3,200+",
    },
    {
      icon: BarChart3,
      name: "Data Science",
      description: "Unlock data insights",
      color: "#A3E635",
      participants: "1,800+",
    },
    {
      icon: Database,
      name: "Data Analysis",
      description: "Transform raw data",
      color: "#FB7185",
      participants: "1,500+",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProgram((prev) => (prev + 1) % programs.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-black via-slate-900/50 to-black pt-16">
      {/* Immersive Background Layers - Optimized for Performance */}
      <div className="absolute inset-0">
        <Enhanced3DParticleSystem
          particleCount={80}
          interactive={true}
          colorScheme="rainbow"
          className="opacity-40"
        />
      </div>

      <div className="absolute inset-0 opacity-25">
        <Immersive3DTechEnvironment intensity="medium" theme="development" />
      </div>

      <div className="absolute inset-0 opacity-15">
        <InteractiveCodeMatrix
          density="medium"
          language="mixed"
          interactive={false}
          color="cyber"
        />
      </div>

      {/* Atmospheric Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 210, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 210, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
          }}
        />
      </div>

      {/* Dynamic Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${programs[currentProgram].color}40, transparent)`,
            top: "20%",
            right: "10%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-15 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${programs[(currentProgram + 1) % programs.length].color}40, transparent)`,
            bottom: "20%",
            left: "10%",
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            animationDelay: "2s",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <ScrollReveal direction="left" delay={200}>
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
                    <span className="text-primary font-semibold text-sm">
                      🚀 Next-Gen Tech Education
                    </span>
                  </div>

                  <AnimatedHeading
                    level={1}
                    className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
                    animation="slide-up"
                  >
                    <div className="space-y-2">
                      <div className="hero-title">
                        <KineticTypography
                          text="Shape Your"
                          className="text-white"
                          animation="wave"
                          trigger="load"
                          speed="normal"
                        />
                      </div>
                      <div className="hero-title">
                        <KineticTypography
                          text="Tech Future"
                          className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent"
                          animation="morph"
                          trigger="load"
                          speed="slow"
                          stagger={true}
                        />
                      </div>
                    </div>
                  </AnimatedHeading>

                  <div className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed">
                    <p className="break-words">
                      Immersive internships in{" "}
                      <span className="text-primary font-semibold">
                        Cybersecurity
                      </span>
                      ,{" "}
                      <span className="text-purple-400 font-semibold">
                        Full Stack Development
                      </span>
                      ,{" "}
                      <span className="text-green-400 font-semibold">
                        Data Science
                      </span>
                      , and{" "}
                      <span className="text-pink-400 font-semibold">
                        Data Analysis
                      </span>
                      . Transform your potential into expertise.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/programs">
                    <GlassButton
                      variant="neon"
                      size="lg"
                      className="group relative overflow-hidden"
                    >
                      <span className="flex items-center space-x-2">
                        <Play className="w-5 h-5" />
                        <span>Start Your Journey</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </span>
                    </GlassButton>
                  </Link>

                  <Link to="/verify-certificate">
                    <GlassButton variant="ghost" size="lg">
                      <span className="flex items-center space-x-2">
                        <Shield className="w-5 h-5" />
                        <span>Verify Certificate</span>
                      </span>
                    </GlassButton>
                  </Link>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={800}>
                <div className="flex items-center space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary">12K+</div>
                    <div className="text-sm text-gray-400">
                      Students Trained
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">
                      95%
                    </div>
                    <div className="text-sm text-gray-400">Job Placement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">
                      250+
                    </div>
                    <div className="text-sm text-gray-400">
                      Partner Companies
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Content - Interactive Program Showcase */}
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={400}>
                <GlassCard variant="crystal" className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-white">
                      Live Programs
                    </h3>
                    <div className="flex space-x-1">
                      {programs.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentProgram
                              ? "bg-primary scale-125"
                              : "bg-white/30"
                          }`}
                          onClick={() => setCurrentProgram(index)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {programs.map((program, index) => {
                      const Icon = program.icon;
                      const isActive = index === currentProgram;

                      return (
                        <div
                          key={index}
                          className={`p-4 rounded-xl transition-all duration-500 cursor-pointer ${
                            isActive
                              ? "bg-white/10 border border-white/20 scale-105"
                              : "bg-white/5 border border-white/10 hover:bg-white/8"
                          }`}
                          onClick={() => setCurrentProgram(index)}
                        >
                          <div className="flex items-center space-x-4">
                            <div
                              className={`p-3 rounded-lg transition-all duration-300 ${
                                isActive ? "scale-110" : ""
                              }`}
                              style={{
                                background: `${program.color}20`,
                                border: `1px solid ${program.color}40`,
                                boxShadow: isActive
                                  ? `0 0 20px ${program.color}40`
                                  : "none",
                              }}
                            >
                              <Icon
                                className="w-6 h-6"
                                style={{ color: program.color }}
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <h4 className="font-semibold text-white">
                                  {program.name}
                                </h4>
                                <span className="text-sm text-gray-400">
                                  {program.participants}
                                </span>
                              </div>
                              <p className="text-sm text-gray-300">
                                {program.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Next cohort starts:</span>
                      <span className="text-primary font-semibold">
                        March 15, 2024
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={600}>
                <div className="grid grid-cols-2 gap-4">
                  <GlassCard variant="neon" className="p-6 text-center">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-gray-300">Mentor Support</div>
                  </GlassCard>
                  <GlassCard variant="frosted" className="p-6 text-center">
                    <div className="text-2xl font-bold text-purple-400">
                      Live
                    </div>
                    <div className="text-sm text-gray-300">Project Work</div>
                  </GlassCard>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ParallaxContainer
        speed={0.3}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-sm text-gray-400">Discover More</span>
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
          <ChevronDown className="w-4 h-4 text-primary/70" />
        </div>
      </ParallaxContainer>

      {/* Ambient Sound Wave Visualization */}
      <div className="absolute bottom-0 left-0 right-0 h-32 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 100">
          {Array.from({ length: 50 }).map((_, i) => (
            <rect
              key={i}
              x={i * 20}
              y={50}
              width="3"
              height="20"
              fill={programs[currentProgram].color}
              style={{
                animation: `soundWave ${1 + Math.random()}s ease-in-out infinite`,
                animationDelay: `${i * 0.02}s`,
              }}
            />
          ))}
        </svg>
      </div>

      <style jsx>{`
        @keyframes soundWave {
          0%,
          100% {
            height: 20px;
            y: 40;
          }
          50% {
            height: ${20 + Math.random() * 40}px;
            y: ${40 - Math.random() * 20};
          }
        }
      `}</style>
    </section>
  );
};
