import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Events } from "@/components/Events";
import { Notes } from "@/components/Notes";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { JoinDialog } from "@/components/JoinDialog";

const Index = () => {
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onJoinClick={() => setJoinDialogOpen(true)} />
      <Hero onJoinClick={() => setJoinDialogOpen(true)} />
      <About />
      <Events onRSVPClick={() => setJoinDialogOpen(true)} />
      <Notes />
      <Contact onJoinClick={() => setJoinDialogOpen(true)} />
      <Footer />
      <JoinDialog open={joinDialogOpen} onOpenChange={setJoinDialogOpen} />
    </div>
  );
};

export default Index;
