import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";

interface JoinDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const JoinDialog = ({ open, onOpenChange }: JoinDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    year: "",
    major: "",
    heardAbout: "",
    goals: "",
    weeklyCommitment: "yes",
    leadershipInterest: false,
    optInEmail: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would normally submit to Google Forms or backend
    toast.success("Welcome to ISC! Check your email for next steps.");
    onOpenChange(false);
    setFormData({
      fullName: "",
      email: "",
      year: "",
      major: "",
      heardAbout: "",
      goals: "",
      weeklyCommitment: "yes",
      leadershipInterest: false,
      optInEmail: true,
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Join Investment Strategies Club</DialogTitle>
          <DialogDescription>
            Fill out this form to become a member. We'll send you a welcome email with next steps.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.edu"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="year">Year</Label>
              <Input
                id="year"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="Sophomore"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="major">Major</Label>
              <Input
                id="major"
                value={formData.major}
                onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                placeholder="Finance"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="heardAbout">How did you hear about us?</Label>
            <Input
              id="heardAbout"
              value={formData.heardAbout}
              onChange={(e) => setFormData({ ...formData, heardAbout: e.target.value })}
              placeholder="Friend, social media, campus poster..."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">What do you want to get out of this club?</Label>
            <Textarea
              id="goals"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="Share your goals and interests..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label>Can you attend weekly meetings?</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="yes"
                  name="commitment"
                  checked={formData.weeklyCommitment === "yes"}
                  onChange={() => setFormData({ ...formData, weeklyCommitment: "yes" })}
                  className="text-primary"
                />
                <label htmlFor="yes" className="text-sm cursor-pointer">
                  Yes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="sometimes"
                  name="commitment"
                  checked={formData.weeklyCommitment === "sometimes"}
                  onChange={() => setFormData({ ...formData, weeklyCommitment: "sometimes" })}
                />
                <label htmlFor="sometimes" className="text-sm cursor-pointer">
                  Sometimes
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="no"
                  name="commitment"
                  checked={formData.weeklyCommitment === "no"}
                  onChange={() => setFormData({ ...formData, weeklyCommitment: "no" })}
                />
                <label htmlFor="no" className="text-sm cursor-pointer">
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="leadership"
              checked={formData.leadershipInterest}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, leadershipInterest: checked as boolean })
              }
            />
            <label htmlFor="leadership" className="text-sm cursor-pointer">
              I'm interested in leadership or mentoring opportunities
            </label>
          </div>

          <div className="flex items-start gap-2">
            <Checkbox
              id="optIn"
              checked={formData.optInEmail}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, optInEmail: checked as boolean })
              }
            />
            <label htmlFor="optIn" className="text-sm cursor-pointer">
              I agree to receive club emails and announcements *
            </label>
          </div>

          <div className="flex gap-3">
            <Button type="submit" variant="hero" size="lg" className="flex-1">
              Join ISC
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
