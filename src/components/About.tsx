import { TrendingUp, Users, Trophy, GraduationCap } from "lucide-react";

export const About = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Practical Investing Skills",
      description: "Learn real-world strategies, portfolio management, and market analysis techniques used by professionals.",
    },
    {
      icon: Users,
      title: "Networking & Speakers",
      description: "Connect with industry professionals, alumni, and peers passionate about finance and investing.",
    },
    {
      icon: Trophy,
      title: "Competition Practice",
      description: "Prepare for and compete in national investment competitions to build your resume and skills.",
    },
    {
      icon: GraduationCap,
      title: "Financial Literacy",
      description: "Give back by teaching financial literacy to the community while deepening your own knowledge.",
    },
  ];

  const faqs = [
    {
      question: "Do I need prior experience?",
      answer: "None required! We welcome everyone from complete beginners to experienced investors.",
    },
    {
      question: "What's the commitment?",
      answer: "Casual to intense — you choose. Weekly meetings are available, but participation is flexible.",
    },
    {
      question: "What will I get?",
      answer: "Resume-ready projects, practical investing skills, speaker nights, and competition experience.",
    },
    {
      question: "When do we meet?",
      answer: "We meet weekly. Check the Events section for the next meeting date and time.",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            What You'll Get
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join a community of driven students building real investing skills and making an impact.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-[var(--gradient-card)] border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-purple)] group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Quick FAQ</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300"
              >
                <h4 className="text-lg font-semibold mb-2 text-foreground">{faq.question}</h4>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
