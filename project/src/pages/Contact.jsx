import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>Have questions about blood donation or our platform? We'd love to hear from you.</p>
        
        <div className="info-block">
          <h4>Email Us</h4>
          <p>support@bloodnetwork.example.com</p>
        </div>
        
        <div className="info-block">
          <h4>Call Us</h4>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="contact-form-card">
        {status && (
          <div className={`status-message ${status.includes('successfully') ? 'success' : ''}`}>
            {status}
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              value={formData.name} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              value={formData.email} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input 
              type="text" 
              id="subject" 
              name="subject" 
              required 
              value={formData.subject} 
              onChange={handleChange} 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
              value={formData.message} 
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn submit-btn" disabled={status === 'Sending...'}>
            {status === 'Sending...' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
