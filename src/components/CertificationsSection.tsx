import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink, Calendar, MapPin, Linkedin } from 'lucide-react';

const certifications = [
  {
    title: 'Data Science Certification',
    issuer: 'ExcelR - Rising Excellence',
    date: '28th August 2025',
    certNo: '20298/EXCELR/28082025',
    location: 'Bengaluru',
    link: 'https://drive.google.com/file/d/1dwzCVsj836isK4ygt_s_FGx6Rp28CJMe/view?usp=sharing',
    type: 'certification',
  },
  {
    title: 'Data Science Intern Certificate',
    issuer: 'AI Variant',
    date: '1st January 2026',
    certNo: 'AIV/24-25/Q4/12/17558',
    duration: '31st Mar 2025 to 31st Dec 2025',
    link: 'https://drive.google.com/file/d/1parYiDv-JEsuVFhiSskpbti1OsVDGx0f/view?usp=sharing',
    type: 'internship',
  },
  {
    title: 'LinkedIn Learning Certificate',
    issuer: 'LinkedIn Learning',
    date: '2025',
    link: 'https://www.linkedin.com/learning/certificates/a39e6357da03ccfbab667e85516796790d742e75e3d5fff136e338153e0ecd68',
    type: 'linkedin',
  },
];

const CertificationsSection = () => {
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
    <section id="certifications" className="py-24 lg:py-32 relative" ref={ref}>
      <div className="absolute inset-0 section-gradient" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="section-title">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="section-subtitle mx-auto mt-4">
              Professional credentials and achievements
            </p>
          </motion.div>

          {/* Certifications List */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title + index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="glass-card p-6 md:p-8 rounded-2xl gradient-border relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      cert.type === 'linkedin' 
                        ? 'bg-[#0A66C2]/10' 
                        : 'bg-primary/10'
                    }`}>
                      {cert.type === 'linkedin' ? (
                        <Linkedin className="w-8 h-8 text-[#0A66C2]" />
                      ) : (
                        <Award className="w-8 h-8 text-primary" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-display mb-2">
                      {cert.title}
                    </h3>
                    <p className={`font-medium mb-3 ${
                      cert.type === 'linkedin' ? 'text-[#0A66C2]' : 'text-primary'
                    }`}>
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{cert.date}</span>
                      </div>
                      {cert.location && (
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          <span>{cert.location}</span>
                        </div>
                      )}
                    </div>

                    {cert.certNo && (
                      <p className="text-xs text-muted-foreground">
                        Certificate No: {cert.certNo}
                        {cert.duration && <span className="block mt-1">Duration: {cert.duration}</span>}
                      </p>
                    )}
                  </div>

                  {/* View Button */}
                  <div className="flex-shrink-0">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all hover:scale-105 hover:shadow-lg ${
                        cert.type === 'linkedin'
                          ? 'bg-[#0A66C2] text-white hover:shadow-blue-500/25'
                          : 'bg-primary text-primary-foreground hover:shadow-primary/25'
                      }`}
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
