import { FileText, Download, Calendar } from "lucide-react";

export const Notes = () => {
  const notes = [
    {
      date: "Meeting 1",
      title: "Getting Started - Intro to ISC",
      description: "Club overview, meeting schedule, and compound interest basics",
      type: "Slides & Notes",
      available: false,
    },
    {
      date: "Coming Soon",
      title: "Vocabulary Sheet",
      description: "Essential investing and finance terms for beginners",
      type: "Reference",
      available: false,
    },
    {
      date: "Coming Soon",
      title: "Portfolio Fundamentals",
      description: "Building your first investment portfolio",
      type: "Guide",
      available: false,
    },
  ];

  return (
    <section id="notes" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            ISC Notes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our quick library of meeting slides, vocab sheets, and short write-ups
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-purple)] group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                {note.available && (
                  <button className="p-2 rounded-md hover:bg-muted transition-colors">
                    <Download className="w-5 h-5 text-muted-foreground" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 mb-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{note.date}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2 text-foreground">{note.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{note.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                  {note.type}
                </span>
                {!note.available && (
                  <span className="text-xs text-muted-foreground">Available after meeting</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-[var(--gradient-card)] border border-border text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3 text-foreground">Looking for More Resources?</h3>
          <p className="text-muted-foreground mb-4">
            All meeting materials, vocabulary sheets, and additional resources will be published here
            after each meeting. Check back regularly for updates.
          </p>
          <p className="text-sm text-muted-foreground">
            Members can also access exclusive content through our member portal (coming soon).
          </p>
        </div>
      </div>
    </section>
  );
};
