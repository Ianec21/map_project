import axios from 'axios';

const getCountryCoordinates = async (countryName: string) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: countryName,
        key: "AIzaSyBCbmUdTQJOxiTSU5WqjCSRLZs0YII-SNY", // Replace with your actual Google Maps API key
      },
    });

    if (response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry.location;
      return { lat, lng };
    } else {
      throw new Error('No results found for the provided country name.');
    }
  } catch (error: any) {
    console.error('Error fetching country coordinates:', error.message);
    throw error;
  }
};

export default getCountryCoordinates;