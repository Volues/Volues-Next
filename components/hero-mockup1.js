import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const HeroMockup1 = (props) => {
  return (
    <>
      <div className="hero-mockup1-container1">
        <div className="hero-mockup1-container2">
          <div className="hero-mockup1-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.hero-mockup-phone-frame, .hero-mockup-float {
  animation: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-mockup1-hero-mockup">
          <div className="hero-mockup1-hero-mockup-background">
            <div className="hero-mockup1-hero-mockup-glow-1 hero-mockup1-hero-mockup-glow"></div>
            <div className="hero-mockup1-hero-mockup-glow-2 hero-mockup1-hero-mockup-glow"></div>
          </div>
          <div className="hero-mockup1-hero-mockup-container">
            <div className="hero-mockup1-hero-mockup-content">
              <div className="hero-mockup1-hero-mockup-badge">
                <span className="hero-mockup-badge-text">
                  Next-Gen Software Solutions
                </span>
              </div>
              <h1 className="hero-title">
                Engineering the Future of Digital Products
              </h1>
              <p className="hero-subtitle">
                Volues specializes in high-end website design, mobile apps, and
                enterprise software engineering for startups and global
                enterprises ready to scale.
              </p>
              <div className="hero-mockup1-hero-mockup-actions">
                <Link href="/contact">
                  <a>
                    <div className="btn-lg btn btn-primary">
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
                    <div className="btn-lg btn btn-outline">
                      <span>View Projects</span>
                    </div>
                  </a>
                </Link>
              </div>
            </div>
            <div className="hero-mockup-visual">
              <div className="hero-mockup1-hero-mockup-phone-frame">
                <div className="hero-mockup-phone-inner">
                  <div className="hero-mockup1-hero-mockup-app-ui">
                    <div className="app-ui-header">
                      <div className="app-ui-user">
                        <div className="app-ui-avatar"></div>
                        <div className="app-ui-user-info">
                          <div className="app-ui-skeleton app-ui-skeleton-sm"></div>
                          <div className="app-ui-skeleton-xs app-ui-skeleton"></div>
                        </div>
                      </div>
                      <div className="app-ui-icon-btn"></div>
                    </div>
                    <div className="app-ui-card-gradient app-ui-card">
                      <div className="app-ui-skeleton app-ui-skeleton-sm"></div>
                      <div className="app-ui-value">
                        <span>$42,920.00</span>
                      </div>
                      <div className="app-ui-stats">
                        <div className="app-ui-skeleton-xs app-ui-skeleton"></div>
                        <div className="app-ui-trend">
                          <span>+12.5%</span>
                        </div>
                      </div>
                    </div>
                    <div className="app-ui-section-title">
                      <span>Performance Analytics</span>
                    </div>
                    <div className="app-ui-chart-container">
                      <div className="hero-mockup1-thq-app-ui-chart-bar-elm1 app-ui-chart-bar"></div>
                      <div className="hero-mockup1-thq-app-ui-chart-bar-elm2 app-ui-chart-bar"></div>
                      <div className="hero-mockup1-thq-app-ui-chart-bar-elm3 app-ui-chart-bar"></div>
                      <div className="hero-mockup1-thq-app-ui-chart-bar-elm4 app-ui-chart-bar"></div>
                      <div className="hero-mockup1-thq-app-ui-chart-bar-elm5 app-ui-chart-bar"></div>
                      <div className="hero-mockup1-thq-app-ui-chart-bar-elm6 app-ui-chart-bar"></div>
                    </div>
                    <div className="app-ui-section-title">
                      <span>Recent Activity</span>
                    </div>
                    <div className="app-ui-list">
                      <div className="app-ui-list-item">
                        <div className="app-ui-icon-box"></div>
                        <div className="app-ui-item-content">
                          <div className="app-ui-skeleton app-ui-skeleton-sm"></div>
                          <div className="app-ui-skeleton-xs app-ui-skeleton"></div>
                        </div>
                        <div className="app-ui-skeleton-xs app-ui-skeleton"></div>
                      </div>
                      <div className="app-ui-list-item">
                        <div className="app-ui-icon-box"></div>
                        <div className="app-ui-item-content">
                          <div className="app-ui-skeleton app-ui-skeleton-sm"></div>
                          <div className="app-ui-skeleton-xs app-ui-skeleton"></div>
                        </div>
                        <div className="app-ui-skeleton-xs app-ui-skeleton"></div>
                      </div>
                    </div>
                    <div className="app-ui-navbar">
                      <div className="active app-ui-nav-item"></div>
                      <div className="app-ui-nav-item"></div>
                      <div className="app-ui-nav-item"></div>
                      <div className="app-ui-nav-item"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-mockup-float hero-mockup-float-1">
                <div className="float-card">
                  <div className="float-card-icon">
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
                      <rect x="3" y="4" rx="2" width="18" height="18"></rect>
                      <path d="M3 10h18"></path>
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                    </svg>
                  </div>
                  <div className="float-card-content">
                    <div className="float-card-label">
                      <span>Next Launch</span>
                    </div>
                    <div className="float-card-value">
                      <span>Oct 24, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-mockup-float-2 hero-mockup-float">
                <div className="float-card">
                  <div className="hero-mockup1-thq-float-card-icon-elm2 float-card-icon">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <div className="float-card-content">
                    <div className="float-card-label">
                      <span>Security</span>
                    </div>
                    <div className="float-card-value">
                      <span>Enterprise Grade</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-mockup1-container4">
          <div className="hero-mockup1-container5">
            <Script
              html={`<style>
        @keyframes floatPhone {0%,100% {transform: rotateY(-15deg) rotateX(5deg) translateY(0);}
50% {transform: rotateY(-10deg) rotateX(8deg) translateY(-20px);}}@keyframes floatCard {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero-mockup1-container6">
          <div className="hero-mockup1-container7">
            <Script
              html={`<script defer data-name="hero-mockup-interactions">
(function(){
  const heroSection = document.querySelector(".hero-mockup")
  const glows = document.querySelectorAll(".hero-mockup-glow")
  const phoneFrame = document.querySelector(".hero-mockup-phone-frame")

  // Subtle parallax on mouse move
  if (window.innerWidth > 991) {
    heroSection.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const xPos = (clientX / window.innerWidth - 0.5) * 30
      const yPos = (clientY / window.innerHeight - 0.5) * 30

      glows.forEach((glow, index) => {
        const factor = (index + 1) * 0.5
        glow.style.transform = \`translate(\${xPos * factor}px, \${yPos * factor}px)\`
      })

      if (phoneFrame) {
        const rotateY = -15 + xPos * 0.2
        const rotateX = 5 + yPos * 0.2
        phoneFrame.style.transform = \`rotateY(\${rotateY}deg) rotateX(\${rotateX}deg)\`
      }
    })
  }

  // Intersection Observer for reveal animation
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible")

        // Animate chart bars when visible
        const bars = entry.target.querySelectorAll(".app-ui-chart-bar")
        bars.forEach((bar, i) => {
          const originalHeight = bar.style.height
          bar.style.height = "0"
          setTimeout(() => {
            bar.style.height = originalHeight
          }, 400 + i * 100)
        })
      }
    })
  }, observerOptions)

  observer.observe(heroSection)
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-mockup1-container1 {
            display: contents;
          }
          .hero-mockup1-container2 {
            display: none;
          }
          .hero-mockup1-container3 {
            display: contents;
          }
          .hero-mockup1-thq-app-ui-chart-bar-elm1 {
            height: 40%;
          }
          .hero-mockup1-thq-app-ui-chart-bar-elm2 {
            height: 70%;
          }
          .hero-mockup1-thq-app-ui-chart-bar-elm3 {
            height: 55%;
          }
          .hero-mockup1-thq-app-ui-chart-bar-elm4 {
            height: 90%;
          }
          .hero-mockup1-thq-app-ui-chart-bar-elm5 {
            height: 65%;
          }
          .hero-mockup1-thq-app-ui-chart-bar-elm6 {
            height: 80%;
          }
          .hero-mockup1-thq-float-card-icon-elm2 {
            color: var(--color-on-accent);
            background: var(--color-accent);
          }
          .hero-mockup1-container4 {
            display: none;
          }
          .hero-mockup1-container5 {
            display: contents;
          }
          .hero-mockup1-container6 {
            display: none;
          }
          .hero-mockup1-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default HeroMockup1
