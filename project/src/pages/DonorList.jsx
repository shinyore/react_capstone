import { useState, useEffect } from 'react';
import { getDonors, removeDonor } from '../services/api';
import DonorCard from '../components/DonorCard';
import MapView from '../components/MapView';
import { useLocation } from '../hooks/useLocation';
import './DonorList.css';

function DonorList() {
  const [donors, setDonors] = useState([]);
  const { location, loading, error } = useLocation();

 
  const registeredDonorId = parseInt(localStorage.getItem('registeredDonorId'));

  useEffect(() => {

    setDonors(getDonors());
  }, []);

  const handleRemoveDonor = (id) => {
    removeDonor(id);
    setDonors(getDonors());
    
   
    if (id === registeredDonorId) {
      localStorage.removeItem('registeredDonorId');
    }
  };

  return (
    <div className="donor-list-page">
      <div className="page-header">
        <h2>Available Blood Donors</h2>
        <p>Find donors nearby using the map or list below.</p>
      </div>

      <div className="layout-grid">
        <div className="map-section">
          {loading ? (
            <div className="loading-state">Loading map...</div>
          ) : (
            <MapView 
              userLocation={location} 
              donors={donors} 
            />
          )}
          {error && <div className="error-message">Note: {error}</div>}
        </div>

        <div className="list-section">
          <h3>Donor Directory ({donors.length})</h3>
          <div className="donors-container">
            {donors.map(donor => (
              <DonorCard 
                key={donor.id} 
                donor={donor} 
                onRemove={donor.id === registeredDonorId ? () => handleRemoveDonor(donor.id) : null}
              />
            ))}
            {donors.length === 0 && (
              <p className="no-donors">No donors found at this time.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DonorList;
