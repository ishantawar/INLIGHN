import { Link } from "react-router-dom";
import { ProfessionalLogo } from "@/components/ui/professional-logo";
import { KineticTypography } from "@/components/ui/kinetic-typography";
import {
  LiquidButton,
  FluidBackground,
} from "@/components/ui/liquid-animations";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

export const Footer = () => {
  return (
    <FluidBackground
      intensity="low"
      colorScheme="monochrome"
      className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <ProgressiveBlur isBlurred={false} transitionDuration={500}>
              <div className="mb-4">
                <ProfessionalLogo size="lg" variant="glow" />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                <KineticTypography
                  text="Empowering the next generation of tech professionals with immersive internship programs and hands-on experience in cutting-edge technologies."
                  animation="wave"
                  trigger="scroll"
                  speed="slow"
                  stagger={false}
                />
              </p>
            </ProgressiveBlur>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-tech-cyan transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-tech-cyan transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-tech-cyan transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-tech-cyan transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/programs"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/verify-certificate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Verify Certificate
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>info@inlighntech.com</li>
              <li>+1 (555) 123-4567</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            <KineticTypography
              text="© 2024 Inlighn Tech. All rights reserved."
              animation="fade-in"
              trigger="scroll"
              speed="normal"
            />
          </p>
        </div>
      </div>
    </FluidBackground>
  );
};
