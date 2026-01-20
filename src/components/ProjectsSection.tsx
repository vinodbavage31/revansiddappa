import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import projectLiver from '@/assets/project-liver.jpg';
import projectCrop from '@/assets/project-crop.jpg';
import projectRecommendation from '@/assets/project-recommendation.jpg';
import projectPdfSpeech from '@/assets/project-pdf-speech.jpg';
import projectMovie from '@/assets/project-movie.jpg';

const featuredProjects = [
  {
    id: 'liver-disease',
    title: 'Liver Disease Classification',
    description:
      'Predictive model to identify liver disease based on biochemical markers with an interactive Streamlit web application.',
    image: projectLiver,
    tags: ['Python', 'Scikit-learn', 'Streamlit', 'ML'],
    github: 'https://github.com/Revansiddappa02/Liver-Disease-Classification',
  },
  {
    id: 'crop-yield',
    title: 'Crop Yield Prediction',
    description:
      'Data-driven model to predict crop yield using soil parameters, sensor data, and CNN-based disease detection.',
    image: projectCrop,
    tags: ['Python', 'TensorFlow', 'CNN', 'XGBoost'],
    github: 'https://github.com/Revansiddappa02/Crop-Pield-Prediction-Using-Soil-Type',
  },
];

const moreProjects = [
  {
    id: 'recommendation-system',
    title: 'Product Recommendation System',
    description:
      'End-to-end hybrid recommendation engine designed to improve user discovery and increase AOV.',
    image: projectRecommendation,
    tags: ['Python', 'Collaborative Filtering', 'ML'],
    github: 'https://github.com/Revansiddappa02/Product-Recommendation-System',
  },
  {
    id: 'pdf-to-speech',
    title: 'PDF to Speech (SpeechLink)',
    description:
      'Dual-purpose application for voice-to-text and text-to-speech conversion with PDF support.',
    image: projectPdfSpeech,
    tags: ['Python', 'TTS', 'GUI', 'Accessibility'],
    github: 'https://github.com/Revansiddappa02/Pdf-to-Speech',
  },
  {
    id: 'movie-recommendation',
    title: 'Movie Recommendation System',
    description:
      'Content-based movie recommendation system that suggests similar movies based on user preferences and movie features.',
    image: projectMovie,
    tags: ['Python', 'ML', 'Content Filtering', 'Streamlit'],
    github: 'https://github.com/Revansiddappa02/Movie-recommendation-system-',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="projects" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Showcasing my work in data science and machine learning
            </p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="project-card group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold font-display mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <Link
                      to={`/project/${project.id}`}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm transition-all hover:scale-105"
                    >
                      View More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:text-primary transition-all text-sm font-medium"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* More Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold font-display mb-8 text-center">
              More Projects
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {moreProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass-card p-5 rounded-2xl gradient-border group"
                >
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <h4 className="font-bold font-display mb-2">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
