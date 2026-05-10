import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Launch = (props) => {
  return (
    <>
      <div className="launch-container10">
        <Head>
          <title>Launch - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Launch - Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/launch"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/launch"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-wrapper">
          <div className="hero-background">
            <video
              autoPlay="true"
              muted="true"
              loop="true"
              playsInline="true"
              src="https://videos.pexels.com/video-files/33248294/14165279_640_360_30fps.mp4"
              className="hero-video"
            ></video>
            <div className="page-hero-overlay"></div>
          </div>
          <div className="page-hero-container">
            <div className="page-hero-content">
              <h1 className="page-hero-title hero-title">
                <span>
                  {' '}
                  Launch Your Vision.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <span className="launch-thq-text-gradient-elm">
                  Build your Dream digital project within your budget.
                </span>
              </h1>
              <p className="hero-subtitle">
                Volues helps startups, businesses, and organizations transform
                ideas into scalable digital products through modern design and
                software engineering. Affordability meets premium quality.
              </p>
              <div className="page-hero-actions">
                <a href="#inquiry">
                  <div className="btn btn-primary btn-lg">
                    <span>Start Your Project</span>
                  </div>
                </a>
                <a href="#consultation">
                  <div className="btn btn-lg btn-outline">
                    <span>Book Consultation</span>
                  </div>
                </a>
              </div>
              <div className="page-hero-stats">
                <div className="page-stat-item stat-item">
                  <span className="page-stat-number">99%</span>
                  <span className="page-stat-label">Fast Project Delivery</span>
                </div>
                <div className="page-stat-item stat-item">
                  <span className="page-stat-number">100%</span>
                  <span className="page-stat-label">Scalable Architecture</span>
                </div>
                <div className="page-stat-item stat-item">
                  <span className="page-stat-number">Next-Gen</span>
                  <span className="page-stat-label">Modern Technologies</span>
                </div>
              </div>
            </div>
            <div className="page-hero-visual">
              <div className="floating-ui-card page-card-11">
                <img
                  src="https://images.pexels.com/photos/27141314/pexels-photo-27141314.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Dashboard Mockup"
                />
              </div>
              <div className="floating-ui-card page-card-21">
                <img
                  src="https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="UI Element"
                />
              </div>
              <div className="glow-orb"></div>
            </div>
          </div>
        </section>
        <section className="trust-wrapper">
          <div className="trust-container">
            <div className="trust-scroll">
              <div className="trust-item">
                <span>Fast Project Delivery</span>
              </div>
              <div className="trust-item">
                <span>Scalable Architecture</span>
              </div>
              <div className="trust-item">
                <span>Modern Technologies</span>
              </div>
              <div className="trust-item">
                <span>Enterprise-Level Quality</span>
              </div>
            </div>
          </div>
        </section>
        <section className="services-wrapper">
          <div className="page-container">
            <h2 className="text-center section-title">
              Premium Digital Solutions
            </h2>
            <div className="page-services-grid">
              <div className="page-service-card page-glass-card">
                <div className="page-service-icon">
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
                <h3 className="card-text">Website Development</h3>
                <p className="section-content">
                  High-performance, responsive websites built with the latest
                  frameworks for maximum conversion.
                </p>
              </div>
              <div className="page-service-card page-glass-card">
                <div className="page-service-icon">
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
                <h3 className="card-text">Mobile App Development</h3>
                <p className="section-content">
                  Native and cross-platform mobile experiences that users love
                  to engage with daily.
                </p>
              </div>
              <div className="page-service-card page-glass-card">
                <div className="page-service-icon">
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
                        width="20"
                        height="8"
                        x="2"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <rect
                        width="20"
                        height="8"
                        x="2"
                        y="14"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M6 6h.01M6 18h.01"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="card-text">Enterprise Software</h3>
                <p className="section-content">
                  Robust, secure, and scalable internal tools designed to
                  streamline complex business operations.
                </p>
              </div>
              <div className="page-service-card page-glass-card">
                <div className="page-service-icon">
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
                      <path d="M12 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0"></path>
                      <path d="M6 6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3"></path>
                      <path d="M9 9a3 3 0 0 0 0 6h3m-3 0a3 3 0 1 0 3 3V3"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="card-text">UI/UX Design</h3>
                <p className="section-content">
                  User-centric design systems that balance aesthetic beauty with
                  intuitive functionality.
                </p>
              </div>
              <div className="page-service-card page-glass-card">
                <div className="page-service-icon">
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
                <h3 className="card-text">Cloud Infrastructure</h3>
                <p className="section-content">
                  Optimized cloud architectures ensuring 99.9% uptime and global
                  scalability for your data.
                </p>
              </div>
              <div className="page-service-card page-glass-card">
                <div className="page-service-icon">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <circle cx="12" cy="12" r="6"></circle>
                      <circle cx="12" cy="12" r="2"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="card-text">Product Strategy</h3>
                <p className="section-content">
                  Strategic roadmapping to align your product vision with market
                  needs and business goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="inquiry" className="form-wrapper">
          <div className="container-narrow">
            <div className="form-container page-glass-card">
              <h2 className="text-center section-title">Launch Your Project</h2>
              <p className="text-center mb-xl section-content">
                Fill out the form below to start your digital journey with
                Volues.
              </p>
              <form
                action="/submit"
                method="POST"
                data-form-id="f914cbfc-361d-4450-99ab-7c3862cd12b2"
                className="inquiry-form"
              >
                <div className="form-grid">
                  <div className="page-form-group form-group">
                    <label htmlFor="full-name">Full Name</label>
                    <input
                      type="text"
                      id="full-name"
                      name="full-name"
                      required="true"
                      placeholder="John Doe"
                      data-form-field-id="full-name"
                    />
                  </div>
                  <div className="page-form-group form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required="true"
                      placeholder="john@company.com"
                      data-form-field-id="email"
                    />
                  </div>
                  <div className="page-form-group form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required="true"
                      placeholder="+1 (555) 000-0000"
                      data-form-field-id="phone"
                    />
                  </div>
                  <div className="page-form-group form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Startup Name"
                      data-form-field-id="company"
                    />
                  </div>
                  <div className="page-form-group form-group full-width">
                    <label htmlFor="project-type">Project Type</label>
                    <select
                      id="project-type"
                      name="project-type"
                      required="true"
                      data-form-field-id="project-type"
                    >
                      <option value="true" disabled="true" selected="true">
                        Select an option
                      </option>
                      <option value="website">Website</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="saas">SaaS Platform</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="page-form-group form-group full-width">
                    <label htmlFor="description">Project Description</label>
                    <textarea
                      id="description"
                      name="description"
                      rows="5"
                      required="true"
                      placeholder="Tell us about your vision..."
                      data-form-field-id="description"
                    ></textarea>
                  </div>
                  <div className="page-form-group form-group">
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      name="budget"
                      required="true"
                      data-form-field-id="budget"
                    >
                      <option value="under-5k">Under $5k</option>
                      <option value="5k-15k">$5k - $15k</option>
                      <option value="15k-50k">$15k - $50k</option>
                      <option value="over-50k">$50k+</option>
                    </select>
                  </div>
                  <div className="page-form-group form-group">
                    <label htmlFor="timeline">Preferred Timeline</label>
                    <select
                      id="timeline"
                      name="timeline"
                      required="true"
                      data-form-field-id="timeline"
                    >
                      <option value="urgent">Urgent (&lt; 1 month)</option>
                      <option value="standard">Standard (1-3 months)</option>
                      <option value="flexible">Flexible (3+ months)</option>
                    </select>
                  </div>
                  <div className="page-form-group form-group full-width">
                    <label>Required Features</label>
                    <div className="checkbox-grid">
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="features"
                          value="auth"
                          id="thq_features_wFZD"
                          data-form-field-id="thq_features_wFZD"
                        />
                        <span>
                          {' '}
                          Authentication
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </label>
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="features"
                          value="payments"
                          id="thq_features_B906"
                          data-form-field-id="thq_features_B906"
                        />
                        <span>
                          {' '}
                          Payments
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </label>
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="features"
                          value="cms"
                          id="thq_features_4JPA"
                          data-form-field-id="thq_features_4JPA"
                        />
                        <span>
                          {' '}
                          CMS
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </label>
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          name="features"
                          value="api"
                          id="thq_features_eW8K"
                          data-form-field-id="thq_features_eW8K"
                        />
                        <span>
                          {' '}
                          API Integration
                          <span
                            dangerouslySetInnerHTML={{
                              __html: ' ',
                            }}
                          />
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="page-form-group form-group full-width">
                    <label htmlFor="website">Current Website (optional)</label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      placeholder="https://"
                      data-form-field-id="website"
                    />
                  </div>
                </div>
                <div className="page-form-footer">
                  <p className="text-sm opacity-70">
                    Your data is secure and encrypted. We typically respond
                    within 24 hours.
                  </p>
                  <button
                    type="submit"
                    id="thq_button_uKsW"
                    name="button"
                    data-form-field-id="thq_button_uKsW"
                    className="w-full btn btn-accent btn-xl"
                  >
                    Submit Project Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="process-wrapper">
          <div className="page-container">
            <h2 className="text-center mb-4xl section-title">
              Our Scalable Workflow
            </h2>
            <div className="page-timeline-container">
              <div className="page-timeline-line"></div>
              <div className="timeline-grid">
                <div className="page-timeline-step">
                  <div className="page-step-number">
                    <span>1</span>
                  </div>
                  <h3 className="step-title">Discovery</h3>
                  <p className="section-content">
                    We dive deep into your requirements and business objectives.
                  </p>
                </div>
                <div className="page-timeline-step">
                  <div className="page-step-number">
                    <span>2</span>
                  </div>
                  <h3 className="step-title">Strategy</h3>
                  <p className="section-content">
                    Developing a technical roadmap and product architecture.
                  </p>
                </div>
                <div className="page-timeline-step">
                  <div className="page-step-number">
                    <span>3</span>
                  </div>
                  <h3 className="step-title">Design</h3>
                  <p className="section-content">
                    High-fidelity UI/UX prototyping and system design.
                  </p>
                </div>
                <div className="page-timeline-step">
                  <div className="page-step-number">
                    <span>4</span>
                  </div>
                  <h3 className="step-title">Development</h3>
                  <p className="section-content">
                    Agile engineering with continuous integration and testing.
                  </p>
                </div>
                <div className="page-timeline-step">
                  <div className="page-step-number">
                    <span>5</span>
                  </div>
                  <h3 className="step-title">Launch</h3>
                  <p className="section-content">
                    Deployment to production with full performance optimization.
                  </p>
                </div>
                <div className="page-timeline-step">
                  <div className="page-step-number">
                    <span>6</span>
                  </div>
                  <h3 className="step-title">Support</h3>
                  <p className="section-content">
                    Ongoing maintenance and scalable feature updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-wrapper">
          <div className="container-narrow">
            <h2 className="text-center mb-3xl section-title">
              Frequently Asked Questions
            </h2>
            <div className="faq-list">
              <details className="page-glass-card faq-item">
                <summary>
                  <span>Project pricing</span>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    Our pricing is modular and based on your specific
                    requirements. We offer fixed-price projects for defined
                    scopes and time-and-materials for evolving startups.
                  </p>
                </div>
              </details>
              <details className="page-glass-card faq-item">
                <summary>
                  <span>Development timelines</span>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    Most MVPs are delivered within 8-12 weeks. Complex
                    enterprise solutions may take 4-6 months depending on the
                    feature set.
                  </p>
                </div>
              </details>
              <details className="page-glass-card faq-item">
                <summary>
                  <span>Support and maintenance</span>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    We provide dedicated post-launch support packages including
                    security monitoring, bug fixes, and performance tuning.
                  </p>
                </div>
              </details>
              <details className="page-glass-card faq-item">
                <summary>
                  <span>Revisions</span>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    Our design process includes two major revision rounds during
                    the prototyping phase to ensure complete alignment with your
                    vision.
                  </p>
                </div>
              </details>
              <details className="page-glass-card faq-item">
                <summary>
                  <span>Payment structure</span>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    Typically, we operate on a milestone-based payment schedule:
                    Deposit, Design Approval, Development Beta, and Final
                    Launch.
                  </p>
                </div>
              </details>
              <details className="page-glass-card faq-item">
                <summary>
                  <span>Technologies used</span>
                </summary>
                <div className="faq-content">
                  <p className="section-content">
                    We specialize in React, Next.js, Node.js, Flutter, and
                    AWS/GCP cloud architectures to ensure your product is modern
                    and scalable.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="final-cta-wrapper">
          <div className="page-final-cta-bg">
            <div className="glow-pulse pulse-1"></div>
            <div className="glow-pulse pulse-2"></div>
          </div>
          <div className="page-container text-center">
            <h2 className="page-hero-title mb-xl hero-title">
              Your Vision Deserves World-Class Engineering
            </h2>
            <p className="mb-2xl section-subtitle">
              Stop compromising on quality. Let&apos;s build the future of your
              business together.
            </p>
            <a href="#inquiry">
              <div className="btn btn-accent btn-xl">
                <span>Start Your Project Now</span>
              </div>
            </a>
          </div>
        </section>
        <div className="launch-container17">
          <div className="launch-container18">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) rotateY(-15deg);}
50% {transform: translateY(-20px) rotateY(-10deg);}}@keyframes pulse {0%,100% {transform: scale(1);
opacity: 0.2;}
50% {transform: scale(1.2);
opacity: 0.3;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="launch-container19">
          <div className="launch-container20">
            <Script
              html={`<script defer data-name="volues-interactions">
(function(){
  // Handle scroll reveals for sections
  const revealOnScroll = () => {
    const sections = document.querySelectorAll("section")
    const triggerBottom = window.innerHeight * 0.85

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top
      if (sectionTop < triggerBottom) {
        section.style.opacity = "1"
        section.style.transform = "translateY(0)"
      }
    })
  }

  // Initial state for sections
  document.querySelectorAll("section").forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(30px)"
    section.style.transition = "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Run once on load

  // Form interactive feedback
  const inputs = document.querySelectorAll(".form-group input, .form-group select, .form-group textarea")
  inputs.forEach((input) => {
    input.addEventListener("focus", () => {
      input.closest(".form-group").style.transform = "translateX(5px)"
    })
    input.addEventListener("blur", () => {
      input.closest(".form-group").style.transform = "translateX(0)"
    })
  })

  // Floating parallax for hero visual
  document.addEventListener("mousemove", (e) => {
    const visual = document.querySelector(".hero-visual")
    if (!visual) return

    const moveX = (e.clientX - window.innerWidth / 2) * 0.01
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01

    const card1 = document.querySelector(".card-1")
    const card2 = document.querySelector(".card-2")

    if (card1) card1.style.transform = \`perspective(1000px) rotateY(\${-15 + moveX}deg) rotateX(\${10 + moveY}deg) translateZ(20px)\`
    if (card2) card2.style.transform = \`perspective(1000px) rotateY(\${15 + moveX}deg) rotateX(\${-5 + moveY}deg) translateZ(-20px)\`
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
          .launch-container10 {
            width: 100%;
            min-height: 100vh;
          }
          .launch-thq-text-gradient-elm {
            background: linear-gradient(
              135deg,
              var(--color-primary),
              var(--color-secondary)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .launch-container17 {
            display: none;
          }
          .launch-container18 {
            display: contents;
          }
          .launch-container19 {
            display: none;
          }
          .launch-container20 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Launch
