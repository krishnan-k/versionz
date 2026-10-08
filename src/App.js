import './App.css';
import { useEffect, useRef, useState } from "react";
import {
  SITE,
  serviceGroups,
  delivered,
  changed,
  industries,
  stories,
  orders,
  footerLinks,
} from "./data.js";

// Set this to a form service URL (Formspree, Netlify Forms, your own API).
// While it's empty the form shows the confirmation but sends nothing.
const FORM_ENDPOINT = "";


function Logo({ size = "md" }) {
  return (
    <span className={`logo-mark logo-${size}`}>
      <svg viewBox="0 0 32 32" aria-hidden="true" width="1.15em" height="1.15em">
        <path d="M3 6h6.2L16 21.5 22.8 6H29L18.6 28h-5.2z" fill="currentColor" />
      </svg>
      <span>ersionz</span>
    </span>
  );
}

/* ------------------------------------------------------------ Header */

function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrap = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };
    const onClick = (e) => {
      if (wrap.current && !wrap.current.contains(e.target)) setServicesOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  return (
    <header className="site-header" ref={wrap}>
      <div className="wrap header-row">
        <a className="logo" href="#top" aria-label="Versionz home">
          <Logo />
        </a>

        <button
          className="menu-toggle"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          Menu
        </button>

        <nav id="main-nav" className={mobileOpen ? "nav open" : "nav"} aria-label="Main">
          <button
            className="nav-link nav-services"
            aria-expanded={servicesOpen}
            aria-controls="services-panel"
            onClick={() => setServicesOpen((v) => !v)}
          >
            Services
          </button>
          <a className="nav-link" href="#products" onClick={() => setMobileOpen(false)}>Products</a>
          <a className="nav-link" href={`${SITE}/blogs/`}>Blog</a>
          <a className="nav-link" href={`${SITE}/about/`}>About</a>
          <a className="nav-link" href={`${SITE}/career/`}>Careers</a>
          <a className="btn btn-small" href="#contact" onClick={() => setMobileOpen(false)}>
            Talk to us
          </a>
        </nav>
      </div>

      <div id="services-panel" className="mega" hidden={!servicesOpen}>
        <div className="wrap mega-grid">
          {serviceGroups.map((g) => (
            <div key={g.id}>
              <p className="mega-title">{g.name}</p>
              <ul>
                {g.sets.flatMap((s) => s.items).map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------- Hero */

function OrderBoard() {
  const [sel, setSel] = useState(0);
  const order = orders[sel];

  return (
    <aside className="board" aria-label="Order fulfilment example">
      <div className="board-top">
        <span className="board-name">Order fulfilment</span>
        <span className="board-note-tag">Sample data</span>
      </div>

      <div className="board-list" role="tablist" aria-label="Open sales orders">
        {orders.map((o, i) => (
          <button
            key={o.id}
            role="tab"
            aria-selected={i === sel}
            className={i === sel ? "row on" : "row"}
            onClick={() => setSel(i)}
          >
            <span className="row-main">
              <span className="row-id">{o.id}</span>
              <span className="row-customer">{o.customer}</span>
            </span>
            <span className="row-ship">Ships {o.ship}</span>
            <span className={`pill pill-${o.tone}`}>{o.status}</span>
          </button>
        ))}
      </div>

      <div className="board-detail" role="tabpanel">
        <p className="detail-title">{order.id}, order lines</p>
        <ul className="lines">
          {order.lines.map(([name, qty, ready]) => (
            <li key={name}>
              <span className="line-name">{name}</span>
              <span className="bar" aria-hidden="true">
                <span
                  className={ready < qty ? "fill short" : "fill"}
                  style={{ width: `${Math.round((ready / qty) * 100)}%` }}
                />
              </span>
              <span className="line-qty">
                {ready} of {qty}
              </span>
            </li>
          ))}
        </ul>
        <p className="detail-note">{order.note}</p>
      </div>

      <p className="board-foot">
        The Sales Order Agent pulls this from live Dynamics 365 data and answers questions about it
        in plain language.
      </p>
    </aside>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="badge"><img src={`${SITE}/asset/Microsoft_logo.svg`} alt="" width="16" height="16" />Microsoft partner</p>
          <h1>Dynamics 365, Power Platform and AI, set up by a team that has done it before.</h1>
          <p className="lede">
            Versionz plans, builds and looks after ERP, CRM, data and AI projects on Microsoft
            technology. We work with your people, not around them, and we stay involved after go-live.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#contact">Talk to us</a>
            <a className="text-link" href="#products">See what the Sales Order Agent does</a>
          </div>
        </div>
        <OrderBoard />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Numbers */

function Numbers() {
  return (
    <section className="section numbers" aria-labelledby="numbers-h">
      <div className="wrap split">
        <div>
          <h2 id="numbers-h">Where we've been, and what changed</h2>
          <p className="muted">
            Figures from our delivery work so far, across ERP, CRM, automation and reporting.
          </p>
        </div>
        <div className="num-cols">
          <dl className="num-list">
            {delivered.map(([n, label]) => (
              <div key={n}>
                <dt>{n}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
          <dl className="num-list num-list-alt">
            {changed.map(([n, label]) => (
              <div key={n}>
                <dt>{n}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Services */

function Services() {
  const [id, setId] = useState(serviceGroups[0].id);
  const group = serviceGroups.find((g) => g.id === id);

  return (
    <section className="section" id="services" aria-labelledby="services-h">
      <div className="wrap">
        <h2 id="services-h">What we do</h2>
        <div className="svc">
          <div className="svc-tabs" role="tablist" aria-label="Service areas">
            {serviceGroups.map((g) => (
              <button
                key={g.id}
                role="tab"
                aria-selected={g.id === id}
                className={g.id === id ? "svc-tab on" : "svc-tab"}
                onClick={() => setId(g.id)}
              >
                {g.name}
              </button>
            ))}
          </div>
          <div className="svc-panel" role="tabpanel">
            <p className="svc-blurb">{group.blurb}</p>
            <div className="svc-sets">
              {group.sets.map((set) => (
                <div key={set.label}>
                  <h3>{set.label}</h3>
                  <ul>
                    {set.items.map((item) => (
                      <li key={item.href}>
                        <a href={item.href}>{item.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Products */

function Products() {
  return (
    <section className="section products" id="products" aria-labelledby="products-h">
      <div className="wrap">
        <h2 id="products-h">Two tools for Dynamics 365 teams, and two more on the way</h2>

        <div className="prod-main">
          <article className="prod">
            <h3>CompareIQ</h3>
            <p>
              Compare Dynamics 365 Finance and Operations and Customer Engagement data across every
              layer and every environment, from one web platform.
            </p>
            <table className="diff" aria-label="Example comparison between two environments">
              <caption>Example: UAT against Production</caption>
              <thead>
                <tr>
                  <th scope="col">Setting</th>
                  <th scope="col">UAT</th>
                  <th scope="col">Production</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Payment terms</td><td>Net 30</td><td>Net 30</td></tr>
                <tr className="differs"><td>Tax group</td><td>GST-10</td><td>GST-05</td></tr>
                <tr><td>Posting profile</td><td>Standard</td><td>Standard</td></tr>
                <tr className="differs"><td>Approval limit</td><td>25,000</td><td>10,000</td></tr>
              </tbody>
            </table>
            <a className="btn btn-outline" href={`${SITE}/products/compareiq/`}>Explore CompareIQ</a>
          </article>

          <article className="prod">
            <h3>D365 Sales Order Agent</h3>
            <p>
              Fulfilment visibility for sales orders, inventory, production and supply, answered in
              business language from live ERP data. The example at the top of this page is a small
              taste of it.
            </p>
            <a className="btn btn-outline" href={`${SITE}/products/d365-sales-order-agent/`}>
              Explore the agent
            </a>
          </article>
        </div>

        <div className="soon">
          <h3>In development</h3>
          <div className="soon-row">
            <div>
              <p className="soon-name">Business Central Comparison Tool</p>
              <p>Compare Business Central data across every layer and environment, from one web platform.</p>
            </div>
            <a className="text-link" href={`${SITE}/contact/`}>Ask about early access</a>
          </div>
          <div className="soon-row">
            <div>
              <p className="soon-name">Testing Automation Tool</p>
              <p>
                Regression and release testing for Dynamics 365. Build a suite once, replay it across
                environments and sign off a release on evidence instead of screenshots.
              </p>
            </div>
            <a className="text-link" href={`${SITE}/contact/`}>Ask about early access</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Industries */

function Industries() {
  return (
    <section className="section" aria-labelledby="ind-h">
      <div className="wrap split">
        <div>
          <h2 id="ind-h">Industries we work in</h2>
          <p className="muted">
            The platform stays the same. What changes is the context, the delivery risks and what the
            business needs to see first.
          </p>
          <a className="text-link" href={`${SITE}/d365-finance-operations/`}>Explore industry capabilities</a>
        </div>
        <ul className="ind-list">
          {industries.map(([name, line]) => (
            <li key={name}>
              <span className="ind-name">{name}</span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Stories */

function Stories() {
  return (
    <section className="section tint" aria-labelledby="stories-h">
      <div className="wrap">
        <h2 id="stories-h">Client stories</h2>
        <p className="muted narrow">
          How organizations have modernized operations, connected their systems and measured the
          difference.
        </p>
        <div className="stories">
          {stories.map((s) => (
            <article key={s.title} className="story">
              <div>
                <h3>{s.title}</h3>
                <p className="story-tags">{s.tags}</p>
              </div>
              <p>{s.text}</p>
              <a className="text-link" href={`${SITE}/blogs/`}>Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Partner */

function Partner() {
  const items = [
    ["Dynamics 365", "Finance, operations and customer engagement apps, with reporting connected to both."],
    ["AI Foundry", "Designing, testing and orchestrating AI solutions that fit real workflows."],
    ["Cloud services", "Secure architecture, app modernization and integrations on Azure."],
    ["Artificial intelligence", "Assistants and automations built around how your operation actually runs."],
  ];
  return (
    <section className="section" aria-labelledby="partner-h">
      <div className="wrap">
        <div className="partner-head">
          <img src={`${SITE}/asset/Microsoft_logo.svg`} alt="Microsoft" height="28" />
          <h2 id="partner-h">Microsoft AI Cloud and Dynamics 365 partner</h2>
        </div>
        <div className="partner-grid">
          {items.map(([t, d]) => (
            <div key={t}>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- Contact */

function Contact() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const data = Object.fromEntries(new FormData(e.target));
    if (!FORM_ENDPOINT) {
      console.warn("FORM_ENDPOINT is empty, the message was not sent.", data);
      setSent(true);
      return;
    }
    try {
      setBusy(true);
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError("That didn't go through. Check your connection and try again, or use the contact page.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-h">
      <div className="wrap split">
        <div>
          <h2 id="contact-h">Tell us what isn't working</h2>
          <p className="muted">
            A few lines is enough. Someone from the team will read it and reply.
          </p>
          <p className="muted">
            Looking for a job instead? See <a href={`${SITE}/career/`}>open roles</a>.
          </p>
        </div>

        {sent ? (
          <div className="sent" role="status">
            <h3>Message received</h3>
            <p>Thanks. We'll get back to you at the email you gave us.</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="form">
            <label>
              Your name
              <input name="name" required autoComplete="name" />
            </label>
            <label>
              Work email
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              Company
              <input name="company" autoComplete="organization" />
            </label>
            <label>
              What are you trying to sort out?
              <textarea name="message" rows="4" required />
            </label>
            {error && <p className="form-error" role="alert">{error}</p>}
            <button className="btn" type="submit" disabled={busy}>
              {busy ? "Sending" : "Send message"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Footer */

function FooterCol({ title, links }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {links.map(([name, path]) => (
          <li key={path}>
            <a href={`${SITE}${path}`}>{name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="footer-about">
          <Logo />
          <p>
            We help organizations modernize operations, connect data and build scalable ERP, CRM and
            AI solutions on Microsoft technologies.
          </p>
          <p className="footer-links-inline">
            <a href="https://www.linkedin.com/in/versionz-corp-a83b93383/">LinkedIn</a>
            <a href="https://youtube.com/@versionzcorp?si=XiQcOL4lCs2Uq4yQ">YouTube</a>
          </p>
        </div>
        <FooterCol title="Work with us" links={footerLinks.work} />
        <FooterCol title="What we build" links={footerLinks.build} />
        <FooterCol title="CompareIQ" links={footerLinks.compareiq} />
      </div>
      <div className="wrap footer-base">
        <p>© 2026 Versionz. Microsoft Partner.</p>
      </div>
    </footer>
  );
}

/* --------------------------------------------------------------- App */

export default function App() {
  return (
    <>
      <a className="skip" href="#services">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <Numbers />
        <Services />
        <Products />
        <Industries />
        <Stories />
        <Partner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}