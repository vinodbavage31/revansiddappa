import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Target, Wrench, CheckCircle } from 'lucide-react';

import projectLiver from '@/assets/project-liver.jpg';
import projectCrop from '@/assets/project-crop.jpg';

const projectsData = {
  'liver-disease': {
    title: 'Liver Disease Classification',
    subtitle: 'ML-powered Diagnostic Tool',
    image: projectLiver,
    github: 'https://github.com/Revansiddappa02/Liver-Disease-Classification',
    overview:
      'This project develops a predictive model to identify liver disease based on biochemical markers such as Albumin, Bilirubin, and various Enzymes. It includes a comprehensive data preprocessing pipeline, comparative analysis of multiple classification algorithms, and an interactive Streamlit web application for real-time patient assessment.',
    problemStatement:
      'Early detection of liver disease is crucial for effective treatment and patient outcomes. Traditional diagnostic methods can be time-consuming and require expert interpretation. This project aims to automate the initial screening process using machine learning.',
    techStack: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Streamlit', 'Matplotlib', 'Seaborn'],
    keyFeatures: [
      'Comprehensive data preprocessing pipeline handling missing values and outliers',
      'Feature engineering and correlation analysis for optimal feature selection',
      'Comparison of multiple ML algorithms (Random Forest, SVM, Logistic Regression, XGBoost)',
      'Interactive Streamlit web application for real-time predictions',
      'Model evaluation with metrics like accuracy, precision, recall, and F1-score',
      'User-friendly interface for healthcare professionals',
    ],
    methodology: [
      'Data Collection & Exploration: Analyzed biochemical marker dataset with patient records',
      'Data Preprocessing: Handled missing values, normalized features, addressed class imbalance',
      'Feature Engineering: Identified key predictive features through correlation analysis',
      'Model Training: Trained and compared multiple classification algorithms',
      'Model Evaluation: Used cross-validation and multiple metrics for robust evaluation',
      'Deployment: Built interactive Streamlit app for real-time patient assessment',
    ],
    outcomes: [
      'Achieved high classification accuracy in identifying liver disease',
      'Developed a user-friendly tool for initial patient screening',
      'Demonstrated the effectiveness of ML in healthcare diagnostics',
    ],
  },
  'crop-yield': {
    title: 'Crop Yield Prediction Using Soil Type',
    subtitle: 'Agricultural AI Solution',
    image: projectCrop,
    github: 'https://github.com/Revansiddappa02/Crop-Pield-Prediction-Using-Soil-Type',
    overview:
      'Developed a data-driven model to predict crop yield using soil parameters, sensor data, and disease information. The project combines traditional machine learning with deep learning techniques for comprehensive agricultural analysis.',
    problemStatement:
      'Farmers face significant challenges in predicting crop yields due to complex interactions between soil quality, weather conditions, and crop health. Accurate predictions can help optimize resource allocation and improve food security.',
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras', 'XGBoost', 'Random Forest', 'CNN'],
    keyFeatures: [
      'Multi-source data integration (soil nutrients, temperature, humidity)',
      'Advanced feature engineering and correlation analysis',
      'Multiple ML algorithms for yield prediction',
      'CNN-based image classification for crop disease detection',
      'Comprehensive model evaluation and comparison',
      'Practical insights for agricultural decision-making',
    ],
    methodology: [
      'Data Collection: Gathered multi-source agricultural datasets including soil, weather, and crop data',
      'Data Preprocessing: Cleaned and normalized features, handled missing agricultural data',
      'Feature Engineering: Identified key factors affecting crop productivity',
      'ML Model Training: Implemented Random Forest, XGBoost, and Linear Regression',
      'Deep Learning: Developed CNN for image-based disease detection',
      'Model Evaluation: Compared models using appropriate agricultural metrics',
    ],
    outcomes: [
      'Accurate crop yield predictions based on soil and environmental factors',
      'Early crop health assessment through disease detection',
      'Actionable insights for precision farming practices',
    ],
  },
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData[projectId as keyof typeof projectsData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 glass-card">
        <div className="container mx-auto px-6 py-4">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-primary font-medium mb-2">{project.subtitle}</p>
                <h1 className="text-4xl md:text-5xl font-bold font-display">
                  {project.title}
                </h1>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium transition-all hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold font-display mb-4 flex items-center gap-3">
                <Target className="w-6 h-6 text-primary" />
                Project Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </motion.div>

            {/* Problem Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl font-bold font-display mb-4">Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problemStatement}
              </p>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold font-display mb-6 flex items-center gap-3">
                <Wrench className="w-6 h-6 text-primary" />
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-2.5 rounded-xl bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <h2 className="text-2xl font-bold font-display mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 glass-card p-4 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Methodology */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold font-display mb-6">Methodology</h2>
              <div className="space-y-4">
                {project.methodology.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 glass-card p-5 rounded-xl"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/20 text-primary font-bold flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Outcomes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="glass-card p-8 rounded-2xl border border-primary/20"
            >
              <h2 className="text-2xl font-bold font-display mb-6 gradient-text">
                Project Outcomes
              </h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{outcome}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center py-8"
            >
              <p className="text-muted-foreground mb-6">
                Interested in learning more about this project?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  View Full Code
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-border font-semibold transition-all hover:border-primary hover:text-primary"
                >
                  Get In Touch
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
