import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import iscLogo from "@/assets/isc-logo.png";

interface NavigationProps {
  onJoinClick: () => void;
}

export const Navigation = ({ onJoinClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <img src={iscLogo} alt="ISC Logo" className="h-10 w-10" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              ISC
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("notes")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Notes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button onClick={onJoinClick} variant="hero" size="lg">
              Join ISC
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("events")}
              className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            >
              Events
            </button>
            <button
              onClick={() => scrollToSection("notes")}
              className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            >
              Notes
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left text-muted-foreground hover:text-foreground py-2"
            >
              Contact
            </button>
            <Button onClick={onJoinClick} variant="hero" size="lg" className="w-full">
              Join ISC
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
