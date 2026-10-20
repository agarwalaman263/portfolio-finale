import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Github,
  Linkedin,
  Mail,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react'

const email = 'agarwalaman263@gmail.com'
// Add your exact public profile URLs here before publishing.
const linkedinUrl = 'https://linkedin.com/in/agarwalaman263'
const githubUrl = 'https://github.com/agarwalaman263'

const projects = [
  {
    number: '01',
    label: 'AI · COMPLIANCE',
    title: 'From 60 days to 24 hours',
    description:
      'Led an Agentic AI-powered compliance onboarding transformation for ecosystem clients, using Java to compress a lengthy review workflow into a day.',
    tags: ['Java', 'Agentic AI', 'LLMs', 'Workflow automation'],
    accent: 'mint',
    icon: Sparkles,
  },
  {
    number: '02',
    label: 'INTERNAL PLATFORMS',
    title: 'A single source of truth for deals',
    description:
      'Replaced spreadsheet-driven deal workflows with a centralized platform for evaluation, client tracking, and margin calculations. Version-controlled pricing formulas improved traceability; AI-powered research helped analysts move faster.',
    tags: ['Platform engineering', 'Auditability', 'AI-assisted research'],
    accent: 'lilac',
    icon: Code2,
  },
  {
    number: '03',
    label: 'PAYMENTS · SECURITY',
    title: 'A more seamless browser wallet',
    description:
      'Designed browser-based payment token storage and a wallet payment experience using passkey-based authentication and browser payment APIs.',
    tags: ['Passkeys', 'Payment Request API', 'Payments'],
    accent: 'peach',
    icon: ShieldCheck,
  },
  {
    number: '04',
    label: 'AI · DOCUMENT INTELLIGENCE',
    title: 'Turning documents into usable data',
    description:
      'Engineered an in-house Agentic AI pipeline combining OCR models and LLMs for document extraction, analysis, and verification.',
    tags: ['OCR', 'LLMs', 'Document processing'],
    accent: 'blue',
    icon: Sparkles,
  },
]

const skills = [
  { title: 'Languages', values: ['Java', 'Python', 'JavaScript', 'TypeScript'] },
  { title: 'Frameworks', values: ['Spring Boot', 'React', 'Next.js', 'Hibernate', 'MyBatis'] },
  { title: 'Data & messaging', values: ['PostgreSQL', 'Neo4j', 'Kafka', 'RabbitMQ'] },
  { title: 'Engineering', values: ['Kubernetes', 'Git', 'Maven', 'SonarQube', 'API design'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Aman Agarwal home">
          <span className="wordmark-mark">A.</span>
          <span>AMAN AGARWAL</span>
        </a>
        <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-links-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu} className="nav-contact">Let's talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> SENIOR SOFTWARE ENGINEER <span className="eyebrow-divider">/</span> BENGALURU, INDIA</div>
            <h1>Building useful<br />technology for<br /><span className="serif-accent">the real world.</span></h1>
            <p className="hero-description">
              I’m Aman — an engineer working across payments, AI-powered workflows, and scalable platforms. I like turning complex systems into experiences that feel simple.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">Explore my work <ArrowDownRight size={16} /></a>
              <a className="text-link" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-footnote"><span className="footnote-line" /> Thoughtful engineering. Measurable outcomes.</div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration representing connected systems">
            <div className="art-topline"><span>FIG. 01</span><span>SYSTEMS IN MOTION</span></div>
            <div className="orbital orbital-one"><span /></div>
            <div className="orbital orbital-two"><span /></div>
            <div className="orbital orbital-three"><span /></div>
            <div className="core">
              <div className="core-grid" />
              <span className="core-label">A<span>.</span></span>
            </div>
            <div className="art-node node-one"><Sparkles size={16} /><span>AI</span></div>
            <div className="art-node node-two"><ShieldCheck size={16} /><span>PAYMENTS</span></div>
            <div className="art-node node-three"><Code2 size={16} /><span>PLATFORMS</span></div>
            <div className="art-caption"><span className="caption-dot" /> CONNECTING THE COMPLEX</div>
          </div>
          <div className="hero-bottom-rule"><span>01 — INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="proof-strip" aria-label="Highlights">
          <div className="proof-item"><span className="proof-number">60d <ArrowRight size={15} /> 24h</span><span className="proof-label">Compliance onboarding</span></div>
          <div className="proof-separator" />
          <div className="proof-item"><span className="proof-number">30d <ArrowRight size={15} /> 1w</span><span className="proof-label">Deal turnaround</span></div>
          <div className="proof-separator" />
          <div className="proof-item"><span className="proof-number">7+ years</span><span className="proof-label">Building software</span></div>
          <div className="proof-separator" />
          <div className="proof-item"><span className="proof-number">AI × Payments</span><span className="proof-label">Current focus</span></div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div><span className="section-index">02 / SELECTED WORK</span><h2>Making complex things<br /><span className="serif-accent">work better.</span></h2></div>
            <p>A few problems I’ve helped solve — from reducing operational friction to making digital payments more secure.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <article className={`project-card ${project.accent}`} key={project.number}>
                  <div className="project-card-top"><span>{project.number} / {project.label}</span><span className="project-icon"><Icon size={18} /></span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                  <div className="card-bottom-line" />
                </article>
              )
            })}
          </div>
          <div className="work-note"><span className="note-star">✳</span><p>These are high-level summaries of work I’ve contributed to. Some implementation details are intentionally omitted.</p></div>
        </section>

        <section className="about-section" id="about">
          <div className="section-wrap about-layout">
            <div className="about-left">
              <span className="section-index">03 / A LITTLE ABOUT ME</span>
              <h2>Curious by nature.<br /><span className="serif-accent">Engineer by craft.</span></h2>
              <div className="about-stamp"><span>BUILD</span><span>WITH</span><span>INTENT ↗</span></div>
            </div>
            <div className="about-right">
              <p className="about-lead">I care about the space between a good idea and a dependable product.</p>
              <p>My work spans backend systems, user-facing experiences, and applied AI. I enjoy moving between architecture and implementation — understanding the problem, making pragmatic technical choices, and helping a team deliver something people can rely on.</p>
              <p>My roots are in healthcare technology, where reliability matters deeply. Today, I bring that same mindset to payment experiences and internal platforms at Visa.</p>
              <div className="principles">
                <div><span>01</span><strong>Start with the problem</strong></div>
                <div><span>02</span><strong>Build for reliability</strong></div>
                <div><span>03</span><strong>Make impact measurable</strong></div>
              </div>
            </div>
          </div>
        </section>

        <section className="experience-section section-wrap" id="experience">
          <div className="section-heading experience-heading">
            <div><span className="section-index">04 / EXPERIENCE</span><h2>The path so far.</h2></div>
            <p>Growing from healthcare technology into global-scale payments and AI-enabled software.</p>
          </div>
          <div className="timeline">
            <article className="timeline-entry">
              <div className="timeline-date">FEB 2023 — NOW</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="timeline-title-row"><div><h3>Senior Software Engineer</h3><p className="company">Visa Inc <span>·</span> Bengaluru, India</p></div><span className="current-pill"><span /> CURRENT</span></div>
                <p>Leading initiatives across compliance onboarding, deal management, document intelligence, web accessibility, and browser-based payment experiences.</p>
                <ul>
                  <li>Cut ecosystem client compliance onboarding from 60 days to 24 hours with an Agentic AI solution using Java.</li>
                  <li>Reduced deal turnaround from 30 days to one week through centralized workflows and AI-assisted research.</li>
                  <li>Designed browser wallet and payment-token experiences using passkeys and browser payment APIs.</li>
                </ul>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-date">PREVIOUS ROLE</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="timeline-title-row"><div><h3>Senior Software Engineer</h3><p className="company">Philips India Limited <span>·</span> Bengaluru, India</p></div></div>
                <p>Contributed to the architecture and implementation of software features deployed on medical devices in hospital environments, using Java and Angular with Kubernetes.</p>
                <div className="tag-list"><span className="tag">Healthcare technology</span><span className="tag">Java</span><span className="tag">Kubernetes</span></div>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-date">EARLY CAREER</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="timeline-title-row"><div><h3>Software Intern</h3><p className="company">Philips Healthcare</p></div></div>
                <p>Explored healthcare product regulations and evaluated technical approaches to support product improvement.</p>
              </div>
            </article>
            <article className="timeline-entry">
              <div className="timeline-date">FOUNDATIONS</div>
              <div className="timeline-marker"><span /></div>
              <div className="timeline-content">
                <div className="timeline-title-row"><div><h3>Summer Intern</h3><p className="company">Kuehne + Nagel</p></div></div>
                <p>Built an HR career-path tool using PostgreSQL, Flask, and jQuery to help employees understand role prerequisites and possible progression paths.</p>
              </div>
            </article>
          </div>
          <div className="education-row"><span className="section-index">EDUCATION</span><div><strong>Vellore Institute of Technology</strong><span>B.Tech / Computer Science and Engineering</span></div><span className="education-location">Vellore, India</span></div>
        </section>

        <section className="skills-section">
          <div className="section-wrap">
            <div className="skills-heading"><div><span className="section-index">05 / TOOLKIT</span><h2>Tools of the trade.</h2></div><p>Enough range to explore. Enough depth to ship.</p></div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <div className="skill-group" key={group.title}><span className="skill-number">0{index + 1}</span><h3>{group.title}</h3><div className="skill-tags">{group.values.map((value) => <span key={value}>{value}</span>)}</div></div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-topline"><span className="section-index">06 / CONTACT</span><span>GOOD THINGS START WITH A CONVERSATION.</span></div>
          <div className="contact-main"><h2>Have an interesting<br />problem? <span className="serif-accent">Let’s talk.</span></h2><a className="contact-arrow" href={`mailto:${email}`} aria-label="Email Aman"><ArrowUpRight size={34} /></a></div>
          <div className="contact-bottom">
            <div><span className="contact-label">EMAIL ME AT</span><a className="email-link" href={`mailto:${email}`}>{email}</a><button className="copy-button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? 'Copied' : 'Copy'}</button></div>
            {(linkedinUrl || githubUrl) && <div className="social-links">
              {linkedinUrl && <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={13} /></a>}
              {githubUrl && <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17} /> GitHub <ArrowUpRight size={13} /></a>}
            </div>}
          </div>
        </section>
      </main>

      <footer className="footer section-wrap"><a className="wordmark" href="#home"><span className="wordmark-mark">A.</span><span>AMAN AGARWAL</span></a><span>DESIGNED TO KEEP EVOLVING <span className="footer-star">✳</span></span><span>© {new Date().getFullYear()} AMAN AGARWAL</span></footer>
    </div>
  )
}

export default App
