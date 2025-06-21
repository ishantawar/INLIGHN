import { useState, useEffect } from "react";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  Play,
  Linkedin,
  Twitter,
} from "lucide-react";
import { GlassCard, GlassButton } from "@/components/ui/glassmorphism";
import {
  ScrollReveal,
  InfiniteScroll,
} from "@/components/ui/scroll-animations";
import { KineticTypography } from "@/components/ui/kinetic-typography";
import { Enhanced3DParticleSystem } from "@/components/3d/Enhanced3DParticleSystem";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Cybersecurity Analyst",
    company: "Microsoft",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b287?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The cybersecurity program at Inlighn Tech completely transformed my career. The hands-on approach and real-world projects gave me the confidence to land my dream job at Microsoft.",
    program: "Cybersecurity",
    salary: "$120K",
    linkedIn: "#",
    video: "#",
    highlights: [
      "Zero to Hero in 12 weeks",
      "Landed job before graduation",
      "300% salary increase",
    ],
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Full Stack Developer",
    company: "Stripe",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "Coming from a non-tech background, I was nervous about learning to code. The mentors and curriculum made it not just possible, but enjoyable. Now I'm building products used by millions.",
    program: "Full Stack Development",
    salary: "$115K",
    linkedIn: "#",
    video: "#",
    highlights: [
      "Career pivot from finance",
      "Built 5 production apps",
      "Promoted in 6 months",
    ],
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    role: "Data Scientist",
    company: "Tesla",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The data science program exceeded my expectations. Working with real Tesla data during the internship was incredible. The AI models we built are now in production!",
    program: "Data Science",
    salary: "$140K",
    linkedIn: "#",
    video: "#",
    highlights: [
      "PhD to Industry transition",
      "Models in production",
      "Leading ML team",
    ],
  },
  {
    id: 4,
    name: "Alex Rivera",
    role: "Data Analyst",
    company: "Netflix",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The data analysis program gave me the skills to make data-driven decisions that impact millions of Netflix users. The business intelligence projects were incredibly valuable.",
    program: "Data Analysis",
    salary: "$95K",
    linkedIn: "#",
    video: "#",
    highlights: [
      "Remote work flexibility",
      "Global impact projects",
      "Fast track to senior role",
    ],
  },
  {
    id: 5,
    name: "Emily Zhang",
    role: "Security Engineer",
    company: "Google",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "The ethical hacking skills I learned helped me secure critical infrastructure at Google. The program's focus on real-world scenarios was invaluable.",
    program: "Cybersecurity",
    salary: "$135K",
    linkedIn: "#",
    video: "#",
    highlights: [
      "Bug bounty expert",
      "Conference speaker",
      "Open source contributor",
    ],
  },
  {
    id: 6,
    name: "David Kim",
    role: "Full Stack Engineer",
    company: "Shopify",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "From small town to Silicon Valley - this program made it possible. The portfolio projects I built landed me interviews at top tech companies.",
    program: "Full Stack Development",
    salary: "$125K",
    linkedIn: "#",
    video: "#",
    highlights: [
      "Small town to Silicon Valley",
      "Multiple job offers",
      "Tech lead in 2 years",
    ],
  },
];

const companies = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "Ⓜ️" },
  { name: "Tesla", logo: "⚡" },
  { name: "Netflix", logo: "🎬" },
  { name: "Stripe", logo: "💳" },
  { name: "Shopify", logo: "🛍️" },
  { name: "Amazon", logo: "📦" },
  { name: "Meta", logo: "👥" },
  { name: "Apple", logo: "🍎" },
  { name: "Uber", logo: "🚗" },
];

export const EnhancedTestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-black via-slate-900/80 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <Enhanced3DParticleSystem
          particleCount={80}
          interactive={false}
          colorScheme="secondary"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up" delay={100}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 font-semibold text-sm">
                Success Stories
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <KineticTypography
                text="Real People,"
                className="block"
                animation="wave"
                trigger="scroll"
                speed="normal"
              />
              <KineticTypography
                text="Real Results"
                className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent block"
                animation="morph"
                trigger="scroll"
                speed="slow"
              />
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={300}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of graduates who transformed their careers and
              landed their dream jobs at top tech companies
            </p>
          </ScrollReveal>
        </div>

        {/* Main Testimonial Showcase */}
        <div className="mb-16">
          <ScrollReveal direction="up" delay={400}>
            <GlassCard
              variant="crystal"
              className="max-w-6xl mx-auto p-8 md:p-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Testimonial Content */}
                <div className="space-y-6">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 w-12 h-12 text-primary/30" />
                    <blockquote className="text-xl md:text-2xl text-white leading-relaxed pl-8">
                      "{currentTestimonialData.text}"
                    </blockquote>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < currentTestimonialData.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-gray-300">
                      {currentTestimonialData.rating}.0/5
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={currentTestimonialData.image}
                      alt={currentTestimonialData.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {currentTestimonialData.name}
                      </h4>
                      <p className="text-primary font-medium">
                        {currentTestimonialData.role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {currentTestimonialData.company} •{" "}
                        {currentTestimonialData.salary}
                      </p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center space-x-4">
                    <GlassButton variant="ghost" className="p-2">
                      <Linkedin className="w-4 h-4" />
                    </GlassButton>
                    <GlassButton variant="ghost" className="p-2">
                      <Twitter className="w-4 h-4" />
                    </GlassButton>
                    <GlassButton
                      variant="ghost"
                      className="flex items-center space-x-2 px-4"
                    >
                      <Play className="w-4 h-4" />
                      <span>Watch Video</span>
                    </GlassButton>
                  </div>
                </div>

                {/* Success Highlights */}
                <div className="space-y-6">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-primary to-purple-500 bg-clip-text mb-2">
                      {currentTestimonialData.program}
                    </div>
                    <div className="text-gray-400">Graduate</div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      Career Highlights:
                    </h4>
                    {currentTestimonialData.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-purple-500" />
                        <span className="text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Program Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30">
                    <span className="text-primary font-semibold">
                      {currentTestimonialData.program} Program
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                <button
                  onClick={prevTestimonial}
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span>Previous</span>
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-primary scale-125"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <span>Next</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>

        {/* Quick Testimonials Grid */}
        <ScrollReveal direction="up" delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <GlassCard
                key={testimonial.id}
                variant="frosted"
                className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === 1 ? "md:scale-110" : ""
                }`}
                onClick={() => setCurrentTestimonial(testimonial.id - 1)}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm line-clamp-3">
                  "{testimonial.text.substring(0, 100)}..."
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < testimonial.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-primary font-medium">
                    {testimonial.program}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </ScrollReveal>

        {/* Companies Carousel */}
        <ScrollReveal direction="up" delay={800}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Graduates Work At
            </h3>
            <p className="text-gray-400">
              Top tech companies worldwide trust our graduates
            </p>
          </div>

          <div className="overflow-hidden">
            <InfiniteScroll speed={30} pauseOnHover={true}>
              <div className="flex items-center space-x-12">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 whitespace-nowrap"
                  >
                    <span className="text-2xl">{company.logo}</span>
                    <span className="text-white font-medium">
                      {company.name}
                    </span>
                  </div>
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="text-center mt-16">
            <GlassCard variant="neon" className="inline-block p-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Write Your Success Story?
                </h3>
                <p className="text-gray-300 max-w-md">
                  Join our next cohort and transform your career in just 12-16
                  weeks
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlassButton variant="primary" size="lg">
                    Start Your Journey
                  </GlassButton>
                  <GlassButton variant="ghost" size="lg">
                    Talk to Alumni
                  </GlassButton>
                </div>
              </div>
            </GlassCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
