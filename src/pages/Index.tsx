import Navbar from '../components/Navigation';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Education from '../components/Education';
import About from '../components/About';
import Contact from '../components/Contact';

const Portfolio = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-card/50">
        <div className="section-container text-center">
          <p className="text-muted-foreground">
            © 2024 Abdul Rehman Afzal. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;