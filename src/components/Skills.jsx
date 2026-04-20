import { motion } from 'framer-motion';
import { Database, Code, Layout, BarChart, PenTool } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code />,
      skills: [
        { name: 'Python', level: 85 },
        { name: 'SQL', level: 80 }
      ]
    },
    {
      title: 'Data & Analytics Tools',
      icon: <Database />,
      skills: [
        { name: 'Excel', level: 90 },
        { name: 'Power BI', level: 65 }
      ]
    },
    {
      title: 'Frontend Web',
      icon: <Layout />,
      skills: [
        { name: 'React', level: 75 },
        { name: 'HTML/CSS', level: 80 }
      ]
    },
    {
      title: 'Core Concepts',
      icon: <BarChart />,
      skills: [
        { name: 'Data Cleaning', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Basic Statistics', level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <div className="cat-header">
                <div className="cat-icon">{cat.icon}</div>
                <h3>{cat.title}</h3>
              </div>
              <div className="cat-skills">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <motion.div 
                        className="progress-bar-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (0.1 * sIdx) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
