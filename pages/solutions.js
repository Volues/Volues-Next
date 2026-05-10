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
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  background: #000000;
  color: var(--color-on-surface);
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-section">
          <div className="hero-glow-layer"></div>
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">
                Next-Gen Digital Solutions for Elite Startups
              </h1>
              <p className="hero-subtitle">
                Volues specializes in high-end software development, cloud
                infrastructure, and UI/UX design to transform your vision into a
                scalable reality.
              </p>
              <div className="solutions-overview-hero-actions">
                <button className="btn btn-primary btn-lg">
                  Book Consultation
                </button>
                <button className="btn btn-lg btn-outline">
                  View Projects
                </button>
              </div>
            </div>
            <div className="hero-visual">
              <div className="mockup-container">
                <img
                  src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Futuristic Dashboard Mockup"
                  className="mockup-image"
                />
                <div className="solutions-overview-floating-card solutions-overview-card-1">
                  <div className="solutions-overview-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7h6v6"
                      ></path>
                      <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                    </svg>
                  </div>
                  <div className="card-text">
                    <span className="card-label">Active Users</span>
                    <span className="card-value">+124%</span>
                  </div>
                </div>
                <div className="solutions-overview-floating-card solutions-overview-card-2">
                  <div className="solutions-overview-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6"
                      ></path>
                    </svg>
                  </div>
                  <div className="card-text">
                    <span className="card-label">Cloud Sync</span>
                    <span className="card-value">Optimal</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners-section">
          <div className="partners-container">
            <div className="partners-track">
              <div className="solutions-overview-partner-logo">
                <span>TechFlow</span>
              </div>
              <div className="solutions-overview-partner-logo">
                <span>CloudNexus</span>
              </div>
              <div className="solutions-overview-partner-logo">
                <span>StellarAI</span>
              </div>
              <div className="solutions-overview-partner-logo">
                <span>QuantumSoft</span>
              </div>
              <div className="solutions-overview-partner-logo">
                <span>Vertex</span>
              </div>
              <div className="solutions-overview-partner-logo">
                <span>AeroLink</span>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="section-header">
            <h2 className="section-title">Core Solutions</h2>
            <p className="section-content">
              Engineered for performance, designed for impact.
            </p>
          </div>
          <div className="solutions-overview-services-grid">
            <div className="solutions-overview-service-card">
              <div className="solutions-overview-service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                  ></path>
                </svg>
              </div>
              <h3 className="service-name">Website Development</h3>
              <p className="service-desc">
                High-performance web applications built with the latest
                frameworks for speed and scalability.
              </p>
              <div className="solutions-overview-card-glow"></div>
            </div>
            <div className="solutions-overview-service-card">
              <div className="solutions-overview-service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect
                      width="14"
                      height="20"
                      x="5"
                      y="2"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M12 18h.01"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Mobile App Development</h3>
              <p className="service-desc">
                Native and cross-platform mobile experiences that engage users
                and drive retention.
              </p>
              <div className="solutions-overview-card-glow"></div>
            </div>
            <div className="solutions-overview-service-card">
              <div className="solutions-overview-service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                    <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                    <path d="M3 12a9 3 0 0 0 18 0"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Enterprise Software</h3>
              <p className="service-desc">
                Robust internal tools and business logic systems tailored to
                complex organizational needs.
              </p>
              <div className="solutions-overview-card-glow"></div>
            </div>
            <div className="solutions-overview-service-card">
              <div className="solutions-overview-service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M3 9h18M9 21V9"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">UI/UX Design</h3>
              <h3 className="service-name">UI/UX Design</h3>
              <p className="service-desc">
                Immersive visual identities and intuitive user journeys that
                define next-generation brands.
              </p>
              <div className="solutions-overview-card-glow"></div>
            </div>
            <div className="solutions-overview-service-card">
              <div className="solutions-overview-service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                  ></path>
                </svg>
              </div>
              <h3 className="service-name">Cloud Infrastructure</h3>
              <p className="service-desc">
                Secure, serverless, and auto-scaling cloud architectures
                optimized for global reach.
              </p>
              <div className="solutions-overview-card-glow"></div>
            </div>
            <div className="solutions-overview-service-card">
              <div className="solutions-overview-service-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 7h6v6"></path>
                    <path d="m22 7l-8.5 8.5l-5-5L2 17"></path>
                  </g>
                </svg>
              </div>
              <h3 className="service-name">Product Strategy</h3>
              <p className="service-desc">
                Data-driven roadmaps and engineering consulting to accelerate
                your time-to-market.
              </p>
              <div className="solutions-overview-card-glow"></div>
            </div>
          </div>
        </section>
        <section className="projects-section">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <img
                src="https://images.pexels.com/photos/27141314/pexels-photo-27141314.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="FinTech Platform"
                className="project-img"
              />
              <div className="solutions-overview-project-overlay">
                <span className="project-category">FinTech</span>
                <h3 className="project-title">Nexus Banking Ecosystem</h3>
                <p className="project-desc">
                  A complete digital banking overhaul with real-time transaction
                  processing.
                </p>
                <button className="btn btn-link">View Case Study</button>
              </div>
            </div>
            <div className="project-card">
              <img
                src="https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="AI Dashboard"
                className="project-img"
              />
              <div className="solutions-overview-project-overlay">
                <span className="project-category">
                  Artificial Intelligence
                </span>
                <h3 className="project-title">Lumina AI Analytics</h3>
                <p className="project-desc">
                  Advanced predictive modeling interface for enterprise data
                  visualization.
                </p>
                <button className="btn btn-link">View Case Study</button>
              </div>
            </div>
          </div>
        </section>
        <section className="why-choose-section">
          <div className="why-container">
            <div className="why-visual">
              <img
                src="https://images.pexels.com/photos/33433724/pexels-photo-33433724.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Tech Excellence"
                className="why-img"
              />
            </div>
            <div className="why-content">
              <h2 className="section-title">Why Choose Volues</h2>
              <div className="feature-blocks">
                <div className="feature-block">
                  <div className="feature-stat">
                    <span>99.9%</span>
                  </div>
                  <div className="feature-info">
                    <h4 className="feature-name">Fast delivery</h4>
                    <p className="feature-text">
                      Optimized workflows ensuring rapid deployment without
                      compromising quality.
                    </p>
                  </div>
                </div>
                <div className="feature-block">
                  <div className="feature-stat">
                    <span>∞</span>
                  </div>
                  <div className="feature-info">
                    <h4 className="feature-name">Scalable architecture</h4>
                    <p className="feature-text">
                      Systems designed to grow seamlessly with your user base.
                    </p>
                  </div>
                </div>
                <div className="feature-block">
                  <div className="feature-stat">
                    <span>2026</span>
                  </div>
                  <div className="feature-info">
                    <h4 className="feature-name">Modern technologies</h4>
                    <p className="feature-text">
                      Utilizing cutting-edge stacks to keep you ahead of the
                      curve.
                    </p>
                  </div>
                </div>
                <div className="feature-block">
                  <div className="feature-stat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
                      ></path>
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h4 className="feature-name">
                      Security-focused engineering
                    </h4>
                    <p className="feature-text">
                      Zero-trust protocols and encryption integrated at every
                      layer.
                    </p>
                  </div>
                </div>
                <div className="feature-block">
                  <div className="feature-stat">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                      ></path>
                    </svg>
                  </div>
                  <div className="feature-info">
                    <h4 className="feature-name">Enterprise-grade solutions</h4>
                    <p className="feature-text">
                      Reliability and performance metrics that satisfy Fortune
                      500 standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="process-section">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-content">
              A systematic approach to digital excellence.
            </p>
          </div>
          <div className="solutions-overview-timeline-container">
            <div className="solutions-overview-timeline-line"></div>
            <div className="solutions-overview-timeline-steps">
              <div className="solutions-overview-timeline-step">
                <div className="solutions-overview-step-number">
                  <span>01</span>
                </div>
                <div className="solutions-overview-step-card">
                  <h4 className="step-title">Discovery</h4>
                  <p className="step-text">
                    Deep dive into your business goals, target audience, and
                    technical requirements.
                  </p>
                </div>
              </div>
              <div className="solutions-overview-timeline-step">
                <div className="solutions-overview-step-number">
                  <span>02</span>
                </div>
                <div className="solutions-overview-step-card">
                  <h4 className="step-title">Strategy</h4>
                  <p className="step-text">
                    Defining the roadmap, technology stack, and architecture for
                    optimal growth.
                  </p>
                </div>
              </div>
              <div className="solutions-overview-timeline-step">
                <div className="solutions-overview-step-number">
                  <span>03</span>
                </div>
                <div className="solutions-overview-step-card">
                  <h4 className="step-title">Design</h4>
                  <p className="step-text">
                    Crafting high-fidelity prototypes and immersive user
                    experiences.
                  </p>
                </div>
              </div>
              <div className="solutions-overview-timeline-step">
                <div className="solutions-overview-step-number">
                  <span>04</span>
                </div>
                <div className="solutions-overview-step-card">
                  <h4 className="step-title">Development</h4>
                  <p className="step-text">
                    Agile engineering with continuous integration and rigorous
                    quality assurance.
                  </p>
                </div>
              </div>
              <div className="solutions-overview-timeline-step">
                <div className="solutions-overview-step-number">
                  <span>05</span>
                </div>
                <div className="solutions-overview-step-card">
                  <h4 className="step-title">Launch</h4>
                  <p className="step-text">
                    Seamless deployment with comprehensive performance
                    monitoring.
                  </p>
                </div>
              </div>
              <div className="solutions-overview-timeline-step">
                <div className="solutions-overview-step-number">
                  <span>06</span>
                </div>
                <div className="solutions-overview-step-card">
                  <h4 className="step-title">Support</h4>
                  <p className="step-text">
                    Ongoing maintenance, security updates, and performance
                    optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="section-header">
            <h2 className="section-title">Client Success</h2>
          </div>
          <div className="testimonials-grid">
            <div className="solutions-overview-testimonial-card">
              <p className="solutions-overview-testimonial-quote">
                &quot;Volues transformed our legacy systems into a modern,
                lightning-fast platform. Their attention to detail in the UI/UX
                phase was unmatched.&quot;
              </p>
              <div className="testimonial-author">
                <div className="solutions-overview-author-avatar">
                  <span>SC</span>
                </div>
                <div className="author-info">
                  <span className="solutions-overview-author-name">
                    Sarah Chen
                  </span>
                  <span className="solutions-overview-author-role">
                    CTO, TechFlow
                  </span>
                </div>
              </div>
            </div>
            <div className="solutions-overview-testimonial-card">
              <p className="solutions-overview-testimonial-quote">
                &quot;The mobile app they built for us saw a 40% increase in
                user engagement within the first month. Incredible engineering
                partners.&quot;
              </p>
              <div className="testimonial-author">
                <div className="solutions-overview-author-avatar">
                  <span>MJ</span>
                </div>
                <div className="author-info">
                  <span className="solutions-overview-author-name">
                    Marcus Johnson
                  </span>
                  <span className="solutions-overview-author-role">
                    Founder, AeroLink
                  </span>
                </div>
              </div>
            </div>
            <div className="solutions-overview-testimonial-card">
              <p className="solutions-overview-testimonial-quote">
                &quot;Security was our top priority, and Volues delivered a
                zero-trust architecture that exceeded our compliance
                requirements.&quot;
              </p>
              <div className="testimonial-author">
                <div className="solutions-overview-author-avatar">
                  <span>EL</span>
                </div>
                <div className="author-info">
                  <span className="solutions-overview-author-name">
                    Elena Rodriguez
                  </span>
                  <span className="solutions-overview-author-role">
                    VP Product, Vertex
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="solutions-overview-cta-banner">
          <div className="cta-glow"></div>
          <div className="solutions-overview-cta-container">
            <h2 className="hero-title">Ready to build the future?</h2>
            <p className="section-content">
              Join the elite startups scaling with Volues&apos; premium
              engineering.
            </p>
            <div className="cta-actions">
              <button className="btn btn-accent btn-xl">Start a Project</button>
              <button className="btn btn-outline btn-xl">Contact Sales</button>
            </div>
          </div>
        </section>
        <div className="solutions-container4">
          <div className="solutions-container5">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="solutions-container6">
          <div className="solutions-container7">
            <Script
              html={`<script defer data-name="volues-interactions">
(function(){
  // Intersection Observer for fade-in effects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply initial styles and start observing
  document.querySelectorAll(".service-card, .project-card, .feature-block, .timeline-step, .testimonial-card").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)"
    revealObserver.observe(el)
  })

  // Subtle Parallax for hero visual
  const heroVisual = document.querySelector(".hero-visual")
  if (heroVisual) {
    window.addEventListener("scroll", () => {
      const scrollPos = window.pageYOffset
      if (scrollPos < window.innerHeight) {
        heroVisual.style.transform = \`translateY(\${scrollPos * 0.15}px)\`
      }
    })
  }

  // Navbar scroll background change
  const navbar = document.querySelector(".navbar-sticky")
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(0, 0, 0, 0.95)"
      navbar.style.padding = "var(--spacing-sm) 0"
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.8)"
      navbar.style.padding = "var(--spacing-md) 0"
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
