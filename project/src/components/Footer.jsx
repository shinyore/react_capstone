import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Blood Donation Network</h4>
          <p>Connecting life-savers with those in need. Every drop counts.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donors">Find Donors</Link></li>
            <li><Link to="/register">Register as Donor</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Information</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Blood Donation Network. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
