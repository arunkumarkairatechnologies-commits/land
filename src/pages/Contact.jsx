import './Contact.css'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Image from '../assets/contact.png'
function Contact(){
    return(
 <section className="contact-wrapper">

  <div className="container">

    {/* Heading */}
    <div className="text-center contact-header" data-aos="fade-down">
      <h2 className="main-heading">Get In Touch</h2>
      <p className="contact-subtext">
        We'd love to hear from you. Whether you have a question,
        feedback, or just want to say hello — feel free to reach out.
      </p>
    </div>

    <div className="row align-items-center g-5">

      {/* LEFT SIDE IMAGE */}
      <div className="col-lg-6 text-center" data-aos="fade-right">
        <img
          src={Image}
          alt="Contact Illustration"
          className="contact-image img-fluid"
        />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="col-lg-6" data-aos="fade-left">
        <div className="form-card">

          <h4 className="form-title">Send Us a Message</h4>

          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="form-control custom-input"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="form-control custom-input"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="form-control custom-input"
            ></textarea>

            <button className="btn send-btn w-100">
              Send Message
            </button>
          </form>

        </div>
      </div>

    </div>
  </div>

  {/* ================= MAP SECTION ================= */}
  <div className="map-section" data-aos="fade-up">
    <div className="container">

      <div className="text-center mb-4">
        <h3 className="map-title">Our Location</h3>
        <p className="map-subtext">
          Visit us at our office location or find us easily using the map below.
        </p>
      </div>

      <div className="map-box">
        <iframe
          title="map"
          src="https://maps.google.com/maps?q=India&t=&z=13&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="320"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>

    </div>
  </div>

</section>
    )
}
export default Contact;