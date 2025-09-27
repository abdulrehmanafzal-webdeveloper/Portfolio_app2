import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiFastapi,
  SiGit,
  SiGithub,
  SiPostman,
  SiNetlify,
  SiVercel,
} from 'react-icons/si';

import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Core',
      skills: [
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'C#', icon: SiCplusplus, color: '#239120' },
        { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
        { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      ],
    },
    {
      title: 'Frontend Frameworks',
      skills: [
        { name: 'React', icon: SiReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      ],
    },
    {
      title: 'Backend & Databases',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      ],
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'GitHub', icon: SiGithub, color: '#181717' },
        { name: 'VS Code', icon: Code, color: '#007ACC' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
        { name: 'Netlify', icon: SiNetlify, color: '#00C7B7' },
        { name: 'Vercel', icon: SiVercel, color: '#000000' },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.05,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-center text-foreground">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {category.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      whileHover={{ 
                        scale: 1.05, 
                        rotateY: 10,
                        z: 50,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="group"
                    >
                      <div className="flex flex-col items-center p-6 bg-gradient-card border border-primary/20 rounded-lg hover:border-primary/40 transition-all duration-300 hover:shadow-glow card-hover">
                        <div 
                          className="mb-3 p-3 rounded-lg transition-all duration-300 group-hover:scale-110"
                          style={{ 
                            backgroundColor: `${skill.color}20`,
                            border: `1px solid ${skill.color}40`
                          }}
                        >
                          <IconComponent 
                            className="w-8 h-8 transition-all duration-300" 
                            style={{ color: skill.color }}
                          />
                        </div>
                        <h4 className="text-sm font-semibold text-center text-foreground group-hover:text-primary transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
        >
          {[
            { label: 'Projects Completed', value: '5+' },
            { label: 'Technologies Mastered', value: '20+' },
            { label: 'Years Learning', value: '2+' },
            { label: 'APIs Developed', value: '10+' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-card border border-primary/20 rounded-lg"
            >
              <div className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;