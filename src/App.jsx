import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import GitHubCalendarComponent from "./components/GitHubCalendar";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import CommandPalette from "./components/ui/CommandPalette";
import CertificatesPage from "./pages/CertificatesPage";
import ResumePage from "./pages/ResumePage";

function HomePage({ onOpenCommandPalette }) {
  return (
    <>
      <Navbar onOpenCommandPalette={onOpenCommandPalette} />
      <main>
        <Hero />
        <Overview />
        <SocialLinks />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}

function App() {
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-zinc-950 text-zinc-50">
        <Routes>
          <Route
            path="/"
            element={<HomePage onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />}
          />
          <Route 
            path="/certificates" 
            element={<CertificatesPage />} 
          />
          <Route 
            path="/resume" 
            element={<ResumePage />} 
          />
        </Routes>

        <CommandPalette
          isOpen={isCommandPaletteOpen}
          onClose={() => setIsCommandPaletteOpen(false)}
        />
      </div>
    </Router>
  );
}

export default App;
