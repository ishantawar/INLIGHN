import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Code,
  BarChart3,
  Database,
  ArrowRight,
  Clock,
  Users,
  Award,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import { GlassCard, GlassButton } from "@/components/ui/glassmorphism";
import {
  ScrollReveal,
  StaggeredReveal,
  Magnetic,
} from "@/components/ui/scroll-animations";
import { KineticTypography } from "@/components/ui/kinetic-typography";
import { Enhanced3DParticleSystem } from "@/components/3d/Enhanced3DParticleSystem";

const programs = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Mastery",
    description: "Master the art of digital defense and ethical hacking",
    icon: Shield,
    duration: "12 weeks",
    level: "Beginner to Expert",
    students: "2,500+",
    rating: 4.9,
    salary: "$85K - $150K",
    gradient: "from-cyan-500 via-blue-600 to-blue-800",
    color: "#0ED2F7",
    skills: [
      "Ethical Hacking",
      "Network Security",
      "Incident Response",
      "Penetration Testing",
      "Threat Analysis",
    ],
    projects: [
      "Build a complete security framework",
      "Conduct penetration testing on real systems",
      "Design incident response protocols",
    ],
    certifications: ["CompTIA Security+", "CEH", "CISSP"],
    highlights: [
      "24/7 Lab Access",
      "Real-world Simulations",
      "Industry Mentors",
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Build scalable web applications from frontend to backend",
    icon: Code,
    duration: "16 weeks",
    level: "Beginner to Advanced",
    students: "3,200+",
    rating: 4.8,
    salary: "$75K - $130K",
    gradient: "from-purple-500 via-violet-600 to-purple-800",
    color: "#A855F7",
    skills: [
      "React.js",
      "Node.js",
      "Database Design",
      "API Development",
      "Cloud Deployment",
    ],
    projects: [
      "E-commerce platform with payment integration",
      "Real-time chat application",
      "Social media dashboard",
    ],
    certifications: ["AWS Certified", "Google Cloud", "Meta Frontend"],
    highlights: [
      "Live Code Reviews",
      "Agile Methodology",
      "Portfolio Development",
    ],
  },
  {
    id: "datascience",
    title: "Data Science & AI",
    description: "Extract insights and build predictive models with AI",
    icon: BarChart3,
    duration: "14 weeks",
    level: "Intermediate to Expert",
    students: "1,800+",
    rating: 4.9,
    salary: "$90K - $160K",
    gradient: "from-green-500 via-emerald-600 to-green-800",
    color: "#A3E635",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "TensorFlow",
      "Data Visualization",
    ],
    projects: [
      "Predictive analytics for business decisions",
      "Computer vision for medical diagnosis",
      "Natural language processing chatbot",
    ],
    certifications: ["Google AI", "IBM Data Science", "Microsoft Azure AI"],
    highlights: [
      "GPU Cluster Access",
      "Kaggle Competitions",
      "Research Projects",
    ],
  },
  {
    id: "dataanalysis",
    title: "Data Analysis & BI",
    description: "Transform raw data into actionable business insights",
    icon: Database,
    duration: "10 weeks",
    level: "Beginner to Advanced",
    students: "1,500+",
    rating: 4.7,
    salary: "$65K - $110K",
    gradient: "from-pink-500 via-rose-600 to-pink-800",
    color: "#FB7185",
    skills: ["SQL", "Excel", "Tableau", "Power BI", "Statistical Analysis"],
    projects: [
      "Business intelligence dashboard",
      "Sales forecasting model",
      "Customer segmentation analysis",
    ],
    certifications: [
      "Tableau Certified",
      "Microsoft Power BI",
      "Google Analytics",
    ],
    highlights: ["Real Business Data", "Client Projects", "Interview Prep"],
  },
];

export const EnhancedProgramsSection = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-slate-900/50 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <Enhanced3DParticleSystem
          particleCount={100}
          interactive={false}
          colorScheme="primary"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={100}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
              <TrendingUp className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-semibold text-sm">
                Future-Ready Programs
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <KineticTypography
                text="Choose Your"
                className="block"
                animation="wave"
                trigger="scroll"
                speed="normal"
              />
              <KineticTypography
                text="Tech Journey"
                className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent block"
                animation="morph"
                trigger="scroll"
                speed="slow"
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Immersive, hands-on programs designed by industry experts to
              launch your tech career
            </p>
          </ScrollReveal>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const isSelected = selectedProgram === program.id;
            const isHovered = hoveredCard === program.id;

            return (
              <ScrollReveal
                key={program.id}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 100 + 400}
              >
                <Magnetic strength={0.15} range={150}>
                  <GlassCard
                    variant="crystal"
                    className={`relative p-8 cursor-pointer transition-all duration-500 group ${
                      isSelected ? "ring-2 ring-primary/50 scale-105" : ""
                    } ${isHovered ? "scale-102" : ""}`}
                    onMouseEnter={() => setHoveredCard(program.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={() =>
                      setSelectedProgram(isSelected ? null : program.id)
                    }
                  >
                    {/* Background Gradient */}
                    <div
                      className={`absolute inset-0 opacity-5 rounded-xl bg-gradient-to-br ${program.gradient} transition-opacity duration-500 group-hover:opacity-10`}
                    />

                    {/* Floating Icon */}
                    <div className="relative mb-6">
                      <div
                        className={`inline-flex p-4 rounded-xl transition-all duration-300 group-hover:scale-110 ${
                          isHovered ? "animate-pulse" : ""
                        }`}
                        style={{
                          background: `${program.color}20`,
                          border: `1px solid ${program.color}40`,
                          boxShadow: `0 0 30px ${program.color}20`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: program.color }}
                        />
                      </div>

                      {/* Floating particles around icon */}
                      {isHovered && (
                        <div className="absolute inset-0">
                          {Array.from({ length: 6 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 rounded-full animate-ping"
                              style={{
                                background: program.color,
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Program Info */}
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                          {program.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                          {program.description}
                        </p>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4 py-4 border-t border-white/10">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">
                            {program.duration}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-300">
                            {program.students}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Star className="w-4 h-4 text-yellow-400" />
                          <span className="text-sm text-gray-300">
                            {program.rating}/5
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-400" />
                          <span className="text-sm text-gray-300">
                            {program.salary}
                          </span>
                        </div>
                      </div>

                      {/* Skills Preview */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                          Key Skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {program.skills.slice(0, 3).map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-gray-300 border border-white/20"
                            >
                              {skill}
                            </span>
                          ))}
                          {program.skills.length > 3 && (
                            <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                              +{program.skills.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Content */}
                    {isSelected && (
                      <div className="mt-6 pt-6 border-t border-white/10 space-y-6 animate-fade-in">
                        {/* All Skills */}
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            Complete Curriculum
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full bg-white/10 text-gray-300 border border-white/20 hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Projects */}
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            Real-world Projects
                          </h4>
                          <div className="space-y-2">
                            {program.projects.map((project, i) => (
                              <div
                                key={i}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-300">
                                  {project}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Certifications */}
                        <div>
                          <h4 className="font-semibold text-white mb-3">
                            Industry Certifications
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {program.certifications.map((cert, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1 text-sm rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30"
                              >
                                <Award className="w-3 h-3 mr-1" />
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-4 pt-4">
                          <Link
                            to={`/programs#${program.id}`}
                            className="flex-1"
                          >
                            <GlassButton
                              variant="primary"
                              className="w-full group"
                            >
                              <span className="flex items-center justify-center space-x-2">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                              </span>
                            </GlassButton>
                          </Link>
                          <GlassButton variant="ghost">Apply Now</GlassButton>
                        </div>
                      </div>
                    )}

                    {/* Hover Effect Indicator */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    </div>
                  </GlassCard>
                </Magnetic>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={800}>
          <div className="text-center">
            <GlassCard variant="neon" className="inline-block p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Transform Your Career?
                </h3>
                <p className="text-gray-300 max-w-md">
                  Join thousands of successful graduates who landed their dream
                  tech jobs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/programs">
                    <GlassButton variant="primary" size="lg">
                      View All Programs
                    </GlassButton>
                  </Link>
                  <Link to="/contact">
                    <GlassButton variant="ghost" size="lg">
                      Talk to Advisor
                    </GlassButton>
                  </Link>
                </div>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
