import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Phone, GraduationCap, Target, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 section-gradient" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Passionate about turning data into decisions
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - About */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              {/* About Card */}
              <div className="glass-card p-8 rounded-3xl gradient-border h-full">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display mb-2">Who I Am</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
                        <div className="w-2 h-2 rounded-full bg-success open-to-work-pulse" />
                        <span className="text-xs font-medium text-success">Open to Work</span>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                        <MapPin className="w-3 h-3 text-primary" />
                        <span className="text-xs font-medium text-primary">Bengaluru, India</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Entry-level Data Scientist with strong technical expertise in Python libraries 
                  including Pandas and Scikit-learn. I specialize in extracting meaningful insights 
                  from complex datasets and building predictive models that drive business value.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a solid foundation in machine learning pipelines and hands-on experience 
                  deploying data-driven solutions using real-world datasets, I'm passionate about 
                  solving challenging problems at the intersection of data and technology.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-border/50">
                  <a 
                    href="mailto:revansiddappa9620@gmail.com" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>revansiddappa9620@gmail.com</span>
                  </a>
                  <a 
                    href="tel:+919620863472" 
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 9620863472</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education & Goals */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Education */}
              <div className="glass-card p-6 rounded-2xl gradient-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-primary/10">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-primary text-sm">
                    B.E. in AI & Machine Learning
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    BKIT, Bhalki, Karnataka
                  </p>
                  <p className="text-xs text-muted-foreground">
                    2021 – 2025 • CGPA: 7.64
                  </p>
                </div>
              </div>

              {/* Career Focus */}
              <div className="glass-card p-6 rounded-2xl gradient-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-accent/10">
                    <Target className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">Career Focus</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Seeking opportunities in Data Science and Machine Learning where I can 
                  apply my analytical skills to solve complex problems and contribute to 
                  innovative data-driven products.
                </p>
              </div>

              {/* What I'm Looking For */}
              <div className="glass-card p-6 rounded-2xl gradient-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-xl bg-success/10">
                    <Sparkles className="w-5 h-5 text-success" />
                  </div>
                  <h3 className="text-lg font-semibold">Looking For</h3>
                </div>
                <ul className="space-y-2">
                  {[
                    'Entry-level Data Scientist / ML Engineer roles',
                    'Teams that value learning and growth',
                    'Impactful real-world projects',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
