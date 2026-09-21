import { useEffect, useState } from 'react'
import './App.css'

// Fill in your public contact details here. Empty values remain non-clickable.
const profile = {
  name: 'Jingwen Li',
  location: 'Rochester, NY',
  email: 'jadejingw@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jingwen-li-a95502336/',
  github: 'https://github.com/jli-111',
  leetcode: 'https://leetcode.com/u/jade_111/',
}
const sections = ['about', 'projects', 'skills', 'education', 'certifications']

function ContactItem({ label, value, href, symbol }) {
  return (
    <div className="contact-item">
      <span className="contact-symbol" aria-hidden="true">
        {symbol}
      </span>

      {value ? (
        href ? (
          <a href={href} aria-label={label}>
            {value}
          </a>
        ) : (
          <span>{value}</span>
        )
      ) : (
        <span className="contact-placeholder">
          {label}: To be added
        </span>
      )}
    </div>
  )
}

// Add the final project URLs when the demos or case studies are published.
const projects = [
  {
    id: 'database',
    category: 'DATABASE MANAGEMENT',
    title: 'Tutoring Reservation System',
    description:'Help students to book tutoring sessions for their courses, and let tutors manage their schedules.',
    bullets: [
      'Verify student and tutor identities at login by checking credentials against registered account records.',
      'Help students find suitable tutors by checking both course eligibility and availability before booking.',
      'Keep booking options up to date by hiding reserved time slots and allowing tutors to manage their availability',
    ],
    tags: ['MySQL', 'Python', 'React', 'Relational Databases', 'Login Verification'],
    url: '',
  },
  {
    id: 'financial',
    category: 'FINANCIAL ANALYSIS',
    title: 'Food Industry Analysis',
    description: 'Translated financial data into an investment recommendation by assessing business performance, peer valuation, and growth prospects.',
    bullets: [
      'Made valuation comparisons meaningful across companies of different sizes by using P/E and P/B ratios rather than absolute share prices or company values.',
      'Clarified changes in business performance by consolidating financial statement data into charts showing revenue, costs, and profitability trends.',
      'Addressed whether Chacha Food presented a buying opportunity through a written research report combining financial trends, peer valuations, and an assessment of management and strategy changes.',
    ],
    tags: ['MATLAB', 'Excel', 'SPSS', 'Industry Analysis'],
    url: '',
  },
]

// Add other programming languages only when they reflect your actual skills.
const skills = [
  { title: 'Mathematics & Algorithms', text: 'Mathematical problem-solving · Sorting algorithms' },
  { title: 'Database Management', text: 'MySQL · SQL · Relational tables · Database management' },
  { title: 'Programming & Web Technologies', text: 'MATLAB · SQL · HTML · CSS · JavaScript · React' },
  { title: 'Data Analysis', text: 'MATLAB · Excel · Public-data analysis · Food-industry research' },
  { title: 'Finance', text: 'Financial analysis knowledge supported by passing CFA Program Level II' },
]

function ProjectCard({ category, title, description, bullets, tags, url }) {
  return (
    <article className="project-card project-summary">
      <div className="project-copy">
        <p className="project-category">{category}</p>
        <h3>{title}</h3>
        <p>{description}</p>
        <ul className="project-bullets">
          {bullets.map(bullet => <li key={bullet}>{bullet}</li>)}
        </ul>
        <div className="tags">
          {tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
{/* URL of the system project */}
        {/* {url ? (
          <a className="project-link" href={url}>View project</a>
        ) : (
          <span className="project-link-pending">Project page forthcoming</span>
        )} */}
      </div>
    </article>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('about')

  // Update the navigation as each section reaches the area below the header.
  useEffect(() => {
    function updateSection() {
      let current = sections[0]
      for (const id of sections) {
        if (document.getElementById(id)?.getBoundingClientRect().top <= 180) {
          current = id
        }
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = sections[sections.length - 1]
      }
      setActiveSection(current)
    }
    updateSection()
    window.addEventListener('scroll', updateSection, { passive: true })
    window.addEventListener('resize', updateSection)
    return () => {
      window.removeEventListener('scroll', updateSection)
      window.removeEventListener('resize', updateSection)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#about">Jingwen</a>
        <nav aria-label="Main navigation">
          {sections.map(id => (
            <a key={id} href={`#${id}`} aria-current={activeSection === id ? 'location' : undefined}>
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero profile-hero" id="about">
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="art-note">DATA · SYSTEMS · INTERFACES</div>
            <div className="code-card">
              <div className="code-card-top">
                <span /><span /><span /><small>profile.js</small>
              </div>
              <div className="code-lines">
                <span className="muted">// One project at a time.</span>
                <br />

                <span className="code-purple">const</span> journey = {'{'}
                <br />

                &nbsp; curiosity: <span className="code-green">'always'</span>,
                <br />

                &nbsp; building: <span className="code-green">'something new'</span>,
                <br />

                &nbsp; learning: <span className="code-purple">True</span>
                <br />

                {'}'}
              </div>
            </div>
            <div className="floating-label"><span>↗</span> Ideas into implementation.</div>
            <span className="art-spark">✳</span>
          </div>

          <div className="hero-copy">
            <span className="eyebrow">PERSONAL PROFILE</span>
            <h1>{profile.name}<span className="blue">.</span></h1>
            <p className="profile-focus">Backend Development · Data Analytics</p>
            <p>Information and Computing Science graduate pursuing a backend development role, with an academic foundation in C programming, SQL, and algorithms. Combines undergraduate training in numerical analysis and optimization with graduate-level coursework in SQL and algorithmic problem-solving.</p>
            <div className="contact-grid">
              <ContactItem label="Location" value={profile.location} symbol="◎" />
              <ContactItem label="Email" value={profile.email} href={profile.email ? `mailto:${profile.email}` : ''} symbol="@" />
              <ContactItem label="LinkedIn" value={profile.linkedin ? 'LinkedIn.com' : ''} href={profile.linkedin} symbol="in" />
              <ContactItem label="GitHub" value={profile.github ? 'github.com' : ''} href={profile.github} symbol="⌘" />
              <ContactItem label="LeetCode" value={profile.leetcode ? 'leetcode.com' : ''} href={profile.leetcode} symbol="&lt;/&gt;" />
            </div>
            {/* <a className="primary-button" href="#projects">View projects <span aria-hidden="true">↗</span></a> */}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="projects-photo">
            <span>SELECTED WORK</span>
            <h2>Projects</h2>
          </div>
          <div className="projects-content">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="skills-photo"><span>TECHNICAL SKILLS</span><h2>Behind the<br />implementation.</h2></div>
          <div className="skills-content">
            <span className="eyebrow">TOOLS & TECHNOLOGIES</span>
            <h2>Skills</h2>
            {skills.map((skill, index) => (
              <div className="skill-row" key={skill.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{skill.title}</h3><p>{skill.text}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="education-section" id="education">
          <h2>Education</h2>

          <div className="education-list">
            <article className="education-entry">
              <div className="education-heading">
                <h3>University of Rochester</h3>
                <span>Rochester, NY</span>
              </div>

              <div className="education-degree">
                <p>M.S. in Computer Science (STEM)</p>
                <span>Aug 2024 – Dec 2025</span>
              </div>

              <p className="education-detail">
                <strong>Coursework:</strong> Java, Python, MySQL,
                C++, Distributed System
              </p>
            </article>

            <article className="education-entry">
              <div className="education-heading">
                <h3>North China Electric Power University</h3>
                <span>Beijing, China</span>
              </div>

              <div className="education-degree">
                <p>B.S. in Information and Computing Science</p>
                <span>Sep 2019 – Jun 2023</span>
              </div>

              <p className="education-detail">
                <strong>GPA:</strong> 3.5 / 4.0
              </p>

              <p className="education-detail">
                <strong>Awards:</strong> University scholarship for 3 consecutive years
              </p>
            </article>
          </div>
        </section>

        <section
          className="education-section certification-section"
          id="certifications"
        >
          <h2>Credentials & Test Scores</h2>

          <div className="credentials-list">
            <article className="credential-entry">
              <div className="credential-heading">
                <h3>CFA Program — Passed Level II</h3>
                <span>Feb 2026</span>
              </div>
              <p>CFA Institute</p>
            </article>

            <article className="credential-entry">
              <div className="credential-heading">
                <h3>GRE General Test — 327/340</h3>
                <span>Jan 2024</span>
              </div>
              <p>Quantitative: 170/170 · Verbal: 157/170</p>
            </article>

            <article className="credential-entry">
              <div className="credential-heading">
                <h3>IELTS Academic — Overall 7.0</h3>
                <span>Nov 2023</span>
              </div>
              <p>
                Listening: 7.5 · Reading: 8.0 ·
                Writing: 6.5 · Speaking: 6.0
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <a className="wordmark" href="#about">Jingwen<span>.</span></a>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#about">Back to top ↑</a>
      </footer>
    </>
  )
}

export default App
