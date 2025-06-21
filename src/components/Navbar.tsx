import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ProfessionalLogo } from "@/components/ui/professional-logo";
import { FluidButton } from "@/components/ui/fluid-animations";
import { LiquidButton } from "@/components/ui/liquid-animations";
import { KineticTypography } from "@/components/ui/kinetic-typography";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Verify Certificate", href: "/verify-certificate" },
    { name: "Contact Us", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg border-b" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="transition-all duration-300 group-hover:scale-105">
              <ProfessionalLogo
                size="md"
                variant={isScrolled ? "glow" : "gradient"}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <ProgressiveBlur
                key={link.name}
                isBlurred={false}
                transitionDuration={200}
              >
                <Link
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-300 hover:scale-105 block ${
                    isActive(link.href)
                      ? "text-primary drop-shadow-lg animate-focus-pulse"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <KineticTypography
                    text={link.name}
                    animation="stretch"
                    trigger="hover"
                    speed="fast"
                  />
                </Link>
              </ProgressiveBlur>
            ))}

            <LiquidButton
              variant="primary"
              liquidIntensity="subtle"
              className="text-sm px-4 py-2"
            >
              <KineticTypography
                text="Get Started"
                animation="bounce"
                trigger="hover"
                speed="fast"
              />
            </LiquidButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full glass-effect border-t">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <FluidButton className="w-full text-sm">Get Started</FluidButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
