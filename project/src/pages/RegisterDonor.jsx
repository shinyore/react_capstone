import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDonor } from '../services/api';
import './RegisterDonor.css';

function RegisterDonor() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bloodGroup: 'A+',
    phone: '',
    city: '',
    lat: '',
    lng: ''
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newDonor = addDonor({
      ...formData,
      lat: formData.lat ? parseFloat(formData.lat) : undefined,
      lng: formData.lng ? parseFloat(formData.lng) : undefined,
    });
    
    
    localStorage.setItem('registeredDonorId', newDonor.id);
    
    setMessage('Registration successful! Redirecting to donors list...');
    
    setTimeout(() => {
      navigate('/donors');
    }, 2000);
  };

  return (
    <div className="register-container">
      <div className="register-header">
        <h2>Register as a Blood Donor</h2>
        <p>Your donation could save a life. Join our network today.</p>
      </div>

      <div className="form-card">
        {message && <div className="success-message">{message}</div>}
        
        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select 
              id="bloodGroup" 
              name="bloodGroup" 
              value={formData.bloodGroup} 
              onChange={handleChange}
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+1 555-0199"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City / Area</label>
            <input 
              type="text" 
              id="city" 
              name="city" 
              required 
              value={formData.city} 
              onChange={handleChange} 
              placeholder="e.g. New York"
            />
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label htmlFor="lat">Latitude (Optional)</label>
              <input 
                type="number" 
                step="any"
                id="lat" 
                name="lat" 
                value={formData.lat} 
                onChange={handleChange} 
                placeholder="40.7128"
              />
            </div>
            <div className="form-group half">
              <label htmlFor="lng">Longitude (Optional)</label>
              <input 
                type="number" 
                step="any"
                id="lng" 
                name="lng" 
                value={formData.lng} 
                onChange={handleChange} 
                placeholder="-74.0060"
              />
            </div>
          </div>

          <button type="submit" className="btn submit-btn">Register Now</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterDonor;
