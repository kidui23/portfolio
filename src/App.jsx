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
        <h1 style={{ 
          fontSize: '4rem', 
          marginBottom: '1rem', 
          background: 'linear-gradient(135deg, #6382ff 0%, #a78bfa 50%, #6382ff 100%)', 
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text', 
          WebkitTextFillColor: 'transparent',
          animation: 'gradientShift 3s ease infinite, fadeIn 1s ease-out'
        }}>
          Hi 👋, I'm Kidist Merid
        </h1>
        <p style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.9, animation: 'slideUp 0.8s ease-out 0.2s both' }}>
          Full-Stack Developer & AI Enthusiast
        </p>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.8, maxWidth: '800px', margin: '0 auto 2rem', animation: 'slideUp 0.8s ease-out 0.4s both' }}>
          Building complete web applications from frontend to backend and database. 
          Integrating AI into real products to create smart, practical solutions.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', animation: 'slideUp 0.8s ease-out 0.6s both' }}>
          <a href="#projects" style={{ 
            padding: '0.875rem 2rem', 
            background: 'white', 
            color: '#6382ff', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            View Projects
          </a>
          <a href="https://github.com/kidui23" target="_blank" style={{ 
            padding: '0.875rem 2rem', 
            background: 'rgba(255,255,255,0.2)', 
            color: 'white', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: 'bold', 
            border: '2px solid white',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
            GitHub
          </a>
        </div>
      </section>

      <section id="about" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff', animation: 'slideUp 0.8s ease-out both' }}>About Me</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {[
            { emoji: "👩‍💻", title: "Full-Stack Developer", desc: "I build complete web apps from frontend to backend and database" },
            { emoji: "🤖", title: "AI Development", desc: "I integrate AI into real products (LLM chat assistants, automated briefings, smart-city tools)" },
            { emoji: "🔭", title: "Flagship Project", desc: "Adama City Brain — AI-powered municipal command center" },
            { emoji: "🌱", title: "Diverse Experience", desc: "Built lost-and-found, attendance, weather, and chatbot applications" }
          ].map((card, index) => (
            <div key={index} style={{ 
              padding: '2rem', 
              background: 'rgba(26, 31, 78, 0.8)', 
              borderRadius: '16px', 
              border: '1px solid rgba(99, 130, 255, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              animation: `slideUp 0.8s ease-out ${0.1 + index * 0.1}s both`
            }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 130, 255, 0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>{card.emoji} {card.title}</h3>
              <p style={{ color: '#a0aec0' }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff', animation: 'slideUp 0.8s ease-out both' }}>Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {projects.map((project, index) => (
            <div key={index} style={{ 
              padding: '2rem', 
              background: 'rgba(26, 31, 78, 0.6)', 
              borderRadius: '16px', 
              border: '1px solid rgba(99, 130, 255, 0.2)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              animation: `slideUp 0.8s ease-out ${0.1 + index * 0.1}s both`
            }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 130, 255, 0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <h3 style={{ color: '#e0e6ed', marginBottom: '0.75rem' }}>{project.title}</h3>
              <p style={{ color: '#a0aec0', marginBottom: '1rem' }}>{project.description}</p>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {project.tech.map((tech, i) => (
                  <span key={i} style={{ 
                    padding: '0.375rem 0.875rem', 
                    background: '#6382ff', 
                    borderRadius: '20px', 
                    fontSize: '0.875rem',
                    transition: 'transform 0.2s ease'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>{tech}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" style={{ 
                color: '#6382ff', 
                textDecoration: 'none', 
                fontWeight: 'bold',
                transition: 'transform 0.3s ease'
              }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff', animation: 'slideUp 0.8s ease-out both' }}>Skills & Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{ 
              padding: '2rem', 
              background: 'linear-gradient(135deg, #1a1f4e 0%, #0d1333 100%)', 
              borderRadius: '16px', 
              border: '1px solid rgba(99, 130, 255, 0.3)', 
              textAlign: 'center',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              animation: `slideUp 0.8s ease-out ${0.1 + index * 0.1}s both`
            }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(99, 130, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}>
              <h3 style={{ color: '#e0e6ed', marginBottom: '1rem' }}>{skill.name}</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skill.items.map((item, i) => (
                  <li key={i} style={{ 
                    padding: '0.5rem 0', 
                    opacity: 0.9, 
                    color: '#e0e6ed',
                    transition: 'transform 0.2s ease'
                  }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(10px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" style={{ padding: '4rem 2rem', background: 'rgba(10, 14, 39, 0.5)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textAlign: 'center', color: '#6382ff', animation: 'slideUp 0.8s ease-out both' }}>Get In Touch</h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#a0aec0', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto 2rem', animation: 'slideUp 0.8s ease-out 0.2s both' }}>
          Interested in smart cities, civic tech, and practical software that helps real communities?
          Let's build something useful together!
        </p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap', animation: 'slideUp 0.8s ease-out 0.4s both' }}>
          <a href="https://github.com/kidui23" target="_blank" style={{ 
            padding: '1rem 2rem', 
            background: 'linear-gradient(135deg, #6382ff 0%, #a78bfa 100%)', 
            color: 'white', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 130, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            GitHub
          </a>
          <a href="mailto:kidist@example.com" style={{ 
            padding: '1rem 2rem', 
            background: 'linear-gradient(135deg, #6382ff 0%, #a78bfa 100%)', 
            color: 'white', 
            borderRadius: '50px', 
            textDecoration: 'none', 
            fontWeight: 'bold',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(99, 130, 255, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
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
