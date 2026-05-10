import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo">
                  <img
                    alt="image"
                    src="/voluesblacklogo-200h.png"
                    className="navigation-image1"
                  />
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <ul className="navigation-list">
                <li className="navigation-item">
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/services">
                    <a>
                      <div className="navigation-link">
                        <span>Services</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/solutions">
                    <a>
                      <div className="navigation-thq-navigation-link-elm3 navigation-link">
                        <span>Solutions</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/projects">
                    <a>
                      <div className="navigation-link">
                        <span>Projects</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/about">
                    <a>
                      <div className="navigation-link">
                        <span>About</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-item">
                  <Link href="/contact">
                    <a>
                      <div className="navigation-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navigation-actions">
              <Link href="/contact">
                <a>
                  <div className="btn-md btn navigation-cta btn-primary">
                    <span>Start a Project</span>
                    <svg
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 12h14m-7-7l7 7l-7 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </a>
              </Link>
              <button
                id="mobile-toggle"
                aria-label="Toggle Menu"
                aria-expanded="false"
                className="navigation-toggle"
              >
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  className="icon-close"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                    <path d="M3 9h18M9 16l3-3l3 3"></path>
                  </g>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M7 6a3 3 0 0 0-3 3h16a3 3 0 0 0-3-3zm0 12a3 3 0 0 1-3-3h16a3 3 0 0 1-3 3zm-4-7a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-overlay">
          <div className="navigation-overlay-header">
            <Link href="/">
              <a>
                <div className="navigation-logo">
                  <img
                    alt="image"
                    src="/voluesblacklogo-200h.png"
                    className="navigation-image2"
                  />
                </div>
              </a>
            </Link>
            <button
              id="mobile-close"
              aria-label="Close Menu"
              className="navigation-toggle"
            >
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
                  <rect x="3" y="3" rx="2" width="18" height="18"></rect>
                  <path d="M3 9h18M9 16l3-3l3 3"></path>
                </g>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-overlay-list">
              <li className="navigation-overlay-item">
                <Link href="/">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/services">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Services</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/projects">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Projects</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/about">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>About</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li className="navigation-overlay-item">
                <Link href="/contact">
                  <a>
                    <div className="navigation-overlay-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="navigation-overlay-footer">
              <Link href="/contact">
                <a>
                  <div className="btn-lg btn navigation-overlay-cta btn-primary">
                    <span>Start a Project</span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileClose = document.getElementById('mobile-close');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const overlayLinks = document.querySelectorAll('.navigation-overlay-link');

  const openMenu = () => {
    mobileOverlay.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    mobileToggle.setAttribute('aria-expanded', 'true');
    
    const items = document.querySelectorAll('.navigation-overlay-item');
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      setTimeout(() => {
        item.style.transition = 'all 0.4s ease-out';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, 100 + (index * 50));
    });
  };

  const closeMenu = () => {
    mobileOverlay.style.display = 'none';
    document.body.style.overflow = '';
    mobileToggle.setAttribute('aria-expanded', 'false');
  };

  mobileToggle.addEventListener('click', openMenu);
  mobileClose.addEventListener('click', closeMenu);

  overlayLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
    }
  });

  let lastScroll = 0;
  const navWrapper = document.querySelector('.navigation-wrapper');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navWrapper.style.transform = 'translateY(0)';
      return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
      navWrapper.style.transform = 'translateY(-100%)';
    } else {
      navWrapper.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
  });
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-image1 {
            width: 80px;
            height: auto;
            display: block;
            object-fit: contain;
            vertical-align: middle;
          }
          .navigation-thq-navigation-link-elm3 {
            text-decoration: none;
          }
          .navigation-image2 {
            width: 80px;
            height: auto;
            display: block;
            object-fit: contain;
            vertical-align: middle;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
