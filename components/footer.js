import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-brand-column">
                <a href="Homepage">
                  <div className="footer-logo">
                    <span className="footer-logo-text">VOLUES</span>
                    <img
                      alt="image"
                      src="/voluesashlogo-200h.png"
                      className="footer-image"
                    />
                  </div>
                </a>
                <p className="footer-description">
                  {' '}
                  Engineering next-generation digital experiences. From
                  high-performance cloud infrastructure to elegant UI/UX design,
                  we build the software that defines tomorrow.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
                <div className="footer-socials">
                  <a
                    href="https://www.linkedin.com/company/volues/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <div
                      aria-label="LinkedIn"
                      className="footer-thq-footer-social-link-elm1 footer-social-link"
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
                          <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0"></path>
                          <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"></path>
                        </g>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      aria-label="Twitter"
                      className="footer-thq-footer-social-link-elm2 footer-social-link"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M22 4.01c-1 .49-1.98.689-3 .99c-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4c0 0-4.182 7.433 4 11c-1.872 1.247-3.739 2.088-6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58-1.04 6.522-3.723 7.651-7.742a13.8 13.8 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                  <a href="#">
                    <div
                      aria-label="GitHub"
                      className="footer-thq-footer-social-link-elm3 footer-social-link"
                    >
                      <svg
                        width="24"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-links-grid">
                <div className="footer-nav-group">
                  <h4 className="footer-nav-title">Services</h4>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <Link href="/services">
                        <a>
                          <div className="footer-nav-link">
                            <span>Web Development</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/services">
                        <a>
                          <div className="footer-nav-link">
                            <span>Mobile Apps</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/services">
                        <a>
                          <div className="footer-nav-link">
                            <span>Enterprise SaaS</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/services">
                        <a>
                          <div className="footer-nav-link">
                            <span>UI/UX Design</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/services">
                        <a>
                          <div className="footer-nav-link">
                            <span>Cloud Infra</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-group">
                  <h4 className="footer-nav-title">Company</h4>
                  <ul className="footer-nav-list">
                    <li className="footer-nav-item">
                      <Link href="/about">
                        <a>
                          <div className="footer-nav-link">
                            <span>About Us</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/projects">
                        <a>
                          <div className="footer-nav-link">
                            <span>Our Projects</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Careers</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <a href="#">
                        <div className="footer-nav-link">
                          <span>Press Kit</span>
                        </div>
                      </a>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/contact">
                        <a>
                          <div className="footer-nav-link">
                            <span>Contact</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item"></li>
                    <li className="footer-nav-item">
                      <Link href="/solutions">
                        <a>
                          <div className="footer-nav-link">
                            <span>Solutions</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item">
                      <Link href="/launch">
                        <a>
                          <div className="footer-nav-link">
                            <span>Launch</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li className="footer-nav-item"></li>
                    <li className="footer-nav-item"></li>
                  </ul>
                </div>
                <div className="footer-newsletter-column footer-nav-group">
                  <h4 className="footer-nav-title">Stay Updated</h4>
                  <p className="footer-newsletter-text">
                    Get the latest technology insights and product updates.
                  </p>
                  <form
                    action="/subscribe"
                    method="POST"
                    data-form-id="144f3aa9-b4d9-4403-839e-50d8d91cb925"
                    className="footer-newsletter-form"
                  >
                    <div className="footer-input-wrapper">
                      <input
                        type="email"
                        id="thq_textinput_78Kl"
                        name="textinput"
                        required="true"
                        aria-label="Email address"
                        placeholder="Email address"
                        data-form-field-id="thq_textinput_78Kl"
                        className="footer-input"
                      />
                      <button
                        id="thq_button_3mA9"
                        name="button"
                        type="submit"
                        aria-label="Subscribe"
                        data-form-field-id="thq_button_3mA9"
                        className="footer-submit-btn"
                      >
                        <svg
                          width="20"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 12h14m-6 6l6-6m-6-6l6 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="footer-legal">
                <p className="footer-copyright">
                  2026 Volues Technologies LTD. All rights reserved.
                </p>
                <div className="footer-legal-links">
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Privacy Policy</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Terms of Service</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-legal-link">
                      <span>Security</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-status">
                <span className="footer-status-dot"></span>
                <span className="footer-status-text">
                  All Systems Operational
                </span>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<style>
        @keyframes pulse-status {0% {transform: scale(1);
opacity: 1;}
50% {transform: scale(1.2);
opacity: 0.7;}
100% {transform: scale(1);
opacity: 1;}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="footer-container4">
          <div className="footer-container5">
            <Script
              html={`<script defer data-name="footer-newsletter">
(function(){
  const newsletterForm = document.querySelector('.footer-newsletter-form');
  const emailInput = newsletterForm.querySelector('.footer-input');
  const submitBtn = newsletterForm.querySelector('.footer-submit-btn');

  newsletterForm.addEventListener('submit', (e) => {
    // Native validation handles the check, this is for visual feedback
    if (emailInput.checkValidity()) {
      const originalIcon = submitBtn.innerHTML;
      
      // Visual feedback for submission
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 12l5 5L20 7"/></svg>';
      submitBtn.style.backgroundColor = '#2ecc71';
      
      emailInput.value = '';
      emailInput.placeholder = 'Subscribed!';
      emailInput.disabled = true;

      // Restore button state after 3 seconds for demo purposes
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalIcon;
        submitBtn.style.backgroundColor = '';
        emailInput.disabled = false;
        emailInput.placeholder = 'Email address';
      }, 3000);
    }
  });

  // Real-time validation visual cue
  emailInput.addEventListener('blur', () => {
    const wrapper = document.querySelector('.footer-input-wrapper');
    if (emailInput.value && !emailInput.checkValidity()) {
      wrapper.style.borderColor = '#e74c3c';
    } else {
      wrapper.style.borderColor = '';
    }
  });
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-image {
            width: 150px;
            object-fit: cover;
          }
          .footer-thq-footer-social-link-elm1 {
            text-decoration: none;
          }
          .footer-thq-footer-social-link-elm2 {
            display: none;
          }
          .footer-thq-footer-social-link-elm3 {
            display: none;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
          .footer-container4 {
            display: none;
          }
          .footer-container5 {
            display: contents;
          }
          @media (max-width: 767px) {
            .footer-image {
              width: 120px;
            }
          }
          @media (max-width: 479px) {
            .footer-image {
              width: 120px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Footer
