import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Home
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Login" className="nav-link">
                <button className="btn btn-outline-primary">Login</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Signup" className="nav-link">
                <button className="btn btn-outline-primary">Signup</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
