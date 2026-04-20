import { motion } from 'framer-motion';
import { Database, BarChart2, Monitor, Search } from 'lucide-react';
import './Services.css';

export default function Services() {
  const services = [
    {
      icon: <Database size={36} />,
      title: 'Data Cleaning',
      desc: 'Transforming raw, messy datasets into clean, structured, and analysis-ready data by handling missing values, duplicates, and inconsistencies.'
    },
    {
      icon: <BarChart2 size={36} />,
      title: 'Data Visualization',
      desc: 'Creating clear, compelling visual stories from complex datasets using Python libraries and tools like Power BI to communicate insights effectively.'
    },
    {
      icon: <Monitor size={36} />,
      title: 'Dashboard Creation',
      desc: 'Building interactive, insightful dashboards that give stakeholders a real-time overview of key business metrics and performance indicators.'
    },
    {
      icon: <Search size={36} />,
      title: 'Basic Data Analysis',
      desc: 'Performing exploratory data analysis (EDA) to discover trends, patterns, and statistical relationships within datasets to support decisions.'
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Services
        </motion.h2>

        <div className="services-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 * idx }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-underline" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
