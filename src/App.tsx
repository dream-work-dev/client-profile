const skills = [
  ['Languages', 'Python · Java · JavaScript · TypeScript · C++ · Go · SQL · Bash'],
  ['Backend & APIs', 'FastAPI · Django · REST · Microservices · async processing · event-driven systems'],
  ['Data systems', 'PostgreSQL · MySQL · Redis · SQLite · MongoDB · indexing · sharding · replication'],
  ['Cloud & delivery', 'AWS · Kubernetes/EKS · Docker · Helm · Terraform · CI/CD'],
  ['Architecture', 'Multi-tenant SaaS · distributed systems · low-latency services · reliability engineering'],
  ['AI & security', 'LLM APIs · MCP integrations · workflow automation · RBAC · OAuth2 · encryption'],
]

const roles = [
  {
    company: 'Jedify', title: 'Senior Software Engineer', date: 'Sep 2023 — Present', place: 'Lake Forest, CA',
    intro: 'Building production infrastructure that connects enterprise data, knowledge, and AI-assisted workflows.',
    bullets: [
      'Architected provider-agnostic AI services with validation, routing, timeouts, retries, fallbacks, and usage controls.',
      'Built secure ingestion and synchronization pipelines across databases, warehouses, BI tools, documents, and collaboration platforms.',
      'Developed FastAPI services and governed context-retrieval flows that preserve provenance and entity-level authorization.',
      'Designed recoverable asynchronous workflows and optimized PostgreSQL, MongoDB, and Redis access for high-frequency operations.',
      'Deployed observable services on AWS with Docker, Kubernetes/EKS, Helm, S3, RDS, ElastiCache, and Bedrock.',
    ],
    stack: 'Python 3.11+ · FastAPI · PostgreSQL · MongoDB · Redis · LiteLLM · AWS · Kubernetes',
  },
  {
    company: 'Airtable', title: 'Software Engineer', date: 'Oct 2019 — Sep 2023', place: 'San Francisco, CA',
    intro: 'Worked across the database, growth, monetization, and enterprise foundations of Airtable’s collaborative SaaS platform.',
    bullets: [
      'Built systems for multi-tenant workspace isolation, large-scale data access, enterprise onboarding, and workspace provisioning.',
      'Led subscription infrastructure, billing workflows, and enterprise pricing models.',
      'Improved query performance through indexing, caching, and data-access optimization.',
      'Launched Airtable’s first growth experiments, education plans, email-based discounts, and extended trials for larger teams.',
    ],
    stack: 'Python · Go · TypeScript · PostgreSQL · Redis · distributed systems',
  },
  {
    company: 'Kandra Labs / Zulip', title: 'Head of Product · Software Engineer', date: 'Jun 2016 — Oct 2019', place: 'San Francisco Bay Area',
    intro: 'Joined as the first engineering hire, then helped lead product and systems work for the open-source enterprise communication platform.',
    bullets: [
      'Built foundational messaging, analytics, billing, and enterprise feature infrastructure.',
      'Shaped product roadmap, prioritization, onboarding, documentation, and enterprise adoption workflows.',
      'Designed extensible architecture for external contributors and supported early funding efforts, including an NSF grant.',
    ],
    stack: 'Python · Django · PostgreSQL · JavaScript',
  },
]

const earlier = [
  ['South Park Commons', 'Member', '2016 — 2018'],
  ['Google', 'Research Intern — query clustering & intent modeling', 'Summer 2015'],
  ['Microsoft Research', 'Research Intern — approximation bounds for combinatorial optimization', 'Summer 2014'],
  ['Quora', 'Data Science Intern — ranking & recommendation experiments', 'Summer 2012'],
  ['Dropbox', 'Analytics Intern — user behavior & retention analysis', 'Summer 2011'],
]

function App() {
  return <>
    <header className="site-header">
      <a className="mark" href="#top" aria-label="Rishi Gupta, home">RG<span>.</span></a>
      <nav aria-label="Primary navigation">
        <a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a><a href="#education">Education</a>
      </nav>
      <a className="nav-contact" href="mailto:rishigupta9021@gmail.com">Let’s talk <span aria-hidden="true">↗</span></a>
    </header>

    <main id="main">
      <section className="hero" id="top">
        <div className="hero-kicker"><span></span> Senior Software Engineer · Lake Forest, CA</div>
        <h1>I build systems that stay <em>clear</em> at scale.</h1>
        <div className="hero-bottom">
          <p>Backend architecture, distributed infrastructure, and AI-assisted workflows for ambitious products and enterprise teams.</p>
          <div className="hero-actions">
            <a className="button primary" href="#experience">Explore my work <span aria-hidden="true">↓</span></a>
          </div>
        </div>
        <div className="hero-orbit" aria-hidden="true"><div className="orbit-core">10+<small>years</small></div></div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">01 / About</div>
        <div className="about-copy">
          <h2>Systems thinking,<br/>from data layer to product.</h2>
          <p>Rishi Gupta is a senior software engineer with 10+ years of experience building scalable SaaS platforms, distributed backend systems, and data-intensive infrastructure.</p>
          <p>His work spans multi-tenant architecture, high-performance APIs, enterprise monetization, and AI-enabled workflows—grounded in a focus on performance, reliability, and useful product outcomes.</p>
        </div>
        <aside className="signal-card" aria-label="Areas of focus">
          <span>Current focus</span>
          <strong>Enterprise data ×<br/>AI workflows</strong>
          <div className="signal-lines" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
        </aside>
      </section>

      <section className="experience section" id="experience">
        <div className="section-label">02 / Experience</div>
        <div className="section-heading"><h2>Selected experience</h2><p>Building the foundations behind products people rely on.</p></div>
        <div className="timeline">
          {roles.map((role, i) => <article className="role" key={role.company}>
            <div className="role-index">0{i + 1}</div>
            <div className="role-meta"><h3>{role.company}</h3><p>{role.title}</p><time>{role.date}</time><small>{role.place}</small></div>
            <div className="role-body"><p className="role-intro">{role.intro}</p><ul>{role.bullets.map(b => <li key={b}>{b}</li>)}</ul><p className="stack">{role.stack}</p></div>
          </article>)}
        </div>
        <div className="earlier">
          <h3>Earlier chapters</h3>
          {earlier.map(([company, role, date]) => <div className="earlier-row" key={company}><strong>{company}</strong><span>{role}</span><time>{date}</time></div>)}
        </div>
      </section>

      <section className="skills section" id="skills">
        <div className="section-label">03 / Toolkit</div>
        <div className="section-heading"><h2>Depth where it matters.</h2><p>A practical toolkit shaped by production systems.</p></div>
        <div className="skill-grid">{skills.map(([name, list], i) => <article key={name}><span>0{i + 1}</span><h3>{name}</h3><p>{list}</p></article>)}</div>
        <p className="familiar">Also familiar with GraphQL, gRPC, MongoDB, and DynamoDB.</p>
      </section>

      <section className="education section" id="education">
        <div className="section-label">04 / Education</div>
        <div className="education-list">
          <article><div className="school-mark">S</div><div><h3>Stanford University</h3><p>PhD, Computer Science</p></div><time>2011 — 2016</time></article>
          <article><div className="school-mark">MIT</div><div><h3>Massachusetts Institute of Technology</h3><p>MEng, Computer Science</p><p>BS, Mathematics and Computer Science</p></div><time>2008 — 2011</time></article>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p>Have a hard systems problem?</p>
        <h2>Let’s make it<br/><em>work beautifully.</em></h2>
        <a href="mailto:rishigupta9021@gmail.com">rishigupta9021@gmail.com <span aria-hidden="true">↗</span></a>
        <div className="contact-links"><a href="https://www.linkedin.com/in/rishi-gupta-3a35059238" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/rishitgupta" target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>
    </main>
    <footer><span>© {new Date().getFullYear()} Rishi Gupta</span><a href="#top">Back to top ↑</a></footer>
  </>
}

export default App
