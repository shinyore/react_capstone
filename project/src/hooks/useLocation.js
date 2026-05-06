import { useState, useEffect } from 'react';

export const useLocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported');
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setLocation({
          lat: coords.latitude,
          lng: coords.longitude
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLocation({ lat: 40.7128, lng: -74.0060 }); // fallback
        setLoading(false);
      }
    );
  }, []);

  return { location, error, loading };
};