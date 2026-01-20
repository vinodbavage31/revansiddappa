import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, Linkedin, FileText, Eye, Download, X } from 'lucide-react';

const ConnectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      description: 'Check out my code',
      href: 'https://github.com/Revansiddappa02',
      gradient: 'from-gray-600 to-gray-800',
      hoverGlow: 'hover:shadow-gray-500/40',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      description: 'Let\'s connect',
      href: 'https://www.linkedin.com/in/revansiddappa2/',
      gradient: 'from-[#0A66C2] to-[#0052a3]',
      hoverGlow: 'hover:shadow-blue-500/40',
    },
    {
      icon: FileText,
      label: 'Resume',
      description: 'View my experience',
      action: () => setIsResumeModalOpen(true),
      gradient: 'from-primary to-accent',
      hoverGlow: 'hover:shadow-primary/40',
    },
  ];

  return (
    <>
      <section id="connect" className="py-20 relative" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="max-w-5xl mx-auto"
          >
            {/* Section Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 className="section-title">
                Connect <span className="gradient-text">With Me</span>
              </h2>
              <p className="section-subtitle mx-auto mt-4">
                Let's connect and explore opportunities together
              </p>
            </motion.div>

            {/* Social Links Grid */}
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-6"
            >
              {socialLinks.map((link) => (
                <motion.div key={link.label} variants={itemVariants}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className={`group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${link.gradient} p-[2px] transition-all duration-300 hover:scale-110 ${link.hoverGlow} hover:shadow-2xl cursor-pointer`}
                    >
                      <div className="absolute inset-[2px] rounded-2xl bg-background flex flex-col items-center justify-center gap-2 transition-all group-hover:bg-background/90">
                        <link.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground group-hover:text-primary transition-colors duration-300" />
                        <span className="font-bold text-sm md:text-base">{link.label}</span>
                        <span className="text-[10px] md:text-xs text-muted-foreground text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.description}
                        </span>
                      </div>
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target={link.href?.startsWith('http') ? '_blank' : undefined}
                      rel={link.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={`group relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br ${link.gradient} p-[2px] transition-all duration-300 hover:scale-110 ${link.hoverGlow} hover:shadow-2xl cursor-pointer`}
                    >
                      <div className="absolute inset-[2px] rounded-2xl bg-background flex flex-col items-center justify-center gap-2 transition-all group-hover:bg-background/90">
                        <link.icon className="w-10 h-10 md:w-12 md:h-12 text-foreground group-hover:text-primary transition-colors duration-300" />
                        <span className="font-bold text-sm md:text-base">{link.label}</span>
                        <span className="text-[10px] md:text-xs text-muted-foreground text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          {link.description}
                        </span>
                      </div>
                    </a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsResumeModalOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card p-8 rounded-2xl max-w-md w-full relative gradient-border"
          >
            <button
              onClick={() => setIsResumeModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
            </button>

            <h3 className="text-2xl font-bold font-display gradient-text mb-6">My Resume</h3>
            
            <div className="space-y-4">
              <a
                href="https://drive.google.com/file/d/1vqlDYyOJIWiXJxXdtLIIDegzeLsqIevk/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 w-full px-6 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-medium transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
              >
                <Eye className="w-5 h-5" />
                <span>View Resume</span>
              </a>
              
              <a
                href="https://drive.usercontent.google.com/download?id=1vqlDYyOJIWiXJxXdtLIIDegzeLsqIevk&export=download"
                download
                className="flex items-center gap-3 w-full px-6 py-4 rounded-xl border border-border text-foreground font-medium transition-all hover:border-primary hover:text-primary"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ConnectSection;
