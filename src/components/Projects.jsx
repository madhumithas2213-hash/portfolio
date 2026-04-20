import { motion } from 'framer-motion';
import { Github, ExternalLink, Activity } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Sales Data Analysis Dashboard',
      desc: 'Analyze sales data to identify trends and business insights. End-to-end processing from raw data to actionable visuals.',
      tools: ['Python', 'Pandas', 'Matplotlib'],
      features: ['Data cleaning', 'Visualization', 'Insights generation'],
      github: '#'
    },
    {
      title: 'Customer Segmentation Analysis',
      desc: 'Segment customers based on behavior using data analysis techniques. Uncovered hidden groupings to drive targeted marketing.',
      tools: ['Python', 'SQL'],
      features: ['Data grouping', 'Pattern analysis'],
      github: '#'
    },
    {
      title: 'Internship / Industrial Training',
      desc: 'Practical exposure to real-world data analytics tasks and tools. Worked with industry mentors on active datasets.',
      tools: ['Real-world Scenarios', 'Industry Tools'],
      features: ['Hands-on learning', 'Industry experience'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="section bg-alt">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
            >
              <div className="project-content">
                <div className="project-header">
                  <Activity className="project-icon" />
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-features">
                  {project.features.map((feature, fIdx) => (
                    <span key={fIdx} className="feature-tag">{feature}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-footer">
                <ul className="project-tools">
                  {project.tools.map((tool, tIdx) => (
                    <li key={tIdx}>{tool}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
