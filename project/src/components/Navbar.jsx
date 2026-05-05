import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Blood Donation Network
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className={`navbar-link ${isActive('/')}`}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/donors" className={`navbar-link ${isActive('/donors')}`}>Find Donors</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className={`navbar-link ${isActive('/register')}`}>Register as Donor</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className={`navbar-link ${isActive('/about')}`}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className={`navbar-link ${isActive('/contact')}`}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
