import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand logo" to="/">
          MyLogo
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse mobile-menu" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
                 <li className="nav-item">
              <Link className="nav-link" to="/price">Price</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
