import { useState, useEffect } from 'react';
import './App.css';

// Resume data
const resumeData = {
  basics: {
    name: "Justin Mulroney",
    headline: "Software Engineer",
    email: "justinmulroney@gmail.com",
    phone: "(416) 930-2578",
    location: "Kingston, ON",
    github: "https://github.com/JustinMul",
    linkedin: "https://www.linkedin.com/in/justinmulroney/"
  },
  summary: "Full-stack engineer with 3+ years of experience building high-performance web applications in the fintech space. Specialized in Next.js, TypeScript, and cloud infrastructure (AWS, Cloudflare, GCP). Proven track record of improving core web vitals, architecting scalable microservices, and shipping AI-powered features end-to-end.",
  experience: [
    {
      company: "Fiscal.ai",
      position: "Full Stack Developer",
      location: "Toronto",
      period: "2023-Present",
      website: "https://fiscal.ai/",
      highlights: [
        "Led full-stack development for a financial data platform serving 200,000+ daily active users",
        "Redesigned data fetching architecture—improving Lighthouse score from 47 to 91, reducing LCP by 79%",
        "Ran product meetings and onboarded 4 developers, establishing coding standards",
        "Built AI-powered copilot features with streaming responses and real-time data retrieval"
      ],
      tech: ["Next.js", "TypeScript", "Cloudflare Workers", "AWS", "PostgreSQL", "Prisma"]
    },
    {
      company: "Ryna",
      position: "Software Engineer",
      location: "Toronto",
      period: "2022-2023",
      website: "https://theryna.com",
      highlights: [
        "Successfully launched theryna.com 50% ahead of schedule",
        "Implemented Datadog, resulting in 30% faster incident resolution time",
        "Created modular, reusable components for 15% faster development",
        "Deployed using Next.js, improving lighthouse performance and SEO by 20%"
      ],
      tech: ["Next.js", "Golang", "Datadog", "Digital Ocean"]
    },
    {
      company: "StackAdapt",
      position: "Business Analyst",
      location: "Toronto",
      period: "2021-2022",
      highlights: [
        "Performed data analysis through Redshift and Tableau to understand marketing campaign impact",
        "Managed 3+ client relations, ensuring timely programmatic deal setup"
      ],
      tech: ["SQL", "Tableau", "Redshift"]
    },
    {
      company: "Royal Bank of Canada",
      position: "Graduate Rotational Analyst",
      location: "Toronto",
      period: "2019-2021",
      highlights: [
        "Worked with large data sets identifying $150,000 in forex market opportunities",
        "Created macros for business operations reducing task time by 50%"
      ],
      tech: ["SQL", "Tableau", "Excel VBA"]
    }
  ],
  education: {
    school: "University of Toronto",
    degree: "Bachelors of Commerce",
    area: "Specialization in Finance",
    period: "2015-2019"
  },
  projects: [
    {
      name: "OWOC",
      period: "2022",
      website: "https://owoc.ca/",
      description: "Developed a charity donation platform using React for a Toronto nonprofit, implementing responsive design for mobile/desktop",
      tech: ["React", "CSS", "GitHub Pages"]
    },
    {
      name: "Krypto",
      period: "2022",
      website: "https://github.com/JustinMul/Krypto",
      description: "Real-time cryptocurrency dashboard consolidating data from multiple APIs with live price charts and WebSocket connections",
      tech: ["React", "Node.js", "PostgreSQL", "Chart.js", "Socket.io"]
    }
  ],
  skills: {
    languages: ["TypeScript", "JavaScript", "Python", "SQL"],
    frameworks: ["React", "Next.js", "Node.js", "Express.js", "Prisma", "Tailwind CSS"],
    cloud: ["AWS (S3, Lambda)", "GCP", "Cloudflare Workers/KV", "Firebase", "Vercel"],
    databases: ["PostgreSQL", "REST APIs", "WebSockets"]
  }
};

// Icons as SVG components
const Icons = {
  Email: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  ),
  Phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  Location: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  LinkedIn: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  ExternalLink: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  ),
  Calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Code: () => "💻",
  Cloud: () => "☁️",
  Database: () => "🗄️",
  Language: () => "⚡",
  Graduation: () => "🎓",
  Rocket: () => "🚀",
  Globe: () => "🌐"
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${navScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            JM
          </div>
          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                onClick={() => scrollToSection(item.toLowerCase())}
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            className={`nav-mobile-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <p className="hero-greeting animate-in">Hello, I'm</p>
              <h1 className="hero-name animate-in animate-delay-1">{resumeData.basics.name}</h1>
              <h2 className="hero-title animate-in animate-delay-2">
                <span className="highlight">Full Stack</span> Software Engineer
              </h2>
              <p className="hero-description animate-in animate-delay-3">
                {resumeData.summary}
              </p>
              <div className="hero-cta animate-in animate-delay-4">
                <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </button>
                <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                  View Projects
                </button>
                <a href={resumeData.basics.github} target="_blank" rel="noopener noreferrer" className="btn btn-icon">
                  <Icons.GitHub />
                </a>
                <a href={resumeData.basics.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-icon">
                  <Icons.LinkedIn />
                </a>
              </div>
            </div>
            <div className="hero-stats animate-in animate-delay-5">
              <div className="hero-stat">
                <div className="hero-stat-number">3+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">200K+</div>
                <div className="hero-stat-label">Users Served</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">79%</div>
                <div className="hero-stat-label">LCP Improvement</div>
              </div>
            </div>
          </div>
          <div className={`hero-scroll ${navScrolled ? 'hidden' : ''}`}>
            <div className="hero-scroll-icon"></div>
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Crafting Digital Experiences</h2>
          </div>
          <div className="about-content">
            <div className="about-image">
              <div className="about-image-wrapper">
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  height: '100%',
                  fontSize: '8rem',
                  opacity: 0.3
                }}>
                  👨‍💻
                </div>
              </div>
              <div className="about-image-decoration"></div>
            </div>
            <div className="about-text">
              <h3>Building the future of fintech, one line at a time</h3>
              <p>
                I'm a passionate software engineer based in {resumeData.basics.location}, 
                specializing in building exceptional digital experiences. With a strong foundation 
                in finance from the University of Toronto and hands-on experience at leading tech companies, 
                I bridge the gap between complex financial systems and elegant user interfaces.
              </p>
              <p>
                My journey from finance to engineering gives me a unique perspective—I understand 
                both the business logic and the technical implementation. Whether it's optimizing 
                Core Web Vitals, architecting microservices, or building AI-powered features, 
                I'm driven by creating impactful solutions.
              </p>
              <div className="about-details">
                <div className="about-detail">
                  <div className="about-detail-icon">
                    <Icons.Location />
                  </div>
                  <div className="about-detail-text">
                    <div className="about-detail-label">Location</div>
                    <div className="about-detail-value">{resumeData.basics.location}</div>
                  </div>
                </div>
                <div className="about-detail">
                  <div className="about-detail-icon">
                    <Icons.Email />
                  </div>
                  <div className="about-detail-text">
                    <div className="about-detail-label">Email</div>
                    <div className="about-detail-value">{resumeData.basics.email}</div>
                  </div>
                </div>
              </div>
              <a 
                href={`mailto:${resumeData.basics.email}`} 
                className="btn btn-primary"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Career Journey</p>
            <h2 className="section-title">Professional Experience</h2>
            <p className="section-description">
              From Fortune 500 bank to high-growth startups, I've helped build products that scale.
            </p>
          </div>
          <div className="experience-timeline">
            {resumeData.experience.map((job, index) => (
              <div key={index} className="experience-item">
                <div className="experience-dot"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-company">
                        {job.website ? (
                          <a href={job.website} target="_blank" rel="noopener noreferrer">
                            {job.company} ↗
                          </a>
                        ) : job.company}
                      </h3>
                      <p className="experience-position">{job.position}</p>
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">
                        <Icons.Calendar /> {job.period}
                      </span>
                      <span className="experience-location">
                        <Icons.Location /> {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="experience-description">
                    <ul>
                      {job.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="experience-tech">
                    {job.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Technical Expertise</p>
            <h2 className="section-title">Skills & Technologies</h2>
            <p className="section-description">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-card-icon">{Icons.Language()}</div>
              <h3 className="skill-card-title">Languages</h3>
              <div className="skill-list">
                {resumeData.skills.languages.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon">{Icons.Code()}</div>
              <h3 className="skill-card-title">Frameworks & Libraries</h3>
              <div className="skill-list">
                {resumeData.skills.frameworks.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon">{Icons.Cloud()}</div>
              <h3 className="skill-card-title">Cloud Platforms</h3>
              <div className="skill-list">
                {resumeData.skills.cloud.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-card">
              <div className="skill-card-icon">{Icons.Database()}</div>
              <h3 className="skill-card-title">Systems & Databases</h3>
              <div className="skill-list">
                {resumeData.skills.databases.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-description">
              A selection of personal projects I've built to solve real problems.
            </p>
          </div>
          <div className="projects-grid">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <div className="project-image-placeholder">
                    {index === 0 ? '💝' : '📊'}
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-period">{project.period}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href={project.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Icons.ExternalLink /> View Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Education</p>
            <h2 className="section-title">Academic Background</h2>
          </div>
          <div className="education-card">
            <div className="education-icon">{Icons.Graduation()}</div>
            <div className="education-info">
              <h3>{resumeData.education.school}</h3>
              <p className="degree">{resumeData.education.degree} — {resumeData.education.area}</p>
              <p className="period">{resumeData.education.period}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">Let's Work Together</h2>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Ready to start a project?</h3>
              <p>
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question, want to collaborate, or just want to say hi, 
                my inbox is always open!
              </p>
              <div className="contact-methods">
                <a href={`mailto:${resumeData.basics.email}`} className="contact-method">
                  <div className="contact-method-icon">
                    <Icons.Email />
                  </div>
                  <div className="contact-method-text">
                    <h4>Email</h4>
                    <span>{resumeData.basics.email}</span>
                  </div>
                </a>
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Icons.Location />
                  </div>
                  <div className="contact-method-text">
                    <h4>Location</h4>
                    <span>{resumeData.basics.location}</span>
                  </div>
                </div>
              </div>
              <div className="contact-socials">
                <a href={resumeData.basics.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Icons.GitHub />
                </a>
                <a href={resumeData.basics.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  <Icons.LinkedIn />
                </a>
              </div>
            </div>
            <div className="contact-cta">
              <h3>Let's build something amazing</h3>
              <p>
                Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
              </p>
              <a href={`mailto:${resumeData.basics.email}`} className="btn btn-primary">
                Send Me a Message
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="footer-text">
              © {new Date().getFullYear()} Justin Mulroney. Built with React.
            </p>
            <div className="footer-links">
              <a href={resumeData.basics.github} target="_blank" rel="noopener noreferrer" className="footer-link">
                GitHub
              </a>
              <a href={resumeData.basics.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
                LinkedIn
              </a>
              <a href={`mailto:${resumeData.basics.email}`} className="footer-link">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
