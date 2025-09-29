import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import capture1,capture2,capture3 from assests folder
import notes from "../assets/capture1.jpg";
import news from "../assets/capture2.jpg";
import shopease from "../assets/capture3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "ShopEase E-commerce",
      description:
        "Full-stack e-commerce platform built with FastAPI and React, featuring user authentication, product management, shopping cart, and secure payment processing.",
      tech: ["FastAPI", "React", "MongoDB", "JWT", "Stripe"],
      demo: "https://shopease-e-commerce.vercel.app/",
      github:
        "https://github.com/abdulrehmanafzal-webdeveloper/Shopease-e-commerce",

      featured: true,
      image: shopease, // Add your image path here later
    },
    {
      title: "MERN Notes App",
      description:
        "A comprehensive note-taking application with user authentication, CRUD operations, and real-time synchronization using the MERN stack.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],

      demo: "https://www.loom.com/share/803da4999e444269af36009747abf17d?sid=002818d1-8834-4e2e-b301-9162a3ba8665",
      github: "https://github.com/abdulrehmanafzal-webdeveloper/Note-app",

      featured: true,
      image: notes, // Add your image path here later
    },
    {
      title: "Modern News App",
      description:
        "Responsive news reader application built with React, Tailwind CSS, and Bootstrap. Features categorized news, search functionality, and mobile-first design.",
      tech: ["React", "Tailwind CSS", "Bootstrap", "News API"],
      demo: "https://www.loom.com/share/9010d1a44f7c4b87b946e9224cb70aef?sid=8dd8c8a8-773f-420a-8c42-200741b3892c",
      github: "https://github.com/abdulrehmanafzal-webdeveloper/News-app",

      featured: false,
      image: news, // Add your image path here later
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
  };

  const cardHoverVariants = {
    hover: {
      y: -12,
      scale: 1.03,
      rotateY: 2,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-background to-card/30"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My creative <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={cardHoverVariants.hover}
              whileTap={cardHoverVariants.tap}
              custom={index}
              style={{ 
                perspective: "1000px",
                transformStyle: "preserve-3d" 
              }}
            >
              <Card
                className={`group h-full bg-gradient-card border-primary/20 hover:border-primary/60 transition-all duration-500 overflow-hidden backdrop-blur-sm relative ${
                  project.featured 
                    ? "ring-2 ring-primary/30 shadow-primary/20" 
                    : "hover:shadow-primary/10"
                } hover:shadow-2xl hover:shadow-primary/25 transform-gpu`}
              >
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />

                {/* Project Image with enhanced hover effects */}
                <div className="relative w-full h-48 overflow-hidden bg-secondary/30 group-hover:bg-secondary/50 transition-colors duration-500">
                  <div
                    className="w-full h-full transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Image overlay with gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Project type indicator */}
                    <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <div className="px-3 py-1 bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                        <span className="text-xs font-medium text-primary-foreground">
                          Full Stack
                        </span>
                      </div>
                    </div>

                    {/* Fallback content with enhanced styling */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-muted-foreground text-sm font-medium opacity-50 group-hover:opacity-0 transition-opacity duration-300">
                        Project Screenshot
                      </span>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                      >
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-full border border-primary/30 animate-pulse">
                          Featured
                        </span>
                      </motion.div>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-6">
                    {/* Enhanced Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.6 + techIndex * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 text-sm bg-gradient-to-r from-secondary/80 to-secondary/60 text-secondary-foreground rounded-lg font-medium border border-secondary/40 hover:border-primary/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="flex gap-3">
                      {/* Code Button with enhanced styling */}
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-2 border-primary/30 text-primary hover:text-primary-foreground hover:bg-gradient-to-r hover:from-primary/90 hover:to-primary hover:border-primary transition-all duration-500 shadow-lg hover:shadow-primary/25 rounded-xl font-medium glow-button group/btn backdrop-blur-sm"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                            Code
                          </a>
                        </Button>
                      </motion.div>

                      {/* Demo Button with enhanced styling */}
                      <motion.div 
                        className="flex-1"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          size="sm"
                          className="w-full bg-gradient-to-r from-accent/80 via-primary/80 to-accent/80 text-primary-foreground font-semibold hover:from-accent hover:via-primary hover:to-accent hover:shadow-lg hover:shadow-accent/30 transition-all duration-500 rounded-xl glow-button group/btn backdrop-blur-sm border border-primary/20"
                          asChild
                        >
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                            Demo
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
