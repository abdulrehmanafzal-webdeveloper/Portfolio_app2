import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/capture.jpg";
import cv from "../assets/Contact Information - Resume.pdf";

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden mx-auto py-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image on Top */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src={heroImage}
            alt="Abdul Rehman Afzal"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full shadow-lg object-cover border-4 border-primary/20"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          className="fade-in"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-foreground mb-2">Abdul Rehman</span>
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Afzal
            </span>
          </h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Aspiring Web Developer & Software Engineer
          </motion.p>

          <motion.p
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Passionate about building scalable applications, APIs, and exploring
            AI/ML. Currently pursuing BS Software Engineering at National
            Textile University.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="fade-in-delay flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a className="btn-hero group" download href={cv}>
            <Download className="inline-block w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </a>

          <div className="flex space-x-4">
            <a
              href="https://github.com/abdulrehmanafzal-webdeveloper"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <Github className="inline-block w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-rehman-afzal-6a996631b/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <Linkedin className="inline-block w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </a>
            <a
              href="mailto:abdulrehmanafzal546@gmail.com"
              className="btn-secondary group"
            >
              <Mail className="inline-block w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Email
            </a>
          </div>
        </motion.div>

        {/* Scroll Down Chevron */}
        <motion.button
          onClick={scrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ChevronDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
