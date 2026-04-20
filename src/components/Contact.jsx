import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section bg-alt">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Contact Information</h3>
            <p>Ready to turn your data into insights? Feel free to reach out to me for any opportunities or collaborations.</p>
            
            <ul className="info-list">
              <li>
                <div className="info-icon"><Mail size={20} /></div>
                <span>madhumithas2213@gmail.com</span>
              </li>
              <li>
                <div className="info-icon"><Phone size={20} /></div>
                <span>+91 76038 52702</span>
              </li>
              <li>
                <div className="info-icon"><MapPin size={20} /></div>
                <span>Tirupur, Tamil Nadu</span>
              </li>
            </ul>

            <div className="social-links">
              <a href="https://github.com/madhumithas2213-hash" target="_blank" rel="noreferrer" className="social-icon">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/madhumitha-s-ab9b47329" target="_blank" rel="noreferrer" className="social-icon">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can I help you?" required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
