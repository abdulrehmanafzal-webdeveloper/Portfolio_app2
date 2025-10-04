import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import profileImage from '../assets/capture.jpg';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container z-10 w-full px-4 sm:px-6">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content - Will display second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 md:space-y-6 w-full text-center md:text-left"
          >
            

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground"
            >
              Abdul Rehman
            </motion.h1>

            <div className="h-16 sm:h-20">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'Software Engineer',
                  2000,
                  'Python Developer',
                  2000,
                  'MERN Stack Developer',
                  2000,
                  'AI/ML Enthusiast',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold gradient-text"
                repeat={Infinity}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed mx-auto md:mx-0"
            >
              Aspiring software engineer with expertise in Python, FastAPI, MERN stack, and Next.js. 
              I build scalable applications, APIs, and explore the exciting world of AI/ML.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.6 }}
  className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start"
>
  <Button
    onClick={scrollToProjects}
    className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800 shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
  >
    View My Work
  </Button>
  <Button
    variant="outline"
    onClick={scrollToContact}
    className="bg-transparent backdrop-blur-sm border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500/10 hover:text-indigo-600 hover:border-indigo-600 shadow-md hover:shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded-lg focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
  >
    Hire Me
  </Button>
</motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex space-x-4 pt-4 justify-center md:justify-start"
            >
              <a href="https://github.com/abdulrehmanafzal-webdeveloper" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:bg-primary/10 p-2 rounded-full">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-rehman-afzal-6a996631b/" target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:bg-primary/10 p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:abdulrehmanafzal546@gmail.com" className="hover:text-primary hover:bg-primary/10 p-2 rounded-full">
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image - Will display first on mobile */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mb-6 md:mb-0 md:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-border rounded-full opacity-30 blur-sm"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                src={profileImage}
                alt="Abdul Rehman Afzal"
                className="relative z-10 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-card shadow-primary"
              />
            </div>
          </motion.div>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;