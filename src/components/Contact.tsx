import React from "react";
import { motion, easeOut, cubicBezier } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Contact: React.FC = () => {
  // Create ref for checking if section is in viewport
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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.7,
        ease: cubicBezier(0.25, 0.1, 0.25, 1)
      }
    }
  };

  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        delay: custom * 0.15,
        ease: easeOut
      }
    })
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3 + custom * 0.1,
        type: "spring" as const,
        stiffness: 150
      }
    }),
    hover: {
      scale: 1.15,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className="py-20 bg-muted/30"
      ref={sectionRef}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {}
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          variants={headingVariants}
        >
          <h2 className="section-heading mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, 
            or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div 
          className="project-card max-w-xl mx-auto hover:shadow-lg transition-all duration-300"
          variants={cardVariants}
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <h3 className="text-xl font-semibold text-foreground mb-6">Let's Connect</h3>
          
          <div className="space-y-6">
            {/* Email */}
            <motion.div 
              className="flex items-center"
              variants={contactItemVariants}
              custom={0}
              whileHover={{ x: 5 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <motion.div 
                className="bg-primary/10 p-3 rounded-full mr-4"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(var(--primary), 0.2)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:abdulrehmanafzal546@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  abdulrehmanafzal546@gmail.com
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="flex items-center"
              variants={contactItemVariants}
              custom={1}
              whileHover={{ x: 5 }}
              transition={{ type: "tween", duration: 0.2 }}
            >
              <motion.div 
                className="bg-primary/10 p-3 rounded-full mr-4"
                whileHover={{ 
                  scale: 1.1, 
                  backgroundColor: "rgba(var(--primary), 0.2)" 
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-5 h-5 text-primary" />
              </motion.div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Faisalabad, Pakistan</p>
              </div>
            </motion.div>
          </div>

          {/* Social Media */}
          <motion.div 
            className="mt-8 pt-6 border-t border-border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/abdulrehmanafzal-webdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors group"
                variants={socialIconVariants}
                custom={0}
                whileHover="hover"
              >
                <Github className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/abdul-rehman-afzal-6a996631b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors group"
                variants={socialIconVariants}
                custom={1}
                whileHover="hover"
              >
                <Linkedin className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
              </motion.a>
              <motion.a
                href="https://wa.me/923269489434"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors group"
                variants={socialIconVariants}
                custom={2}
                whileHover="hover"
              >
                <FaWhatsapp className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;