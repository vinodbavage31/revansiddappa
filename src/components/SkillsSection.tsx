import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Code, Brain, Database, LineChart, Wrench, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming & Querying',
    skills: ['Python', 'SQL'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: [
      'Supervised Learning',
      'Unsupervised Learning',
      'Feature Engineering',
      'Model Evaluation',
      'Model Tuning',
    ],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Database,
    title: 'Deep Learning',
    skills: ['CNNs', 'Transfer Learning', 'TensorFlow', 'Keras'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: LineChart,
    title: 'Data Analysis & Visualization',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Tableau'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: [
      'Git',
      'GitHub',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
      'Streamlit',
    ],
    color: 'from-primary to-accent',
    bgColor: 'bg-primary/10',
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Technical Expertise</span>
            </div>
            <h2 className="section-title">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid - Bento Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative group ${index === 1 ? 'lg:col-span-2' : ''}`}
              >
                <div className={`h-full glass-card p-6 rounded-3xl border border-border/50 transition-all duration-500 ${
                  hoveredCategory === index ? 'border-primary/50 shadow-lg shadow-primary/10' : ''
                }`}>
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className={`p-4 rounded-2xl ${category.bgColor} relative overflow-hidden`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity`} />
                        <category.icon className="w-7 h-7 text-foreground relative z-10" />
                      </motion.div>
                      <h3 className="text-xl font-bold font-display">{category.title}</h3>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: skillIndex * 0.05 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`px-4 py-2 rounded-xl text-sm font-medium border border-border/50 bg-card/50 backdrop-blur-sm 
                            hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Highlights */}
          <motion.div 
            variants={itemVariants}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: 'Python Libraries', value: '10+' },
              { label: 'ML Algorithms', value: '15+' },
              { label: 'Visualization Tools', value: '6+' },
              { label: 'Dev Tools', value: '8+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.02, y: -2 }}
                className="text-center p-5 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
