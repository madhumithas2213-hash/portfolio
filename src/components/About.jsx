import { motion } from 'framer-motion';
import { Target, BarChart, BookOpen } from 'lucide-react';
import './About.css';

export default function About() {
  const strengths = [
    { icon: <Target />, title: 'Analytical Thinking', desc: 'Approaching problems logically to discover underlying patterns.' },
    { icon: <Target />, title: 'Problem-solving', desc: 'Developing effective data-driven solutions for complex challenges.' },
    { icon: <BarChart />, title: 'Data Visualization', desc: 'Creating clear, insightful visual representations of complex data.' },
    { icon: <BookOpen />, title: 'Continuous Learning', desc: 'Constantly expanding knowledge of new analytics tools and methodologies.' }
  ];

  return (
    <section id="about" className="section bg-alt">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="summary-p">
              I am a passionate student deeply interested in the field of Data Analytics. 
              With a strong foundation in analyzing information, I have a profound interest in 
              extracting actionable insights from raw data to drive effective decision-making.
            </p>
            <p className="summary-p">
              Highly motivated to learn and grow in the analytics industry, I constantly seek out 
              new challenges and opportunities to apply theoretical knowledge to real-world datasets. 
              My goal is to translate complex numbers into compelling narratives.
            </p>

            <div className="strengths-grid">
              {strengths.map((str, idx) => (
                <div key={idx} className="strength-card">
                  <div className="strength-icon">{str.icon}</div>
                  <div className="strength-info">
                    <h4>{str.title}</h4>
                    <p>{str.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-image">
              <img src="/profile.jpg" alt="Madhumitha S" className="profile-photo" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
