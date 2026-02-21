import React, { useEffect } from "react";
import AOS from "aos";
import { FaCheckCircle } from "react-icons/fa";
import "./Price.css";

function PricingPage() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
       <section className="pricing-section">

      <div className="container">

        {/* HEADER */}
        <div className="text-center mb-5" data-aos="fade-down">
          <h2 className="pricing-title">Plans and Pricing</h2>
          <p className="pricing-subtitle">
            Receive unlimited credits when you pay yearly and save more on your plan.
          </p>

          <div className="pricing-toggle">
            
          </div>
        </div>

        {/* CARDS */}
        <div className="row g-4">

          {/* FREE */}
          <div className="col-lg-4" data-aos="fade-up">
            <div className="pricing-card">
              <h3>Free</h3>
              <h1>$0</h1>
              <p className="small-text">Per user/month, billed annually</p>

              <ul>
                <li><FaCheckCircle /> Free e-mail alerts</li>
                <li><FaCheckCircle /> 3-minute checks</li>
                <li><FaCheckCircle /> Automatic data enrichment</li>
                <li><FaCheckCircle /> 10 monitors</li>
                <li><FaCheckCircle /> Up to 3 seats</li>
              </ul>

              <button className="btn pricing-btn">
                Get started for free
              </button>
            </div>
          </div>

          {/* PRO */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="150">
            <div className="pricing-card popular">
              <span className="popular-badge">Popular</span>

              <h3>Pro</h3>
              <h1>$85</h1>
              <p className="small-text">Per user/month, billed annually</p>

              <ul>
                <li><FaCheckCircle /> Unlimited phone calls</li>
                <li><FaCheckCircle /> 30 second checks</li>
                <li><FaCheckCircle /> Single-user account</li>
                <li><FaCheckCircle /> 20 monitors</li>
                <li><FaCheckCircle /> Up to 6 seats</li>
              </ul>

              <button className="btn pricing-btn">
                Get started with Pro
              </button>
            </div>
          </div>

          {/* ENTERPRISE */}
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="300">
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <h1>Custom</h1>
              <p className="small-text">Per user/month, billed annually</p>

              <ul>
                <li><FaCheckCircle /> Everything in Pro</li>
                <li><FaCheckCircle /> Up to 5 team members</li>
                <li><FaCheckCircle /> 100 monitors</li>
                <li><FaCheckCircle /> 15 status pages</li>
                <li><FaCheckCircle /> 200+ integrations</li>
              </ul>

              <button className="btn pricing-btn">
                Get started with Enterprise
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>

  );
}

export default PricingPage;