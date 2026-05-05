import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h2>Welcome to the Blood Donation App</h2>
        <p>Find blood donors near you quickly and easily. Your simple action could save a life today.</p>
        <Link to="/donors" className="btn hero-btn">Find Donors Now</Link>
      </div>
      
      <div className="info-section">
        <div className="info-card">
          <h3>Why Donate?</h3>
          <p>Every donation can save up to three lives. Blood is always needed for emergencies, surgeries, and medical treatments.</p>
        </div>
        <div className="info-card">
          <h3>How it Works</h3>
          <p>Click on the "Find Donors Now" button to view a map of registered donors in your area along with their blood types.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
