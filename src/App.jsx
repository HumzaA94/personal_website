import { useEffect, useState } from 'react'
import headshot from './assets/headshot.png'
import './App.css'

const highlights = [
  { value: '50+', label: 'executive, operational, and technical dashboards delivered' },
  { value: '10+', label: 'fragmented data sources unified into production systems' },
  { value: '1M+', label: 'high-frequency data points processed per operational event' },
  { value: '23', label: 'teams supported through shared internal platforms' },
]

const focusAreas = [
  {
    title: 'Engineering Leadership',
    text: 'Owns technical strategy, roadmap execution, cloud cost management, release reliability, and platform standards for production systems.',
  },
  {
    title: 'Product Engineering',
    text: 'Builds internal SaaS products that turn complex stakeholder workflows into reliable tools, dashboards, and decision systems.',
  },
  {
    title: 'Operational Data Platforms',
    text: 'Designs pipelines and analytics infrastructure across APIs, high-volume event data, historical datasets, and manual business workflows.',
  },
]

const outcomes = [
  'Turned fragmented operational workflows into shared internal products used across football, executive, and technical teams.',
  'Built trusted data foundations that support reporting, scouting, performance analysis, and leadership decision-making at scale.',
  'Established delivery practices around cloud operations, documentation, monitoring, and release reliability for production systems.',
]

const experience = [
  {
    company: 'Blue Crow Sports Group',
    role: 'Engineering Leadership',
    period: '2026',
    details: [
      'Promoted after architecting a centralized data platform and internal football intelligence system across a 23-team multi-club environment.',
      'Led engineering strategy, technical roadmap, architecture decisions, platform delivery, and cloud cost management.',
      'Led delivery of 50+ dashboards and reporting tools for football, sports science, scouting, nutrition, player operations, and executive stakeholders.',
    ],
  },
  {
    company: 'Blue Crow Sports Group',
    role: 'Data Engineer / Lead Developer',
    period: 'January 2023 - December 2025',
    details: [
      'Built centralized infrastructure aggregating 10+ heterogeneous data sources into a unified analytics environment.',
      'Developed pipelines covering 200,000+ players, 100,000+ coaches, 30 years of competition history, and roughly 300,000 matches annually.',
      'Created systems handling 1,500+ event data points per match and roughly 1M positional tracking data points per game.',
    ],
  },
  {
    company: 'Sports IQ Analytics',
    role: 'Team Lead Data Scientist',
    period: 'October 2021 - January 2023',
    details: [
      'Helped establish data science engineering practices, development standards, and stable analytics product workflows.',
      'Implemented Apache Airflow on Google Cloud Platform to parallelize pipelines and reduce processing runtimes by about 70%.',
      'Built profitability-loss analysis models that improved betting strategy decisions and contributed to acquisition readiness.',
    ],
  },
]

const projects = [
  {
    title: 'Internal SaaS Intelligence Platform',
    category: 'Product engineering',
    text: 'Architected and built a full-stack internal platform that centralizes operational data, analytics, stakeholder workflows, and reporting across a multi-team organization.',
    impact: 'Created a shared operating layer for teams that previously depended on fragmented tools and manual coordination.',
  },
  {
    title: 'Unified Data Infrastructure',
    category: 'Data platform',
    text: 'Integrated APIs, manual uploads, unstructured datasets, web scraping, event data, and historical records into a single analytics environment for production decision-making.',
    impact: 'Unified 10+ data sources into production systems that could support higher-confidence analysis and repeatable reporting.',
  },
  {
    title: 'Executive Reporting System',
    category: 'Operational analytics',
    text: 'Delivered 50+ dashboards and reporting tools that help leadership and technical departments track performance, identify opportunities, and act on trusted data.',
    impact: 'Gave stakeholders consistent visibility into operational questions that were previously slow or inconsistent to answer.',
  },
  {
    title: 'Cloud & Delivery Operations',
    category: 'Engineering operations',
    text: 'Established cloud cost ownership, CI/CD workflows, monitoring practices, multi-environment deployments, and documentation standards for reliable delivery.',
    impact: 'Improved the operating model around production delivery, platform reliability, and engineering accountability.',
  },
  {
    title: 'Automation & Data Quality',
    category: 'Process automation',
    text: 'Built validation frameworks, alerting workflows, and automated data pipelines that reduced manual checks and improved confidence in analytical products.',
    impact: 'Reduced operational risk by making data quality issues easier to catch, explain, and resolve.',
  },
  {
    title: 'AI-Assisted Analysis R&D',
    category: 'Applied AI',
    text: 'Led exploratory work using computer vision and AI-driven analysis to extract insights from high-volume event streams and video-oriented workflows.',
    impact: 'Tested practical ways to move AI-assisted analysis from experiments toward useful workflow augmentation.',
  },
]

function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <main className="site-shell">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Humza Ahmed home">
          HA
        </a>
        <div className="nav-actions">
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="theme-control" role="radiogroup" aria-label="Appearance">
            <span className="theme-thumb" aria-hidden="true" />
            {['light', 'dark'].map((option) => (
              <button
                className="theme-option"
                type="button"
                role="radio"
                aria-checked={theme === option}
                aria-label={`${option} mode`}
                data-active={theme === option}
                key={option}
                onClick={() => setTheme(option)}
              >
                {option === 'light' ? (
                  <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
                  </svg>
                ) : (
                  <svg className="theme-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M21 14.5A8.5 8.5 0 0 1 9.5 3a7 7 0 1 0 11.5 11.5Z" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-content">
          <p className="eyebrow">Product Platforms | AI Workflows | Operational Data</p>
          <h2>Building products and data systems that make complex operations easier to run.</h2>
          <p className="hero-copy">
            I am Humza Ahmed, an engineering and data product leader focused on internal SaaS
            platforms, analytics infrastructure, AI-assisted workflows, and high-volume data
            products. My work has been proven in sports, but the pattern is broader: turn messy
            operational workflows into scalable products that teams can trust.
          </p>
          <div className="hero-actions">
            <a
              className="button primary"
              href="https://calendly.com/humza1910/30min"
              target="_blank"
              rel="noreferrer"
            >
              Book video call
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/humza-ahmed94/"
              target="_blank"
              rel="noreferrer"
            >
              View LinkedIn
            </a>
          </div>
        </div>
        <aside className="hero-card profile-card" aria-label="Career snapshot">
          <img src={headshot} alt="Humza Ahmed" />
          <div className="profile-copy">
            <strong>Engineering, AI, and data systems</strong>
            <p>Product platforms, workflow automation, operational analytics, and data infrastructure.</p>
          </div>
        </aside>
      </section>

      <section className="metrics" aria-label="Impact metrics">
        {highlights.map((item) => (
          <article className="metric" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section outcomes" aria-labelledby="outcomes-heading">
        <div className="section-heading">
          <p className="eyebrow">Selected outcomes</p>
          <h2 id="outcomes-heading">Proof that the systems moved real operational work forward.</h2>
        </div>
        <div className="outcome-list">
          {outcomes.map((outcome) => (
            <article className="outcome-card" key={outcome}>
              <p>{outcome}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">What I do</p>
          <h2>Engineering leadership for product, platform, and operations-heavy businesses.</h2>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area) => (
            <article className="focus-card" key={area.title}>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected systems with product and operational impact.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <p className="project-impact">{project.impact}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>From data science to product and platform leadership.</h2>
        </div>
        <div className="timeline">
          {experience.map((job) => (
            <article className="job" key={`${job.company}-${job.role}`}>
              <div>
                <span className="period">{job.period}</span>
                <h3>{job.role}</h3>
                <p>{job.company}</p>
              </div>
              <ul>
                {job.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Contact</p>
        <h2>Get in touch.</h2>
        <p className="contact-copy">
          Open to conversations around engineering leadership, internal platforms, data systems,
          and practical AI workflows.
        </p>
        <div className="contact-links" aria-label="Contact options">
          <a className="contact-link" href="mailto:humza1910@gmail.com?subject=Website%20inquiry">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 6.5h16v11H4z" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            humza1910@gmail.com
          </a>
          <a className="contact-link" href="https://calendly.com/humza1910/30min" target="_blank" rel="noreferrer">
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3.5v3M17 3.5v3M4.5 8.5h15M6 5h12a2 2 0 0 1 2 2v11.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
              <path d="M9 13h.01M12 13h.01M15 13h.01M9 16h.01M12 16h.01" />
            </svg>
            Video call
          </a>
          <a
            className="contact-link"
            href="https://calendly.com/humza1910/phone-call-meeting"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7.5 4.5 5.8 6.2c-.7.7-.9 1.8-.4 2.8a22 22 0 0 0 9.6 9.6c1 .5 2.1.3 2.8-.4l1.7-1.7-3.4-3.4-1.5 1.5c-2.1-1.1-4.1-3.1-5.2-5.2l1.5-1.5z" />
            </svg>
            Phone call
          </a>
          <a className="contact-link" href="https://github.com/hahmed0111" target="_blank" rel="noreferrer">
            <svg className="contact-icon brand-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.5.1.7-.2.7-.5v-1.8c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.5 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2.1 1.1-2.8-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.7-.3s1.9.1 2.7.3c2-1.4 2.9-1.1 2.9-1.1.6 1.4.2 2.5.1 2.8.7.7 1.1 1.7 1.1 2.8 0 4-2.4 4.8-4.7 5.1.4.3.8 1 .8 2v2.9c0 .3.2.6.7.5A9.2 9.2 0 0 0 12 2.8Z" />
            </svg>
            GitHub
          </a>
          <a className="contact-link" href="https://www.linkedin.com/in/humza-ahmed94/" target="_blank" rel="noreferrer">
            <svg className="contact-icon brand-contact-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5.2 9.2h3.1v9.9H5.2zM6.8 4.9a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6ZM10.8 9.2h3v1.4c.4-.8 1.4-1.6 3-1.6 3.2 0 3.8 2.1 3.8 4.8v5.3h-3.1v-4.7c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5v4.8h-3.1z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Humza Ahmed. All rights reserved.</p>
      </footer>
    </main>
  )
}

export default App
