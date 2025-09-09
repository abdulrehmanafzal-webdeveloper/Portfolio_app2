import React from "react";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  // Create refs for checking if elements are in viewport
  const [sectionRef, sectionInView] = useInView({ 
    triggerOnce: false,
    threshold: 0.1
  });

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeOut }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.5,
        delay: custom * 0.1,
        ease: easeOut
      }
    })
  };

  const statsVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: { 
        duration: 0.4,
        delay: 0.2 + custom * 0.1,
        type: "spring" as const, 
        stiffness: 100 
      }
    })
  };

  return (
    <motion.section 
      id="about" 
      className="py-20 bg-muted/30"
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {}
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={headingVariants}
        >
          <h2 className="section-heading mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate software engineering student with a strong foundation in web development 
            and a keen interest in creating innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div 
              className="project-card hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              custom={0}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing a BS in Software Engineering at National Textile University (NTU), 
                Faisalabad, Pakistan. My passion for web development began with curiosity about how 
                applications work, which led me to master the MERN stack and Python.
              </p>
            </motion.div>

            <motion.div 
              className="project-card hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              custom={1}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about building scalable applications and exploring the intersection 
                of web development and AI/ML. I believe in writing clean, efficient code and 
                creating user experiences that make a difference.
              </p>
            </motion.div>

            <motion.div 
              className="project-card hover:shadow-lg transition-shadow duration-300"
              variants={cardVariants}
              custom={2}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-3">Looking Forward</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities to apply my skills in real-world projects, 
                contribute to open-source initiatives, and continue learning from experienced 
                developers in the industry.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div 
              className="project-card text-center hover:shadow-lg transition-shadow duration-300"
              variants={statsVariants}
              custom={0}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                5+
              </motion.div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
            
            <motion.div 
              className="project-card text-center hover:shadow-lg transition-shadow duration-300"
              variants={statsVariants}
              custom={1}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-accent mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                10+
              </motion.div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </motion.div>
            
            <motion.div 
              className="project-card text-center hover:shadow-lg transition-shadow duration-300"
              variants={statsVariants}
              custom={2}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-primary mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                2024
              </motion.div>
              <div className="text-sm text-muted-foreground">Started Journey</div>
            </motion.div>
            
            <motion.div 
              className="project-card text-center hover:shadow-lg transition-shadow duration-300"
              variants={statsVariants}
              custom={3}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.div 
                className="text-3xl font-bold text-accent mb-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                100%
              </motion.div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;