import { motion } from 'framer-motion'
import { Github, Mail, ExternalLink, Code, Database, Brain, Globe } from 'lucide-react'
import './App.css'

const projects = [
  {
    title: 'Adama City Brain',
    description: 'AI-powered municipal command center for smart city management',
    tech: ['React', 'Node.js', 'Python', 'MongoDB'],
    link: 'https://github.com/kidui23/Adama-city-brain'
  },
  {
    title: 'ASTU Lost & Found',
    description: 'Campus lost and found management system',
    tech: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/kidui23/astu-lost-found'
  },
  {
    title: 'Attendance System',
    description: 'Digital attendance tracking solution',
    tech: ['React', 'Node.js'],
    link: 'https://github.com/kidui23/attendance-system'
  },
  {
    title: 'Weather App',
    description: 'Real-time weather forecasting application',
    tech: ['React', 'API'],
    link: 'https://github.com/kidui23/weather-app'
  },
  {
    title: 'Kidu AI Web App',
    description: 'AI-powered web application',
    tech: ['React', 'AI/ML'],
    link: 'https://github.com/kidui23/kidu-ai-web-app'
  },
  {
    title: 'Chatbot Web App',
    description: 'Conversational AI chatbot interface',
    tech: ['React', 'NLP'],
    link: 'https://github.com/kidui23/chatbot-web-app'
  }
]

const skills = [
  { icon: Code, name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { icon: Database, name: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB'] },
  { icon: Brain, name: 'AI/ML', items: ['LLM Integration', 'Chat Assistants', 'Automated Briefings'] },
  { icon: Globe, name: 'Focus', items: ['Smart Cities', 'Civic Tech', 'Community Tools'] }
]

function App() {
  return (
    <div className="portfolio">
      <motion.nav 
        className="navbar"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-brand">Kidist Merid</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </motion.nav>

      <section className="hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi 👋, I'm Kidist Merid</h1>
          <p className="subtitle">Full-Stack Developer & AI Enthusiast</p>
          <p className="description">
            Building complete web applications from frontend to backend and database. 
            Integrating AI into real products to create smart, practical solutions.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="https://github.com/kidui23" target="_blank" className="btn secondary">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <div className="about-grid">
            <div className="about-card">
              <h3>👩‍💻 Full-Stack Developer</h3>
              <p>I build complete web apps from frontend to backend and database</p>
            </div>
            <div className="about-card">
              <h3>🤖 AI Development</h3>
              <p>I integrate AI into real products (LLM chat assistants, automated briefings, smart-city tools)</p>
            </div>
            <div className="about-card">
              <h3>🔭 Flagship Project</h3>
              <p>Adama City Brain — AI-powered municipal command center</p>
            </div>
            <div className="about-card">
              <h3>🌱 Diverse Experience</h3>
              <p>Built lost-and-found, attendance, weather, and chatbot applications</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" className="project-link">
                  <ExternalLink size={16} />
                  View on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <skill.icon size={32} className="skill-icon" />
                <h3>{skill.name}</h3>
                <ul>
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="contact" className="section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p className="contact-text">
            Interested in smart cities, civic tech, and practical software that helps real communities?
            Let's build something useful together!
          </p>
          <div className="contact-links">
            <a href="https://github.com/kidui23" target="_blank" className="contact-link">
              <Github size={24} />
              <span>GitHub</span>
            </a>
            <a href="mailto:kidist@example.com" className="contact-link">
              <Mail size={24} />
              <span>Email</span>
            </a>
          </div>
        </motion.div>
      </section>

      <footer className="footer">
        <p>© 2026 Kidist Merid. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
