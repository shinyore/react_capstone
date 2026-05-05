import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './MapView.css';

// Fix for default marker icons in Leaflet with Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom icon for the user's location (optional, using default here but could be styled)
const userIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
  className: 'user-location-marker' // We can apply a CSS filter to make it look different
});

// Default center to NYC if user location is not available
const defaultCenter = [40.7128, -74.0060];

function MapView({ userLocation, donors }) {
  const center = userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter;

  return (
    <div className="map-container">
      <MapContainer 
        center={center} 
        zoom={11} 
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* User Location Marker */}
        {userLocation && (
          <Marker position={[userLocation.lat, userLocation.lng]} icon={userIcon}>
            <Popup>
              <strong>You are here</strong>
            </Popup>
          </Marker>
        )}

        {/* Donor Markers */}
        {donors.map(donor => (
          <Marker key={donor.id} position={[donor.lat, donor.lng]}>
            <Popup>
              <div className="donor-popup">
                <h4>{donor.name}</h4>
                <p><strong>Blood Group:</strong> <span className="blood-group-text">{donor.bloodGroup}</span></p>
                <p>{donor.city}</p>
                <p>{donor.phone}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
