import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

interface HeroProps {
  onJoinClick: () => void;
}

export const Hero = ({ onJoinClick }: HeroProps) => {
  const scrollToEvents = () => {
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-[var(--gradient-overlay)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary-glow to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Investment Strategies Club
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
          We're a student-led club open to anyone interested in finance or investing. 
          Whether you're brand new or already into markets, we'll help you grow. Our mission 
          is to teach real investing, run a student portfolio, compete in national contests, 
          and give back by teaching financial literacy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Button onClick={onJoinClick} variant="hero" size="lg" className="group">
            Join ISC
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button onClick={scrollToEvents} variant="outline" size="lg">
            See Events
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-2">100+</div>
            <div className="text-sm text-muted-foreground">Active Members</div>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-2">Weekly</div>
            <div className="text-sm text-muted-foreground">Meetings</div>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-2">National</div>
            <div className="text-sm text-muted-foreground">Competitions</div>
          </div>
          <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border border-border">
            <div className="text-3xl font-bold text-primary mb-2">Real</div>
            <div className="text-sm text-muted-foreground">Portfolio</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
