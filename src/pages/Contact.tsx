
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Footer } from '@/components/Footer';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const socialLinks = [
    { name: 'LinkedIn', url: '#', icon: '💼' },
    { name: 'Twitter', url: '#', icon: '🐦' },
    { name: 'GitHub', url: '#', icon: '🐙' },
    { name: 'YouTube', url: '#', icon: '📺' },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact <span className="text-gradient">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your tech journey? Get in touch with us and let's discuss how we can help you achieve your career goals.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">✅</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="tech-gradient hover:opacity-90 transition-opacity mt-4"
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Name
                        </label>
                        <Input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Email
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your.email@example.com"
                          className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <Input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="What's this about?"
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us more about how we can help you..."
                        className="bg-white/5 border-white/20 text-white placeholder-gray-400"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full tech-gradient hover:opacity-90 transition-opacity"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-tech-cyan mt-1" />
                      <div>
                        <h3 className="text-white font-semibold">Email</h3>
                        <p className="text-gray-300">info@inlighntech.com</p>
                        <p className="text-gray-300">admissions@inlighntech.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-tech-cyan mt-1" />
                      <div>
                        <h3 className="text-white font-semibold">Address</h3>
                        <p className="text-gray-300">
                          123 Tech Innovation Drive<br />
                          San Francisco, CA 94105<br />
                          United States
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex items-center space-x-3 p-3 glass-effect rounded-lg hover:scale-105 transition-all duration-300"
                      >
                        <span className="text-2xl">{social.icon}</span>
                        <span className="text-white font-medium">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-effect">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Office Hours</h2>
                  
                  <div className="space-y-3 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-tech-cyan">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-tech-cyan">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-gray-400">Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
