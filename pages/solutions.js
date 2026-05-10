import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Solutions = (props) => {
  return (
    <>
      <div className="solutions-container1">
        <Head>
          <title>Solutions - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Solutions - Premium Software Development Company"
          />
          <meta
            property="og:description"
            content="Volues designs and develops modern websites, mobile applications, and enterprise software solutions for startups, businesses, and organizations."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/d7d4b743-9ff7-4865-9da4-b38b175a45d1/ba0f9c1f-a6d4-4c6f-a70d-51fdb2d01d41?org_if_sml=1&amp;force_format=original"
          />
          <link
            rel="canonical"
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/solutions"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/solutions"
          />
        </Head>
        <Navigation></Navigation>
        <div className="solutions-container2">
          <div className="solutions-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) var(--spacing-xl);
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="solutions1-hero-section">
          <div className="hero-glow-1"></div>
          <div className="hero-glow-2"></div>
          <div className="solutions1-hero-content">
            <h1 className="solutions1-hero-title hero-title">
              Scalable Digital Solutions for Modern Businesses
            </h1>
            <p className="hero-subtitle">
              Empowering enterprises with cutting-edge software engineering,
              robust digital infrastructure, and innovative product design that
              scales with your ambition.
            </p>
            <div className="hero-cta-group">
              <button className="btn btn-primary btn-lg">
                Book Consultation
              </button>
              <button className="btn btn-lg btn-outline">
                Explore Projects
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="solutions1-stat-number">99.9%</span>
                <span className="solutions1-stat-label">Uptime</span>
              </div>
              <div className="stat-item">
                <span className="solutions1-stat-number">250+</span>
                <span className="solutions1-stat-label">Deployments</span>
              </div>
              <div className="stat-item">
                <span className="solutions1-stat-number">15+</span>
                <span className="solutions1-stat-label">Industries</span>
              </div>
            </div>
          </div>
          <div className="solutions1-hero-visual">
            <div className="solutions1-mockup-container">
              <img
                src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=1500"
                alt="Futuristic Dashboard Mockup"
                className="solutions1-mockup-image main-mockup"
              />
              <div className="solutions1-floating-card solutions1-card-1">
                <div className="card-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-label">Security Status</span>
                  <span className="card-value">Protected</span>
                </div>
              </div>
              <div className="solutions1-floating-card solutions1-card-2">
                <div className="card-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                  </svg>
                </div>
                <div className="card-info">
                  <span className="card-label">System Load</span>
                  <span className="card-value">Optimal</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solutions1-partners-section">
          <div className="partners-container">
            <div className="partners-grid">
              <div className="solutions1-partner-logo">
                <span>TECHFLOW</span>
              </div>
              <div className="solutions1-partner-logo">
                <span>NEXUS</span>
              </div>
              <div className="solutions1-partner-logo">
                <span>QUANTUM</span>
              </div>
              <div className="solutions1-partner-logo">
                <span>VELOCITY</span>
              </div>
              <div className="solutions1-partner-logo">
                <span>ZENITH</span>
              </div>
              <div className="solutions1-partner-logo">
                <span>CORE</span>
              </div>
            </div>
          </div>
        </section>
        <section className="overview-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Engineered for Excellence
            </h2>
            <p className="section-content">
              We don&apos;t just build software; we architect the future of your
              business through a meticulous blend of innovation and reliability.
            </p>
          </div>
          <div className="overview-grid">
            <div className="solutions1-glass-card">
              <div className="solutions1-card-glow"></div>
              <h3 className="card-title">Scalable Architecture</h3>
              <p className="card-text">
                Systems designed to grow seamlessly from MVP to global
                enterprise scale without performance bottlenecks.
              </p>
            </div>
            <div className="solutions1-glass-card">
              <div className="solutions1-card-glow"></div>
              <h3 className="card-title">Modern Technologies</h3>
              <p className="card-text">
                Leveraging the latest frameworks and cloud-native solutions to
                ensure your product stays ahead of the curve.
              </p>
            </div>
            <div className="solutions1-glass-card">
              <div className="solutions1-card-glow"></div>
              <h3 className="card-title">Security &amp; Reliability</h3>
              <p className="card-text">
                Enterprise-grade protection and high-availability infrastructure
                built into the core of every solution.
              </p>
            </div>
            <div className="solutions1-glass-card">
              <div className="solutions1-card-glow"></div>
              <h3 className="card-title">Growth-Focused Engineering</h3>
              <p className="card-text">
                Development strategies aligned with your business goals to drive
                user acquisition and market expansion.
              </p>
            </div>
          </div>
        </section>
        <section className="solutions-grid-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Our Specialized Solutions
            </h2>
          </div>
          <div className="solutions-grid">
            <div className="solution-item">
              <div className="solution-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                  <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                </svg>
              </div>
              <h3 className="card-title">Startup Product Development</h3>
              <p className="card-text">
                Rapid prototyping and development of MVPs and SaaS platforms
                designed for speed-to-market.
              </p>
              <ul className="feature-list">
                <li>
                  <span>MVP Strategy</span>
                </li>
                <li>
                  <span>SaaS Platforms</span>
                </li>
                <li>
                  <span>Product Launch Systems</span>
                </li>
              </ul>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="card-title">Business Automation Systems</h3>
              <p className="card-text">
                Custom CRM platforms and internal dashboards that streamline
                complex business workflows.
              </p>
              <ul className="feature-list">
                <li>
                  <span>CRM Platforms</span>
                </li>
                <li>
                  <span>Internal Dashboards</span>
                </li>
                <li>
                  <span>Workflow Automation</span>
                </li>
              </ul>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="card-title">Enterprise Software Solutions</h3>
              <p className="card-text">
                Robust ERP systems and secure enterprise platforms designed for
                high-concurrency environments.
              </p>
              <ul className="feature-list">
                <li>
                  <span>ERP Systems</span>
                </li>
                <li>
                  <span>Enterprise Platforms</span>
                </li>
                <li>
                  <span>Secure Infrastructure</span>
                </li>
              </ul>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <h3 className="card-title">Mobile App Ecosystems</h3>
              <p className="card-text">
                High-performance native and cross-platform mobile applications
                that engage users everywhere.
              </p>
              <ul className="feature-list">
                <li>
                  <span>Android Apps</span>
                </li>
                <li>
                  <span>iOS Apps</span>
                </li>
                <li>
                  <span>Cross-Platform</span>
                </li>
              </ul>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"></path>
                </svg>
              </div>
              <h3 className="card-title">
                Cloud &amp; Infrastructure Solutions
              </h3>
              <p className="card-text">
                Optimized cloud deployment and API systems built on resilient
                database architectures.
              </p>
              <ul className="feature-list">
                <li>
                  <span>Cloud Deployment</span>
                </li>
                <li>
                  <span>API Systems</span>
                </li>
                <li>
                  <span>Database Architecture</span>
                </li>
              </ul>
            </div>
            <div className="solution-item">
              <div className="solution-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 18l6-6l-6-6M8 6l-6 6l6 6"></path>
                </svg>
              </div>
              <h3 className="card-title">UI/UX &amp; Digital Experience</h3>
              <p className="card-text">
                Strategic design systems and user interfaces that prioritize
                usability and conversion.
              </p>
              <ul className="feature-list">
                <li>
                  <span>Product Design</span>
                </li>
                <li>
                  <span>User Experience</span>
                </li>
                <li>
                  <span>Interface Systems</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="industries-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Industries We Serve
            </h2>
          </div>
          <div className="industries-scroll">
            <div className="industry-card">
              <span className="industry-name">Healthcare</span>
              <p className="industry-desc">
                Secure HIPAA-compliant platforms for modern patient care.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">Education</span>
              <p className="industry-desc">
                Interactive LMS and digital learning environments.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">Finance</span>
              <p className="industry-desc">
                High-security fintech solutions and trading platforms.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">Real Estate</span>
              <p className="industry-desc">
                Dynamic property management and listing ecosystems.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">Logistics</span>
              <p className="industry-desc">
                Supply chain tracking and fleet management systems.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">Government</span>
              <p className="industry-desc">
                Resilient digital infrastructure for public services.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">E-commerce</span>
              <p className="industry-desc">
                Conversion-optimized global shopping experiences.
              </p>
            </div>
            <div className="industry-card">
              <span className="industry-name">Startups</span>
              <p className="industry-desc">
                Agile development for the next generation of unicorns.
              </p>
            </div>
          </div>
        </section>
        <section className="tech-stack-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Advanced Tech Stack
            </h2>
          </div>
          <div className="solutions1-tech-grid">
            <div className="tech-group">
              <h4 className="tech-category">Frontend</h4>
              <div className="tech-badges">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">Flutter</span>
              </div>
            </div>
            <div className="tech-group">
              <h4 className="tech-category">Backend</h4>
              <div className="tech-badges">
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Firebase</span>
                <span className="tech-badge">Supabase</span>
              </div>
            </div>
            <div className="tech-group">
              <h4 className="tech-category">Cloud &amp; DevOps</h4>
              <div className="tech-badges">
                <span className="tech-badge">AWS</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Cloudflare</span>
              </div>
            </div>
            <div className="tech-group">
              <h4 className="tech-category">Design</h4>
              <div className="tech-badges">
                <span className="tech-badge">Figma</span>
                <span className="tech-badge">Framer</span>
                <span className="tech-badge">TeleportHQ</span>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Our Development Journey
            </h2>
          </div>
          <div className="solutions1-timeline-container">
            <div className="solutions1-timeline-line"></div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">Discovery</h4>
                <p className="step-desc">
                  Analyzing requirements and defining project scope.
                </p>
              </div>
            </div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">Strategy</h4>
                <p className="step-desc">
                  Architecting the roadmap and technology selection.
                </p>
              </div>
            </div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">UI/UX Design</h4>
                <p className="step-desc">
                  Crafting intuitive and engaging user experiences.
                </p>
              </div>
            </div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">Development</h4>
                <p className="step-desc">
                  Writing clean, scalable code with agile methodology.
                </p>
              </div>
            </div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">Testing</h4>
                <p className="step-desc">
                  Rigorous QA and performance optimization.
                </p>
              </div>
            </div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">Deployment</h4>
                <p className="step-desc">
                  Seamless launch into production environments.
                </p>
              </div>
            </div>
            <div className="solutions1-timeline-step">
              <div className="solutions1-step-dot"></div>
              <div className="solutions1-step-content">
                <h4 className="step-title">Ongoing Support</h4>
                <p className="step-desc">
                  Continuous maintenance and feature updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Featured Projects
            </h2>
          </div>
          <div className="solutions1-projects-grid">
            <div className="solutions1-project-card">
              <div className="project-media">
                <img
                  src="https://images.pexels.com/photos/34803968/pexels-photo-34803968.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Enterprise Platform"
                  className="project-img"
                />
                <div className="solutions1-project-overlay">
                  <button className="btn btn-primary btn-sm">
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h4 className="solutions1-project-title">NexGen ERP</h4>
                <p className="project-type">Enterprise Software</p>
              </div>
            </div>
            <div className="solutions1-project-card">
              <div className="project-media">
                <img
                  src="https://images.pexels.com/photos/8022861/pexels-photo-8022861.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Fintech App"
                  className="project-img"
                />
                <div className="solutions1-project-overlay">
                  <button className="btn btn-primary btn-sm">
                    View Case Study
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h4 className="solutions1-project-title">Vaultify</h4>
                <p className="project-type">Mobile Application</p>
              </div>
            </div>
          </div>
        </section>
        <section className="why-volues-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Why Choose Volues
            </h2>
          </div>
          <div className="why-grid">
            <div className="why-item">
              <span className="why-stat">40%</span>
              <h4 className="why-title">Fast delivery</h4>
              <p className="section-content">
                Accelerated development cycles without compromising quality.
              </p>
            </div>
            <div className="why-item">
              <span className="why-stat">∞</span>
              <h4 className="why-title">Scalable architecture</h4>
              <p className="section-content">
                Infrastructure built to handle millions of concurrent users.
              </p>
            </div>
            <div className="why-item">
              <span className="why-stat">2026</span>
              <h4 className="why-title">Modern technologies</h4>
              <p className="section-content">
                Always using the latest, most efficient tech stacks available.
              </p>
            </div>
            <div className="why-item">
              <span className="why-stat">100%</span>
              <h4 className="why-title">Security-focused</h4>
              <p className="section-content">
                Zero-trust security models integrated into every codebase.
              </p>
            </div>
            <div className="why-item">
              <span className="why-stat">Tier 1</span>
              <h4 className="why-title">Enterprise-grade</h4>
              <p className="section-content">
                Solutions that meet the highest global industry standards.
              </p>
            </div>
            <div className="why-item">
              <span className="why-stat">24/7</span>
              <h4 className="why-title">Dedicated Support</h4>
              <p className="section-content">
                Round-the-clock monitoring and expert technical assistance.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="solutions1-section-header section-header">
            <h2 className="solutions1-section-title section-title">
              Client Feedback
            </h2>
          </div>
          <div className="testimonial-grid">
            <div className="solutions1-testimonial-card">
              <p className="testimonial-text">
                &quot;Volues transformed our legacy infrastructure into a
                modern, lightning-fast ecosystem. Their engineering expertise is
                unmatched.&quot;
              </p>
              <div className="solutions1-testimonial-user">
                <div className="solutions1-user-avatar">
                  <span>JD</span>
                </div>
                <div className="user-meta">
                  <span className="solutions1-user-name">James Dalton</span>
                  <span className="solutions1-user-role">CTO, TechFlow</span>
                </div>
              </div>
            </div>
            <div className="solutions1-testimonial-card">
              <p className="testimonial-text">
                &quot;The mobile app they developed for us saw a 300% increase
                in user engagement within the first month. Incredible attention
                to detail.&quot;
              </p>
              <div className="solutions1-testimonial-user">
                <div className="solutions1-user-avatar">
                  <span>SR</span>
                </div>
                <div className="user-meta">
                  <span className="solutions1-user-name">Sarah Reed</span>
                  <span className="solutions1-user-role">
                    Product Head, Nexus
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-banner-section">
          <div className="solutions1-cta-banner-content">
            <h2 className="solutions1-hero-title hero-title">
              Ready to build the future?
            </h2>
            <p className="hero-subtitle">
              Join the world&apos;s most innovative companies and start your
              project with Volues today.
            </p>
            <button className="btn btn-accent btn-xl">Start a Project</button>
          </div>
        </section>
        <div className="solutions-container4">
          <div className="solutions-container5">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="solutions-container6">
          <div className="solutions-container7">
            <Script
              html={`<script defer data-name="volues-animations">
(function(){
  // Simple scroll reveal implementation
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Initialize reveal styles
  const revealElements = document.querySelectorAll(".glass-card, .solution-item, .industry-card, .tech-group, .timeline-step, .project-card, .why-item, .testimonial-card")

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
    observer.observe(el)
  })

  // Staggered delay for grid items
  const grids = document.querySelectorAll(".overview-grid, .solutions-grid, .why-grid")
  grids.forEach((grid) => {
    const children = grid.children
    for (let i = 0; i < children.length; i++) {
      children[i].style.transitionDelay = \`\${i * 100}ms\`
    }
  })

  // Parallax effect for hero mockup
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const mockup = document.querySelector(".main-mockup")
    if (mockup) {
      mockup.style.transform = \`perspective(1000px) rotateY(\${-10 + scrolled * 0.01}deg) rotateX(\${5 + scrolled * 0.005}deg)\`
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .solutions-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .solutions-container2 {
            display: none;
          }
          .solutions-container3 {
            display: contents;
          }
          .solutions-container4 {
            display: none;
          }
          .solutions-container5 {
            display: contents;
          }
          .solutions-container6 {
            display: none;
          }
          .solutions-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Solutions
