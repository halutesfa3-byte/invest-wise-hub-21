import { Mail, Linkedin, Instagram, MessageSquare } from "lucide-react";
import iscLogo from "@/assets/isc-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={iscLogo} alt="ISC Logo" className="h-10 w-10" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Investment Strategies Club
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              A student-led club dedicated to teaching real investing, running a portfolio,
              competing nationally, and promoting financial literacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#notes" className="hover:text-primary transition-colors">
                  Notes
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-3">
              <a
                href="mailto:isc@example.edu"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Investment Strategies Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
