import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'abdulrehman151@gmail.com',
      href: 'mailto:abdulrehman@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 326 9489434',
      href: 'tel:+923269489434',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Faisalabad, Pakistan',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abdulrehmanafzal-webdeveloper',
      color: 'hover:text-foreground',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdul-rehman-afzal-6a996631b/"',
      color: 'hover:text-blue-400',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:abdulrehman151@gmail.com',
      color: 'hover:text-primary',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-card/30 to-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's work together to bring your ideas to life. I'm always open to discussing new opportunities and interesting projects.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 ml-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm currently looking for new opportunities and exciting projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                      <CardContent className="flex items-center gap-4 p-6">
                        <div className="p-3 bg-primary/20 rounded-lg">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{info.label}</p>
                          {info.href !== '#' ? (
                            <a
                              href={info.href}
                              className="text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 bg-gradient-card border border-primary/20 rounded-lg text-muted-foreground ${social.color} transition-all duration-300 hover:border-primary/40 hover:shadow-glow`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          
        </div>
      </div>
    </section>
  );
};

export default Contact;