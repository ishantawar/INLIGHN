import { useState, useEffect } from "react";
import {
  Target,
  Eye,
  Heart,
  Award,
  Users,
  TrendingUp,
  Lightbulb,
  Rocket,
  Shield,
  Code,
  BarChart3,
  Database,
  MapPin,
  Calendar,
  Globe,
  Clock,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { GlassCard, GlassButton } from "@/components/ui/glassmorphism";
import {
  ScrollReveal,
  StaggeredReveal,
  ParallaxContainer,
  Magnetic,
} from "@/components/ui/scroll-animations";
import {
  KineticTypography,
  AnimatedHeading,
  CounterAnimation,
} from "@/components/ui/kinetic-typography";
import { Enhanced3DParticleSystem } from "@/components/3d/Enhanced3DParticleSystem";
import { Immersive3DTechEnvironment } from "@/components/3d/Immersive3DTechEnvironment";
import { InteractiveCodeMatrix } from "@/components/3d/InteractiveCodeMatrix";

const stats = [
  {
    icon: Users,
    label: "Interns Trained",
    value: 12500,
    suffix: "+",
    color: "#0ED2F7",
  },
  {
    icon: Award,
    label: "Certificates Issued",
    value: 9800,
    suffix: "+",
    color: "#A855F7",
  },
  {
    icon: TrendingUp,
    label: "Partner Companies",
    value: 250,
    suffix: "+",
    color: "#A3E635",
  },
  {
    icon: Target,
    label: "Success Rate",
    value: 96,
    suffix: "%",
    color: "#FB7185",
  },
];

const timeline = [
  {
    year: "2019",
    title: "The Vision",
    description:
      "Founded with a mission to bridge the gap between education and industry",
    icon: Lightbulb,
    color: "#0ED2F7",
  },
  {
    year: "2020",
    title: "First Program",
    description: "Launched our flagship Cybersecurity internship program",
    icon: Shield,
    color: "#A855F7",
  },
  {
    year: "2021",
    title: "Expansion",
    description: "Added Full Stack Development and Data Science programs",
    icon: Code,
    color: "#A3E635",
  },
  {
    year: "2022",
    title: "Global Reach",
    description: "Expanded internationally with 50+ partner companies",
    icon: Globe,
    color: "#FB7185",
  },
  {
    year: "2023",
    title: "Innovation Hub",
    description: "Launched AI-powered learning platform and virtual labs",
    icon: Rocket,
    color: "#FBBF24",
  },
  {
    year: "2024",
    title: "Future Ready",
    description: "Leading the next generation of tech education",
    icon: Target,
    color: "#0ED2F7",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & CEO",
    bio: "Former CTO at Microsoft with 15+ years in cybersecurity and AI",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b287?w=400&h=400&fit=crop&crop=face",
    expertise: ["Cybersecurity", "AI Strategy", "Leadership"],
    achievements: ["TEDx Speaker", "Forbes 40 Under 40", "3 Patents"],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "James Rodriguez",
    role: "Head of Programs",
    bio: "Full-stack architect and former startup founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    expertise: ["Full Stack", "DevOps", "Mentoring"],
    achievements: [
      "Built 5 Startups",
      "Google Developer Expert",
      "Open Source Contributor",
    ],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Dr. Emily Zhang",
    role: "Data Science Lead",
    bio: "PhD in Machine Learning, former Google AI researcher",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    expertise: ["Machine Learning", "Deep Learning", "Research"],
    achievements: [
      "50+ Research Papers",
      "Kaggle Grandmaster",
      "AI Conference Organizer",
    ],
    social: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Marcus Chen",
    role: "Industry Relations",
    bio: "Strategic partnerships with Fortune 500 companies",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    expertise: ["Business Strategy", "Partnerships", "Sales"],
    achievements: [
      "250+ Partner Network",
      "Harvard MBA",
      "Tech Industry Veteran",
    ],
    social: { linkedin: "#", twitter: "#" },
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in everything we do",
    color: "#0ED2F7",
  },
  {
    icon: Heart,
    title: "Impact",
    description: "Creating meaningful change in lives and careers",
    color: "#FB7185",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Pioneering new approaches to tech education",
    color: "#A3E635",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of learners and mentors",
    color: "#A855F7",
  },
];

const About = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [currentYear, setCurrentYear] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear((prev) => (prev + 1) % timeline.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900/50 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Layers */}
        <div className="absolute inset-0 opacity-30">
          <Enhanced3DParticleSystem
            particleCount={120}
            interactive={true}
            colorScheme="rainbow"
          />
        </div>

        <div className="absolute inset-0 opacity-20">
          <Immersive3DTechEnvironment intensity="high" theme="development" />
        </div>

        <div className="absolute inset-0 opacity-10">
          <InteractiveCodeMatrix
            density="medium"
            language="mixed"
            color="neon"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
                <Rocket className="w-5 h-5 text-primary mr-3" />
                <span className="text-primary font-semibold">Our Story</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <AnimatedHeading
                level={1}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight max-w-5xl mx-auto"
                animation="slide-up"
              >
                <KineticTypography
                  text="Transforming"
                  className="text-white block mb-4"
                  animation="wave"
                  trigger="scroll"
                  speed="normal"
                />
                <KineticTypography
                  text="Tech Education"
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent block"
                  animation="morph"
                  trigger="scroll"
                  speed="slow"
                />
              </AnimatedHeading>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                <KineticTypography
                  text="We're revolutionizing how the next generation learns technology, bridging the gap between academic theory and industry practice through immersive, hands-on experiences."
                  animation="stretch"
                  trigger="scroll"
                  speed="fast"
                  stagger={false}
                />
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <GlassButton variant="neon" size="lg">
                  <span className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Our Mission</span>
                  </span>
                </GlassButton>
                <GlassButton variant="ghost" size="lg">
                  <span className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span>Meet the Team</span>
                  </span>
                </GlassButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real results that speak to our commitment to excellence
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 100 + 400}
                >
                  <Magnetic strength={0.1} range={100}>
                    <GlassCard
                      variant="crystal"
                      className="p-8 text-center group hover:scale-105 transition-all duration-300"
                    >
                      <div
                        className="inline-flex p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `${stat.color}20`,
                          border: `1px solid ${stat.color}40`,
                          boxShadow: `0 0 20px ${stat.color}20`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: stat.color }}
                        />
                      </div>
                      <div
                        className="text-4xl md:text-5xl font-bold mb-2"
                        style={{ color: stat.color }}
                      >
                        <CounterAnimation
                          value={stat.value}
                          suffix={stat.suffix}
                          duration={2000}
                        />
                      </div>
                      <p className="text-gray-300 font-medium">{stat.label}</p>
                    </GlassCard>
                  </Magnetic>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Mission */}
            <ScrollReveal direction="left" delay={200}>
              <GlassCard variant="frosted" className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-xl bg-primary/20 border border-primary/30">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To empower the next generation of tech professionals by
                    providing world-class internship programs that combine
                    theoretical knowledge with practical, industry-relevant
                    experience. We believe in learning by doing, mentorship that
                    matters, and creating pathways to meaningful careers.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-gray-400">Job Placement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        $95K
                      </div>
                      <div className="text-sm text-gray-400">Avg Salary</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal direction="right" delay={400}>
              <GlassCard variant="neon" className="p-8 md:p-12">
                <div className="space-y-6">
                  <div className="inline-flex p-4 rounded-xl bg-purple-500/20 border border-purple-500/30">
                    <Eye className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    To become the global leader in tech education, creating a
                    seamless pathway from education to employment while
                    fostering innovation, diversity, and excellence in
                    technology. We envision a world where talent knows no
                    boundaries and opportunity is accessible to all.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        50+
                      </div>
                      <div className="text-sm text-gray-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Journey
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From a bold vision to transforming thousands of careers
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 opacity-30" />

            {timeline.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === currentYear;

              return (
                <ScrollReveal
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100 + 400}
                >
                  <div
                    className={`relative flex items-center mb-16 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}
                    >
                      <GlassCard
                        variant="crystal"
                        className={`p-6 transition-all duration-500 ${
                          isActive ? "scale-105 ring-2 ring-primary/30" : ""
                        }`}
                      >
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div
                              className="inline-flex p-3 rounded-lg"
                              style={{
                                background: `${item.color}20`,
                                border: `1px solid ${item.color}40`,
                              }}
                            >
                              <Icon
                                className="w-6 h-6"
                                style={{ color: item.color }}
                              />
                            </div>
                            <div
                              className="text-2xl font-bold"
                              style={{ color: item.color }}
                            >
                              {item.year}
                            </div>
                          </div>
                          <h4 className="text-xl font-bold text-white">
                            {item.title}
                          </h4>
                          <p className="text-gray-300">{item.description}</p>
                        </div>
                      </GlassCard>
                    </div>

                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 transition-all duration-500 ${
                        isActive ? "scale-150 animate-pulse" : ""
                      }`}
                      style={{
                        backgroundColor: item.color,
                        borderColor: isActive
                          ? item.color
                          : "rgba(255,255,255,0.3)",
                      }}
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 100 + 400}
                >
                  <Magnetic strength={0.1} range={80}>
                    <GlassCard
                      variant="frosted"
                      className="p-8 text-center group hover:scale-105 transition-all duration-300"
                    >
                      <div
                        className="inline-flex p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `${value.color}20`,
                          border: `1px solid ${value.color}40`,
                          boxShadow: `0 0 20px ${value.color}20`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: value.color }}
                        />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-4">
                        {value.title}
                      </h4>
                      <p className="text-gray-300">{value.description}</p>
                    </GlassCard>
                  </Magnetic>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Visionary leaders with decades of combined experience in
                technology and education
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 100 + 400}
              >
                <Magnetic strength={0.1} range={100}>
                  <GlassCard
                    variant="crystal"
                    className={`p-6 cursor-pointer transition-all duration-300 group ${
                      selectedMember === index
                        ? "scale-105 ring-2 ring-primary/30"
                        : "hover:scale-102"
                    }`}
                    onClick={() =>
                      setSelectedMember(selectedMember === index ? null : index)
                    }
                  >
                    <div className="text-center space-y-4">
                      <div className="relative">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-primary/30 group-hover:ring-primary/50 transition-all duration-300"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-primary font-medium">
                          {member.role}
                        </p>
                        <p className="text-gray-300 text-sm mt-2">
                          {member.bio}
                        </p>
                      </div>

                      {selectedMember === index && (
                        <div className="space-y-4 pt-4 border-t border-white/10 animate-fade-in">
                          <div>
                            <h5 className="font-semibold text-white mb-2">
                              Expertise
                            </h5>
                            <div className="flex flex-wrap gap-1 justify-center">
                              {member.expertise.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h5 className="font-semibold text-white mb-2">
                              Achievements
                            </h5>
                            <div className="space-y-1">
                              {member.achievements.map((achievement, i) => (
                                <div
                                  key={i}
                                  className="text-xs text-gray-300 flex items-center"
                                >
                                  <Award className="w-3 h-3 text-yellow-400 mr-1 flex-shrink-0" />
                                  {achievement}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </GlassCard>
                </Magnetic>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center">
              <GlassCard
                variant="neon"
                className="inline-block p-12 max-w-4xl mx-auto"
              >
                <div className="space-y-8">
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      Ready to Transform Your Future?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Join thousands of successful graduates who chose Inlighn
                      Tech to launch their tech careers
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <GlassButton variant="primary" size="lg">
                      <span className="flex items-center space-x-2">
                        <Rocket className="w-5 h-5" />
                        <span>Start Your Journey</span>
                      </span>
                    </GlassButton>
                    <GlassButton variant="ghost" size="lg">
                      <span className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Book a Call</span>
                      </span>
                    </GlassButton>
                  </div>

                  <div className="flex items-center justify-center space-x-8 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        24/7
                      </div>
                      <div className="text-sm text-gray-400">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">
                        Live
                      </div>
                      <div className="text-sm text-gray-400">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">
                        1:1
                      </div>
                      <div className="text-sm text-gray-400">Mentoring</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
