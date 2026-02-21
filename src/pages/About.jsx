import './About.css'
import { FaBullseye, FaEye } from "react-icons/fa";
function About(){
    return(
        <section className="about-section">

      <div className="container">

        {/* ================= TOP SECTION ================= */}
        <div className="row g-5 align-items-stretch">

          {/* LEFT SIDE */}
          <div className="col-lg-6" data-aos="fade-right">
            <div className="left-card">

              <p className="small-title">How It Started</p>

              <h1 className="main-title">
                Our Dream is <br />
                Global Learning <br />
                Transformation
              </h1>

              <p className="desc">
                Kawruh was founded by passionate educators with a dream
                to create a global learning platform accessible to all.
                United by belief in the power of education,
                they built a digital ecosystem connecting learners worldwide.
              </p>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-lg-6" data-aos="fade-left">

            <div className="image-card">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
                alt="Learning"
              />
            </div>

            <div className="row g-4 mt-3">

              <div className="col-6">
                <div className="stat-card">
                  <h3>3.5</h3>
                  <p>Years Experience</p>
                </div>
              </div>

              <div className="col-6">
                <div className="stat-card">
                  <h3>23</h3>
                  <p>Project Challenge</p>
                </div>
              </div>

              <div className="col-6">
                <div className="stat-card">
                  <h3>830+</h3>
                  <p>Positive Reviews</p>
                </div>
              </div>

              <div className="col-6">
                <div className="stat-card">
                  <h3>100K</h3>
                  <p>Trusted Students</p>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* ================= MISSION & VISION ================= */}

        <div className="row mt-5 g-4">

          {/* Mission */}
          <div className="col-lg-6" data-aos="fade-up">
            <div className="mv-card">

              <div className="icon-box">
                <FaBullseye />
              </div>

              <h2>Our Mission</h2>

              <p>
                To provide innovative and accessible learning experiences
                that empower individuals globally and inspire lifelong growth.
              </p>

            </div>
          </div>

          {/* Vision */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="mv-card">

              <div className="icon-box vision-icon">
                <FaEye />
              </div>

              <h2>Our Vision</h2>

              <p>
                To become a global leader in digital education,
                transforming the way people learn through
                technology-driven solutions and collaboration.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
    )
}
export default About;