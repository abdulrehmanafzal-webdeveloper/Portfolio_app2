import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Wrench,
  Cpu,
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaJsSquare,
} from "react-icons/fa";
import { VscChromeClose } from 'react-icons/vsc';
import {
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTypescript,
  SiBootstrap,
  SiTailwindcss,
  SiPostman,
  SiNetlify,
  SiVercel
} from "react-icons/si";
import  RailwayIcon from "../assets/RailwayIcon.png";
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      skills: [
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 w-5 h-5" /> },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-500 w-5 h-5" /> },
        { name: "Python", icon: <FaPython className="text-yellow-500 w-5 h-5" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500 w-5 h-5" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 w-5 h-5" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 w-5 h-5" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-5 h-5" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-700 w-5 h-5" /> },
      ],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6 text-primary" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 w-5 h-5" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-500 w-5 h-5" /> },
      ],
    },
    {
      title: "Styling & UI",
      icon: <Palette className="w-6 h-6 text-primary" />,
      skills: [
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 w-5 h-5" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-5 h-5" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      skills: [
        { name: "GitHub", icon: <FaGithub className="text-gray-900 dark:text-white w-5 h-5" /> },
        { name: "VS Code", icon: <VscChromeClose className="text-blue-500 w-5 h-5" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500 w-5 h-5" /> },
        { name: "Netlify", icon: <SiNetlify className="text-teal-500 w-5 h-5" /> },
        { name: "Vercel", icon: <SiVercel className="text-black dark:text-white w-5 h-5" /> },
        { name: "Railway", icon: <img src={RailwayIcon} alt="Railway" className=" w-5 h-5" />  },
      ],
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="project-card p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              variants={cardVariants}
            >
              <div className="flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-4 text-center">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="skill-badge flex items-center gap-2 px-3 py-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={skillIndex}
                    variants={badgeVariants}
                  >
                    {skill.icon}
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Always Learning Card */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="project-card inline-block p-6">
            <Cpu className="w-6 h-6 text-primary mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-foreground mb-3">
              Always Learning
            </h3>
            <p className="text-muted-foreground">
              Continuously expanding my skillset with new technologies and best
              practices. Currently exploring advanced React patterns, serverless
              architectures, and AI/ML integration.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
