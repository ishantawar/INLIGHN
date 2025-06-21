
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    program: 'Cybersecurity Intern',
    company: 'SecureNet Solutions',
    quote: 'The cybersecurity program at Inlighn Tech gave me hands-on experience with real-world threats. I landed my dream job within weeks of completing the internship.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b287?w=150',
  },
  {
    name: 'Michael Chen',
    program: 'Full Stack Developer',
    company: 'TechFlow Inc',
    quote: 'From zero coding experience to building full applications in 16 weeks. The mentorship and project-based learning approach is unmatched.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
  },
  {
    name: 'Emily Rodriguez',
    program: 'Data Science Intern',
    company: 'DataCorp Analytics',
    quote: 'The data science program opened my eyes to the power of machine learning. The real datasets and industry projects made all the difference.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
  },
];

export const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
          Success <span className="text-gradient">Stories</span>
        </h2>
        
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Card className="glass-effect mx-4">
                  <CardContent className="p-8">
                    <div className="flex flex-col items-center space-y-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover"
                      />
                      <blockquote className="text-lg text-gray-300 italic max-w-2xl">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-center">
                        <div className="text-white font-semibold text-lg">
                          {testimonial.name}
                        </div>
                        <div className="text-tech-cyan text-sm">
                          {testimonial.program}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? 'bg-tech-cyan' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
