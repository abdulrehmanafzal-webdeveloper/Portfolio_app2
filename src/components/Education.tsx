import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
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

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Education</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My academic journey in software engineering and computer science
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="project-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                    <p className="text-primary font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">{edu.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.period}</span>
                  <span className={`ml-3 px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'Current' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-success/10 text-success'
                  }`}>
                    {edu.status}
                  </span>
                </div>
              </div>
              
              <p className="text-muted-foreground leading-relaxed pl-14">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;