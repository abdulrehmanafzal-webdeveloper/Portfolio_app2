import { ExternalLink, Github, Play } from "lucide-react";
import note from "../assets/capture1.jpg";
import news from "../assets/capture2.jpg";
import shopease from "../assets/capture3.jpg";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "ShopEase – Modern E-Commerce Platform",
      description:
        "A full-stack e-commerce application with secure authentication, product management, shopping cart, and optimized APIs for seamless performance.",
      tech: ["FastAPI", "React", "MongoDB", "Authentication"],
      liveDemo: "https://shopease-e-commerce.vercel.app/",
      github:
        "https://github.com/abdulrehmanafzal-webdeveloper/Shopease-e-commerce",
      image: shopease, // 🖼️ placeholder path
      featured: true,
    },
    {
      title: "News App",
      description:
        "Responsive news reader UI displaying articles with modern design using React and Tailwind CSS.",
      tech: ["React", "Tailwind CSS", "Bootstrap", "Responsive Design"],
      liveDemo:
        "https://www.loom.com/share/9010d1a44f7c4b87b946e9224cb70aef?sid=8dd8c8a8-773f-420a-8c42-200741b3892c",
      github: "https://github.com/abdulrehmanafzal-webdeveloper/News-app",
      image: news, // 🖼️ placeholder path
      featured: true,
    },
    {
      title: "Note App",
      description:
        "A note-taking app with login, MongoDB storage, and CRUD features built with the MERN stack.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      liveDemo:
        "https://www.loom.com/share/803da4999e444269af36009747abf17d?sid=002818d1-8834-4e2e-b301-9162a3ba8665",
      github: "https://github.com/abdulrehmanafzal-webdeveloper/Note-app",
      image: note, // 🖼️ placeholder path
      featured: false,
    },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const techBadgeVariants = {
    hidden: { scale: 0 },
    visible: i => ({
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 10,
        delay: i * 0.05
      }
    })
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden" ref={sectionRef}>
      <motion.div
        className="absolute inset-0 -z-10"
        animate={{
          backgroundPosition: isInView ? ["0% 0%", "100% 100%"] : "0% 0%",
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="section-heading mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            A showcase of applications I've built using modern web technologies
          </motion.p>
        </motion.div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <motion.div
                  key={index}
                  className="project-card lg:flex lg:items-center lg:space-x-8 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  {/* 🖼️ Image placeholder */}
                  <motion.div 
                    className="lg:w-1/2 mb-6 lg:mb-0 overflow-hidden rounded-xl"
                    variants={imageVariants}
                  >
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow-md object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
                      whileHover={{ scale: 1.05 }}
                      initial={{ scale: 1 }}
                    />
                  </motion.div>

                  {/* Project Info */}
                  <div className="lg:flex-1">
                    <div className="flex items-center mb-3">
                      <motion.h3 
                        className="text-xl font-semibold text-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                      >
                        {project.title}
                      </motion.h3>
                      {project.featured && (
                        <motion.span 
                          className="ml-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ 
                            type: "spring",
                            stiffness: 500,
                            damping: 15,
                            delay: 0.3 * index 
                          }}
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>

                    <motion.p 
                      className="text-muted-foreground mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 * index }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-2 mb-6"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={containerVariants}
                    >
                      {project.tech.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="skill-badge hover:scale-110 transition-transform cursor-default"
                          custom={techIndex}
                          variants={techBadgeVariants}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(var(--primary-rgb), 0.2)",
                            color: "rgb(var(--primary-rgb))"
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </motion.div>

                    <motion.div 
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.5, delay: 0.5 * index }}
                    >
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        className="btn-secondary group text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="btn-secondary group text-sm flex items-center justify-center gap-2 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        <span>Code</span>
                      </motion.a>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
          </motion.div>

          {/* Other Projects */}
          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-foreground mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Other Projects
            </motion.h3>
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <motion.div 
                    key={index} 
                    className="project-card bg-card/30 backdrop-blur-sm p-5 rounded-xl hover:shadow-lg transition-all duration-300 border border-transparent hover:border-primary/20"
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                  >
                    {/* 🖼️ Image placeholder */}
                    <motion.div
                      className="overflow-hidden rounded-lg mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg shadow-sm object-cover w-full h-40 transition-transform duration-700 ease-in-out"
                        whileHover={{ scale: 1.1 }}
                        initial={{ scale: 1 }}
                        variants={imageVariants}
                      />
                    </motion.div>

                    <motion.h4 
                      className="text-lg font-semibold text-foreground mb-3"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {project.title}
                    </motion.h4>

                    <motion.p 
                      className="text-muted-foreground text-sm mb-4 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {project.description}
                    </motion.p>

                    <motion.div 
                      className="flex flex-wrap gap-1 mb-4"
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      variants={containerVariants}
                    >
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="skill-badge text-xs hover:scale-110 transition-transform cursor-default"
                          custom={techIndex}
                          variants={techBadgeVariants}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.tech.length > 3 && (
                        <motion.span 
                          className="skill-badge text-xs"
                          custom={3}
                          variants={techBadgeVariants}
                        >
                          +{project.tech.length - 3}
                        </motion.span>
                      )}
                    </motion.div>

                    <motion.div 
                      className="flex gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        className="flex-1 btn-secondary group text-xs flex items-center justify-center gap-1 hover:bg-primary hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Play className="w-3 h-3 group-hover:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        className="flex-1 btn-secondary group text-xs flex items-center justify-center gap-1 hover:bg-gray-800 hover:text-white transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                        <span>Code</span>
                      </motion.a>
                    </motion.div>
                  </motion.div>
                ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;