import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const GithubIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.12-.34 6.4-1.51 6.4-6.98 0-1.5-.5-2.7-1.3-3.6.1-.3.6-1.7-.1-3.5 0 0-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C7.3 1.5 6.3 1.8 6.3 1.8c-.7 1.8-.2 3.2-.1 3.5-.8.9-1.3 2.1-1.3 3.6 0 5.4 3.2 6.6 6.3 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const LinkedinIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);
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
                <GithubIcon size={24} />
              </a>
              <a href="https://www.linkedin.com/in/madhumitha-s-ab9b47329" target="_blank" rel="noreferrer" className="social-icon">
                <LinkedinIcon size={24} />
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
