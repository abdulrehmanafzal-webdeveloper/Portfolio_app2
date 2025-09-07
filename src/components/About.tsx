const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate software engineering student with a strong foundation in web development 
            and a keen interest in creating innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="project-card">
              <h3 className="text-xl font-semibold text-foreground mb-3">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm currently pursuing a BS in Software Engineering at National Textile University (NTU), 
                Faisalabad, Pakistan. My passion for web development began with curiosity about how 
                applications work, which led me to master the MERN stack and Python.
              </p>
            </div>

            <div className="project-card">
              <h3 className="text-xl font-semibold text-foreground mb-3">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about building scalable applications and exploring the intersection 
                of web development and AI/ML. I believe in writing clean, efficient code and 
                creating user experiences that make a difference.
              </p>
            </div>

            <div className="project-card">
              <h3 className="text-xl font-semibold text-foreground mb-3">Looking Forward</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm actively seeking opportunities to apply my skills in real-world projects, 
                contribute to open-source initiatives, and continue learning from experienced 
                developers in the industry.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="project-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="project-card text-center">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            
            <div className="project-card text-center">
              <div className="text-3xl font-bold text-primary mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Started Journey</div>
            </div>
            
            <div className="project-card text-center">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;