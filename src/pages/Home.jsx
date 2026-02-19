import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import Hero from"../assets/hero1.png";
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

          <div className="col-lg-6" data-aos="zoom-in">
            <div className="work-card">
              <div className="card-number">2</div>
              <h5>Tailor Made Solutions</h5>
              <p>
                Customizing strategies and tools for recruitment,
                engagement, and development.
              </p>
            </div>
          </div>

          <div className="col-lg-6" data-aos="zoom-in">
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
          <div className="col-lg-6" data-aos="zoom-in">
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
    </>
  );
}




export default Home;