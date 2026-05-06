let donorsList = [
  {
    id: 1,
    name: "John Doe",
    bloodGroup: "O+",
    lat: 40.7128,
    lng: -74.0060,
    phone: "+1 555-0101",
    city: "New York"
  },
  {
    id: 2,
    name: "Jane Smith",
    bloodGroup: "A-",
    lat: 40.7306,
    lng: -73.9352,
    phone: "+1 555-0102",
    city: "Queens"
  },
  {
    id: 3,
    name: "Robert Johnson",
    bloodGroup: "B+",
    lat: 40.6782,
    lng: -73.9442,
    phone: "+1 555-0103",
    city: "Brooklyn"
  },
  {
    id: 4,
    name: "Emily Davis",
    bloodGroup: "AB+",
    lat: 40.8090,
    lng: -73.9624,
    phone: "+1 555-0104",
    city: "Manhattan"
  },
  {
    id: 5,
    name: "Michael Wilson",
    bloodGroup: "O-",
    lat: 40.7589,
    lng: -73.9851,
    phone: "+1 555-0105",
    city: "Times Square"
  }
];

export const getDonors = () => {
  return [...donorsList];
};

export const addDonor = (donor) => {
  const newDonor = {
    ...donor,
    id: donorsList.length > 0 ? Math.max(...donorsList.map(d => d.id)) + 1 : 1,
  
    lat: donor.lat || 40.7128 + (Math.random() * 0.1 - 0.05),
    lng: donor.lng || -74.0060 + (Math.random() * 0.1 - 0.05),
  };
  donorsList.push(newDonor);
  return newDonor;
};

export const removeDonor = (id) => {
  donorsList = donorsList.filter(donor => donor.id !== id);
};
