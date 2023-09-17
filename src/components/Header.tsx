import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg border-4 border-bottom">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-semibold">
            Simple header
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div id="navbarNav" className="collapse navbar-collapse justify-content-end">
            <ul className="nav nav-pills justify-content-end flex-column flex-lg-row text-center mt-2 mt-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createaccount" onClick={(event) => event.preventDefault()} className="nav-link pe-none">
                  Create Account
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/createproduct" className="nav-link">
                  Create Product
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/pricing" onClick={(event) => event.preventDefault()} className="nav-link pe-none">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/features" onClick={(event) => event.preventDefault()} className="nav-link pe-none">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/faqs" onClick={(event) => event.preventDefault()} className="nav-link pe-none">
                  FAQs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" onClick={(event) => event.preventDefault()} className="nav-link pe-none">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
