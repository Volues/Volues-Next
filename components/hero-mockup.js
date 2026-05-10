import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const HeroMockup = (props) => {
  return (
    <>
      <div className="hero-mockup-container1">
        <section className="hero-mockup">
          <div className="hero-mockup-background">
            <div className="hero-mockup-glow-1 hero-mockup-glow"></div>
            <div className="hero-mockup-glow-2 hero-mockup-glow"></div>
          </div>
          <div className="hero-mockup-container">
            <div className="hero-mockup-content">
              <div className="hero-mockup-badge">
                <span className="hero-mockup-badge-dot"></span>
                <span>
                  {' '}
                  Next-Gen Software Solutions
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <h1 className="hero-title">
                Engineering the Future of Digital Products
              </h1>
              <p className="hero-subtitle">
                Volues empowers modern enterprises with premium software
                engineering, high-end UI/UX design, and scalable cloud platforms
                tailored for the next generation of technology.
              </p>
              <div className="hero-mockup-actions">
                <Link href="/contact">
                  <a>
                    <div className="btn-lg btn btn-primary">
                      <span>
                        {' '}
                        Book Consultation
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
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
            <div className="hero-mockup-visual-wrapper">
              <div className="hero-mockup-visual-frame">
                <div className="hero-mockup-phone-frame">
                  <div className="hero-mockup-phone-screen">
                    <div className="hero-mockup-app-ui">
                      <header className="hero-mockup-app-header">
                        <div className="hero-mockup-app-profile"></div>
                        <div className="hero-mockup-app-title-group">
                          <span className="hero-mockup-app-welcome">
                            Welcome back,
                          </span>
                          <span className="hero-mockup-app-user">
                            Alex Volues
                          </span>
                        </div>
                      </header>
                      <div className="hero-mockup-app-stats">
                        <div className="hero-mockup-app-card hero-mockup-app-card-blue">
                          <span className="hero-mockup-app-card-label">
                            Revenue
                          </span>
                          <span className="hero-mockup-app-card-value">
                            $24,500
                          </span>
                          <div className="hero-mockup-app-mini-chart">
                            <svg
                              viewBox="0 0 100 40"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0 40 Q 25 10, 50 30 T 100 10"
                                fill="none"
                                stroke="white"
                                strokeWidth="3"
                              ></path>
                            </svg>
                          </div>
                        </div>
                        <div className="hero-mockup-app-card hero-mockup-app-card-white">
                          <span className="hero-mockup-app-card-label">
                            Growth
                          </span>
                          <span className="hero-mockup-app-card-value">
                            +12.5%
                          </span>
                          <div className="hero-mockup-app-mini-chart">
                            <svg
                              viewBox="0 0 100 40"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0 30 Q 20 20, 40 35 T 80 15 T 100 25"
                                fill="none"
                                stroke="var(--color-primary)"
                                strokeWidth="3"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="hero-mockup-app-main-chart">
                        <div className="hero-mockup-app-chart-header">
                          <span className="hero-mockup-app-section-title">
                            Performance Analytics
                          </span>
                          <div className="hero-mockup-app-chart-icons">
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
                              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                              <path d="m19 9l-5 5l-4-4l-3 3"></path>
                            </svg>
                          </div>
                        </div>
                        <div className="hero-mockup-app-chart-bars">
                          <div className="hero-mockup-thq-hero-mockup-app-bar-elm1 hero-mockup-app-bar"></div>
                          <div className="hero-mockup-thq-hero-mockup-app-bar-elm2 hero-mockup-app-bar"></div>
                          <div className="hero-mockup-thq-hero-mockup-app-bar-elm3 hero-mockup-app-bar"></div>
                          <div className="hero-mockup-thq-hero-mockup-app-bar-elm4 hero-mockup-app-bar"></div>
                          <div className="hero-mockup-thq-hero-mockup-app-bar-elm5 hero-mockup-app-bar"></div>
                          <div className="hero-mockup-thq-hero-mockup-app-bar-elm6 hero-mockup-app-bar"></div>
                        </div>
                      </div>
                      <div className="hero-mockup-app-list">
                        <span className="hero-mockup-app-section-title">
                          Recent Activity
                        </span>
                        <div className="hero-mockup-app-list-item">
                          <div className="hero-mockup-app-item-icon"></div>
                          <div className="hero-mockup-app-item-text">
                            <span className="hero-mockup-app-item-title">
                              Cloud Sync
                            </span>
                            <span className="hero-mockup-app-item-sub">
                              Completed 2m ago
                            </span>
                          </div>
                        </div>
                        <div className="hero-mockup-app-list-item">
                          <div className="hero-mockup-app-item-icon"></div>
                          <div className="hero-mockup-app-item-text">
                            <span className="hero-mockup-app-item-title">
                              Security Patch
                            </span>
                            <span className="hero-mockup-app-item-sub">
                              Deployed successfully
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hero-mockup-floating-card hero-mockup-floating-card-1">
                  <div className="hero-mockup-floating-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-primary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <div className="hero-mockup-floating-text">
                    <strong>Security First</strong>
                    <span>Enterprise-grade encryption</span>
                  </div>
                </div>
                <div className="hero-mockup-floating-card-2 hero-mockup-floating-card">
                  <div className="hero-mockup-floating-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="var(--color-secondary)"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275z"></path>
                    </svg>
                  </div>
                  <div className="hero-mockup-floating-text">
                    <strong>AI Powered</strong>
                    <span>Smart automation engine</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="hero-mockup-container2">
          <div className="hero-mockup-container3">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-20px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="hero-mockup-container4">
          <div className="hero-mockup-container5">
            <Script
              html={`<script defer data-name="hero-mockup-interactions">
(function(){
  const heroSection = document.querySelector(".hero-mockup")
  const visualFrame = document.querySelector(".hero-mockup-visual-frame")
  const bars = document.querySelectorAll(".hero-mockup-app-bar")

  if (heroSection && visualFrame) {
    heroSection.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPos = (clientX / innerWidth - 0.5) * 20
      const yPos = (clientY / innerHeight - 0.5) * 20

      visualFrame.style.transform = \`rotateY(\${xPos - 15}deg) rotateX(\${-yPos + 5}deg)\`
    })

    heroSection.addEventListener("mouseleave", () => {
      visualFrame.style.transform = \`rotateY(-15deg) rotateX(5deg)\`
    })
  }

  const animateBars = () => {
    bars.forEach((bar) => {
      const targetHeight = bar.style.height
      bar.style.height = "0%"
      setTimeout(() => {
        bar.style.height = targetHeight
      }, 500)
    })
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateBars()
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 }
  )

  if (heroSection) {
    observer.observe(heroSection)
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero-mockup-container1 {
            display: contents;
          }
          .hero-mockup-thq-hero-mockup-app-bar-elm1 {
            height: 60%;
          }
          .hero-mockup-thq-hero-mockup-app-bar-elm2 {
            height: 85%;
          }
          .hero-mockup-thq-hero-mockup-app-bar-elm3 {
            height: 45%;
          }
          .hero-mockup-thq-hero-mockup-app-bar-elm4 {
            height: 70%;
          }
          .hero-mockup-thq-hero-mockup-app-bar-elm5 {
            height: 95%;
          }
          .hero-mockup-thq-hero-mockup-app-bar-elm6 {
            height: 55%;
          }
          .hero-mockup-container2 {
            display: none;
          }
          .hero-mockup-container3 {
            display: contents;
          }
          .hero-mockup-container4 {
            display: none;
          }
          .hero-mockup-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default HeroMockup
