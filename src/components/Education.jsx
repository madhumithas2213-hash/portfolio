import { motion } from 'framer-motion';
import { GraduationCap, Briefcase } from 'lucide-react';
import './Education.css';

export default function Education() {
  const experiences = [
    {
      type: 'education',
      title: 'Your Degree Name',
      subtitle: 'Your College Name',
      date: 'Currently Pursuing',
      icon: <GraduationCap />
    },
    {
      type: 'experience',
      title: 'Data Analyst Intern',
      subtitle: 'Company Name (Optional)',
      date: '2023 - Present',
      icon: <Briefcase />
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Experience
        </motion.h2>

        <div className="timeline">
          {experiences.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="timeline-item"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="timeline-dot">
                {item.icon}
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{item.date}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-subtitle">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
