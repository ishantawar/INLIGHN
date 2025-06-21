
import { useState, useEffect } from 'react';
import { SkeletonLoader } from '@/components/ui/skeleton-loader';

const partners = [
  { name: 'Microsoft', logo: 'https://img.icons8.com/color/96/microsoft.png', alt: 'Microsoft Logo' },
  { name: 'Google', logo: 'https://img.icons8.com/color/96/google-logo.png', alt: 'Google Logo' },
  { name: 'Amazon', logo: 'https://img.icons8.com/color/96/amazon.png', alt: 'Amazon Logo' },
  { name: 'Meta', logo: 'https://img.icons8.com/color/96/meta.png', alt: 'Meta Logo' },
  { name: 'Apple', logo: 'https://img.icons8.com/color/96/mac-os.png', alt: 'Apple Logo' },
  { name: 'Netflix', logo: 'https://img.icons8.com/color/96/netflix.png', alt: 'Netflix Logo' },
];

export const TechPartnersSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Simulate loading time for demonstration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleImageLoad = (partnerName: string) => {
    setLoadedImages(prev => ({ ...prev, [partnerName]: true }));
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background/50 to-transparent">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Trusted by <span className="text-primary-brand">Industry Leaders</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="flex flex-col items-center space-y-4 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-110 hover:rotate-3"
            >
              {isLoading || !loadedImages[partner.name] ? (
                <SkeletonLoader 
                  className="w-16 h-16 rounded-lg"
                  variant={index % 3 === 0 ? 'shimmer' : index % 3 === 1 ? 'wave' : 'pulse'}
                />
              ) : null}
              
              <img
                src={partner.logo}
                alt={partner.alt}
                className={`w-16 h-16 object-contain transition-all duration-500 hover:glow-teal ${
                  isLoading || !loadedImages[partner.name] ? 'hidden' : 'block'
                }`}
                onLoad={() => handleImageLoad(partner.name)}
                style={{
                  filter: 'drop-shadow(0 0 20px rgba(14, 210, 247, 0.2))',
                }}
              />
              
              {!isLoading && (
                <span className="text-muted-foreground text-sm font-medium transition-colors duration-300">
                  {partner.name}
                </span>
              )}
              
              {isLoading && (
                <SkeletonLoader 
                  className="h-4 w-16"
                  variant="wave"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
