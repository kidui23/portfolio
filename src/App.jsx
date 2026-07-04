function App() {
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
    { name: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'Python', 'MongoDB'] },
    { name: 'AI/ML', items: ['LLM Integration', 'Chat Assistants', 'Automated Briefings'] },
    { name: 'Focus', items: ['Smart Cities', 'Civic Tech', 'Community Tools'] }
  ]

  return (
    <div style={{ 
      padding: '2rem', 
      color: 'white', 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f4e 50%, #0d1333 100%)',
      minHeight: '100vh'
    }}>
      <nav style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        padding: '1rem 2rem',
        background: 'rgba(10, 14, 39, 0.95)',
        marginBottom: '2rem',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '1000',
        boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#6382ff' }}>
          Kidist Merid
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#about" style={{ color: '#e0e6ed', textDecoration: 'none', fontWeight: '500' }}>About</a>
          <a href="#projects" style={{ color: '#e0e6ed', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
          <a href="#skills" style={{ color: '#e0e6ed', textDecoration: 'none', fontWeight: '500' }}>Skills</a>
          <a href="#contact" style={{ color: '#e0e6ed', textDecoration: 'none', fontWeight: '500' }}>Contact</a>
        </div>
      </nav>

      <section style={{ textAlign: 'center', padding: '8rem 2rem 4rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem', background: 'linear-gradient(135deg, #6382ff 0%, #a78bfa 50%, #6382ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Hi 👋, I'm Kidist Merid
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.9 }}>
          Full-Stack Developer & AI Enthusiast
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto 2rem' }}>
          Building complete web applications from frontend to backend and database. 
          Integrating AI into real products to create smart, practical solutions.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a href="#projects" style={{ padding: '0.875rem 2rem', background: 'white', color: '#6382ff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
            View Projects
          </a>
          <a href="https://github.com/kidui23" target="_blank" style={{ padding: '0.875rem 2rem', background: 'rgba(255,255,255,0.2)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', border: '2px solid white' }}>
            GitHub
          </a>
        </div>
      </section>

      <section id="about" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff' }}>About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ padding: '2rem', background: 'rgba(26, 31, 78, 0.8)', borderRadius: '16px', border: '1px solid rgba(99, 130, 255, 0.2)' }}>
            <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>👩‍💻 Full-Stack Developer</h3>
            <p style={{ color: '#a0aec0' }}>I build complete web apps from frontend to backend and database</p>
          </div>
          <div style={{ padding: '2rem', background: 'rgba(26, 31, 78, 0.8)', borderRadius: '16px', border: '1px solid rgba(99, 130, 255, 0.2)' }}>
            <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>🤖 AI Development</h3>
            <p style={{ color: '#a0aec0' }}>I integrate AI into real products (LLM chat assistants, automated briefings, smart-city tools)</p>
          </div>
          <div style={{ padding: '2rem', background: 'rgba(26, 31, 78, 0.8)', borderRadius: '16px', border: '1px solid rgba(99, 130, 255, 0.2)' }}>
            <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>🔭 Flagship Project</h3>
            <p style={{ color: '#a0aec0' }}>Adama City Brain — AI-powered municipal command center</p>
          </div>
          <div style={{ padding: '2rem', background: 'rgba(26, 31, 78, 0.8)', borderRadius: '16px', border: '1px solid rgba(99, 130, 255, 0.2)' }}>
            <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>🌱 Diverse Experience</h3>
            <p style={{ color: '#a0aec0' }}>Built lost-and-found, attendance, weather, and chatbot applications</p>
          </div>
        </div>
      </section>

      <section id="projects" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ padding: '2rem', background: 'rgba(26, 31, 78, 0.6)', borderRadius: '16px', border: '1px solid rgba(99, 130, 255, 0.2)' }}>
              <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>{project.title}</h3>
              <p style={{ color: '#a0aec0', marginBottom: '1rem' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{ padding: '0.375rem 0.875rem', background: '#6382ff', borderRadius: '20px', fontSize: '0.875rem' }}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" style={{ color: '#6382ff', textDecoration: 'none', fontWeight: 'bold' }}>
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff' }}>Skills & Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ padding: '2rem', background: 'linear-gradient(135deg, #1a1f4e 0%, #0d1333 100%)', borderRadius: '16px', border: '1px solid rgba(99, 130, 255, 0.3)', textAlign: 'center' }}>
              <h3 style={{ color: '#e0e6ed', marginBottom: '1rem' }}>{skill.name}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skill.items.map((item, i) => (
                  <li key={i} style={{ padding: '0.5rem 0', opacity: 0.9, color: '#e0e6ed' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff' }}>Get In Touch</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#a0aec0', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
          Interested in smart cities, civic tech, and practical software that helps real communities?
          Let's build something useful together!
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://github.com/kidui23" target="_blank" style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, #6382ff 0%, #a78bfa 100%)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
            GitHub
          </a>
          <a href="mailto:kidist@example.com" style={{ padding: '1rem 2rem', background: 'linear-gradient(135deg, #6382ff 0%, #a78bfa 100%)', color: 'white', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold' }}>
            Email
          </a>
        </div>
      </section>

      <footer style={{ padding: '2rem', textAlign: 'center', background: 'rgba(10, 14, 39, 0.95)', borderTop: '1px solid rgba(99, 130, 255, 0.2)' }}>
        <p style={{ color: '#999' }}>© 2026 Kidist Merid. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
