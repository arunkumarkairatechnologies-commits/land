import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import Hero from "../assets/hero1.png";
import { FaLaptopCode, FaChartLine, FaUsers, FaShieldAlt, FaMobileAlt, FaDraftingCompass, FaStar, FaQuoteRight } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Image */}
            <div
              className="col-lg-6 text-center"
              data-aos="fade-right"
            >
              <img
                src={Hero}
                alt="Music"
                className="hero-img img-fluid"
              />
            </div>

            {/* Right Content */}
            <div
              className="col-lg-6 hero-content"
              data-aos="fade-left"
            >

              <h1 className="hero-title">
                Listen to <br />
                the{" "}
                <span className="typing-text">
                  <Typewriter
                    words={["amazing", "beautiful", "powerful"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
                <br />
                music sound.
              </h1>

              <p className="hero-text">
                Experience music like never before
              </p>

              <button className="hero-btn">
                Shopping Now
              </button>

            </div>

          </div>
        </div>
      </section>



      <section className="how-section">
        <div className="container">

          <div className="row mb-5 align-items-center">

            <div className="col-lg-6" data-aos="fade-right">
              <span className="section-subtitle">HOW IT WORKS</span>
              <h2 className="section-title">
                Simplifying HR with a <br />
                Proven Approach
              </h2>
            </div>

            <div className="col-lg-6 text-lg-end mt-4 mt-lg-0" data-aos="fade-left">
              <p className="section-text">
                Our proven process simplifies HR challenges,
                boosting efficiency and employee satisfaction.
              </p>
            </div>

          </div>

          {/* Cards */}
          <div className="row g-4">

            <div className="col-lg-6" data-aos="zoom-in">
              <div className="work-card">
                <div className="card-number">1</div>
                <h5>Understand Your Needs</h5>
                <p>
                  We begin with an in-depth consultation to understand your
                  business goals and challenges.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
              <div className="work-card">
                <div className="card-number">2</div>
                <h5>Tailor Made Solutions</h5>
                <p>
                  Customizing strategies and tools for recruitment,
                  engagement, and development.
                </p>
              </div>
            </div>

            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="200">
              <div className="work-card">
                <div className="card-number">3</div>
                <h5>Execution & Support</h5>
                <p>
                  Our proven process simplifies even the most intricate HR
                  challenges by breaking them into manageable steps.
                </p>
              </div>
            </div>

            {/* Highlight Card (Default Colored Card) */}
            <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="300">
              <div className="work-card highlight-card">
                <div className="card-number">4</div>
                <h5>Continuous Improvement</h5>
                <p>
                  We conduct regular evaluations to assess progress,
                  identify areas for enhancement, and adjust strategies as needed.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Dark Design Services Section */}
      <section className="dark-services-section">
        <div className="container position-relative z-1">
          {/* Faint large circle in top right (bg decors) */}
          <div className="bg-decor-circle"></div>

          <div className="row mb-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="d-flex align-items-center mb-3">
                <div className="orange-line"></div>
                <span className="dark-section-subtitle">Service</span>
              </div>
              <h2 className="dark-section-title">
                The World's Most Powerful <br /> Design Tool.
              </h2>
            </div>
            <div className="col-lg-6 text-lg-end" data-aos="fade-left">
              <p className="dark-section-desc text-start text-lg-start ms-lg-auto" style={{ maxWidth: "400px", float: "right" }}>
                From refining your brand identify and running campaigns
                to powering your digital presence, we do it all.
              </p>
              <div className="clearfix"></div>
            </div>
          </div>

          <div className="row justify-content-between align-items-center position-relative mt-5 dark-cards-row">
            {/* Horizontal Dotted Line Connecting Cards */}
            <div className="connecting-line"></div>

            {/* Left Cards */}
            <div className="col-lg-4 z-index-1">
              <div className="dark-service-card mb-4" data-aos="fade-right" data-aos-delay="100">
                <div className="ds-card-header">
                  <div className="ds-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle></svg>
                    <div className="shape-dot bg-white"></div>
                  </div>
                  <h4>Digital Marketing</h4>
                </div>
                <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate.</p>
              </div>

              <div className="dark-service-card" data-aos="fade-right" data-aos-delay="200">
                <div className="ds-card-header">
                  <div className="ds-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18"></rect></svg>
                    <div className="shape-dot bg-white"></div>
                  </div>
                  <h4>Branding Design</h4>
                </div>
                <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate.</p>
              </div>
            </div>

            {/* Center Circle */}
            <div className="col-lg-4 text-center z-index-1 position-relative center-circle-col" data-aos="zoom-in" data-aos-delay="300">
              {/* Decorative orange blobs */}
              <div className="center-blob-top"></div>
              <div className="center-blob-bottom"></div>
              <div className="center-circle-main">
                <h3>More<br />Services</h3>
              </div>
            </div>

            {/* Right Cards */}
            <div className="col-lg-4 z-index-1">
              <div className="dark-service-card mb-4" data-aos="fade-left" data-aos-delay="100">
                <div className="ds-card-header">
                  <div className="ds-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><polygon points="12 3 21 20 3 20"></polygon></svg>
                    <div className="shape-dot bg-white"></div>
                  </div>
                  <h4>Website Development</h4>
                </div>
                <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate.</p>
              </div>

              <div className="dark-service-card" data-aos="fade-left" data-aos-delay="200">
                <div className="ds-card-header">
                  <div className="ds-icon-box">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5"><polygon points="12 2 21 7 21 17 12 22 3 17 3 7"></polygon></svg>
                    <div className="shape-dot bg-orange"></div>
                  </div>
                  <h4>SEO Marketing</h4>
                </div>
                <p>Enthusiastically network virtual technologies whereas e-business interfaces holisticly pontificate.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-5" data-aos="fade-right">
              <h2 className="testi-main-title">
                What Client Say's About <br />
                Our Services
              </h2>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="d-flex align-items-center mb-2">
                <div className="orange-line"></div>
                <span className="testi-subtitle">Testimonial</span>
              </div>
              <p className="testi-top-desc">
                We love projects that challenge us and force us to think out of the box. <br />
                We'll never do work that's generic or follow trends blindly.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {/* Testimonial 1 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="testi-card">
                <FaQuoteRight className="quote-icon" />
                <div className="stars-container">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h4>We have no regrest!</h4>
                <p>
                  Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative
                </p>
                <div className="client-info">
                  <div className="client-avatar bg-yellow-light">
                    <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Client 1" />
                  </div>
                  <div className="client-details">
                    <h6>Muriel V. Barker</h6>
                    <span>CEO of Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="testi-card">
                <FaQuoteRight className="quote-icon" />
                <div className="stars-container">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h4>We have no regrest!</h4>
                <p>
                  Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative
                </p>
                <div className="client-info">
                  <div className="client-avatar bg-blue-light">
                    <img src="https://randomuser.me/api/portraits/men/43.jpg" alt="Client 2" />
                  </div>
                  <div className="client-details">
                    <h6>Muriel V. Barker</h6>
                    <span>CEO of Google</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="testi-card">
                <FaQuoteRight className="quote-icon" />
                <div className="stars-container">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <h4>We have no regrest!</h4>
                <p>
                  Uniquely repurpose strategic core competencies with progressive content. Assertively transition ethical imperatives and collaborative
                </p>
                <div className="client-info">
                  <div className="client-avatar bg-green-light">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" alt="Client 3" />
                  </div>
                  <div className="client-details">
                    <h6>Muriel V. Barker</h6>
                    <span>CEO of Google</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section className="our-work-section">
        <div className="container">
          <div className="work-title-wrapper" data-aos="fade-up">
            <h2 className="work-main-title">
              Our Work <br />
              Speaks for Itself
            </h2>
            <p className="work-main-desc">
              A glimpse of our completed projects that reflect quality, precision, and creativity.
            </p>
          </div>

          <div className="gallery-grid">
            {/* Gallery images */}
            <div className="gallery-obj" data-aos="fade-up" data-aos-delay="100">
              <img src="https://images.unsplash.com/photo-1598928506311-c55dd1b76412?w=600&auto=format&fit=crop&q=60" alt="Bedroom interior" />
            </div>
            <div className="gallery-obj" data-aos="fade-up" data-aos-delay="200">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&auto=format&fit=crop&q=60" alt="Living room interior" />
            </div>
            <div className="gallery-obj" data-aos="fade-up" data-aos-delay="300">
              <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=600&auto=format&fit=crop&q=60" alt="Kitchen interior" />
            </div>
            <div className="gallery-obj" data-aos="fade-up" data-aos-delay="400">
              <img src="https://images.unsplash.com/photo-1513694203232-719a28071860?w=600&auto=format&fit=crop&q=60" alt="Dining area interior" />
            </div>
            <div className="gallery-obj" data-aos="fade-up" data-aos-delay="500">
              <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&auto=format&fit=crop&q=60" alt="Modern couch" />
            </div>
            <div className="gallery-obj" data-aos="fade-up" data-aos-delay="600">
              <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=60" alt="Study room interior" />
            </div>
          </div>

          <div className="mt-4" data-aos="fade-up" data-aos-offset="0">
            <a href="#" className="explore-btn">Explore More</a>
          </div>
        </div>
      </section>
    </>
  );
}




export default Home;