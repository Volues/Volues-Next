import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Contact = (props) => {
  return (
    <>
      <div className="contact-container1">
        <Head>
          <title>Contact - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Contact - Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/contact"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/contact"
          />
        </Head>
        <Navigation></Navigation>
        <section className="contact-hero">
          <div className="contact-hero-media">
            <img
              alt="Futuristic Dashboard UI Background"
              src="https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="contact-hero-img"
            />
            <div className="contact-hero-overlay"></div>
          </div>
          <div className="contact-hero-content">
            <h1 className="hero-title">
              <span>
                Let&apos;s Build the Future of
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="contact-thq-text-glow-elm">Software</span>
              <span> Together.</span>
            </h1>
            <p className="hero-subtitle">
              From custom web applications to enterprise cloud infrastructure,
              Volues transforms complex challenges into elegant digital
              solutions. Ready to scale your vision?
            </p>
            <div className="contact-hero-actions">
              <a href="#inquiry">
                <div className="btn-lg btn btn-primary">
                  <span>Request a Brief</span>
                </div>
              </a>
              <a href="#project-form">
                <div className="btn-lg btn-accent btn">
                  <span>Start a Project</span>
                </div>
              </a>
            </div>
          </div>
          <div className="hero-floating-mockup">
            <img
              alt="Software Mockup Visual"
              src="https://images.pexels.com/photos/27141313/pexels-photo-27141313.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              className="mockup-img"
            />
          </div>
        </section>
        <section id="project-form" className="inquiry-form-section">
          <div className="container">
            <div className="inquiry-card">
              <div className="inquiry-header">
                <h2 className="section-title">Project Inquiry</h2>
                <p className="section-content">
                  Tell us about your project requirements and we&apos;ll route
                  you to the right engineering team.
                </p>
              </div>
              <form
                action="/submit-inquiry"
                method="POST"
                data-form-id="389eeec8-e023-42b4-9176-237484fb42b7"
                className="inquiry-grid-form"
              >
                <div className="form-group">
                  <label htmlFor="full-name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="full-name"
                    name="true"
                    required="true"
                    placeholder="John Doe"
                    data-form-field-id="full-name"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Volues Inc."
                    data-form-field-id="company"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required="true"
                    placeholder="john@company.com"
                    data-form-field-id="email"
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="budget" className="form-label">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required="true"
                    data-form-field-id="budget"
                    className="form-select"
                  >
                    <option value="true" disabled="true" selected="true">
                      Select a range
                    </option>
                    <option value="10k-25k">$10k – $25k</option>
                    <option value="25k-50k">$25k – $50k</option>
                    <option value="50k-100k">$50k – $100k</option>
                    <option value="100k+">$100k+</option>
                  </select>
                </div>
                <div className="full-width form-group">
                  <label htmlFor="brief" className="form-label">
                    Project Brief
                  </label>
                  <textarea
                    id="brief"
                    name="brief"
                    required="true"
                    minlength="20"
                    placeholder="Describe your vision, goals, and technical requirements..."
                    data-form-field-id="brief"
                    className="form-textarea"
                  ></textarea>
                </div>
                <div className="full-width form-group">
                  <label className="form-label">
                    Attach Project Docs (Optional)
                  </label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      id="file-upload"
                      name="docs"
                      data-form-field-id="file-upload"
                      className="file-input"
                    />
                    <div className="file-custom-ui">
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
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" x2="12" y1="3" y2="15"></line>
                      </svg>
                      <span>Click to upload or drag and drop</span>
                    </div>
                  </div>
                </div>
                <div className="form-footer full-width">
                  <button
                    id="thq_button_79u2"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_79u2"
                    className="btn btn-xl btn-primary"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="newsletter-signup-section">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-content">
                <h2 className="section-title">Stay Ahead of the Curve</h2>
                <p className="section-content">
                  Get exclusive insights on digital product engineering, UI/UX
                  trends, and cloud architecture delivered to your inbox.
                </p>
                <ul className="benefit-list">
                  <li className="benefit-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Weekly Tech Deep-Dives</span>
                  </li>
                  <li className="benefit-item">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-accent)"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>Early Access to Volues Case Studies</span>
                  </li>
                </ul>
              </div>
              <div className="newsletter-action">
                <form
                  action="/subscribe"
                  method="POST"
                  data-form-id="26f56979-f0f8-474f-8bc1-8bfe87185ed1"
                  className="newsletter-form"
                >
                  <div className="input-group">
                    <input
                      type="email"
                      id="thq_email_IIT5"
                      name="email"
                      required="true"
                      placeholder="Enter your email"
                      data-form-field-id="thq_email_IIT5"
                      className="form-input"
                    />
                    <button
                      id="thq_button_SbY6"
                      name="button"
                      type="submit"
                      data-form-field-id="thq_button_SbY6"
                      className="btn-accent btn"
                    >
                      Subscribe
                    </button>
                  </div>
                  <label className="consent-checkbox">
                    <input
                      type="checkbox"
                      id="thq_textinput_rlR2"
                      name="textinput"
                      required="true"
                      data-form-field-id="thq_textinput_rlR2"
                    />
                    <span className="contact-thq-checkbox-text-elm">
                      I agree to receive marketing emails and accept the Privacy
                      Policy.
                    </span>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="contact-channels">
          <div className="channels-header">
            <h2 className="section-title">Direct Channels</h2>
            <p className="section-content">
              Connect with our specialized departments for faster response
              times.
            </p>
          </div>
          <div className="channels-grid">
            <div className="channel-card">
              <div className="channel-icon">
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
                  <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                </svg>
              </div>
              <h3 className="channel-title">Sales Inquiry</h3>
              <p className="channel-desc">
                New project discussions and partnerships.
              </p>
              <a href="mailto:sales@volues.com?subject=">
                <div className="btn-link">
                  <span>sales@volues.com</span>
                </div>
              </a>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
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
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect x="2" y="6" rx="2" width="20" height="14"></rect>
                </svg>
              </div>
              <h3 className="channel-title">Enterprise</h3>
              <p className="channel-desc">
                Large scale software solutions for corporations.
              </p>
              <a href="mailto:enterprise@volues.com?subject=">
                <div className="btn-link">
                  <span>enterprise@volues.com</span>
                </div>
              </a>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
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
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
              </div>
              <h3 className="channel-title">Partnerships</h3>
              <p className="channel-desc">
                Collaborate with us on digital ventures.
              </p>
              <a href="mailto:partners@volues.com?subject=">
                <div className="btn-link">
                  <span>partners@volues.com</span>
                </div>
              </a>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <circle r="4" cx="9" cy="7"></circle>
                  </g>
                </svg>
              </div>
              <h3 className="channel-title">Careers</h3>
              <p className="channel-desc">
                Join our world-class engineering team.
              </p>
              <a href="mailto:careers@volues.com?subject=">
                <div className="btn-link">
                  <span>careers@volues.com</span>
                </div>
              </a>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
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
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="channel-title">Global Support</h3>
              <p className="channel-desc">
                24/7 technical assistance for active clients.
              </p>
              <a href="tel:+1800VOLUES">
                <div className="btn-link">
                  <span>+1 (800) VOLUES</span>
                </div>
              </a>
            </div>
            <div className="channel-card">
              <div className="channel-icon">
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
                  <circle r="10" cx="12" cy="12"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="channel-title">Office Hours</h3>
              <p className="channel-desc">Mon - Fri, 09:00 - 18:00 (EST)</p>
              <span className="active channel-status">
                Current Status: Online
              </span>
            </div>
          </div>
        </section>
        <section className="trust-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div data-target="24" className="stat-number">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Avg. Response Hours</span>
                </div>
                <p className="stat-desc">
                  Elite team available across all timezones.
                </p>
              </div>
              <div className="stat-item">
                <div data-target="500" className="stat-number">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Projects Delivered</span>
                </div>
                <p className="stat-desc">
                  Successful launches for startups &amp; enterprises.
                </p>
              </div>
              <div className="stat-item">
                <div data-target="99" className="stat-number">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Uptime Percentage</span>
                </div>
                <p className="stat-desc">
                  Enterprise-grade reliability and security.
                </p>
              </div>
              <div className="stat-item">
                <div data-target="50" className="stat-number">
                  <span>0</span>
                </div>
                <div className="stat-label">
                  <span>Global Partners</span>
                </div>
                <p className="stat-desc">
                  Trusted by leading technology innovators.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="faq-section">
          <div className="container">
            <div className="faq-header">
              <h2 className="section-title">Common Inquiries</h2>
              <p className="section-content">
                Clear answers to help you move forward with confidence.
              </p>
            </div>
            <div className="faq-accordion">
              <details className="faq-item">
                <summary className="faq-question">
                  <span>
                    What is the typical project timeline?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="faq-toggle"></span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    Timelines vary by complexity. A standard SaaS MVP typically
                    takes 8-12 weeks, while larger enterprise platforms may span
                    6+ months. We provide detailed roadmaps during discovery.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>
                    How do you handle IP ownership and NDAs?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="faq-toggle"></span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    Upon final payment, all Intellectual Property (IP) is
                    transferred 100% to the client. We sign mutual NDAs before
                    any technical deep-dive to protect your vision.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>
                    What is your pricing model?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="faq-toggle"></span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    We offer two main models: Fixed-Price for well-defined
                    scopes and Time &amp; Materials for agile, evolving
                    projects. Retainers are also available for ongoing support.
                  </p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">
                  <span>
                    Do you offer post-launch support?
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="faq-toggle"></span>
                </summary>
                <div className="faq-answer">
                  <p className="section-content">
                    Yes. We provide 30 days of complimentary hyper-care
                    post-launch, followed by tiered maintenance plans covering
                    security updates, scaling, and feature iterations.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="cta-backdrop"></div>
          <div className="container">
            <div className="cta-content">
              <h2 className="hero-title">Ready to Volue your vision?</h2>
              <p className="hero-subtitle">
                Skip the waiting list and start your digital transformation
                today.
              </p>
              <button id="openCtaModal" className="btn-accent btn btn-xl">
                Start a Project Now
              </button>
            </div>
          </div>
        </section>
        <dialog id="ctaModal" className="cta-modal">
          <div className="modal-inner">
            <div className="modal-header">
              <h3 className="section-title">Quick Start</h3>
              <button id="closeCtaModal" className="modal-close-btn">
                &amp;times;
              </button>
            </div>
            <form
              action="/quick-start"
              method="POST"
              data-form-id="2ead58ca-90ca-43a4-b767-bd847537a723"
              className="modal-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  id="thq_true_aPEG"
                  name="true"
                  required="true"
                  placeholder="Your Name"
                  data-form-field-id="thq_true_aPEG"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="thq_email_MRK_"
                  name="email"
                  required="true"
                  placeholder="Your Email"
                  data-form-field-id="thq_email_MRK_"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <textarea
                  id="thq_idea_k-CN"
                  name="idea"
                  required="true"
                  placeholder="Briefly describe your idea..."
                  data-form-field-id="thq_idea_k-CN"
                  className="form-textarea"
                ></textarea>
              </div>
              <button
                id="thq_button_EP_w"
                name="button"
                type="submit"
                data-form-field-id="thq_button_EP_w"
                className="btn-lg btn btn-primary"
              >
                Submit Request
              </button>
            </form>
          </div>
        </dialog>
        <div className="contact-container2">
          <div className="contact-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0) rotate(-5deg);}
50% {transform: translateY(-20px) rotate(-3deg);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="contact-container4">
          <div className="contact-container5">
            <Script
              html={`<script defer data-name="volues-contact-logic">
(function(){
const openModalBtn = document.getElementById('openCtaModal');
const closeModalBtn = document.getElementById('closeCtaModal');
const modal = document.getElementById('ctaModal');

if (openModalBtn && modal) {
  openModalBtn.addEventListener('click', () => {
    modal.showModal();
  });
}

if (closeModalBtn && modal) {
  closeModalBtn.addEventListener('click', () => {
    modal.close();
  });
}

modal?.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.close();
  }
});

const stats = document.querySelectorAll('.stat-number');
const observerOptions = {
  threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.getAttribute('data-target'));
      let count = 0;
      const speed = 2000 / target;
      
      const updateCount = () => {
        if (count < target) {
          count++;
          entry.target.innerText = count + (target === 99 ? '%' : target === 500 ? '+' : '');
          setTimeout(updateCount, speed);
        } else {
          entry.target.innerText = target + (target === 99 ? '%' : target === 500 ? '+' : '');
        }
      };
      
      updateCount();
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

stats.forEach(stat => statsObserver.observe(stat));

const formInputs = document.querySelectorAll('.form-input, .form-textarea, .form-select');
formInputs.forEach(input => {
  input.addEventListener('blur', (e) => {
    if (!e.target.checkValidity()) {
      e.target.style.borderColor = '#e74c3c';
    } else {
      e.target.style.borderColor = '';
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
          .contact-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .contact-thq-text-glow-elm {
            color: var(--color-accent);
            text-shadow: 0 0 20px
              color-mix(in srgb, var(--color-accent) 50%, transparent);
          }
          .contact-thq-checkbox-text-elm {
            color: var(--color-neutral);
            font-size: var(--font-size-xs);
            line-height: 1.4;
          }
          .contact-container2 {
            display: none;
          }
          .contact-container3 {
            display: contents;
          }
          .contact-container4 {
            display: none;
          }
          .contact-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Contact
