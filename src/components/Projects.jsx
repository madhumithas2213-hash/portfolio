import { motion } from 'framer-motion';
import { ExternalLink, Activity } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.12-.34 6.4-1.51 6.4-6.98 0-1.5-.5-2.7-1.3-3.6.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7.3 1.5 6.3 1.8 6.3 1.8c-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.6 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);
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
                      <GithubIcon size={20} />
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
