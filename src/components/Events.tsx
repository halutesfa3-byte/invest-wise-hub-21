import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { Button } from "./ui/button";
import chartPattern from "@/assets/chart-pattern.jpg";

interface EventsProps {
  onRSVPClick: () => void;
}

export const Events = ({ onRSVPClick }: EventsProps) => {
  return (
    <section id="events" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${chartPattern})`, backgroundSize: "cover" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Next Meeting
          </h2>
          <p className="text-xl text-muted-foreground">Join us for our upcoming session</p>
        </div>

        {/* Meeting 1 Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-[var(--gradient-card)] border border-border shadow-[var(--shadow-elegant)]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Club Meeting 1 — Getting Started
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>TBD - Check back soon</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>60 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>Location TBD</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>All members welcome</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-foreground">Quick Agenda:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>5 min: Introductions — board members and new faces</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>10 min: Club overview, quick FAQs, and social links</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>10 min: Semester roadmap and guest speakers</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>15 min: Mini lesson — compound interest and money priorities</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>10 min: Q&A + sign-up for practice pitch night</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={onRSVPClick} variant="hero" size="lg">
                  RSVP Now
                </Button>
              </div>

              <div className="lg:w-64 p-6 rounded-lg bg-card border border-border">
                <h4 className="font-semibold mb-4 text-foreground">What to Bring</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Your curiosity and questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Notebook for notes (optional)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    <span>Open mind — no prior experience needed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Join GroupMe CTA */}
        <div className="max-w-4xl mx-auto mt-8 p-6 rounded-lg bg-primary/10 border border-primary/20 text-center">
          <p className="text-foreground mb-2">
            Stay updated on all meetings and announcements
          </p>
          <p className="text-sm text-muted-foreground">
            Join our GroupMe for real-time updates and community discussions
          </p>
        </div>
      </div>
    </section>
  );
};
