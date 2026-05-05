import './DonorCard.css';

function DonorCard({ donor, onRemove }) {
  return (
    <div className="donor-card">
      <div className="donor-card-header">
        <h4>{donor.name}</h4>
        <span className="blood-group-badge">{donor.bloodGroup}</span>
      </div>
      <div className="donor-card-body">
        <p><strong>Location:</strong> {donor.city}</p>
        <p><strong>Phone:</strong> {donor.phone}</p>
      </div>
      <div className="donor-card-actions">
        <button className="contact-btn">Contact Donor</button>
        {onRemove && (
          <button className="remove-btn" onClick={onRemove}>Remove</button>
        )}
      </div>
    </div>
  );
}

export default DonorCard;
