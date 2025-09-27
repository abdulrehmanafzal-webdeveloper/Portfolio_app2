import { motion } from 'framer-motion';
import { Code, Users, Lightbulb, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'I believe in writing clean, maintainable, and well-documented code that stands the test of time.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams and learning from senior developers to deliver exceptional results.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring new technologies and methodologies to solve problems creatively.',
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering high-quality solutions that meet user needs and business objectives.',
    },
  ];

  const stats = [
    { number: '5+', label: 'Projects Completed' },
    { number: '2+', label: 'Years Learning' },
    { number: '20+', label: 'Technologies' },
    { number: '100%', label: 'Dedication' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate software engineer with a drive to create innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              A Bit About Me
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I am Abdul Rehman Afzal, a passionate software engineer and full-stack developer 
                currently pursuing my BS in Software Engineering at National Textile University (NTU), 
                Faisalabad, Pakistan. My journey in technology began with a curiosity about how 
                digital solutions can solve real-world problems.
              </p>
              
              <p>
                With expertise spanning across modern web technologies including Python, FastAPI, 
                MERN stack, and Next.js, I have successfully delivered 15+ projects ranging from 
                e-commerce platforms to AI-integrated APIs. My experience includes collaborating 
                with senior developers and contributing to dynamic applications that serve real users.
              </p>
              
              <p>
                What drives me is the opportunity to create scalable, efficient solutions while 
                continuously learning and adapting to new technologies. I'm particularly interested 
                in AI/ML integration, cloud services, and building applications that make a 
                meaningful impact.
              </p>
              
              <p>
                I am committed to writing clean, maintainable code and believe in the power of 
                collaboration to achieve exceptional results. Currently, I'm exploring opportunities 
                to work with innovative teams and contribute to projects that push the boundaries 
                of what's possible with technology.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-center"
              >
                <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-3xl font-bold text-center text-foreground">
            My <span className="gradient-text">Values</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <Card className="h-full bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-primary text-center">
                    <CardHeader className="pb-4">
                      <div className="mx-auto p-3 bg-primary/20 rounded-lg w-fit mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-card border-primary/20 max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always excited to take on new challenges and collaborate on innovative projects. 
                Let's build something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold glow-button transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default About;