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
                  <div className="btn-lg btn btn-primary">
                    <span>Start Your Project</span>
                  </div>
                </a>
                <a href="#consultation">
                  <div className="btn-lg btn btn-outline">
                    <span>Book Consultation</span>
                  </div>
                </a>
              </div>
              <div className="page-hero-stats">
                <div className="stat-item page-stat-item">
                  <span className="page-stat-number">99%</span>
                  <span className="page-stat-label">Fast Project Delivery</span>
                </div>
                <div className="stat-item page-stat-item">
                  <span className="page-stat-number">100%</span>
                  <span className="page-stat-label">Scalable Architecture</span>
                </div>
                <div className="stat-item page-stat-item">
                  <span className="page-stat-number">Next-Gen</span>
                  <span className="page-stat-label">Modern Technologies</span>
                </div>
              </div>
            </div>
            <div className="page-hero-visual">
              <div className="page-card-11">
                <div className="hero-mockup2-hero-mockup-visual">
                  <div className="hero-mockup2-hero-mockup-phone-frame">
                    <div className="hero-mockup-phone-inner">
                      <div className="hero-mockup-dashboard">
                        <div className="hero-mockup-dashboard-header">
                          <div className="hero-mockup-user">
                            <div className="hero-mockup-avatar"></div>
                            <div className="hero-mockup-user-info">
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-name"></div>
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-sub"></div>
                            </div>
                          </div>
                          <div className="hero-mockup-notif"></div>
                        </div>
                        <div className="hero-mockup-dashboard-grid">
                          <div className="hero-mockup-card-main hero-mockup-card">
                            <div className="hero-mockup-card-title">
                              <span>Analytics Overview</span>
                            </div>
                            <div className="hero-mockup-chart">
                              <svg
                                viewBox="0 0 200 100"
                                className="hero-mockup-svg-chart"
                              >
                                <path
                                  d="M0 80 Q 25 70, 50 85 T 100 60 T 150 40 T 200 20"
                                  fill="none"
                                  stroke="var(--color-primary)"
                                  strokeWidth="3"
                                ></path>
                                <path
                                  d="M0 80 Q 25 70, 50 85 T 100 60 T 150 40 T 200 20 L 200 100 L 0 100 Z"
                                  fill="url(#chartGradient)"
                                  opacity="0.2"
                                ></path>
                                <defs>
                                  <linearGradient
                                    id="chartGradient"
                                    x1="0"
                                    x2="0"
                                    y1="0"
                                    y2="1"
                                  >
                                    <stop
                                      offset="0%"
                                      stopColor="var(--color-primary)"
                                    ></stop>
                                    <stop
                                      offset="100%"
                                      stopColor="transparent"
                                    ></stop>
                                  </linearGradient>
                                </defs>
                              </svg>
                            </div>
                          </div>
                          <div className="hero-mockup-card-row">
                            <div className="hero-mockup-card-sm hero-mockup-card">
                              <div className="hero-mockup-icon-box">
                                <svg
                                  fill="none"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="18"
                                  stroke="var(--color-primary)"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                >
                                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                              </div>
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-val"></div>
                            </div>
                            <div className="hero-mockup-card-sm hero-mockup-card">
                              <div className="hero-mockup-icon-box">
                                <svg
                                  fill="none"
                                  width="18"
                                  xmlns="http://www.w3.org/2000/svg"
                                  height="18"
                                  stroke="var(--color-secondary)"
                                  viewBox="0 0 24 24"
                                  strokeWidth="2"
                                >
                                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                              </div>
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-val"></div>
                            </div>
                          </div>
                          <div className="hero-mockup-card-list hero-mockup-card">
                            <div className="hero-mockup-list-item">
                              <div className="hero-mockup-dot"></div>
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-line"></div>
                            </div>
                            <div className="hero-mockup-list-item">
                              <div className="hero-mockup-dot"></div>
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-line"></div>
                            </div>
                            <div className="hero-mockup-list-item">
                              <div className="hero-mockup-dot"></div>
                              <div className="hero-mockup-skeleton hero-mockup-skeleton-line"></div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-mockup-nav">
                          <div className="hero-mockup-nav-item active"></div>
                          <div className="hero-mockup-nav-item"></div>
                          <div className="hero-mockup-nav-item"></div>
                          <div className="hero-mockup-nav-item"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-mockup-floating hero-mockup-floating-1">
                    <div className="hero-mockup-glass-card">
                      <div className="hero-mockup-glass-icon">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="var(--color-accent)"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                        </svg>
                      </div>
                      <div className="hero-mockup-glass-content">
                        <div className="hero-mockup-glass-title">
                          <span>Real-time Sync</span>
                        </div>
                        <div className="hero-mockup-glass-text">
                          <span>Active Instance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hero-mockup-floating hero-mockup-floating-2">
                    <div className="hero-mockup-glass-card">
                      <div className="hero-mockup-glass-icon">
                        <svg
                          fill="none"
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          stroke="var(--color-primary)"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                        >
                          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path>
                          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path>
                        </svg>
                      </div>
                      <div className="hero-mockup-glass-content">
                        <div className="hero-mockup-glass-title">
                          <span>Scalable Arch</span>
                        </div>
                        <div className="hero-mockup-glass-text">
                          <span>Cloud Native</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="inquiry" className="form-wrapper">
          <div className="container-narrow">
            <div className="page-glass-card form-container">
              <h2 className="section-title text-center">Launch Your Project</h2>
              <p className="section-content mb-xl text-center">
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
                  <div className="form-group page-form-group">
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
                  <div className="form-group page-form-group">
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
                  <div className="form-group page-form-group">
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
                  <div className="form-group page-form-group">
                    <label htmlFor="company">Company / Organization</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder="Your Startup Name"
                      data-form-field-id="company"
                    />
                  </div>
                  <div className="full-width form-group page-form-group">
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
                  <div className="full-width form-group page-form-group">
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
                  <div className="form-group page-form-group">
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
                  <div className="form-group page-form-group">
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
                  <div className="full-width form-group page-form-group">
                    <label>Required Features</label>
                    <div className="checkbox-grid">
                      <label className="checkbox-item">
                        <input
                          type="checkbox"
                          id="thq_features_wFZD"
                          name="features"
                          value="auth"
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
                          id="thq_features_B906"
                          name="features"
                          value="payments"
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
                          id="thq_features_4JPA"
                          name="features"
                          value="cms"
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
                          id="thq_features_eW8K"
                          name="features"
                          value="api"
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
                  <div className="full-width form-group page-form-group">
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
                  <p className="opacity-70 text-sm">
                    Your data is secure and encrypted. We typically respond
                    within 24 hours.
                  </p>
                  <button
                    id="thq_button_uKsW"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_uKsW"
                    className="btn-accent w-full btn btn-xl"
                  >
                    Submit Project Inquiry
                  </button>
                </div>
              </form>
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
          <div className="launch-thq-trust-nav-elm">
            <button
              data-trust-nav="prev"
              aria-label="Previous trust item"
              className="button trust-nav-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <div className="launch-thq-trust-dots-elm">
              <button
                data-trust-dot="0"
                aria-label="Go to item 1"
                className="active button trust-dot"
              ></button>
              <button
                data-trust-dot="1"
                aria-label="Go to item 2"
                className="button trust-dot"
              ></button>
              <button
                data-trust-dot="2"
                aria-label="Go to item 3"
                className="button trust-dot"
              ></button>
              <button
                data-trust-dot="3"
                aria-label="Go to item 4"
                className="button trust-dot"
              ></button>
            </div>
            <button
              data-trust-nav="next"
              aria-label="Next trust item"
              className="button trust-nav-btn"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </section>
        <section className="services-wrapper">
          <div className="page-container">
            <h2 className="section-title text-center">
              Premium Digital Solutions
            </h2>
            <div className="page-services-grid">
              <div className="page-glass-card page-service-card">
                <div className="page-service-icon">
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
                <h3 className="card-text">Website Development</h3>
                <p className="section-content">
                  High-performance, responsive websites built with the latest
                  frameworks for maximum conversion.
                </p>
              </div>
              <div className="page-glass-card page-service-card">
                <div className="page-service-icon">
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
                      <rect
                        x="5"
                        y="2"
                        rx="2"
                        ry="2"
                        width="14"
                        height="20"
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
              <div className="page-glass-card page-service-card">
                <div className="page-service-icon">
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
                      <rect
                        x="2"
                        y="2"
                        rx="2"
                        ry="2"
                        width="20"
                        height="8"
                      ></rect>
                      <rect
                        x="2"
                        y="14"
                        rx="2"
                        ry="2"
                        width="20"
                        height="8"
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
              <div className="page-glass-card page-service-card">
                <div className="page-service-icon">
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
              <div className="page-glass-card page-service-card">
                <div className="page-service-icon">
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
                <h3 className="card-text">Cloud Infrastructure</h3>
                <p className="section-content">
                  Optimized cloud architectures ensuring 99.9% uptime and global
                  scalability for your data.
                </p>
              </div>
              <div className="page-glass-card page-service-card">
                <div className="page-service-icon">
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
                      <circle r="10" cx="12" cy="12"></circle>
                      <circle r="6" cx="12" cy="12"></circle>
                      <circle r="2" cx="12" cy="12"></circle>
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
        <section className="process-wrapper">
          <div className="page-container">
            <h2 className="mb-4xl section-title text-center">
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
            <h2 className="mb-3xl section-title text-center">
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
            <h2 className="page-hero-title hero-title mb-xl">
              Your Vision Deserves World-Class Engineering
            </h2>
            <p className="section-subtitle mb-2xl">
              Stop compromising on quality. Let&apos;s build the future of your
              business together.
            </p>
            <a href="#inquiry">
              <div className="btn-accent btn btn-xl">
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
              html={`<script>
        ;(function () {
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
            const visual = document.querySelector(".page-hero-visual")
            if (!visual) return
            const moveX = (e.clientX - window.innerWidth / 2) * 0.01
            const moveY = (e.clientY - window.innerHeight / 2) * 0.01
            const card1 = document.querySelector(".hero-mockup-floating-1")
            const card2 = document.querySelector(".hero-mockup-floating-2")
            if (card1) card1.style.transform = \`perspective(1000px) rotateY(\${-15 + moveX}deg) rotateX(\${10 + moveY}deg) translateZ(20px)\`
            if (card2) card2.style.transform = \`perspective(1000px) rotateY(\${15 + moveX}deg) rotateX(\${-5 + moveY}deg) translateZ(-20px)\`
          })
          // Trust slider navigation
          const trustScroll = document.querySelector(".trust-scroll")
          const trustDots = document.querySelectorAll(".trust-dot")
          const trustNavBtns = document.querySelectorAll("[data-trust-nav]")
          if (trustScroll && trustDots.length) {
            const updateActiveDot = () => {
              const scrollLeft = trustScroll.scrollLeft
              const itemWidth = trustScroll.querySelector(".trust-item").offsetWidth + parseInt(getComputedStyle(trustScroll).gap)
              const activeIndex = Math.round(scrollLeft / itemWidth)
              trustDots.forEach((dot, i) => {
                dot.classList.toggle("active", i === activeIndex)
              })
            }
            trustScroll.addEventListener("scroll", updateActiveDot, { passive: true })
            trustDots.forEach((dot) => {
              dot.addEventListener("click", () => {
                const index = parseInt(dot.dataset.trustDot)
                const item = trustScroll.children[index]
                if (item) {
                  item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
                }
              })
            })
            trustNavBtns.forEach((btn) => {
              btn.addEventListener("click", () => {
                const direction = btn.dataset.trustNav === "prev" ? -1 : 1
                const itemWidth = trustScroll.querySelector(".trust-item").offsetWidth + parseInt(getComputedStyle(trustScroll).gap)
                trustScroll.scrollBy({ left: direction * itemWidth, behavior: "smooth" })
              })
            })
          }
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <div>
          <div className="launch-container22">
            <Script
              html={`<style>
@media (min-width: 768px) {
.trust-scroll {
  justify-content: center;
  gap: var(--spacing-xl);
  padding: var(--spacing-sm) var(--spacing-xl);
  overflow-x: visible;
  scroll-snap-type: none;
}
.trust-item {
  scroll-snap-align: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div>
          <div className="launch-container24">
            <Script
              html={`<style>
@keyframes float-gentle {
0%, 100% {
  transform: translateY(0px);
}
50% {
  transform: translateY(-14px);
}
}
</style>`}
            ></Script>
          </div>
        </div>
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
          .launch-thq-trust-nav-elm {
            gap: var(--spacing-md);
            display: none;
            margin-top: var(--spacing-sm);
            align-items: center;
            justify-content: center;
          }
          .launch-thq-trust-dots-elm {
            gap: var(--spacing-xs);
            display: flex;
            align-items: center;
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
          .launch-container22 {
            display: contents;
          }
          .launch-container24 {
            display: contents;
          }
          @media (max-width: 767px) {
            .launch-thq-trust-nav-elm {
              display: flex;
            }
          }
        `}
      </style>
    </>
  )
}

export default Launch
