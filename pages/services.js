import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Services = (props) => {
  return (
    <>
      <div className="services-container1">
        <Head>
          <title>Services - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Services - Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/services"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/services"
          />
        </Head>
        <Navigation></Navigation>
        <div className="services-container2">
          <div className="services-container3">
            <Script
              html={`<style>
section {
  padding: var(--spacing-4xl) 0;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="services-hero">
          <div className="services-hero-media">
            <video
              src="https://videos.pexels.com/video-files/7762080/7762080-hd_1920_1080_25fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="services-hero-video"
            ></video>
            <div className="services-hero-overlay"></div>
          </div>
          <div className="services-hero-container">
            <div className="services-hero-content">
              <h1 className="hero-title services-hero-title">
                <span className="services-text10">Architecting the Future</span>
                <span>
                  {' '}
                  of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="services-text12">Digital Enterprise</span>
              </h1>
              <p className="services-thq-hero-subtitle-elm hero-subtitle">
                Volues delivers premium software engineering, visionary UI/UX
                design, and scalable cloud infrastructure for next-generation
                technology brands.
              </p>
              <div className="services-hero-actions">
                <a href="#">
                  <div className="btn-lg btn btn-primary">
                    <span>Book Consultation</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-lg btn btn-outline">
                    <span>View Projects</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="services-hero-mockup">
              <div className="glass-dashboard">
                <img
                  alt="Volues Enterprise Dashboard"
                  src="https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="dashboard-img"
                />
                <div className="services-card-1 services-floating-card">
                  <div className="card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 2v2m-7.07.93l1.41 1.41M20 12h2m-2.93-7.07l-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="card-text">
                    <span>99.9% Uptime</span>
                  </div>
                </div>
                <div className="services-floating-card services-card-2">
                  <div className="card-icon">
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="m16 18l6-6l-6-6M8 6l-6 6l6 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <div className="card-text">
                    <span>Active Deploys</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service-cards">
          <div className="service-cards-container">
            <div className="section-header">
              <h2 className="section-title">Our Core Pillars</h2>
              <p className="section-content">
                Innovative solutions tailored for modern digital ecosystems.
              </p>
            </div>
            <div className="service-grid">
              <div className="glass-card">
                <div className="glass-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Website Development</h3>
                <p className="section-content">
                  High-performance web applications built with cutting-edge
                  frameworks for maximum speed and SEO.
                </p>
                <div className="card-reveal">
                  <span className="metric">Fast Load Times</span>
                  <a href="#">
                    <div className="btn-link">
                      <span>Explore Stack</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="glass-card">
                <div className="glass-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm5-1h2m-1 13v.01"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">Mobile App Development</h3>
                <p className="section-content">
                  Native and cross-platform mobile experiences that engage users
                  and drive retention on iOS and Android.
                </p>
                <div className="card-reveal">
                  <span className="metric">Cross-Platform</span>
                  <a href="#">
                    <div className="btn-link">
                      <span>View Apps</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="glass-card">
                <div className="glass-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
                      <path d="M3 12a9 3 0 0 0 18 0"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="section-subtitle">Enterprise Software</h3>
                <p className="section-content">
                  Robust, scalable internal tools and ERP systems designed to
                  streamline complex business operations.
                </p>
                <div className="card-reveal">
                  <span className="metric">Secure &amp; Scalable</span>
                  <a href="#">
                    <div className="btn-link">
                      <span>Solutions</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="glass-card">
                <div className="glass-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="m14.622 17.897l-10.68-2.913M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="section-subtitle">UI/UX Design</h3>
                <p className="section-content">
                  Human-centric design systems that balance aesthetic beauty
                  with functional excellence and accessibility.
                </p>
                <div className="card-reveal">
                  <span className="metric">User Centered</span>
                  <a href="#">
                    <div className="btn-link">
                      <span>Design Lab</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="glass-card">
                <div className="glass-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
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
                  Optimized cloud architectures using AWS, Azure, and GCP for
                  high availability and global performance.
                </p>
                <div className="card-reveal">
                  <span className="metric">99.9% Uptime</span>
                  <a href="#">
                    <div className="btn-link">
                      <span>Cloud Ops</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="glass-card">
                <div className="glass-card-icon">
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      r="1"
                      cx="12.1"
                      cy="12.1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></circle>
                  </svg>
                </div>
                <h3 className="section-subtitle">Product Strategy</h3>
                <p className="section-content">
                  Data-driven product roadmaps and market analysis to ensure
                  your digital product finds the perfect fit.
                </p>
                <div className="card-reveal">
                  <span className="metric">Market Ready</span>
                  <a href="#">
                    <div className="btn-link">
                      <span>Strategy Session</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase">
          <div className="showcase-container">
            <h2 className="section-title">Deep Dive Cases</h2>
            <div className="masonry-grid">
              <div className="masonry-item">
                <img
                  alt="FinTech Dashboard"
                  src="https://images.pexels.com/photos/27141316/pexels-photo-27141316.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="masonry-img"
                />
                <div className="masonry-overlay">
                  <h4 className="section-subtitle">NeoBank Platform</h4>
                  <p className="section-content">
                    Challenge: Scale to 1M users. Outcome: 40% increase in
                    transaction speed.
                  </p>
                  <a href="#">
                    <div className="btn-sm btn-accent btn">
                      <span>Read Case</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="masonry-item taller">
                <img
                  alt="Code Collaboration"
                  src="https://images.pexels.com/photos/34803968/pexels-photo-34803968.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="masonry-img"
                />
                <div className="masonry-overlay">
                  <h4 className="section-subtitle">Enterprise DevHub</h4>
                  <p className="section-content">
                    Challenge: Unified CI/CD flow. Outcome: Reduced deployment
                    time by 65%.
                  </p>
                  <a href="#">
                    <div className="btn-sm btn-accent btn">
                      <span>Read Case</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="masonry-item">
                <img
                  alt="UI Design"
                  src="https://images.pexels.com/photos/13003482/pexels-photo-13003482.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="masonry-img"
                />
                <div className="masonry-overlay">
                  <h4 className="section-subtitle">Luxe Retail App</h4>
                  <p className="section-content">
                    Challenge: Premium branding. Outcome: 2x conversion rate
                    post-redesign.
                  </p>
                  <a href="#">
                    <div className="btn-sm btn-accent btn">
                      <span>Read Case</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="masonry-item taller">
                <img
                  alt="AI Visual"
                  src="https://images.pexels.com/photos/18069694/pexels-photo-18069694.png?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="masonry-img"
                />
                <div className="masonry-overlay">
                  <h4 className="section-subtitle">AI Content Engine</h4>
                  <p className="section-content">
                    Challenge: Real-time generation. Outcome: Automated 80% of
                    creative workflow.
                  </p>
                  <a href="#">
                    <div className="btn-sm btn-accent btn">
                      <span>Read Case</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline-section">
          <div className="timeline-container">
            <h2 className="section-title">Our Workflow</h2>
            <div className="services-timeline-wrapper">
              <div className="services-timeline-track"></div>
              <div className="timeline-items">
                <div className="services-timeline-item">
                  <div className="services-timeline-dot"></div>
                  <div className="glass-card timeline-content">
                    <span className="step-num">01</span>
                    <h4 className="section-subtitle">Discovery</h4>
                    <p className="section-content">
                      Deep dive into your business goals, target audience, and
                      technical requirements.
                    </p>
                  </div>
                </div>
                <div className="services-timeline-item">
                  <div className="services-timeline-dot"></div>
                  <div className="glass-card timeline-content">
                    <span className="step-num">02</span>
                    <h4 className="section-subtitle">Strategy</h4>
                    <p className="section-content">
                      Crafting a roadmap that aligns technology choices with
                      long-term scalability.
                    </p>
                  </div>
                </div>
                <div className="services-timeline-item">
                  <div className="services-timeline-dot"></div>
                  <div className="glass-card timeline-content">
                    <span className="step-num">03</span>
                    <h4 className="section-subtitle">Design</h4>
                    <p className="section-content">
                      Iterative UI/UX design focusing on usability, aesthetics,
                      and brand identity.
                    </p>
                  </div>
                </div>
                <div className="services-timeline-item">
                  <div className="services-timeline-dot"></div>
                  <div className="glass-card timeline-content">
                    <span className="step-num">04</span>
                    <h4 className="section-subtitle">Development</h4>
                    <p className="section-content">
                      Agile engineering with clean code, rigorous testing, and
                      continuous feedback.
                    </p>
                  </div>
                </div>
                <div className="services-timeline-item">
                  <div className="services-timeline-dot"></div>
                  <div className="glass-card timeline-content">
                    <span className="step-num">05</span>
                    <h4 className="section-subtitle">Launch</h4>
                    <p className="section-content">
                      Seamless deployment to production with comprehensive
                      monitoring and QA.
                    </p>
                  </div>
                </div>
                <div className="services-timeline-item">
                  <div className="services-timeline-dot"></div>
                  <div className="glass-card timeline-content">
                    <span className="step-num">06</span>
                    <h4 className="section-subtitle">Support</h4>
                    <p className="section-content">
                      Ongoing maintenance, updates, and scaling to support your
                      growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="tech-grid">
          <div className="tech-container">
            <h2 className="section-title">Technology &amp; Architecture</h2>
            <div className="tech-comparison">
              <div className="tech-panel glass-card">
                <h3 className="section-subtitle">Modern Stack</h3>
                <p className="section-content">
                  We leverage React, Next.js, and Node.js for ultra-fast,
                  SEO-optimized digital experiences.
                </p>
                <ul className="tech-list">
                  <li>
                    <span>TypeScript Excellence</span>
                  </li>
                  <li>
                    <span>Edge Computing</span>
                  </li>
                  <li>
                    <span>GraphQL Integration</span>
                  </li>
                </ul>
              </div>
              <div className="tech-panel glass-card">
                <h3 className="section-subtitle">Cloud Patterns</h3>
                <p className="section-content">
                  Multi-cloud strategies ensuring zero downtime and global edge
                  distribution.
                </p>
                <ul className="tech-list">
                  <li>
                    <span>Serverless Architecture</span>
                  </li>
                  <li>
                    <span>Kubernetes Orchestration</span>
                  </li>
                  <li>
                    <span>IaC (Terraform/Pulumi)</span>
                  </li>
                </ul>
              </div>
              <div className="tech-panel glass-card">
                <h3 className="section-subtitle">Scalability</h3>
                <p className="section-content">
                  Elastic infrastructure that grows with your user base without
                  performance degradation.
                </p>
                <ul className="tech-list">
                  <li>
                    <span>Auto-scaling Groups</span>
                  </li>
                  <li>
                    <span>Redis Caching Layer</span>
                  </li>
                  <li>
                    <span>Load Balancing</span>
                  </li>
                </ul>
              </div>
              <div className="tech-panel glass-card">
                <h3 className="section-subtitle">Security</h3>
                <p className="section-content">
                  Enterprise-grade security protocols integrated into every
                  layer of our development cycle.
                </p>
                <ul className="tech-list">
                  <li>
                    <span>SOC2 Compliance</span>
                  </li>
                  <li>
                    <span>End-to-End Encryption</span>
                  </li>
                  <li>
                    <span>Automated Pen-Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="impact-metrics">
          <div className="metrics-container">
            <div className="metric-block">
              <span data-target="99" className="metric-value">
                0
              </span>
              <span className="metric-suffix">.9%</span>
              <h4 className="section-subtitle">System Uptime</h4>
              <p className="section-content">
                Guaranteed reliability for enterprise-critical platforms.
              </p>
            </div>
            <div className="metric-block">
              <span data-target="65" className="metric-value">
                0
              </span>
              <span className="metric-suffix">%</span>
              <h4 className="section-subtitle">Faster Delivery</h4>
              <p className="section-content">
                Accelerated time-to-market through optimized CI/CD.
              </p>
            </div>
            <div className="metric-block">
              <span data-target="150" className="metric-value">
                0
              </span>
              <span className="metric-suffix">+</span>
              <h4 className="section-subtitle">Projects Launched</h4>
              <p className="section-content">
                Successful global deployments across all sectors.
              </p>
            </div>
            <div className="metric-block">
              <span data-target="12" className="metric-value">
                0
              </span>
              <span className="metric-suffix">ms</span>
              <h4 className="section-subtitle">Avg. Latency</h4>
              <p className="section-content">
                Edge-optimized performance for global users.
              </p>
            </div>
          </div>
        </section>
        <section className="testimonials">
          <div className="testimonials-container">
            <h2 className="section-title">Client Voices</h2>
            <div className="testimonial-carousel">
              <div className="glass-card services-testimonial-card">
                <p className="section-content">
                  &quot;Volues transformed our legacy infrastructure into a
                  high-performance cloud ecosystem. Their attention to detail in
                  UI/UX is unmatched.&quot;
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">
                    <span>JD</span>
                  </div>
                  <div className="user-info">
                    <span className="user-name">James Dalton</span>
                    <span className="user-role">CTO, FinStream</span>
                  </div>
                </div>
              </div>
              <div className="glass-card services-testimonial-card">
                <p className="section-content">
                  &quot;The mobile app developed by Volues saw a 300% increase
                  in user engagement within the first month. Truly
                  enterprise-grade work.&quot;
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">
                    <span>SK</span>
                  </div>
                  <div className="user-info">
                    <span className="user-name">Sarah Koenig</span>
                    <span className="user-role">Product Lead, NexaRetail</span>
                  </div>
                </div>
              </div>
              <div className="glass-card services-testimonial-card">
                <p className="section-content">
                  &quot;Working with Volues felt like an extension of our own
                  team. Their strategic insights were as valuable as their
                  engineering prowess.&quot;
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">
                    <span>ML</span>
                  </div>
                  <div className="user-info">
                    <span className="user-name">Marcus Lee</span>
                    <span className="user-role">Founder, TechPioneer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-banner">
          <div className="cta-container">
            <div className="cta-glass-box">
              <h2 className="hero-title services-hero-title">
                <span>
                  Ready to build the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="services-thq-text-gradient-elm">future</span>
                <span>?</span>
              </h2>
              <p className="section-content">
                Join the ranks of elite tech companies scaling with Volues
                software solutions.
              </p>
              <button id="openCtaModal" className="btn btn-xl btn-primary">
                Start a Project
              </button>
            </div>
          </div>
        </section>
        <dialog id="ctaModal" className="services-cta-dialog">
          <div className="glass-card modal-content">
            <h2 className="section-title">Let&apos;s Connect</h2>
            <p className="section-content">
              Tell us about your project vision and we&apos;ll get back to you
              within 24 hours.
            </p>
            <form
              action="#"
              method="POST"
              data-form-id="7a0b8264-99f7-43ea-82c0-1e176b219ac7"
              className="services-cta-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="thq_textinput_tWx-"
                  name="textinput"
                  required="true"
                  placeholder="Full Name"
                  data-form-field-id="thq_textinput_tWx-"
                  className="services-form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="thq_textinput_16f5"
                  name="textinput"
                  required="true"
                  placeholder="Email Address"
                  data-form-field-id="thq_textinput_16f5"
                  className="services-form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="thq_textarea_PTRY"
                  name="textarea"
                  rows="4"
                  required="true"
                  placeholder="Project Brief"
                  data-form-field-id="thq_textarea_PTRY"
                  className="services-form-input"
                ></textarea>
              </div>
              <div className="services-form-actions">
                <button
                  id="thq_button_IE4M"
                  name="button"
                  type="submit"
                  data-form-field-id="thq_button_IE4M"
                  className="btn btn-primary"
                >
                  Send Inquiry
                </button>
                <button
                  id="closeCtaModal"
                  name="button"
                  type="button"
                  data-form-field-id="closeCtaModal"
                  className="btn btn-outline"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </dialog>
        <div className="services-container4">
          <div className="services-container5">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="services-container6">
          <div className="services-container7">
            <Script
              html={`<script defer data-name="volues-services">
(function(){
  // Modal Logic
  const modal = document.getElementById('ctaModal');
  const openBtn = document.getElementById('openCtaModal');
  const closeBtn = document.getElementById('closeCtaModal');

  if (openBtn && modal) {
    openBtn.addEventListener('click', () => modal.showModal());
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.close());
  }

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  // Metric Counter Animation
  const animateCounters = () => {
    const counters = document.querySelectorAll('.metric-value');
    const speed = 200;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  // Intersection Observer for Animations
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('impact-metrics')) {
          animateCounters();
        }
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply initial hidden state for scroll reveals
  document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('services-hero')) {
      section.style.opacity = '0';
      section.style.transform = 'translateY(30px)';
      section.style.transition = 'all 0.8s ease-out';
      observer.observe(section);
    }
  });

  // Horizontal Scroll for Timeline & Testimonials on Desktop
  const scrollContainers = document.querySelectorAll('.timeline-items, .testimonial-carousel');
  scrollContainers.forEach(container => {
    container.addEventListener('wheel', (evt) => {
      if (window.innerWidth > 991) {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
      }
    });
  });
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .services-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .services-container2 {
            display: none;
          }
          .services-container3 {
            display: contents;
          }
          .services-text10 {
            color: var(--color-on-primary);
          }
          .services-text12 {
            background: linear-gradient(
              135deg,
              var(--color-primary),
              var(--color-secondary)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .services-thq-hero-subtitle-elm {
            color: var(--color-on-primary);
          }
          .services-thq-text-gradient-elm {
            background: linear-gradient(
              135deg,
              var(--color-primary),
              var(--color-secondary)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .services-container4 {
            display: none;
          }
          .services-container5 {
            display: contents;
          }
          .services-container6 {
            display: none;
          }
          .services-container7 {
            display: contents;
          }
          @media (max-width: 479px) {
            .services-thq-hero-subtitle-elm {
              fill: var(--color-on-primary);
              color: var(--color-on-primary);
            }
          }
        `}
      </style>
    </>
  )
}

export default Services
