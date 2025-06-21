import { useState, useEffect } from "react";
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
  Play,
  Calendar,
  DollarSign,
  BookOpen,
  Target,
  Zap,
  Rocket,
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { GlassCard, GlassButton } from "@/components/ui/glassmorphism";
import {
  ScrollReveal,
  StaggeredReveal,
  Magnetic,
} from "@/components/ui/scroll-animations";
import {
  KineticTypography,
  AnimatedHeading,
} from "@/components/ui/kinetic-typography";
import { Enhanced3DParticleSystem } from "@/components/3d/Enhanced3DParticleSystem";
import { Immersive3DTechEnvironment } from "@/components/3d/Immersive3DTechEnvironment";
import { InteractiveCodeMatrix } from "@/components/3d/InteractiveCodeMatrix";

const programs = [
  {
    id: "cybersecurity",
    title: "Cybersecurity Mastery",
    subtitle: "Defend the Digital Frontier",
    description:
      "Master the art of protecting digital assets through hands-on ethical hacking, penetration testing, and incident response training.",
    icon: Shield,
    duration: "12 weeks",
    level: "Beginner to Expert",
    students: "2,500+",
    rating: 4.9,
    startingSalary: "$75K",
    averageSalary: "$125K",
    gradient: "from-cyan-500 via-blue-600 to-blue-800",
    color: "#0ED2F7",
    bgPattern: "cybersecurity",
    skills: [
      "Ethical Hacking",
      "Network Security",
      "Incident Response",
      "Penetration Testing",
      "Threat Analysis",
      "Digital Forensics",
      "Security Frameworks",
      "Risk Assessment",
      "Compliance",
    ],
    tools: [
      "Kali Linux",
      "Wireshark",
      "Metasploit",
      "Nmap",
      "Burp Suite",
      "OWASP ZAP",
      "Nessus",
      "Splunk",
      "John the Ripper",
    ],
    projects: [
      {
        title: "Enterprise Security Framework",
        description:
          "Design and implement a complete security framework for a Fortune 500 company",
        duration: "4 weeks",
      },
      {
        title: "Red Team vs Blue Team Exercise",
        description:
          "Participate in live penetration testing and defense scenarios",
        duration: "2 weeks",
      },
      {
        title: "Incident Response Simulation",
        description:
          "Handle real-world cyber attack scenarios and recovery protocols",
        duration: "3 weeks",
      },
    ],
    certifications: [
      "CompTIA Security+",
      "CEH (Certified Ethical Hacker)",
      "CISSP",
      "CISM",
    ],
    careerPaths: [
      "Security Analyst",
      "Penetration Tester",
      "Security Consultant",
      "CISO",
    ],
    highlights: [
      "24/7 Security Lab Access",
      "Real-world Attack Simulations",
      "Industry Expert Mentors",
      "Government Partnerships",
    ],
    syllabus: [
      {
        week: "1-2",
        topic: "Cybersecurity Fundamentals",
        description: "Core concepts, threat landscape, and security principles",
      },
      {
        week: "3-4",
        topic: "Network Security",
        description: "Firewalls, VPNs, intrusion detection systems",
      },
      {
        week: "5-6",
        topic: "Ethical Hacking",
        description: "Penetration testing methodologies and tools",
      },
      {
        week: "7-8",
        topic: "Digital Forensics",
        description: "Evidence collection and analysis techniques",
      },
      {
        week: "9-10",
        topic: "Incident Response",
        description: "Handling security breaches and recovery",
      },
      {
        week: "11-12",
        topic: "Capstone Project",
        description: "Real-world security assessment and presentation",
      },
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    subtitle: "Build the Modern Web",
    description:
      "Create scalable web applications from frontend to backend using the latest technologies and industry best practices.",
    icon: Code,
    duration: "16 weeks",
    level: "Beginner to Advanced",
    students: "3,200+",
    rating: 4.8,
    startingSalary: "$65K",
    averageSalary: "$110K",
    gradient: "from-purple-500 via-violet-600 to-purple-800",
    color: "#A855F7",
    bgPattern: "development",
    skills: [
      "React.js",
      "Node.js",
      "TypeScript",
      "Database Design",
      "API Development",
      "Cloud Deployment",
      "DevOps",
      "Testing",
      "Security",
    ],
    tools: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Git",
      "Jest",
      "Cypress",
    ],
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "Full-featured online store with payment integration and admin dashboard",
        duration: "5 weeks",
      },
      {
        title: "Real-time Chat Application",
        description: "Scalable messaging app with WebSocket communication",
        duration: "3 weeks",
      },
      {
        title: "Social Media Dashboard",
        description: "Analytics platform for social media management",
        duration: "4 weeks",
      },
    ],
    certifications: [
      "AWS Certified Developer",
      "Google Cloud Professional",
      "Meta Frontend Developer",
    ],
    careerPaths: [
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
      "DevOps Engineer",
    ],
    highlights: [
      "Live Code Reviews",
      "Agile Development Methodology",
      "Portfolio Development",
      "Startup Partnerships",
    ],
    syllabus: [
      {
        week: "1-2",
        topic: "Frontend Fundamentals",
        description: "HTML, CSS, JavaScript, and React basics",
      },
      {
        week: "3-4",
        topic: "Advanced Frontend",
        description: "State management, routing, and performance optimization",
      },
      {
        week: "5-6",
        topic: "Backend Development",
        description: "Node.js, Express, and RESTful APIs",
      },
      {
        week: "7-8",
        topic: "Database Design",
        description: "SQL and NoSQL databases, data modeling",
      },
      {
        week: "9-10",
        topic: "Authentication & Security",
        description: "User management and security best practices",
      },
      {
        week: "11-12",
        topic: "Testing & Deployment",
        description: "Unit testing, integration testing, CI/CD",
      },
      {
        week: "13-14",
        topic: "Cloud & DevOps",
        description: "AWS deployment, containerization, monitoring",
      },
      {
        week: "15-16",
        topic: "Capstone Project",
        description: "Full-stack application development and presentation",
      },
    ],
  },
  {
    id: "datascience",
    title: "Data Science & AI",
    subtitle: "Unlock the Power of Data",
    description:
      "Extract insights and build predictive models using machine learning, deep learning, and advanced analytics.",
    icon: BarChart3,
    duration: "14 weeks",
    level: "Intermediate to Expert",
    students: "1,800+",
    rating: 4.9,
    startingSalary: "$80K",
    averageSalary: "$140K",
    gradient: "from-green-500 via-emerald-600 to-green-800",
    color: "#A3E635",
    bgPattern: "datascience",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Python",
      "R",
      "Statistics",
      "Data Visualization",
      "TensorFlow",
      "PyTorch",
      "SQL",
      "Big Data",
    ],
    tools: [
      "Python",
      "R",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Pandas",
      "Jupyter",
      "Tableau",
      "Power BI",
      "Apache Spark",
      "Hadoop",
    ],
    projects: [
      {
        title: "Predictive Analytics for Healthcare",
        description:
          "ML models for disease prediction and treatment optimization",
        duration: "4 weeks",
      },
      {
        title: "Computer Vision for Autonomous Vehicles",
        description: "Deep learning for object detection and classification",
        duration: "4 weeks",
      },
      {
        title: "NLP Chatbot for Customer Service",
        description: "Intelligent conversational AI with sentiment analysis",
        duration: "3 weeks",
      },
    ],
    certifications: [
      "Google AI Professional",
      "IBM Data Science Professional",
      "Microsoft Azure AI",
    ],
    careerPaths: [
      "Data Scientist",
      "ML Engineer",
      "AI Researcher",
      "Data Analyst",
    ],
    highlights: [
      "GPU Cluster Access",
      "Kaggle Competition Training",
      "Research Paper Publications",
      "Industry Data Partnerships",
    ],
    syllabus: [
      {
        week: "1-2",
        topic: "Data Science Foundations",
        description: "Python, statistics, and data manipulation",
      },
      {
        week: "3-4",
        topic: "Exploratory Data Analysis",
        description: "Data visualization and statistical analysis",
      },
      {
        week: "5-6",
        topic: "Machine Learning",
        description: "Supervised and unsupervised learning algorithms",
      },
      {
        week: "7-8",
        topic: "Deep Learning",
        description: "Neural networks, CNNs, and RNNs",
      },
      {
        week: "9-10",
        topic: "Natural Language Processing",
        description: "Text analysis and language models",
      },
      {
        week: "11-12",
        topic: "Computer Vision",
        description: "Image processing and object detection",
      },
      {
        week: "13-14",
        topic: "Capstone Project",
        description: "End-to-end ML project and deployment",
      },
    ],
  },
  {
    id: "dataanalysis",
    title: "Data Analysis & BI",
    subtitle: "Transform Data into Insights",
    description:
      "Transform raw data into actionable business insights using advanced analytics and visualization tools.",
    icon: Database,
    duration: "10 weeks",
    level: "Beginner to Advanced",
    students: "1,500+",
    rating: 4.7,
    startingSalary: "$55K",
    averageSalary: "$85K",
    gradient: "from-pink-500 via-rose-600 to-pink-800",
    color: "#FB7185",
    bgPattern: "analysis",
    skills: [
      "SQL",
      "Excel",
      "Tableau",
      "Power BI",
      "Statistical Analysis",
      "Business Intelligence",
      "Data Modeling",
      "ETL",
      "Python",
    ],
    tools: [
      "SQL Server",
      "MySQL",
      "Excel",
      "Tableau",
      "Power BI",
      "Python",
      "R",
      "Google Analytics",
      "Looker",
      "QlikView",
      "SPSS",
    ],
    projects: [
      {
        title: "Sales Performance Dashboard",
        description: "Interactive BI dashboard for sales team optimization",
        duration: "3 weeks",
      },
      {
        title: "Customer Segmentation Analysis",
        description: "Advanced analytics for targeted marketing campaigns",
        duration: "2 weeks",
      },
      {
        title: "Financial Forecasting Model",
        description: "Predictive models for revenue and budget planning",
        duration: "3 weeks",
      },
    ],
    certifications: [
      "Tableau Desktop Certified",
      "Microsoft Power BI",
      "Google Analytics Certified",
    ],
    careerPaths: [
      "Data Analyst",
      "Business Analyst",
      "BI Developer",
      "Analytics Consultant",
    ],
    highlights: [
      "Real Business Data Sets",
      "Client Project Experience",
      "Interview Preparation",
      "Job Placement Assistance",
    ],
    syllabus: [
      {
        week: "1-2",
        topic: "Data Analysis Fundamentals",
        description: "Excel, statistics, and data cleaning",
      },
      {
        week: "3-4",
        topic: "SQL and Databases",
        description: "Advanced SQL queries and database design",
      },
      {
        week: "5-6",
        topic: "Data Visualization",
        description: "Tableau and Power BI dashboard creation",
      },
      {
        week: "7-8",
        topic: "Statistical Analysis",
        description: "Hypothesis testing and regression analysis",
      },
      {
        week: "9-10",
        topic: "Capstone Project",
        description: "Business intelligence project and presentation",
      },
    ],
  },
];

const features = [
  {
    icon: Users,
    title: "Expert Mentorship",
    description: "1:1 guidance from industry professionals",
    color: "#0ED2F7",
  },
  {
    icon: Rocket,
    title: "Real Projects",
    description: "Work on actual industry challenges",
    color: "#A855F7",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Industry-recognized credentials",
    color: "#A3E635",
  },
  {
    icon: Target,
    title: "Job Placement",
    description: "95% job placement rate",
    color: "#FB7185",
  },
];

const Programs = () => {
  const [selectedProgram, setSelectedProgram] =
    useState<string>("cybersecurity");
  const [activeTab, setActiveTab] = useState<
    "overview" | "syllabus" | "projects"
  >("overview");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const currentProgram =
    programs.find((p) => p.id === selectedProgram) || programs[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900/50 to-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-30">
          <Enhanced3DParticleSystem
            particleCount={150}
            interactive={true}
            colorScheme="rainbow"
          />
        </div>

        <div className="absolute inset-0 opacity-25">
          <Immersive3DTechEnvironment
            intensity="ultra"
            theme={currentProgram.bgPattern as any}
          />
        </div>

        <div className="absolute inset-0 opacity-15">
          <InteractiveCodeMatrix
            density="heavy"
            language="mixed"
            color="rainbow"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8 max-w-5xl mx-auto">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-8">
                <BookOpen className="w-5 h-5 text-primary mr-3" />
                <span className="text-primary font-semibold">
                  Immersive Programs
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <AnimatedHeading
                level={1}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                animation="slide-up"
              >
                <KineticTypography
                  text="Master"
                  className="text-white block mb-4"
                  animation="wave"
                  trigger="scroll"
                  speed="normal"
                />
                <KineticTypography
                  text="Tomorrow's Tech"
                  className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent block"
                  animation="morph"
                  trigger="scroll"
                  speed="slow"
                />
              </AnimatedHeading>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
                <KineticTypography
                  text="Choose from our industry-leading programs designed to launch your tech career with hands-on experience and expert mentorship."
                  animation="stretch"
                  trigger="scroll"
                  speed="fast"
                  stagger={false}
                />
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-wrap justify-center gap-4">
                {programs.map((program) => {
                  const Icon = program.icon;
                  const isSelected = selectedProgram === program.id;

                  return (
                    <button
                      key={program.id}
                      onClick={() => setSelectedProgram(program.id)}
                      className={`flex items-center space-x-3 px-6 py-3 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-white/10 border border-white/20 scale-105"
                          : "bg-white/5 border border-white/10 hover:bg-white/8"
                      }`}
                      style={{
                        boxShadow: isSelected
                          ? `0 0 30px ${program.color}40`
                          : "none",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{
                          color: isSelected ? program.color : "#94A3B8",
                        }}
                      />
                      <span
                        className={`font-medium ${isSelected ? "text-white" : "text-gray-400"}`}
                      >
                        {program.title.split(" ")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Programs?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the difference with our comprehensive approach to
                tech education
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isHovered = hoveredFeature === index;

              return (
                <ScrollReveal
                  key={index}
                  direction="up"
                  delay={index * 100 + 400}
                >
                  <Magnetic strength={0.1} range={100}>
                    <GlassCard
                      variant="crystal"
                      className="p-8 text-center group transition-all duration-300 hover:scale-105"
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                    >
                      <div
                        className={`inline-flex p-4 rounded-xl mb-6 transition-all duration-300 ${
                          isHovered ? "scale-110 animate-pulse" : ""
                        }`}
                        style={{
                          background: `${feature.color}20`,
                          border: `1px solid ${feature.color}40`,
                          boxShadow: `0 0 20px ${feature.color}20`,
                        }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: feature.color }}
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </GlassCard>
                  </Magnetic>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Program Header */}
          <ScrollReveal direction="up" delay={200}>
            <GlassCard variant="crystal" className="p-8 md:p-12 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Program Info */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: `${currentProgram.color}20`,
                        border: `1px solid ${currentProgram.color}40`,
                        boxShadow: `0 0 30px ${currentProgram.color}20`,
                      }}
                    >
                      <currentProgram.icon
                        className="w-10 h-10"
                        style={{ color: currentProgram.color }}
                      />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {currentProgram.title}
                      </h2>
                      <p className="text-xl text-primary font-medium">
                        {currentProgram.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {currentProgram.description}
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="font-semibold text-white">
                          {currentProgram.duration}
                        </div>
                        <div className="text-sm text-gray-400">Duration</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 text-gray-400" />
                      <div>
                        <div className="font-semibold text-white">
                          {currentProgram.students}
                        </div>
                        <div className="text-sm text-gray-400">Graduates</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Star className="w-5 h-5 text-yellow-400" />
                      <div>
                        <div className="font-semibold text-white">
                          {currentProgram.rating}/5
                        </div>
                        <div className="text-sm text-gray-400">Rating</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-5 h-5 text-green-400" />
                      <div>
                        <div className="font-semibold text-white">
                          {currentProgram.averageSalary}
                        </div>
                        <div className="text-sm text-gray-400">Avg Salary</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <Link to="/contact">
                      <GlassButton
                        variant="primary"
                        size="lg"
                        className="group"
                      >
                        <span className="flex items-center space-x-2">
                          <Rocket className="w-5 h-5" />
                          <span>Apply Now</span>
                          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </GlassButton>
                    </Link>
                    <GlassButton variant="ghost" size="lg">
                      <span className="flex items-center space-x-2">
                        <Play className="w-5 h-5" />
                        <span>Watch Demo</span>
                      </span>
                    </GlassButton>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="space-y-6">
                  <GlassCard variant="frosted" className="p-6">
                    <h4 className="font-semibold text-white mb-4">
                      Program Highlights
                    </h4>
                    <div className="space-y-3">
                      {currentProgram.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>

                  <GlassCard variant="neon" className="p-6 text-center">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">Salary Range</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Starting:</span>
                          <span className="font-bold text-green-400">
                            {currentProgram.startingSalary}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400">Average:</span>
                          <span className="font-bold text-primary">
                            {currentProgram.averageSalary}
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          {/* Tabs */}
          <ScrollReveal direction="up" delay={400}>
            <div className="flex justify-center mb-8">
              <div className="inline-flex bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-1">
                {[
                  { id: "overview", label: "Overview", icon: Target },
                  { id: "syllabus", label: "Syllabus", icon: BookOpen },
                  { id: "projects", label: "Projects", icon: Rocket },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as any)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="font-medium">{tab.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          {/* Tab Content */}
          <ScrollReveal direction="up" delay={600}>
            <GlassCard variant="crystal" className="p-8 md:p-12">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  {/* Skills */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Skills You'll Master
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {currentProgram.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 text-center rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all duration-300"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Tools & Technologies
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {currentProgram.tools.map((tool, i) => (
                        <div
                          key={i}
                          className="px-4 py-2 text-center rounded-lg bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-white font-medium"
                        >
                          {tool}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Career Paths */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Career Opportunities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {currentProgram.careerPaths.map((path, i) => (
                        <GlassCard
                          key={i}
                          variant="frosted"
                          className="p-4 text-center"
                        >
                          <div className="text-lg font-semibold text-white">
                            {path}
                          </div>
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "syllabus" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Course Curriculum
                  </h3>
                  <div className="space-y-4">
                    {currentProgram.syllabus.map((item, i) => (
                      <div
                        key={i}
                        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/8 transition-all duration-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div
                            className="px-3 py-1 rounded-full text-sm font-bold"
                            style={{
                              background: `${currentProgram.color}20`,
                              color: currentProgram.color,
                              border: `1px solid ${currentProgram.color}40`,
                            }}
                          >
                            Week {item.week}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-semibold text-white mb-2">
                              {item.topic}
                            </h4>
                            <p className="text-gray-300">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Real-World Projects
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {currentProgram.projects.map((project, i) => (
                      <GlassCard key={i} variant="frosted" className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h4 className="text-xl font-semibold text-white">
                              {project.title}
                            </h4>
                            <span className="text-sm text-primary font-medium">
                              {project.duration}
                            </span>
                          </div>
                          <p className="text-gray-300">{project.description}</p>
                          <div className="flex space-x-2">
                            <GlassButton variant="ghost" className="text-sm">
                              View Details
                            </GlassButton>
                            <GlassButton variant="ghost" className="text-sm">
                              <Play className="w-3 h-3 mr-1" />
                              Demo
                            </GlassButton>
                          </div>
                        </div>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              )}
            </GlassCard>
          </ScrollReveal>
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
                      Ready to Launch Your Tech Career?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                      Join our next cohort and transform your future with
                      hands-on experience and industry mentorship
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link to="/contact">
                      <GlassButton variant="primary" size="lg">
                        <span className="flex items-center space-x-2">
                          <Rocket className="w-5 h-5" />
                          <span>Apply Today</span>
                        </span>
                      </GlassButton>
                    </Link>
                    <GlassButton variant="ghost" size="lg">
                      <span className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5" />
                        <span>Schedule Call</span>
                      </span>
                    </GlassButton>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/10">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">95%</div>
                      <div className="text-sm text-gray-400">
                        Job Placement Rate
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-400">
                        $95K
                      </div>
                      <div className="text-sm text-gray-400">
                        Average Starting Salary
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-400">
                        12K+
                      </div>
                      <div className="text-sm text-gray-400">
                        Successful Graduates
                      </div>
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

export default Programs;
