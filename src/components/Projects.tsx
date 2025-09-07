import { ExternalLink, Github, Play } from "lucide-react";
import note from "../assets/capture1.jpg";
import news from "../assets/capture2.jpg";
import shopease from "../assets/capture3.jpg";

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

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of applications I've built using modern web technologies
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="space-y-12">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
                <div
                  key={index}
                  className="project-card lg:flex lg:items-center lg:space-x-8"
                >
                  {/* 🖼️ Image placeholder */}
                  <div className="lg:w-1/2 mb-6 lg:mb-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-xl shadow-md object-cover w-full h-64"
                    />
                  </div>

                  {/* Project Info */}
                  <div className="lg:flex-1">
                    <div className="flex items-center mb-3">
                      <h3 className="text-xl font-semibold text-foreground">
                        {project.title}
                      </h3>
                      {project.featured && (
                        <span className="ml-3 px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      <a
                        href={project.liveDemo}
                        className="btn-secondary group text-sm flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="btn-secondary group text-sm flex items-center justify-center gap-2"
                      >
                        <Github className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project, index) => (
                  <div key={index} className="project-card">
                    {/* 🖼️ Image placeholder */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg shadow-sm object-cover w-full h-40 mb-4"
                    />

                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {project.title}
                    </h4>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="skill-badge text-xs">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={project.liveDemo}
                        className="flex-1 btn-secondary group text-xs flex items-center justify-center gap-1"
                      >
                        <Play className="w-3 h-3 group-hover:scale-110 transition-transform" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.github}
                        className="flex-1 btn-secondary group text-xs flex items-center justify-center gap-1"
                      >
                        <Github className="w-3 h-3 group-hover:rotate-12 transition-transform" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
