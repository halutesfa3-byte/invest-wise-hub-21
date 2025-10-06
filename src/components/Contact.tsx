import { Mail, Linkedin, Instagram, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";

interface ContactProps {
  onJoinClick: () => void;
}

export const Contact = ({ onJoinClick }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit to a backend
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Questions? Want to sponsor or partner with us? Reach out anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="p-8 rounded-xl bg-[var(--gradient-card)] border border-border">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-foreground">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div className="p-8 rounded-xl bg-card border border-border">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Connect With Us</h3>
              <div className="space-y-4">
                <a
                  href="mailto:isc@example.edu"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-sm text-muted-foreground">isc@example.edu</div>
                  </div>
                </a>

                <a
                  href="#"
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
                  href="#"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Instagram</div>
                    <div className="text-sm text-muted-foreground">@isc_club</div>
                  </div>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">GroupMe</div>
                    <div className="text-sm text-muted-foreground">Join our community chat</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Sponsor CTA */}
            <div className="p-8 rounded-xl bg-[var(--gradient-card)] border border-border">
              <h3 className="text-xl font-bold mb-3 text-foreground">Partner With Us</h3>
              <p className="text-muted-foreground mb-4">
                Interested in sponsoring ISC or hosting a speaker event? We'd love to explore
                partnership opportunities.
              </p>
              <Button variant="outline" size="lg" className="w-full">
                Learn About Sponsorship
              </Button>
            </div>

            {/* Not a member CTA */}
            <div className="p-8 rounded-xl bg-primary/10 border border-primary/20 text-center">
              <h3 className="text-xl font-bold mb-3 text-foreground">Not a Member Yet?</h3>
              <p className="text-muted-foreground mb-4">
                Join ISC today and start your investing journey with us.
              </p>
              <Button onClick={onJoinClick} variant="hero" size="lg">
                Join ISC
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
