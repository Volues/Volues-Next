import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Projects = (props) => {
  return (
    <>
      <div className="projects-container1">
        <Head>
          <title>Projects - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Projects - Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/projects"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/projects"
          />
        </Head>
        <Navigation></Navigation>
        <section className="projects-hero">
          <video
            src="https://videos.pexels.com/video-files/34127955/14471454_640_360_30fps.mp4"
            loop="true"
            muted="true"
            poster="https://images.pexels.com/videos/34127955/pictures/preview-0.jpg"
            autoPlay="true"
            playsInline="true"
            className="projects-hero-video"
          ></video>
          <div className="projects-hero-overlay"></div>
          <div className="projects-hero-container">
            <div className="projects-hero-content">
              <h1 className="hero-title">
                Pioneering Digital Outcomes for Global Enterprises
              </h1>
              <p className="hero-subtitle">
                Volues transforms complex challenges into seamless digital
                experiences. Explore our portfolio of high-impact case studies
                that define the next generation of software engineering.
              </p>
              <div className="projects-hero-actions">
                <a href="#featured-grid">
                  <div className="btn-lg btn btn-primary">
                    <span>View Case Studies</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="btn-lg btn btn-outline">
                    <span>Book Consultation</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="projects-hero-visual">
              <div className="projects-hero-mockup-wrapper">
                <img
                  alt="Futuristic Dashboard Preview"
                  src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="projects-hero-mockup"
                />
                <div className="projects-hero-floating-card projects-card-1">
                  <div className="flex-row">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                      <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    </svg>
                    <span>+142% ROI</span>
                  </div>
                </div>
                <div className="projects-hero-floating-card projects-card-2">
                  <div className="flex-row">
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                      <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                    </svg>
                    <span>Scale Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="featured-grid" className="featured-grid">
          <div className="featured-grid-container">
            <div className="featured-grid-header">
              <h2 className="section-title">Featured Case Studies</h2>
              <p className="section-content">
                A curated selection of our most impactful enterprise
                collaborations.
              </p>
            </div>
            <div className="featured-grid-items">
              <div className="featured-grid-card">
                <img
                  alt="FinTech Platform"
                  src="https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-grid-img"
                />
                <div className="featured-grid-overlay">
                  <div className="featured-grid-info">
                    <span className="featured-grid-tag">FinTech</span>
                    <h3 className="section-subtitle">
                      Global Asset Management
                    </h3>
                    <p className="section-content">
                      Automated trading platform with 99.99% uptime and
                      real-time analytics.
                    </p>
                    <div className="featured-grid-metrics">
                      <div className="metric">
                        <span>40%</span>
                        <span>Efficiency</span>
                      </div>
                      <div className="metric">
                        <span>$2B+</span>
                        <span>Processed</span>
                      </div>
                    </div>
                    <a href="#">
                      <div className="btn-sm btn-accent btn">
                        <span>View Case Study</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-grid-card">
                <img
                  alt="SaaS Dashboard"
                  src="https://images.pexels.com/photos/12605419/pexels-photo-12605419.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-grid-img"
                />
                <div className="featured-grid-overlay">
                  <div className="featured-grid-info">
                    <span className="featured-grid-tag">SaaS</span>
                    <h3 className="section-subtitle">Nexus CRM Evolution</h3>
                    <p className="section-content">
                      Scaling a legacy CRM into a multi-tenant cloud-native
                      powerhouse.
                    </p>
                    <div className="featured-grid-metrics">
                      <div className="metric">
                        <span>10x</span>
                        <span>Scale</span>
                      </div>
                      <div className="metric">
                        <span>-60%</span>
                        <span>Latency</span>
                      </div>
                    </div>
                    <a href="#">
                      <div className="btn-sm btn-accent btn">
                        <span>View Case Study</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-grid-card">
                <img
                  alt="Logistics App"
                  src="https://images.pexels.com/photos/13003485/pexels-photo-13003485.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-grid-img"
                />
                <div className="featured-grid-overlay">
                  <div className="featured-grid-info">
                    <span className="featured-grid-tag">Logistics</span>
                    <h3 className="section-subtitle">TransRoute AI</h3>
                    <p className="section-content">
                      AI-driven route optimization saving millions in fuel and
                      time.
                    </p>
                    <div className="featured-grid-metrics">
                      <div className="metric">
                        <span>22%</span>
                        <span>Fuel Saved</span>
                      </div>
                      <div className="metric">
                        <span>Real-time</span>
                        <span>Tracking</span>
                      </div>
                    </div>
                    <a href="#">
                      <div className="btn-sm btn-accent btn">
                        <span>View Case Study</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-grid-card">
                <img
                  alt="Cybersecurity"
                  src="https://images.pexels.com/photos/20694602/pexels-photo-20694602.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-grid-img"
                />
                <div className="featured-grid-overlay">
                  <div className="featured-grid-info">
                    <span className="featured-grid-tag">Security</span>
                    <h3 className="section-subtitle">Sentinel Defense</h3>
                    <p className="section-content">
                      Zero-trust architecture for a national infrastructure
                      provider.
                    </p>
                    <div className="featured-grid-metrics">
                      <div className="metric">
                        <span>Zero</span>
                        <span>Breaches</span>
                      </div>
                      <div className="metric">
                        <span>ISO</span>
                        <span>Compliant</span>
                      </div>
                    </div>
                    <a href="#">
                      <div className="btn-sm btn-accent btn">
                        <span>View Case Study</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-grid-card">
                <img
                  alt="HealthTech"
                  src="https://images.pexels.com/photos/27141304/pexels-photo-27141304.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-grid-img"
                />
                <div className="featured-grid-overlay">
                  <div className="featured-grid-info">
                    <span className="featured-grid-tag">HealthTech</span>
                    <h3 className="section-subtitle">VitalSync Portal</h3>
                    <p className="section-content">
                      HIPAA-compliant patient monitoring with predictive
                      diagnostics.
                    </p>
                    <div className="featured-grid-metrics">
                      <div className="metric">
                        <span>1M+</span>
                        <span>Patients</span>
                      </div>
                      <div className="metric">
                        <span>98%</span>
                        <span>Accuracy</span>
                      </div>
                    </div>
                    <a href="#">
                      <div className="btn-sm btn-accent btn">
                        <span>View Case Study</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="featured-grid-card">
                <img
                  alt="E-Commerce"
                  src="https://images.pexels.com/photos/36136699/pexels-photo-36136699.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="featured-grid-img"
                />
                <div className="featured-grid-overlay">
                  <div className="featured-grid-info">
                    <span className="featured-grid-tag">E-Commerce</span>
                    <h3 className="section-subtitle">Aura Retail Engine</h3>
                    <p className="section-content">
                      Next-gen headless commerce platform for luxury global
                      brands.
                    </p>
                    <div className="featured-grid-metrics">
                      <div className="metric">
                        <span>+85%</span>
                        <span>Conversion</span>
                      </div>
                      <div className="metric">
                        <span>&lt; 1s</span>
                        <span>Load Time</span>
                      </div>
                    </div>
                    <a href="#">
                      <div className="btn-sm btn-accent btn">
                        <span>View Case Study</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="spotlight-carousel">
          <div className="spotlight-carousel-container">
            <div className="spotlight-carousel-header">
              <h2 className="section-title">Project Spotlight</h2>
            </div>
            <div id="spotlight-track" className="spotlight-carousel-wrapper">
              <div className="spotlight-card">
                <div className="spotlight-visual">
                  <img
                    alt="Spotlight Project 1"
                    src="https://images.pexels.com/photos/10054192/pexels-photo-10054192.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="spotlight-img"
                  />
                </div>
                <div className="spotlight-content">
                  <h3 className="section-subtitle">
                    The Challenge: Legacy Debt
                  </h3>
                  <p className="section-content">
                    A Fortune 500 client struggled with a monolithic
                    architecture that prevented rapid feature deployment. Volues
                    engineered a microservices migration that decoupled core
                    services.
                  </p>
                  <div className="spotlight-results">
                    <div className="result-item">
                      <span className="result-value">300%</span>
                      <span className="result-label">Deploy Frequency</span>
                    </div>
                    <div className="result-item">
                      <span className="result-value">45%</span>
                      <span className="result-label">Cost Reduction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="spotlight-controls">
              <button id="prev-spotlight" className="btn-sm btn btn-outline">
                Prev
              </button>
              <button id="next-spotlight" className="btn-sm btn btn-outline">
                Next
              </button>
            </div>
          </div>
        </section>
        <section className="projects-impact-metrics">
          <div className="impact-metrics-container">
            <div className="impact-metrics-header">
              <h2 className="section-title">Measurable Impact</h2>
              <p className="section-content">
                Our engineering decisions are driven by data and business
                outcomes.
              </p>
            </div>
            <div className="impact-metrics-grid">
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                  </svg>
                </div>
                <div data-target="142" className="metric-number">
                  <span>0%</span>
                </div>
                <div className="section-subtitle">
                  <span>Average ROI Increase</span>
                </div>
                <p className="section-content">
                  Optimized digital products consistently outperform legacy
                  benchmarks.
                </p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  </svg>
                </div>
                <div data-target="99.99" className="metric-number">
                  <span>0%</span>
                </div>
                <div className="section-subtitle">
                  <span>System Uptime</span>
                </div>
                <p className="section-content">
                  Mission-critical infrastructure designed for zero-failure
                  tolerance.
                </p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path>
                    <path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path>
                  </svg>
                </div>
                <div data-target="65" className="metric-number">
                  <span>0%</span>
                </div>
                <div className="section-subtitle">
                  <span>Faster Time-to-Market</span>
                </div>
                <p className="section-content">
                  Agile delivery cycles that put you ahead of the competition.
                </p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div data-target="12" className="metric-number">
                  <span>0M</span>
                </div>
                <div className="section-subtitle">
                  <span>Active Users Supported</span>
                </div>
                <p className="section-content">
                  Scalable platforms handling millions of concurrent
                  connections.
                </p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div data-target="100" className="metric-number">
                  <span>0%</span>
                </div>
                <div className="section-subtitle">
                  <span>Security Compliance</span>
                </div>
                <p className="section-content">
                  Full adherence to SOC2, HIPAA, and GDPR standards.
                </p>
              </div>
              <div className="metric-card">
                <div className="metric-icon">
                  <svg
                    fill="none"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path>
                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  </svg>
                </div>
                <div data-target="88" className="metric-number">
                  <span>0%</span>
                </div>
                <div className="section-subtitle">
                  <span>User Retention</span>
                </div>
                <p className="section-content">
                  UI/UX strategies that keep users engaged and loyal.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-process-timeline">
          <div className="process-timeline-container">
            <div className="process-timeline-header">
              <h2 className="section-title">Case Study Process</h2>
              <p className="section-content">
                How we take a concept from discovery to global launch.
              </p>
            </div>
            <div className="process-timeline-track">
              <div className="timeline-step">
                <div className="step-dot"></div>
                <div className="step-content">
                  <h3 className="section-subtitle">Discovery</h3>
                  <p className="section-content">
                    Auditing existing systems and defining KPIs.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-dot"></div>
                <div className="step-content">
                  <h3 className="section-subtitle">Strategy</h3>
                  <p className="section-content">
                    Architecting the solution roadmap and tech stack.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-dot"></div>
                <div className="step-content">
                  <h3 className="section-subtitle">Design</h3>
                  <p className="section-content">
                    Iterative UI/UX prototyping and user testing.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-dot"></div>
                <div className="step-content">
                  <h3 className="section-subtitle">Development</h3>
                  <p className="section-content">
                    Agile engineering with continuous integration.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-dot"></div>
                <div className="step-content">
                  <h3 className="section-subtitle">Launch</h3>
                  <p className="section-content">
                    Staged rollout and performance monitoring.
                  </p>
                </div>
              </div>
              <div className="timeline-step">
                <div className="step-dot"></div>
                <div className="step-content">
                  <h3 className="section-subtitle">Support</h3>
                  <p className="section-content">
                    24/7 maintenance and feature evolution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="enterprise-testimonials">
          <div className="enterprise-testimonials-container">
            <div className="enterprise-testimonials-header">
              <h2 className="section-title">Client Perspectives</h2>
            </div>
            <div
              id="testimonial-slider"
              className="projects-testimonials-carousel"
            >
              <div className="projects-testimonial-card">
                <div className="testimonial-quote">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <p className="section-content">
                    Volues didn&apos;t just build us a platform; they built us a
                    competitive advantage. Their engineering team is truly
                    world-class.
                  </p>
                </div>
                <div className="testimonial-author">
                  <img
                    alt="Sarah Jenkins"
                    src="https://images.pexels.com/photos/892757/pexels-photo-892757.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <span className="projects-author-name">Sarah Jenkins</span>
                    <span className="author-role">CTO, Global Retail Corp</span>
                  </div>
                </div>
              </div>
              <div className="projects-testimonial-card">
                <div className="testimonial-quote">
                  <svg
                    fill="none"
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    stroke="currentColor"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
                  </svg>
                  <p className="section-content">
                    The speed and precision of Volues are unmatched. They
                    delivered a complex cloud migration ahead of schedule with
                    zero downtime.
                  </p>
                </div>
                <div className="testimonial-author">
                  <img
                    alt="Marcus Chen"
                    src="https://images.pexels.com/photos/16094052/pexels-photo-16094052.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="author-avatar"
                  />
                  <div className="author-info">
                    <span className="projects-author-name">Marcus Chen</span>
                    <span className="author-role">
                      VP Engineering, FinStream
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-cta-banner">
          <div className="cta-banner-bg"></div>
          <div className="cta-banner-container">
            <div className="cta-banner-content">
              <h2 className="section-title">Ready to Engineer Your Future?</h2>
              <p className="section-content">
                Join the ranks of leading enterprises leveraging Volues for
                digital transformation. Let&apos;s discuss your next
                breakthrough project.
              </p>
              <div className="cta-banner-actions">
                <a href="#">
                  <div className="btn-accent btn btn-xl">
                    <span>Start a Project</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn btn-xl btn-outline">
                    <span>Schedule a Consultation</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className="projects-container2">
          <div className="projects-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="projects-container4">
          <div className="projects-container5">
            <Script
              html={`<script defer data-name="projects-page-logic">
(function(){
  // Metric Counter Animation
  const animateMetrics = () => {
    const metrics = document.querySelectorAll('.metric-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseFloat(entry.target.getAttribute('data-target'));
          const duration = 2000;
          const stepTime = 20;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              entry.target.innerText = target + (entry.target.innerText.includes('M') ? 'M' : '%');
              clearInterval(timer);
            } else {
              entry.target.innerText = Math.floor(current) + (entry.target.innerText.includes('M') ? 'M' : '%');
            }
          }, stepTime);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    metrics.forEach(metric => observer.observe(metric));
  };

  // Simple Spotlight Carousel Interaction
  const initSpotlight = () => {
    const track = document.getElementById('spotlight-track');
    const prev = document.getElementById('prev-spotlight');
    const next = document.getElementById('next-spotlight');
    
    // In a full implementation, this would handle slide transitions. 
    // For this prototype, we'll simulate the interactive state.
    if(next) {
      next.addEventListener('click', () => {
        track.style.opacity = '0.5';
        setTimeout(() => track.style.opacity = '1', 300);
      });
    }
  };

  // Scroll Fade Reveal
  const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.featured-grid-card, .metric-card, .timeline-step');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      observer.observe(el);
    });
  };

  // Initialize
  animateMetrics();
  initSpotlight();
  initScrollReveal();
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .projects-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .projects-container2 {
            display: none;
          }
          .projects-container3 {
            display: contents;
          }
          .projects-container4 {
            display: none;
          }
          .projects-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Projects
