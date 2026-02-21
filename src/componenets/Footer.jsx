import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row gy-4">

          {/* HELP */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up">
            <h5 className="footer-title">HELP</h5>
            <ul className="footer-links">
              <li>Delivery & returns</li>
              <li>FAQ</li>
              <li>Track order</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* SHOP */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <h5 className="footer-title">SHOP</h5>
            <ul className="footer-links">
              <li>New arrivals</li>
              <li>Trending now</li>
              <li>Sales</li>
              <li>Brands</li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <h5 className="footer-title">GET IN TOUCH</h5>
            <p className="footer-text">Call: 9999-999-999</p>
            <p className="footer-text">Email: sales@callinstore.com</p>
            <div className="social-icons">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-pinterest"></i>
            </div>
          </div>

          {/* DOWNLOAD APP */}
          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <h5 className="footer-title">DOWNLOAD OUR APP</h5>

            <div className="app-buttons">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="app-img"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="app-img"
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
