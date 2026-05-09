import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const About = (props) => {
  return (
    <>
      <div className="about-container1">
        <Head>
          <title>About - Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="About - Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/about"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/about"
          />
        </Head>
        <Navigation></Navigation>
        <div className="about-container2">
          <div className="about-container3">
            <Script
              html={`<style>
section {
  overflow: hidden;
  position: relative;
  background-color: var(--color-on-surface);
  color: var(--color-surface);
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="about-hero">
          <div className="about-hero-media">
            <video
              src="https://videos.pexels.com/video-files/35284293/14948014_640_360_30fps.mp4"
              loop="true"
              muted="true"
              autoPlay="true"
              playsInline="true"
              className="about-hero-video"
            ></video>
            <div className="about-hero-overlay"></div>
          </div>
          <div className="about-hero-container">
            <div className="about-hero-content">
              <h1 className="hero-title">
                Engineering the Future of Digital Excellence
              </h1>
              <p className="hero-subtitle">
                Volues is a premier technology partner dedicated to delivering
                fast, scalable, and secure software solutions. Our mission is to
                empower enterprises with cutting-edge engineering and visionary
                design.
              </p>
              <div className="about-hero-quote">
                <p className="section-content">
                  &quot;At Volues, we don&apos;t just build software; we
                  architect the digital backbone of tomorrow&apos;s industry
                  leaders.&quot;
                </p>
                <span className="about-hero-author">
                  — Lead Architectural Director
                </span>
              </div>
              <div className="about-hero-actions">
                <a href="#values">
                  <div className="btn btn-primary">
                    <span>Our Values</span>
                  </div>
                </a>
                <a href="#leadership">
                  <div className="btn btn-outline">
                    <span>Meet the Team</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="values" className="values-grid">
          <div className="values-header">
            <h2 className="section-title">Core Values &amp; Principles</h2>
            <p className="section-content">
              The foundational pillars that drive every line of code we write.
            </p>
          </div>
          <div className="values-container">
            <div className="value-card">
              <div className="value-icon">
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
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Innovation</h3>
              <p className="section-content">
                Pushing boundaries with emerging tech like AI and Edge
                computing.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Security</h3>
              <p className="section-content">
                Enterprise-grade protection integrated into the core
                architecture.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Speed</h3>
              <p className="section-content">
                Rapid deployment cycles without compromising on code quality.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" x2="12" y1="22.08" y2="12"></line>
                </svg>
              </div>
              <h3 className="section-subtitle">Scalability</h3>
              <p className="section-content">
                Systems designed to grow seamlessly with your global user base.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
                  <path d="M12 2v20"></path>
                  <path d="M2 12h20"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Design-Led</h3>
              <p className="section-content">
                Human-centric interfaces that blend aesthetics with
                functionality.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="section-subtitle">Reliability</h3>
              <p className="section-content">
                Zero-downtime mentality for mission-critical enterprise apps.
              </p>
            </div>
          </div>
        </section>
        <section id="leadership" className="tech-leadership">
          <div className="tech-leadership-container">
            <h2 className="section-title">Technology Leadership</h2>
            <div className="bento-grid">
              <div className="bento-cell-large bento-cell">
                <img
                  alt="Tech Stack"
                  src="https://images.pexels.com/photos/30547568/pexels-photo-30547568.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="bento-bg"
                />
                <div className="bento-content">
                  <span className="badge">Architecture</span>
                  <h3 className="section-subtitle">Microservices Mastery</h3>
                  <p className="section-content">
                    We leverage Kubernetes and Docker for resilient, distributed
                    systems that handle millions of requests.
                  </p>
                </div>
              </div>
              <div className="bento-cell bento-cell-medium">
                <div className="bento-content">
                  <span className="badge">Cloud</span>
                  <h3 className="section-subtitle">Serverless First</h3>
                  <p className="section-content">
                    Optimizing costs and performance through AWS Lambda and
                    Google Cloud Functions.
                  </p>
                </div>
              </div>
              <div className="bento-cell bento-cell-small">
                <div className="bento-content">
                  <div className="icon-group">
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
                      <rect x="4" y="4" rx="2" width="16" height="16"></rect>
                      <rect x="8" y="8" rx="1" width="8" height="8"></rect>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">AI Integration</h3>
                </div>
              </div>
              <div className="bento-cell bento-cell-medium">
                <img
                  alt="Interface"
                  src="https://images.pexels.com/photos/27141314/pexels-photo-27141314.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="bento-bg"
                />
                <div className="bento-content">
                  <span className="badge">UI/UX</span>
                  <h3 className="section-subtitle">Next-Gen Interfaces</h3>
                  <p className="section-content">
                    React, Vue, and Swift development for fluid, platform-native
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-partners-scroller">
          <div className="scroller-inner">
            <div className="partner-logo">
              <span>TECHNOVA</span>
            </div>
            <div className="partner-logo">
              <span>QUANTUM</span>
            </div>
            <div className="partner-logo">
              <span>NEXUS</span>
            </div>
            <div className="partner-logo">
              <span>AETHER</span>
            </div>
            <div className="partner-logo">
              <span>VORTEX</span>
            </div>
            <div className="partner-logo">
              <span>STRATUS</span>
            </div>
            <div className="partner-logo">
              <span>TECHNOVA</span>
            </div>
            <div className="partner-logo">
              <span>QUANTUM</span>
            </div>
            <div className="partner-logo">
              <span>NEXUS</span>
            </div>
            <div className="partner-logo">
              <span>AETHER</span>
            </div>
          </div>
        </section>
        <section className="about-stats-grid">
          <div className="about-stats-container">
            <div className="about-stat-item">
              <div data-target="99.99" className="about-stat-number">
                <span>0</span>
              </div>
              <div className="about-stat-label">
                <span>System Uptime</span>
              </div>
              <p className="section-content">
                Redundant infrastructure ensuring constant availability.
              </p>
            </div>
            <div className="about-stat-item">
              <div data-target="40" className="about-stat-number">
                <span>0</span>
              </div>
              <div className="about-stat-label">
                <span>% Faster Delivery</span>
              </div>
              <p className="section-content">
                Agile workflows that accelerate market entry.
              </p>
            </div>
            <div className="about-stat-item">
              <div data-target="150" className="about-stat-number">
                <span>0</span>
              </div>
              <div className="about-stat-label">
                <span>Enterprise Wins</span>
              </div>
              <p className="section-content">
                Trusted by Fortune 500 tech leaders worldwide.
              </p>
            </div>
            <div className="about-stat-item">
              <div data-target="12" className="about-stat-number">
                <span>0</span>
              </div>
              <div className="about-stat-label">
                <span>Certifications</span>
              </div>
              <p className="section-content">
                SOC2, ISO 27001, and GDPR compliant engineering.
              </p>
            </div>
          </div>
        </section>
        <section className="company-timeline">
          <div className="timeline-header">
            <h2 className="section-title">Our Momentum</h2>
          </div>
          <div className="timeline-track">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2020</span>
                <h3 className="section-subtitle">The Founding</h3>
                <p className="section-content">
                  Volues launched with a mission to redefine SaaS architecture.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2021</span>
                <h3 className="section-subtitle">Series A</h3>
                <p className="section-content">
                  Secured $25M funding to scale our AI-driven development labs.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2022</span>
                <h3 className="section-subtitle">Global Reach</h3>
                <p className="section-content">
                  Expanded operations to 12 countries with 200+ engineers.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2023</span>
                <h3 className="section-subtitle">Enterprise Suite</h3>
                <p className="section-content">
                  Launched the Volues Core platform for Fortune 500 clients.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">2024</span>
                <h3 className="section-subtitle">The Roadmap</h3>
                <p className="section-content">
                  Pioneering Quantum-ready encryption for cloud platforms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="leadership-team">
          <div className="team-container">
            <h2 className="section-title">Leadership &amp; Team</h2>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Sarah Chen"
                    src="https://images.pexels.com/photos/1181319/pexels-photo-1181319.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <h3 className="section-subtitle">Sarah Chen</h3>
                <p className="team-role">Chief Technology Officer</p>
                <div className="expertise-chips">
                  <span className="chip">Cloud Arch</span>
                  <span className="chip">Security</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Marcus Vane"
                    src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <h3 className="section-subtitle">Marcus Vane</h3>
                <p className="team-role">Head of Product Engineering</p>
                <div className="expertise-chips">
                  <span className="chip">Scalability</span>
                  <span className="chip">DevOps</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Elena Rodriguez"
                    src="https://images.pexels.com/photos/1181320/pexels-photo-1181320.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <h3 className="section-subtitle">Elena Rodriguez</h3>
                <p className="team-role">Design Director</p>
                <div className="expertise-chips">
                  <span className="chip">UX Strategy</span>
                  <span className="chip">Visual</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="David Park"
                    src="https://images.pexels.com/photos/16018144/pexels-photo-16018144.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <h3 className="section-subtitle">David Park</h3>
                <p className="team-role">VP of Security</p>
                <div className="expertise-chips">
                  <span className="chip">Compliance</span>
                  <span className="chip">Cyber</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="James Wilson"
                    src="https://images.pexels.com/photos/10725897/pexels-photo-10725897.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <h3 className="section-subtitle">James Wilson</h3>
                <p className="team-role">Lead AI Researcher</p>
                <div className="expertise-chips">
                  <span className="chip">MLOps</span>
                  <span className="chip">Neural</span>
                </div>
              </div>
              <div className="team-card">
                <div className="team-image-wrapper">
                  <img
                    alt="Anya Kova"
                    src="https://images.pexels.com/photos/33433724/pexels-photo-33433724.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="team-img"
                  />
                </div>
                <h3 className="section-subtitle">Anya Kova</h3>
                <p className="team-role">Chief Strategy Officer</p>
                <div className="expertise-chips">
                  <span className="chip">Enterprise</span>
                  <span className="chip">Growth</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-section">
          <div className="cta-backdrop"></div>
          <button id="openCtaModal" className="btn btn-xl btn-primary">
            Start Your Project
          </button>
          <dialog id="ctaModal" className="cta-dialog">
            <div className="cta-modal-content">
              <h2 className="section-title">Ready to scale?</h2>
              <p className="section-content">
                Book a consultation with our technology leads today and
                transform your enterprise roadmap.
              </p>
              <form
                action="/submit"
                method="POST"
                data-form-id="8bce2b38-dc9a-4409-8bc4-9cf9cfdbb60e"
                className="cta-form"
              >
                <div className="form-group">
                  <input
                    type="email"
                    id="thq_textinput_-t93"
                    name="textinput"
                    required="true"
                    placeholder="Enter your work email"
                    data-form-field-id="thq_textinput_-t93"
                    className="about-form-input"
                  />
                </div>
                <div className="form-actions">
                  <button
                    id="thq_button_C0Kn"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_C0Kn"
                    className="btn-accent btn"
                  >
                    Confirm Booking
                  </button>
                  <button
                    id="closeCtaModal"
                    name="button"
                    type="button"
                    data-form-field-id="closeCtaModal"
                    className="btn-link btn"
                  >
                    Maybe later
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        </section>
        <div className="about-container4">
          <div className="about-container5">
            <Script
              html={`<style>
        @keyframes scroll {from {transform: translateX(0);}
to {transform: translateX(-50%);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="about-container6">
          <div className="about-container7">
            <Script
              html={`<script defer data-name="about-interactions">
(function(){
const modal = document.getElementById('ctaModal');
const openBtn = document.getElementById('openCtaModal');
const closeBtn = document.getElementById('closeCtaModal');

if (openBtn && modal) {
  openBtn.addEventListener('click', () => {
    modal.showModal();
  });
}

if (closeBtn && modal) {
  closeBtn.addEventListener('click', () => {
    modal.close();
  });
}

if (modal) {
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

const stats = document.querySelectorAll('.stat-number');
const observerOptions = {
  threshold: 0.5
};

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseFloat(entry.target.getAttribute('data-target'));
      let count = 0;
      const duration = 2000;
      const increment = target / (duration / 16);

      const updateCount = () => {
        count += increment;
        if (count < target) {
          entry.target.innerText = count.toFixed(target % 1 === 0 ? 0 : 2);
          requestAnimationFrame(updateCount);
        } else {
          entry.target.innerText = target;
        }
      };
      updateCount();
      statsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

stats.forEach(stat => statsObserver.observe(stat));
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .about-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .about-container2 {
            display: none;
          }
          .about-container3 {
            display: contents;
          }
          .about-container4 {
            display: none;
          }
          .about-container5 {
            display: contents;
          }
          .about-container6 {
            display: none;
          }
          .about-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default About
