import {
  KineticTypography,
  AnimatedHeading,
} from "@/components/ui/kinetic-typography";
import {
  LiquidButton,
  FluidBackground,
} from "@/components/ui/liquid-animations";
import {
  ProgressiveBlur,
  HoverBlurEffect,
} from "@/components/ui/progressive-blur";
import { Professional3DAnimation } from "@/components/3d/Professional3DAnimation";

const features = [
  {
    title: "Industry-Ready Projects",
    description: "Work on real-world projects used by actual companies",
    icon: "🚀",
  },
  {
    title: "Expert Mentorship",
    description: "Learn from industry professionals with years of experience",
    icon: "👨‍🏫",
  },
  {
    title: "Career Support",
    description: "Job placement assistance and interview preparation",
    icon: "💼",
  },
  {
    title: "Flexible Learning",
    description: "Online and hybrid options to fit your schedule",
    icon: "⏰",
  },
  {
    title: "Industry Connections",
    description: "Network with professionals and potential employers",
    icon: "🤝",
  },
  {
    title: "Certified Skills",
    description: "Earn industry-recognized certificates",
    icon: "🏆",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <FluidBackground
      intensity="medium"
      colorScheme="cool"
      className="py-20 px-4 sm:px-6 lg:px-8 relative"
    >
      {/* Subtle 3D Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <Professional3DAnimation />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <AnimatedHeading
            level={2}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
            animation="slide-up"
          >
            <KineticTypography
              text="Why Choose "
              animation="wave"
              trigger="scroll"
              speed="normal"
            />
            <KineticTypography
              text="Inlighn Tech"
              className="text-primary-brand"
              animation="morph"
              trigger="scroll"
              speed="slow"
            />
          </AnimatedHeading>
          <ProgressiveBlur isBlurred={false} transitionDuration={800}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <KineticTypography
                text="We provide more than just internships - we offer a complete career transformation experience"
                animation="stretch"
                trigger="scroll"
                speed="fast"
                stagger={false}
              />
            </p>
          </ProgressiveBlur>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ProgressiveBlur
              key={index}
              isBlurred={false}
              transitionDuration={400 + index * 100}
              className="h-full"
            >
              <HoverBlurEffect blurOnHover={false} className="h-full">
                <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-all duration-500 group cursor-pointer h-full relative overflow-hidden border border-primary/20">
                  {/* Liquid Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-cyan-500/10 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-liquid-morph" />

                  <div className="relative z-10">
                    <div className="text-4xl mb-4 group-hover:animate-kinetic-bounce transition-all duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      <KineticTypography
                        text={feature.title}
                        animation="rotate"
                        trigger="hover"
                        speed="fast"
                      />
                    </h3>
                    <p className="text-muted-foreground">
                      <KineticTypography
                        text={feature.description}
                        animation="wave"
                        trigger="hover"
                        speed="normal"
                        stagger={true}
                      />
                    </p>
                  </div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-500" />
                </div>
              </HoverBlurEffect>
            </ProgressiveBlur>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-16">
          <LiquidButton
            variant="primary"
            liquidIntensity="intense"
            className="px-10 py-4 text-lg font-semibold"
          >
            <KineticTypography
              text="Start Your Journey Today"
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
