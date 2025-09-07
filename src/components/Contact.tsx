import { Mail, MapPin, Github, Linkedin } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, 
            or just having a chat about technology.
          </p>
        </div>

        <div className="project-card max-w-xl mx-auto">
          <h3 className="text-xl font-semibold text-foreground mb-6">Let's Connect</h3>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Email</p>
                <a
                  href="mailto:abdulrehmanafzal546@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  abdulrehmanafzal546@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Location</p>
                <p className="text-muted-foreground">Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Follow me on social media</p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/abdulrehmanafzal-webdeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors group"
              >
                <Github className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rehman-afzal-6a996631b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
              </a>
              <a
                href="https://wa.me/923269489434"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary hover:bg-primary/10 p-3 rounded-full transition-colors group"
              >
                <FaWhatsapp className="w-5 h-5 text-secondary-foreground group-hover:text-primary" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
