import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);
  const [nameAnimated, setNameAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNameAnimated(true);
    }, 600);

    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 900);

    return () => {
      clearTimeout(timer);
      clearTimeout(contentTimer);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700 ease-out ${nameAnimated ? 'lg:justify-between' : 'justify-center'}`}>
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`flex-1 text-center lg:text-left transition-all duration-700 ease-out ${nameAnimated ? '' : 'flex items-center justify-center min-h-[60vh]'}`}
          >
            <div>
              <motion.h1
                layout
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-display mb-6"
              >
                <span className="gradient-text">Revansiddappa</span>
              </motion.h1>

              {showContent && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-10">
                    <TypeAnimation
                      sequence={[
                        'Data Scientist',
                        2000,
                        'ML Engineer',
                        2000,
                        'AI Enthusiast',
                        2000,
                        'Problem Solver',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="font-medium"
                    />
                  </div>

                  <p className="text-muted-foreground text-lg max-w-xl mb-10 leading-relaxed">
                    Transforming complex data into actionable insights. 
                    Building intelligent systems that solve real-world problems.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="#projects"
                      className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg transition-all hover:scale-105 hover:shadow-xl hover:shadow-primary/30"
                    >
                      View My Work
                    </a>
                    <a
                      href="#contact"
                      className="px-8 py-4 rounded-xl border border-border text-foreground font-semibold text-lg transition-all hover:border-primary hover:text-primary"
                    >
                      Get In Touch
                    </a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right - Profile Image */}
          {showContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="flex-shrink-0"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/50 to-accent/50 blur-3xl opacity-40" />
                
                {/* Floating animation wrapper */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  {/* Image container */}
                  <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] lg:w-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl shadow-primary/20">
                    <img
                      src={profilePhoto}
                      alt="Revansiddappa"
                      className="w-full h-full object-cover object-top"
                      style={{ imageRendering: 'crisp-edges' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </motion.div>

                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 glass-card px-4 py-3 rounded-xl"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-success open-to-work-pulse" />
                    <span className="text-sm font-medium">Open to Work</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default HeroSection;
