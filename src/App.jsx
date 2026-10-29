import { useState, useEffect, useRef } from 'react'
import './App.css'

const projects = [
  {
    id: 0,
    title: 'BiteBox',
    description: 'A food delivery website with real-time restaurant listings and menu browsing.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'rgba(52,211,153,.45)',
    accent: '#34D399',
    details: 'A comprehensive food delivery platform featuring restaurant listings, menu browsing, cart functionality, and user authentication. Built with vanilla HTML, CSS, and JavaScript for optimal performance.',
    features: ['Restaurant listings with search', 'Menu browsing system', 'Cart functionality', 'User authentication', 'Responsive design'],
    github: 'https://github.com/sahil1009/BiteBox',
    liveDemo: 'https://bite-box-six.vercel.app/',
    image: 'bitebox.png'
  },
  {
    id: 1,
    title: 'OffShirt',
    description: 'A modern fashion brand website showcasing exclusive collections.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    gradient: 'rgba(251,146,60,.45)',
    accent: '#FB923C',
    details: 'A fashion brand website featuring exclusive collections, product showcases, and smooth shopping experience. Designed with modern aesthetics and user-friendly navigation.',
    features: ['Exclusive collection showcase', 'Product gallery', 'Modern UI design', 'Responsive layout', 'Shopping cart'],
    github: 'https://github.com/sahil1009/OffShirt',
    liveDemo: 'https://offshirt.vercel.app/',
    image: 'offshirt.png'
    }
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const [emailCopied, setEmailCopied] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const canvasRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollHeight > 0 ? (window.scrollY / scrollHeight) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sahilgupta1008@gmail.com')
    setEmailCopied(true)
    setTimeout(() => setEmailCopied(false), 1600)
  }

  const handleProjectClick = (project) => {
    setSelectedProject(project)
  }

  const closeProjectModal = () => {
    setSelectedProject(null)
  }

  return (
    <div className="app">
      <div className="loading-screen">
        <small>Loading portfolio</small>
        <span>100</span>
      </div>
      
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="grid-bg"></div>
      
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="container nav">
          <a href="#home" className="logo">sahil<span className="italic">.dev</span></a>
          <nav>
            <ul className={menuOpen ? 'open' : ''}>
              <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
              <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
              <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
          <button 
            className="menu-btn" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            ☰
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container">
            <div className="chip reveal">
              <span className="dot"></span>
              Mumbai, India · Available for work
            </div>
            <h1 className="reveal">
              <span className="word">Hi, I'm </span>
              <span className="word gradient">Sahil</span>
              <span className="word serif"> Gupta.</span>
            </h1>
            <p className="lead reveal">
              Full Stack Developer building responsive, fast web applications with React, JavaScript, Java, Spring Boot and Firebase.
            </p>
            <div className="btns reveal">
              <a href="#work" className="btn primary">View selected work →</a>
              <a href="#contact" className="btn">Get in touch</a>
            </div>
          </div>
          <div className="scroll-hint">Scroll ↓</div>
        </section>

        <section id="about">
          <div className="container">
            <span className="eyebrow reveal">About</span>
            <h2 className="reveal">
              Engineer by craft, <span className="serif gradient">designer</span> at heart.
            </h2>
            <p className="lead reveal">
              I'm Sahil Gupta, a Full Stack Developer from Mumbai. I care about clean code, pixel-level polish and products that feel good on every screen.
            </p>
            <div className="grid-2" style={{ marginTop: '38px' }}>
              <div className="grid-2">
                <div className="card reveal">
                  <h3>Frontend engineering</h3>
                  <p>Responsive interfaces with React, Tailwind CSS and thoughtful motion.</p>
                </div>
                <div className="card reveal">
                  <h3>Backend & APIs</h3>
                  <p>Java and Spring Boot services, with Firebase for auth and realtime data.</p>
                </div>
              </div>
              <div className="card reveal">
                <span className="eyebrow" style={{ marginBottom: '20px' }}>Education & certifications</span>
                <div className="timeline">
                  <div>
                    <small>EDUCATION · 7.50 CGPA</small>
                    <b>Viva Institute of Technology, Virar</b>
                    <span>Bachelor's degree · CGPA 7.50</span>
                  </div>
                  <div>
                    <small>CERTIFICATION</small>
                    <b>ITVedant · Full Stack Web Development</b>
                    <span>Course completion certificate</span>
                  </div>
                  <div>
                    <small>NOW</small>
                    <b>Aspiring Full Stack Developer</b>
                    <span>Building real projects, learning every day</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="container">
            <span className="eyebrow reveal">Selected work</span>
            <h2 className="reveal">
              Projects I'm <span className="serif gradient">proud</span> of.
            </h2>
            <div className="projects-grid">
              {projects.map((project) => (
                <article
                  key={project.id}
                  className="card project reveal cursor-pointer"
                  style={{ '--gradient': project.gradient, '--accent': project.accent }}
                  onClick={() => window.open(project.liveDemo, '_blank', 'noopener,noreferrer')}
                >
                  <div className="project-preview">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <span className="caption">Live Preview</span>
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills">
          <div className="container">
            <span className="eyebrow reveal">Skills</span>
            <h2 className="reveal">
              The <span className="serif gradient">toolkit</span>.
            </h2>
            <div className="bento-grid">
              <div className="card span-4 reveal">
                <h3>Frontend</h3>
                <div className="pill-list">
                  <span>React</span>
                  <span>JavaScript</span>
                  <span>TypeScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>Tailwind CSS</span>
                  <span>Bootstrap</span>
                </div>
              </div>
              <div className="card span-2 reveal">
                <h3>Backend</h3>
                <div className="pill-list">
                  <span>Java</span>
                  <span>Spring Boot</span>
                  <span>Node.js</span>
                </div>
              </div>
              <div className="card span-2 reveal">
                <h3>Databases</h3>
                <div className="pill-list">
                  <span>MySQL</span>
                  <span>MongoDB</span>
                  <span>Firebase</span>
                </div>
              </div>
              <div className="card span-4 reveal">
                <h3>Tools</h3>
                <div className="pill-list">
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Vercel</span>
                  <span>VS Code</span>
                </div>
              </div>
            </div>
            <div className="marquee">
              <div className="marquee-content">
                {['React', 'JavaScript', 'Java', 'Spring Boot', 'Firebase', 'Tailwind CSS', 'MySQL', 'MongoDB', 'Git', 'React', 'JavaScript', 'Java', 'Spring Boot', 'Firebase', 'Tailwind CSS', 'MySQL', 'MongoDB', 'Git'].map((skill, i) => (
                  <span key={i}>{skill}✦</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="container">
            <span className="eyebrow reveal">Contact</span>
            <h2 className="reveal">
              Let's build something <span className="serif gradient">real</span>.
            </h2>
            <p className="lead reveal">
              Open to roles, freelance work and good conversations.
            </p>
            <button 
              className="email-btn reveal"
              onClick={handleCopyEmail}
              title="Copy email"
            >
              {emailCopied ? 'Copied ✓' : 'sahilgupta1008@gmail.com'}
            </button>
            <div className="contact-grid">
              <div className="card reveal">
                <h3>Send a message</h3>
                <form onSubmit={(e) => {
                  e.preventDefault()
                  window.location.href = 'mailto:sahilgupta1008@gmail.com'
                }}>
                  <input placeholder="Your name" required />
                  <input type="email" placeholder="Your email" required />
                  <textarea placeholder="Tell me about your project" required />
                  <button className="btn primary" type="submit">Send message →</button>
                </form>
              </div>
              <div className="card reveal">
                <h3>Elsewhere</h3>
                <p>Find me on these platforms.</p>
                <div className="social-links">
                  <a className="btn" href="tel:+917276633710">Call +91 72766 33710</a>
                  <a className="btn" href="https://github.com/sahil1009" target="_blank" rel="noopener">GitHub ↗</a>
                  <a className="btn" href="https://www.linkedin.com/in/sahil-gupta-0767b2259" target="_blank" rel="noopener">LinkedIn ↗</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-content">
          <span>© {new Date().getFullYear()} Sahil Gupta</span>
          <span>Designed & built in Mumbai</span>
        </div>
      </footer>

      {selectedProject && (
        <dialog open>
          <button className="close-btn" onClick={closeProjectModal} aria-label="Close">✕</button>
          <h3>{selectedProject.title}</h3>
          <p>{selectedProject.details}</p>
          <ul>
            {selectedProject.features.map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
          <div className="tags">
            {selectedProject.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div style={{ marginTop: '18px', fontSize: '0.76rem', fontFamily: 'monospace' }}>
            <a href={selectedProject.github} target="_blank" rel="noopener" style={{ color: '#67E8F9' }}>
              GitHub Repository ↗
            </a>
            {selectedProject.liveDemo && (
              <>
                {' · '}
                <a href={selectedProject.liveDemo} target="_blank" rel="noopener" style={{ color: '#67E8F9' }}>
                  Live Demo ↗
                </a>
              </>
            )}
          </div>
        </dialog>
      )}
    </div>
  )
}

export default App
