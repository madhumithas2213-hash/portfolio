import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Hello, I am
          </motion.h2>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Madhumitha S
          </motion.h1>
          
          <motion.h3 
            className="hero-role"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Student Data Analyst
          </motion.h3>
          
          <motion.p 
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            “Turning data into meaningful insights”
          </motion.p>
          
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a href="#projects" className="btn btn-primary cta-btn">
              View Projects <ArrowRight size={18} />
            </a>
            <a href="/Madhumitha.Resume.pdf" className="btn btn-outline cta-btn" download>
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative background elements */}
      <div className="hero-data-decor">
        <div className="bar-chart-decor">
          <motion.div className="bar" initial={{ height: 0 }} animate={{ height: '40%' }} transition={{ delay: 0.5, duration: 1 }} />
          <motion.div className="bar" initial={{ height: 0 }} animate={{ height: '70%' }} transition={{ delay: 0.7, duration: 1 }} />
          <motion.div className="bar" initial={{ height: 0 }} animate={{ height: '50%' }} transition={{ delay: 0.9, duration: 1 }} />
          <motion.div className="bar accent" initial={{ height: 0 }} animate={{ height: '90%' }} transition={{ delay: 1.1, duration: 1 }} />
          <motion.div className="bar" initial={{ height: 0 }} animate={{ height: '60%' }} transition={{ delay: 1.3, duration: 1 }} />
        </div>
      </div>
    </section>
  );
}
