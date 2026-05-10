import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const HeroMockup3 = (props) => {
  return (
    <>
      <div className="hero-mockup3-container1">
        <section className="hero-mockup3-hero-mockup">
          <div className="hero-mockup-background">
            <div className="hero-mockup3-hero-mockup-glow-1 hero-mockup-glow"></div>
            <div className="hero-mockup-glow hero-mockup3-hero-mockup-glow-2"></div>
          </div>
          <div className="hero-mockup3-hero-mockup-container">
            <div className="hero-mockup3-hero-mockup-content">
              <div className="hero-mockup3-hero-mockup-badge">
                <span className="hero-mockup3-hero-mockup-badge-text">
                  Next-Gen Software Solutions
                </span>
              </div>
              <h1 className="hero-title hero-mockup-headline">
                <span>
                  {' '}
                  Engineering the Future of
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="hero-mockup3-thq-hero-mockup-gradient-text-elm">
                  Digital Products
                </span>
              </h1>
              <p className="hero-mockup-description hero-subtitle">
                Volues specializes in high-end website design, mobile app
                development, and enterprise software solutions. We build
                scalable, cloud-based platforms for the world&apos;s most
                ambitious startups.
              </p>
              <div className="hero-mockup3-hero-mockup-actions">
                <Link href="/contact">
                  <a>
                    <div className="btn-lg btn hero-mockup-btn btn-primary">
                      <span>Book Consultation</span>
                      <svg
                        fill="none"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                        height="20"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14m-7-7l7 7l-7 7"></path>
                      </svg>
                    </div>
                  </a>
                </Link>
                <Link href="/projects">
                  <a>
                    <div className="btn-lg btn btn-outline hero-mockup-btn">
                      <span>View Projects</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hero-mockup3-hero-mockup-visual">
              <div className="hero-mockup-frame-wrapper">
                <div className="hero-mockup-frame">
                  <div className="hero-mockup-screen">
                    <header className="hero-mockup-screen-header">
                      <div className="hero-mockup-screen-avatar"></div>
                      <div className="hero-mockup-screen-bars">
                        <div className="hero-mockup-screen-bar bar-long"></div>
                        <div className="hero-mockup-screen-bar bar-short"></div>
                      </div>
                    </header>
                    <div className="hero-mockup-screen-grid">
                      <div className="card-main hero-mockup-screen-card">
                        <div className="hero-mockup3-hero-mockup-chart">
                          <div className="hero-mockup-chart-line"></div>
                          <div className="hero-mockup-chart-dots">
                            <div className="hero-mockup3-hero-mockup-dot"></div>
                            <div className="hero-mockup3-hero-mockup-dot"></div>
                            <div className="hero-mockup3-hero-mockup-dot"></div>
                          </div>
                        </div>
                        <div className="hero-mockup-screen-bar bar-md"></div>
                      </div>
                      <div className="card-sub hero-mockup-screen-card">
                        <div className="hero-mockup-icon-placeholder"></div>
                        <div className="bar-sm hero-mockup-screen-bar"></div>
                      </div>
                      <div className="card-sub hero-mockup-screen-card">
                        <div className="hero-mockup-icon-placeholder"></div>
                        <div className="bar-sm hero-mockup-screen-bar"></div>
                      </div>
                    </div>
                    <div className="hero-mockup-screen-list">
                      <div className="hero-mockup3-hero-mockup-list-item">
                        <div className="hero-mockup-circle-sm"></div>
                        <div className="bar-full hero-mockup-screen-bar"></div>
                      </div>
                      <div className="hero-mockup3-hero-mockup-list-item">
                        <div className="hero-mockup-circle-sm"></div>
                        <div className="bar-full hero-mockup-screen-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-mockup3-hero-mockup-floating-card hero-mockup3-card-1">
                  <div className="hero-mockup3-hero-mockup-floating-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v20M2 12h20"></path>
                    </svg>
                  </div>
                  <div className="hero-mockup-floating-text">
                    <span>Enterprise Scale</span>
                    <strong>99.9% Uptime</strong>
                  </div>
                </div>
                <div className="hero-mockup3-card-2 hero-mockup3-hero-mockup-floating-card">
                  <div className="accent hero-mockup3-hero-mockup-floating-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    </svg>
                  </div>
                  <div className="hero-mockup-floating-text">
                    <span>Cloud Infrastructure</span>
                    <strong>Optimized</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-mockup3-container2">
          <div className="hero-mockup3-container3">
            <Script
              html={`<style>
        @keyframes floating {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero-mockup3-container4">
          <div className="hero-mockup3-container5">
            <Script
              html={`<script defer data-name="hero-mockup-effects">
(function(){
  const heroSection = document.querySelector(".hero-mockup")
  const visualWrapper = document.querySelector(".hero-mockup-frame-wrapper")

  if (heroSection && visualWrapper) {
    heroSection.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20

      const glow1 = document.querySelector(".hero-mockup-glow-1")
      const glow2 = document.querySelector(".hero-mockup-glow-2")

      if (glow1) glow1.style.transform = \`translate(\${xPos * 2}px, \${yPos * 2}px)\`
      if (glow2) glow2.style.transform = \`translate(\${-xPos * 2}px, \${-yPos * 2}px)\`
    })
  }

  const observerOptions = {
    threshold: 0.1,
  }

  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")
      }
    })
  }, observerOptions)

  heroObserver.observe(heroSection)
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-mockup3-container1 {
            display: contents;
          }
          .hero-mockup3-thq-hero-mockup-gradient-text-elm {
            background: linear-gradient(
              135deg,
              var(--color-primary),
              var(--color-accent)
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .hero-mockup3-container2 {
            display: none;
          }
          .hero-mockup3-container3 {
            display: contents;
          }
          .hero-mockup3-container4 {
            display: none;
          }
          .hero-mockup3-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default HeroMockup3
