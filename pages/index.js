import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Premium Software Development Company</title>
          <meta
            name="description"
            content="A modern software company creating premium websites, mobile apps, and enterprise solutions with world-class design and engineering."
          />
          <meta
            property="og:title"
            content="Premium Software Development Company"
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
            href="https://scary-warm-ibex-jjux2g.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://scary-warm-ibex-jjux2g.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-dashboard">
          <div className="hero-dashboard-bg">
            <video
              src="https://videos.pexels.com/video-files/33183176/14141687_640_360_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/33183176/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
            ></video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="hero-title">
                Engineering the Next Generation of Digital Excellence
              </h1>
              <p className="hero-subtitle">
                Volues delivers premium software solutions, from high-end
                website design to complex enterprise  platforms. We transform
                visionary ideas into scalable, futuristic realities.
              </p>
              <div className="hero-actions">
                <Link href="/launch">
                  <a className="home-link btn-lg btn btn-primary">
                    Launch Your Vision
                  </a>
                </Link>
                <button className="btn-lg btn btn-outline">
                  View Projects
                </button>
              </div>
            </div>
            <div className="hero-visual-container">
              <div className="dashboard-mockup">
                <img
                  alt="Futuristic Dashboard Mockup"
                  src="https://images.pexels.com/photos/27141307/pexels-photo-27141307.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  className="mockup-main"
                />
                <div className="card-1 floating-card">
                  <div className="card-glass">
                    <div className="pulse-dot"></div>
                    <span>System Active</span>
                  </div>
                </div>
                <div className="card-2 floating-card">
                  <div className="card-glass">
                    <div className="stat-row">
                      <span className="home-stat-label">Uptime</span>
                      <span className="stat-value">99.9%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="partners-strip">
          <div className="partners-container">
            <div className="partners-scroller">
              <div className="partner-item">
                <span>GitHub</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Supabase</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Cloudflare</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Next.js</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>GitLab</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Auth0</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Vercel</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>React Native</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>PostgreSQL</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Redis</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Prisma</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Stripe</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Flutterwave</span>
              </div>
              <div className="partner-divider"></div>
              <div className="partner-item">
                <span>Paystack</span>
              </div>
            </div>
          </div>
        </section>
        <section className="services-grid">
          <div className="services-header">
            <h2 className="section-title">Premium Digital Services</h2>
            <p className="section-content">
              Our expertise spans the entire digital product lifecycle, ensuring
              enterprise-grade results.
            </p>
          </div>
          <div className="services-container">
            <div className="service-card">
              <div className="service-icon">
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
              <h3 className="section-subtitle">Website Development</h3>
              <p className="section-content">
                High-performance, SEO-optimized websites built with cutting-edge
                frameworks.
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="service-card">
              <div className="service-icon">
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
              <h3 className="section-subtitle">Mobile App Development</h3>
              <p className="section-content">
                Native and cross-platform mobile experiences that engage and
                convert users.
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="service-card">
              <div className="service-icon">
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
                Robust, scalable internal tools designed to streamline complex
                business operations.
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="service-card">
              <div className="service-icon">
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
                    <rect x="3" y="3" rx="1" width="7" height="9"></rect>
                    <rect x="14" y="3" rx="1" width="7" height="5"></rect>
                    <rect x="14" y="12" rx="1" width="7" height="9"></rect>
                    <rect x="3" y="16" rx="1" width="7" height="5"></rect>
                  </g>
                </svg>
              </div>
              <h3 className="section-subtitle">UI/UX Design</h3>
              <p className="section-content">
                User-centric design systems that balance aesthetic beauty with
                functional clarity.
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="service-card">
              <div className="service-icon">
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
                Secure, serverless, and resilient cloud architectures for modern
                digital scaling.
              </p>
              <div className="card-glow"></div>
            </div>
            <div className="service-card">
              <div className="service-icon">
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
              <h3 className="section-subtitle">Product Strategy</h3>
              <p className="section-content">
                Data-driven roadmaps to ensure your product finds its market and
                scales effectively.
              </p>
              <div className="card-glow"></div>
            </div>
          </div>
        </section>
        <section className="projects-showcase">
          <div className="projects-header">
            <h2 className="section-title">Selected Works</h2>
            <p className="section-content">
              A glimpse into the digital futures we have built for our partners.
            </p>
          </div>
          <div className="home-thq-projects-masonry-elm">
            <div data-mockup="1" className="mockup-card">
              <div className="mockup-visual-wrapper">
                <div className="dashboard-mockup hero-mockup-scale">
                  <div className="card-1 floating-card">
                    <div className="card-glass">
                      <div className="pulse-dot"></div>
                      <span>System Active</span>
                    </div>
                  </div>
                  <img
                    alt="Professional SaaS Analytics Dashboard with Real-Time Data Charts, Revenue Metrics, and Clean Data Visualizations"
                    src="/enterprise-1500w.png"
                    className="mockup-main"
                  />
                  <div className="card-2 floating-card">
                    <div className="card-glass">
                      <div className="stat-row">
                        <span className="home-stat-label">Uptime</span>
                        <span className="stat-value">99.9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-info">
                <span className="project-category">Enterprise UI</span>
                <h3 className="section-subtitle">Teleos Core Dashboard</h3>
                <p className="mockup-description">
                  Real-time analytics platform with predictive insights and
                  enterprise-grade security architecture.
                </p>
                <button className="btn-link">View Case Study</button>
              </div>
            </div>
            <div data-mockup="2" className="mockup-card">
              <div className="mockup-visual-wrapper">
                <div className="dashboard-mockup hero-mockup-scale">
                  <img
                    alt="Cloud Platform Interface"
                    src="/cloud-1500w.webp"
                    className="mockup-main"
                  />
                  <div className="card-1 floating-card">
                    <div className="card-glass">
                      <div className="pulse-dot"></div>
                      <span>Live Sync</span>
                    </div>
                  </div>
                  <div className="card-2 floating-card">
                    <div className="card-glass">
                      <div className="stat-row">
                        <span className="home-stat-label">Nodes</span>
                        <span className="stat-value">12K+</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-info">
                <span className="project-category">Cloud Platform</span>
                <h3 className="section-subtitle">Aether Network</h3>
                <p className="mockup-description">
                  Distributed cloud infrastructure with auto-scaling and
                  zero-downtime deployment pipelines.
                </p>
                <button className="btn-link">View Case Study</button>
              </div>
            </div>
            <div data-mockup="3" className="mockup-card">
              <div className="mockup-visual-wrapper">
                <div className="dashboard-mockup hero-mockup-scale">
                  <img
                    alt="Mobile Finance Application"
                    src="/welcome-1500w.jpg"
                    className="mockup-main"
                  />
                  <div className="card-1 floating-card">
                    <div className="card-glass">
                      <div className="pulse-dot"></div>
                      <span>Secure</span>
                    </div>
                  </div>
                  <div className="card-2 floating-card">
                    <div className="card-glass">
                      <div className="stat-row">
                        <span className="home-stat-label">Users</span>
                        <span className="stat-value">2.4M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mockup-info">
                <span className="project-category">Mobile Design</span>
                <h3 className="section-subtitle">Veloce Finance</h3>
                <p className="mockup-description">
                  Next-gen mobile banking experience with biometric
                  authentication and instant transfers.
                </p>
                <button className="btn-link">View Case Study</button>
              </div>
            </div>
          </div>
        </section>
        <section className="why-volues">
          <div className="stats-container">
            <div className="stats-text">
              <h2 className="section-title">
                Why Global Leaders Choose Volues
              </h2>
              <p className="section-content">
                We combine technical rigor with creative intuition to deliver
                software that doesn&apos;t just work—it dominates.
              </p>
            </div>
            <div className="home-stats-grid">
              <div className="stat-card">
                <span data-target="99" className="home-stat-number">
                  99%
                </span>
                <span className="home-stat-label">Uptime Reliability</span>
              </div>
              <div className="stat-card">
                <span data-target="150" className="home-stat-number">
                  150+
                </span>
                <span className="home-stat-label">Projects Launched</span>
              </div>
              <div className="stat-card">
                <span data-target="40" className="home-stat-number">
                  40ms
                </span>
                <span className="home-stat-label">Avg. Latency</span>
              </div>
              <div className="stat-card">
                <span data-target="12" className="home-stat-number">
                  12+
                </span>
                <span className="home-stat-label">Industry Awards</span>
              </div>
            </div>
          </div>
        </section>
        <section className="process-timeline">
          <div className="process-header">
            <h2 className="section-title">Our Workflow</h2>
            <p className="section-content">
              A systematic approach to building extraordinary digital products.
            </p>
          </div>
          <div className="timeline-wrapper">
            <div className="timeline-line"></div>
            <div className="timeline-steps">
              <div className="step-card">
                <div className="step-number">
                  <span>01</span>
                </div>
                <h3 className="section-subtitle">Discovery</h3>
                <p className="section-content">
                  Deep dive into your business goals and user needs.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">
                  <span>02</span>
                </div>
                <h3 className="section-subtitle">Strategy</h3>
                <p className="section-content">
                  Defining the technical roadmap and architecture.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">
                  <span>03</span>
                </div>
                <h3 className="section-subtitle">Design</h3>
                <p className="section-content">
                  Crafting high-fidelity prototypes and UI systems.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">
                  <span>04</span>
                </div>
                <h3 className="section-subtitle">Development</h3>
                <p className="section-content">
                  Agile engineering with continuous integration.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">
                  <span>05</span>
                </div>
                <h3 className="section-subtitle">Launch</h3>
                <p className="section-content">
                  Seamless deployment and performance monitoring.
                </p>
              </div>
              <div className="step-card">
                <div className="step-number">
                  <span>06</span>
                </div>
                <h3 className="section-subtitle">Support</h3>
                <p className="section-content">
                  24/7 maintenance and iterative enhancements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-carousel">
          <div className="testimonials-header">
            <h2 className="section-title">Client Voices</h2>
          </div>
          <div className="carousel-track-container">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="section-content">
                  &quot;Volues transformed our legacy infrastructure into a
                  modern cloud powerhouse. Their attention to detail is
                  unmatched in the SaaS space.&quot;
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  alt="Marcus Thorne"
                  src="https://images.pexels.com/photos/28442318/pexels-photo-28442318.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="author-info">
                  <span className="author-name">Marcus Thorne</span>
                  <span className="author-title">CTO, Nexus Corp</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="section-content">
                  &quot;The UI/UX work produced by the team at Volues literally
                  redefined our brand identity. Our conversion rates increased
                  by 40% post-launch.&quot;
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  alt="Elena Vance"
                  src="https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="author-info">
                  <span className="author-name">Elena Vance</span>
                  <span className="author-title">VP of Design, Stratos</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="section-content">
                  &quot;Building a complex fintech app requires extreme
                  precision. Volues delivered a secure, scalable product ahead
                  of schedule.&quot;
                </p>
              </div>
              <div className="testimonial-author">
                <img
                  alt="Julian Reed"
                  src="https://images.pexels.com/photos/36845948/pexels-photo-36845948.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                />
                <div className="author-info">
                  <span className="author-name">Julian Reed</span>
                  <span className="author-title">Founder, Veloce</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="home-final-cta">
          <div className="final-cta-bg">
            <video
              src="https://videos.pexels.com/video-files/33183176/14141687_640_360_30fps.mp4"
              loop="true"
              muted="true"
              poster="https://images.pexels.com/videos/33183176/pictures/preview-0.jpg"
              autoPlay="true"
              playsInline="true"
            ></video>
            <div className="final-cta-overlay"></div>
          </div>
          <div className="final-cta-content">
            <h2 className="hero-title">Ready to build the future?</h2>
            <p className="hero-subtitle">
              Join the elite startups and enterprises scaling with Volues
              software solutions.
            </p>
            <div className="final-cta-buttons">
              <button className="btn-accent btn btn-xl">
                Start Your Project
              </button>
              <button className="btn btn-xl btn-outline">
                Speak to an Expert
              </button>
            </div>
          </div>
        </section>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
        @keyframes floatMockup {
          0%,
          100% {
            transform: rotateY(-15deg) rotateX(5deg) translateY(0);
          }
          50% {
            transform: rotateY(-12deg) rotateX(3deg) translateY(-20px);
          }
        }
        @keyframes floatCard {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes pulseGlow {
          0% {
            opacity: 0.5;
            transform: scale(0.9);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 0.5;
            transform: scale(0.9);
          }
        }
        @keyframes scrollLogos {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes scrollLogosMobile {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @keyframes countUpGlow {
          0% {
            text-shadow: 0 0 0px rgba(0, 163, 198, 0);
          }
          50% {
            text-shadow: 0 0 20px rgba(0, 163, 198, 0.6);
          }
          100% {
            text-shadow: 0 0 0px rgba(0, 163, 198, 0);
          }
        }
      </style>`}
            ></Script>
          </div>
        </div>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<script>
        ;(function () {
          const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
          }
          const revealOnScroll = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.style.opacity = "1"
                entry.target.style.transform = "translateY(0)"
                if (entry.target.classList.contains("stat-number") || entry.target.classList.contains("home-stat-number")) {
                  animateValue(entry.target)
                }
              }
            })
          }, observerOptions)
          function animateValue(obj) {
            const target = parseInt(obj.getAttribute("data-target"))
            const duration = 2000
            let startTimestamp = null
            const suffix = obj.innerText.replace(/[0-9]/g, "")
            obj.classList.add("counting")
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp
              const progress = Math.min((timestamp - startTimestamp) / duration, 1)
              const easeProgress = 1 - Math.pow(1 - progress, 3)
              const current = Math.floor(easeProgress * target)
              obj.innerText = current + suffix
              if (progress < 1) {
                window.requestAnimationFrame(step)
              } else {
                obj.innerText = target + suffix
                setTimeout(() => obj.classList.remove("counting"), 500)
              }
            }
            window.requestAnimationFrame(step)
          }
          document.querySelectorAll(".service-card, .project-item, .step-card, .stat-number").forEach((el) => {
            el.style.opacity = "0"
            el.style.transform = "translateY(30px)"
            el.style.transition = "all 0.6s ease-out"
            revealOnScroll.observe(el)
          })
          document.querySelectorAll(".home-stat-number").forEach((el) => {
            revealOnScroll.observe(el)
          })
          const partnersScroller = document.querySelector(".partners-scroller")
          if (partnersScroller) {
            const clone = partnersScroller.innerHTML
            partnersScroller.innerHTML += clone
          }
        })()
      </script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-link {
            text-align: center;
            text-decoration: none;
          }
          .home-thq-projects-masonry-elm {
            gap: var(--spacing-2xl);
            margin: 0 auto;
            display: grid;
            max-width: var(--content-max-width);
            grid-template-columns: repeat(3, 1fr);
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          @media (max-width: 991px) {
            .home-thq-projects-masonry-elm {
              gap: var(--spacing-xl);
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 767px) {
            .home-thq-projects-masonry-elm {
              gap: var(--spacing-xl);
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
