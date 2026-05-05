import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-header">
        <h2>About Blood Donation Network</h2>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h3>Our Mission</h3>
          <p>
            The Blood Donation Network was created with a simple but critical mission: to connect 
            those in urgent need of blood with willing donors in their vicinity. We believe that 
            technology can bridge the gap during emergencies, where every minute counts.
          </p>
        </section>

        <section className="about-section">
          <h3>Why Donate Blood?</h3>
          <p>
            Blood is an essential component of life, and there is no substitute for it. 
            A single blood donation can save up to three lives. Blood is constantly needed for:
          </p>
          <ul>
            <li>Accident victims and trauma patients</li>
            <li>Surgical procedures</li>
            <li>Patients undergoing cancer treatment</li>
            <li>Individuals with blood disorders like sickle cell anemia</li>
          </ul>
        </section>

        <section className="about-section">
          <h3>Eligibility Guidelines</h3>
          <p>Generally, you may be eligible to donate blood if you:</p>
          <ul>
            <li>Are in general good health and feeling well.</li>
            <li>Are at least 17 years old in most states.</li>
            <li>Weigh at least 110 lbs.</li>
            <li>Have not donated blood in the last 56 days.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
