import { GraduationCap, Calendar } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const educationData = [
    {
      degree: "BS Software Engineering",
      institution: "National Textile University (NTU)",
      location: "Faisalabad, Pakistan",
      period: "2024 – Present",
      status: "Current",
      description: "Comprehensive software engineering program covering algorithms, data structures, software design patterns, and modern development methodologies."
    },
    {
      degree: "Intermediate",
      institution: "Punjab Group of Colleges",
      location: "Faisalabad",
      period: "Completed: 2024",
      status: "Completed",
      description: "Pre-engineering track with focus on mathematics, physics, and computer science fundamentals."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -5,
      transition: { type: "spring" as const, stiffness: 300 }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const iconContainerVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { 
      scale: 1.1,
      backgroundColor: "rgba(var(--color-primary-rgb), 0.2)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="education" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={headingVariants}
        >
          <h2 className="section-heading mb-4 relative inline-block">
            Education
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"
              initial={{ width: "0%" }}
              animate={isInView ? { width: "100%" } : { width: "0%" }}
              transition={{ delay: 0.2, duration: 0.7 }}
            />
          </h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            variants={itemVariants}
          >
            My academic journey in software engineering and computer science
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {educationData.map((edu, index) => (
            <motion.div 
              key={index} 
              className="project-card rounded-xl p-5 border border-transparent hover:border-primary/10 transition-all duration-300"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <motion.div 
                    className="bg-primary/10 p-3 rounded-full mr-4"
                    variants={iconContainerVariants}
                    whileHover="hover"
                    initial={{ rotate: -5 }}
                    animate={{ rotate: 0 }}
                  >
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-xl font-semibold text-foreground"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.5 }}
                    >
                      {edu.degree}
                    </motion.h3>
                    <motion.p 
                      className="text-primary font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 * index, duration: 0.5 }}
                    >
                      {edu.institution}
                    </motion.p>
                    <motion.p 
                      className="text-sm text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 * index, duration: 0.5 }}
                    >
                      {edu.location}
                    </motion.p>
                  </div>
                </div>
                
                <motion.div 
                  className="flex items-center text-sm text-muted-foreground"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 * index, duration: 0.5 }}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.period}</span>
                  <motion.span 
                    className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-success/10 text-success'
                    }`}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {edu.status}
                  </motion.span>
                </motion.div>
              </div>
              
              <motion.p 
                className="text-muted-foreground leading-relaxed pl-14"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 * index, duration: 0.5 }}
              >
                {edu.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;