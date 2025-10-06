import { Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  onJoinClick: () => void;
}

export const Contact = ({ onJoinClick }: ContactProps) => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Connect With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow us on social media to stay updated with our latest events and insights.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 rounded-xl bg-card border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Follow Us</h3>
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/company/investment-strategies-club"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">LinkedIn</div>
                  <div className="text-sm text-muted-foreground">Follow our updates</div>
                </div>
              </a>

              <a
                href="https://www.instagram.com/investmentstrategiesclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Instagram className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Instagram</div>
                  <div className="text-sm text-muted-foreground">@investmentstrategiesclub</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
