import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Education = () => {
  const educationData = [
    {
      degree: 'BS Software Engineering',
      institution: 'National Textile University (NTU)',
      location: 'Faisalabad, Pakistan',
      period: '2024 – Present',
      description: 'Pursuing Bachelor of Science in Software Engineering with focus on modern software development practices, algorithms, data structures, and emerging technologies.',
      status: 'Current',
      highlights: [
        'Software Development Methodologies',
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Web Development Technologies',
        'Software Engineering Principles',
      ]
    },
    {
      degree: 'Intermediate (ICS)',
      institution: 'Punjab Group of Colleges',
      location: 'Faisalabad, Pakistan',
      period: '2022 – 2024',
      description: 'Completed Intermediate education with ICS focus, building strong foundation in Mathematics, Physics, and Computer Science.',
      status: 'Completed',
      highlights: [
        'Mathematics & Statistics',
        'Physics & Applied Sciences',
        'Computer Science Fundamentals',
        'Analytical Problem Solving',
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-background to-card/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey and continuous learning in software engineering
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-primary hidden md:block" />

            {educationData.map((education, index) => (
              <motion.div
                key={education.degree}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative mb-12 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow hidden md:block" />

                {/* Content Card */}
                <div className="md:ml-20">
                  <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-primary card-hover">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                            <GraduationCap className="w-6 h-6 text-primary" />
                            {education.degree}
                            {education.status === 'Current' && (
                              <span className="px-3 py-1 text-xs font-semibold bg-primary/20 text-primary rounded-full">
                                Current
                              </span>
                            )}
                          </CardTitle>
                          <p className="text-xl text-primary font-semibold mt-1">
                            {education.institution}
                          </p>
                        </div>
                        
                        <div className="text-right space-y-2">
                          <div className="flex items-center gap-2 text-muted-foreground justify-end">
                            <Calendar className="w-4 h-4" />
                            <span className="font-medium">{education.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground justify-end">
                            <MapPin className="w-4 h-4" />
                            <span>{education.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {education.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Key Subjects & Skills:</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {education.highlights.map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-center gap-2 text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                              <span className="text-sm">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Continuous Learning
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond formal education, I'm constantly learning through online courses, 
                technical documentation, and hands-on project development. I stay updated 
                with the latest trends in software engineering, AI/ML, and web development.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;