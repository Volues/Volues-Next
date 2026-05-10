import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const HeroMockup2 = (props) => {
  return (
    <>
      <div className="hero-mockup2-container1">
        <section className="hero-mockup2-hero-mockup">
          <div className="hero-mockup-background">
            <div className="hero-mockup2-hero-mockup-glow-1 hero-mockup2-hero-mockup-glow"></div>
            <div className="hero-mockup2-hero-mockup-glow-2 hero-mockup2-hero-mockup-glow"></div>
          </div>
          <div className="hero-mockup2-hero-mockup-container">
            <div className="hero-mockup2-hero-mockup-content">
              <div className="hero-mockup2-hero-mockup-badge">
                <div className="hero-mockup-badge-icon">
                  <svg
                    fill="none"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m19 9l-5 5l-4-4l-3 3"></path>
                    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                  </svg>
                </div>
                <span className="hero-mockup2-hero-mockup-badge-text">
                  Next-Gen Software Solutions
                </span>
              </div>
              <h1 className="hero-title">
                Engineering the Future of Digital Products
              </h1>
              <p className="hero-subtitle">
                Volues specializes in high-end design and engineering for
                startups and enterprises. We build scalable platforms, mobile
                apps, and cloud infrastructure that define market leaders.
              </p>
              <div className="hero-mockup2-hero-mockup-actions">
                <Link href="/contact">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>Book Consultation</span>
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
              <div className="hero-mockup-stats">
                <div className="hero-mockup-stat-item">
                  <span className="hero-mockup-stat-value">99.9%</span>
                  <span className="hero-mockup-stat-label">Uptime</span>
                </div>
                <div className="hero-mockup-stat-item">
                  <span className="hero-mockup-stat-value">150+</span>
                  <span className="hero-mockup-stat-label">Deployments</span>
                </div>
                <div className="hero-mockup-stat-item">
                  <span className="hero-mockup-stat-value">24ms</span>
                  <span className="hero-mockup-stat-label">Avg Latency</span>
                </div>
              </div>
            </div>
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
        </section>
        <div className="hero-mockup2-container2">
          <div className="hero-mockup2-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero-mockup2-container4">
          <div className="hero-mockup2-container5">
            <Script
              html={`<script defer data-name="hero-mockup-interactions">
(function(){
  const heroSection = document.querySelector(".hero-mockup")
  const phoneFrame = document.querySelector(".hero-mockup-phone-frame")
  const floatingCards = document.querySelectorAll(".hero-mockup-floating")

  if (heroSection) {
    heroSection.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Parallax effect for background glows
      const moveX = (clientX - innerWidth / 2) / 50
      const moveY = (clientY - innerHeight / 2) / 50

      const glow1 = document.querySelector(".hero-mockup-glow-1")
      const glow2 = document.querySelector(".hero-mockup-glow-2")

      if (glow1) glow1.style.transform = \`translate(\${moveX}px, \${moveY}px)\`
      if (glow2) glow2.style.transform = \`translate(\${-moveX}px, \${-moveY}px)\`

      // Subtle tilt for phone frame on desktop
      if (window.innerWidth > 991 && phoneFrame) {
        const rotateY = -15 + (clientX / innerWidth - 0.5) * 10
        const rotateX = 5 - (clientY / innerHeight - 0.5) * 10
        phoneFrame.style.transform = \`rotateY(\${rotateY}deg) rotateX(\${rotateX}deg)\`
      }
    })

    // Reset phone tilt when mouse leaves
    heroSection.addEventListener("mouseleave", () => {
      if (window.innerWidth > 991 && phoneFrame) {
        phoneFrame.style.transform = \`rotateY(-15deg) rotateX(5deg)\`
      }
    })
  }

  // Simple reveal on scroll
  const observerOptions = {
    threshold: 0.1,
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
        revealObserver.unobserve(entry.target)
      }
    })
  }, observerOptions)

  const contentItems = document.querySelectorAll(".hero-mockup-content > *")
  contentItems.forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(20px)"
    item.style.transition = \`all 0.6s ease-out \${index * 0.1}s\`
    revealObserver.observe(item)
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-mockup2-container1 {
            display: contents;
          }
          .hero-mockup2-container2 {
            display: none;
          }
          .hero-mockup2-container3 {
            display: contents;
          }
          .hero-mockup2-container4 {
            display: none;
          }
          .hero-mockup2-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default HeroMockup2
