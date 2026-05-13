import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Capabilities = (props) => {
  return (
    <>
      <div className="capabilities-container1">
        <Head>
          <title>Capabilities - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Capabilities - Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/capabilities"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/capabilities"
          />
        </Head>
        <Navigation></Navigation>
        <section className="page-hero-section">
          <div className="hero-grid-bg"></div>
          <div className="hero-pulse-bg"></div>
          <div className="hero-glow-sphere"></div>
          <div className="page-hero-content-wrapper">
            <div className="hero-text-container">
              <h1 className="page-hero-title2 hero-title">
                Engineering Digital Systems Built for the Future
              </h1>
              <p className="page-hero-subtitle1 hero-subtitle">
                From lean startup applications to enterprise-grade platforms,
                Volues architects scalable digital systems engineered for
                performance, intelligence, and growth.
              </p>
              <div className="page-hero-cta-group1">
                <Link href="/launch">
                  <a>
                    <div className="capabilities-thq-btn-elm1 btn-lg btn-accent btn page-btn">
                      <span>Launch Your Vision</span>
                    </div>
                  </a>
                </Link>
                <Link href="/consultation">
                  <a>
                    <div className="capabilities-thq-btn-elm2 btn-lg btn btn-outline page-btn">
                      <span>Discuss Your Project</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="page-hero-visual-container">
              <div className="page-card-13 page-floating-card1">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="page-flex-row">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                    </svg>
                    <span>System Uptime 99.9%</span>
                  </div>
                </div>
              </div>
              <div className="page-card-22 page-floating-card1">
                <div className="card-glow"></div>
                <div className="card-content">
                  <div className="page-flex-row">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"></path>
                    </svg>
                    <span>Cloud Infrastructure</span>
                  </div>
                </div>
              </div>
              <img
                alt="Futuristic Dashboard"
                src="https://images.pexels.com/photos/6950122/pexels-photo-6950122.jpeg?auto=compress&amp;cs=tinysrgb&amp;h=1500"
                className="hero-main-visual"
              />
            </div>
          </div>
        </section>
        <section className="trusted-section">
          <div className="trusted-container">
            <div className="trusted-logos-track">
              <span className="trusted-logo">Cloudflare</span>
              <span className="trusted-logo">Google Ads</span>
              <span className="trusted-logo">Stripe</span>
              <span className="trusted-logo">Vercel</span>
              <span className="trusted-logo">Twilio</span>
              <span className="trusted-logo">Datadog</span>
              <span className="trusted-logo">Notion</span>
              <span className="trusted-logo">Figma</span>
              <span className="trusted-logo">Linear</span>
              <span className="trusted-logo">Supabase</span>
            </div>
          </div>
        </section>
        <section className="intro-section">
          <div className="intro-container">
            <div className="intro-grid">
              <div className="intro-content">
                <h2 className="section-title">
                  Built Beyond Ordinary Software
                </h2>
                <p className="section-content">
                  Volues develops modern digital infrastructure for startups,
                  organizations, and ambitious enterprises. Our engineering
                  approach combines lean development principles, intelligent
                  automation, scalable architecture, and premium user experience
                  design to create systems that are efficient, reliable, and
                  future-ready.
                </p>
              </div>
              <div className="intro-visual">
                <img
                  alt="Futuristic Infrastructure"
                  src="https://images.pexels.com/photos/7988090/pexels-photo-7988090.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="intro-image"
                />
                <div className="intro-glow"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="capabilities-section">
          <div className="capabilities-container">
            <div className="capabilities-header">
              <h2 className="section-title">Our Capabilities</h2>
            </div>
            <div className="capabilities-grid">
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                    <circle r="1" cx="12" cy="12"></circle>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Enterprise Software Engineering
                </h3>
                <p className="section-content">
                  Scalable platforms engineered for reliability, security, and
                  long-term business growth.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"></path>
                      <path d="m6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"></path>
                      <path d="m12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">High-End Web Platforms</h3>
                <p className="section-content">
                  Premium websites and digital experiences optimized for speed,
                  engagement, and conversion.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Lean MVP Development</h3>
                <p className="section-content">
                  Rapid product development using modern lean-stack architecture
                  for startups and innovators.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13 20.693c-.905.628-2.36.292-2.675-1.01a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.492.362 1.716 2.219.674 3.03"></path>
                      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m8 10l5-3l-5-3z"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Intelligent Automation</h3>
                <p className="section-content">
                  Workflow automation systems that reduce operational friction
                  and improve operational efficiency.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M8 16v-6a2 2 0 1 1 4 0v6m-4-3h4m4-5v8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">AI-Powered Systems</h3>
                <p className="section-content">
                  Modern artificial intelligence integrations for smarter
                  digital experiences and intelligent workflows.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Cloud Infrastructure</h3>
                <p className="section-content">
                  Secure cloud architecture designed for scalability, uptime,
                  and performance optimization.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 12c0-4.243 0-6.364 1.318-7.682S7.758 3 12 3s6.364 0 7.682 1.318S21 7.758 21 12s0 6.364-1.318 7.682S16.242 21 12 21s-6.364 0-7.682-1.318S3 16.242 3 12"></path>
                      <path d="M15 11v4c0 1.1-.657.997-1.6.997a2.35 2.35 0 0 1-1.697-.731A2.55 2.55 0 0 1 11 13.499c0-.663.253-1.299.703-1.767A2.35 2.35 0 0 1 13.4 11zm0 0V8M8 8v8"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">UI/UX Engineering</h3>
                <p className="section-content">
                  Human-centered interfaces engineered for clarity, elegance,
                  and usability.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M4 13h5m3 3V8h3a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-3m8-5v8M9 16v-5.5a2.5 2.5 0 0 0-5 0V16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  API &amp; Systems Integration
                </h3>
                <p className="section-content">
                  Seamless integration of platforms, payment systems, APIs, and
                  enterprise tools.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      d="M5.636 19.364a9 9 0 1 1 12.728 0M16 9l-4 4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Performance Optimization</h3>
                <p className="section-content">
                  Systems engineered for speed, responsiveness, efficiency, and
                  exceptional user experience.
                </p>
              </div>
              <div className="capability-card">
                <div className="capability-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle
                      r="10"
                      cx="12"
                      cy="12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                </div>
                <h3 className="section-subtitle">
                  Product Strategy &amp; Architecture
                </h3>
                <p className="section-content">
                  Strategic technical planning and architecture for scalable
                  digital products.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-process-section process-section">
          <div className="page-process-container">
            <h2 className="section-title">How We Engineer Excellence</h2>
            <div className="page-process-timeline1">
              <div className="process-line"></div>
              <div className="process-steps">
                <div className="page-process-step">
                  <div className="step-marker">
                    <div className="page-step-dot"></div>
                  </div>
                  <h3 className="step-title">Discovery &amp; Strategy</h3>
                  <p className="section-content">
                    Unearthing core objectives and defining the technical
                    roadmap.
                  </p>
                </div>
                <div className="page-process-step">
                  <div className="step-marker">
                    <div className="page-step-dot"></div>
                  </div>
                  <h3 className="step-title">Architecture &amp; Planning</h3>
                  <p className="section-content">
                    Designing robust, scalable system foundations for growth.
                  </p>
                </div>
                <div className="page-process-step">
                  <div className="step-marker">
                    <div className="page-step-dot"></div>
                  </div>
                  <h3 className="step-title">UI/UX Engineering</h3>
                  <p className="section-content">
                    Crafting intuitive and aesthetically superior digital
                    interfaces.
                  </p>
                </div>
                <div className="page-process-step">
                  <div className="step-marker">
                    <div className="page-step-dot"></div>
                  </div>
                  <h3 className="step-title">Development &amp; Integration</h3>
                  <p className="section-content">
                    Turning architectural designs into high-performance code.
                  </p>
                </div>
                <div className="page-process-step">
                  <div className="step-marker">
                    <div className="page-step-dot"></div>
                  </div>
                  <h3 className="step-title">Testing &amp; Optimization</h3>
                  <p className="section-content">
                    Rigorous QA to ensure security, speed, and reliability.
                  </p>
                </div>
                <div className="page-process-step">
                  <div className="step-marker">
                    <div className="page-step-dot"></div>
                  </div>
                  <h3 className="step-title">Launch &amp; Support</h3>
                  <p className="section-content">
                    Deployment and continuous monitoring for peak performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tech-section">
          <div className="tech-container">
            <h2 className="section-title">Modern Technologies We Work With</h2>
            <div className="page-tech-badges">
              <div className="page-tech-badge1">
                <span>Next.js</span>
              </div>
              <div className="page-tech-badge1">
                <span>React</span>
              </div>
              <div className="page-tech-badge1">
                <span>Node.js</span>
              </div>
              <div className="page-tech-badge1">
                <span>TypeScript</span>
              </div>
              <div className="page-tech-badge1">
                <span>Cloudflare</span>
              </div>
              <div className="page-tech-badge1">
                <span>Firebase</span>
              </div>
              <div className="page-tech-badge1">
                <span>PostgreSQL</span>
              </div>
              <div className="page-tech-badge1">
                <span>AI Integrations</span>
              </div>
              <div className="page-tech-badge1">
                <span>APIs</span>
              </div>
              <div className="page-tech-badge1">
                <span>Automation Systems</span>
              </div>
            </div>
          </div>
        </section>
        <section className="trust-section">
          <div className="trust-container">
            <h2 className="section-title">
              Engineered for Visionary Businesses
            </h2>
            <div className="trust-grid">
              <div className="trust-block">
                <span className="trust-metric">99.9%</span>
                <h3 className="section-subtitle">High Performance</h3>
                <p className="section-content">
                  Systems optimized for millisecond response times and high
                  concurrency.
                </p>
              </div>
              <div className="trust-block">
                <span className="trust-metric">Zero</span>
                <h3 className="section-subtitle">Secure Architecture</h3>
                <p className="section-content">
                  Security-first engineering ensuring data integrity and
                  protection.
                </p>
              </div>
              <div className="trust-block">
                <span className="trust-metric">10x</span>
                <h3 className="section-subtitle">Scalable Systems</h3>
                <p className="section-content">
                  Architecture built to handle rapid growth without technical
                  debt.
                </p>
              </div>
              <div className="trust-block">
                <span className="trust-metric">Future</span>
                <h3 className="section-subtitle">Modern Infrastructure</h3>
                <p className="section-content">
                  Leveraging the latest cloud-native technologies for longevity.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta-section">
          <div className="cta-glow-bg"></div>
          <div className="page-cta-container">
            <h2 className="page-hero-title2 hero-title">
              Build the Future With Confidence
            </h2>
            <p className="page-hero-subtitle1 hero-subtitle">
              Whether you are launching a lean startup platform or engineering a
              complex enterprise ecosystem, Volues delivers digital systems
              designed for innovation, scalability, and long-term impact.
            </p>
            <div className="cta-buttons">
              <Link href="/launch">
                <a>
                  <div className="capabilities-thq-btn-elm3 btn-accent btn btn-xl page-btn">
                    <span>Start Your Project</span>
                  </div>
                </a>
              </Link>
              <Link href="/consultation">
                <a>
                  <div className="capabilities-thq-btn-elm4 btn btn-xl btn-outline page-btn">
                    <span>Schedule a Consultation</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>
        <div className="capabilities-container2">
          <div className="capabilities-container3">
            <Script
              html={`<style>
        @keyframes float {0% {transform: translateY(0px);}
50% {transform: translateY(-20px);}
100% {transform: translateY(0px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="capabilities-container4">
          <div className="capabilities-container5">
            <Script
              html={`<script defer data-name="volues-interactions">
(function(){
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px",
  }

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        scrollObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Apply animations to sections and cards
  const animatedElements = document.querySelectorAll(".capability-card, .process-step, .trust-block, .intro-content, .intro-visual")

  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
    scrollObserver.observe(el)
  })

  // Simple parallax for hero elements
  window.addEventListener("scroll", () => {
    const scroll = window.pageYOffset
    const heroVisual = document.querySelector(".hero-main-visual")
    const glow = document.querySelector(".hero-glow-sphere")

    if (heroVisual) {
      heroVisual.style.transform = \`perspective(1000px) rotateY(-10deg) translateY(\${scroll * 0.05}px)\`
    }

    if (glow) {
      glow.style.transform = \`translateY(\${scroll * 0.1}px)\`
    }
  })

  // Staggered delay for capability cards
  document.querySelectorAll(".capability-card").forEach((card, index) => {
    card.style.transitionDelay = \`\${index * 50}ms\`
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="capabilities-container7">
            <Script
              html={`<style>
@keyframes heroPulseRotate {
0% {
  transform: rotate(0deg) scale(1);
}
50% {
  transform: rotate(180deg) scale(1.15);
}
100% {
  transform: rotate(360deg) scale(1);
}
}

@keyframes heroPulseScale {
0% {
  opacity: 0.6;
  transform: scale(1);
}
50% {
  opacity: 1;
  transform: scale(1.08);
}
100% {
  opacity: 0.6;
  transform: scale(1);
}
}
</style>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .capabilities-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .capabilities-thq-btn-elm1 {
            text-decoration: none;
          }
          .capabilities-thq-btn-elm2 {
            text-decoration: none;
          }
          .capabilities-thq-btn-elm3 {
            text-decoration: none;
          }
          .capabilities-thq-btn-elm4 {
            text-decoration: none;
          }
          .capabilities-container2 {
            display: none;
          }
          .capabilities-container3 {
            display: contents;
          }
          .capabilities-container4 {
            display: none;
          }
          .capabilities-container5 {
            display: contents;
          }
          .capabilities-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Capabilities
