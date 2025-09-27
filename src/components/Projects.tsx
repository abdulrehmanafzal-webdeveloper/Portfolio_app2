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
import shopease from "../assets/capture1.jpg";

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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
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
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                className={`h-full bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-primary overflow-hidden ${
                  project.featured ? "ring-2 ring-primary/20" : ""
                }`}
              >
                {/* Project Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  {/* Using a div with background as fallback in case Next.js Image is not available */}
                  <div
                    className="w-full h-full bg-secondary/30 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Fallback if image doesn't load */}
                    <span className="text-muted-foreground text-sm">
                      Project Screenshot
                    </span>
                  </div>
                </div>

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl font-bold text-foreground">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4">
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-secondary/80 text-secondary-foreground rounded-lg font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {/* Code Button */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border border-gradient-to-r from-sky-300 to-indigo-300 text-sky-700 hover:text-white hover:bg-gradient-to-r hover:from-sky-300 hover:to-indigo-300 transition-all duration-300 shadow-sm rounded-xl"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>

                      {/* Demo Button */}
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 text-teal-800 font-medium hover:scale-105 hover:shadow-md hover:shadow-cyan-200/50 transition-all duration-300 rounded-xl"
                        asChild
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
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
