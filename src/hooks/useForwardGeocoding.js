import axios from "axios";
import { useEffect, useState } from "react";

const usePositionStack = (location) => {
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const options = {
    method: 'GET',
    url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
    params: {
      street: location.address,
      city: location.city,
      state: location.state,
      postalcode: location.cp,
      country: location.country,
      'accept-language': 'en',
      polygon_threshold: '0.0'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_FRG_API_KEY,
      'X-RapidAPI-Host': process.env.REACT_APP_FRG_API_HOST
    }
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      setLat(response.data[0].lat);
      setLon(response.data[0].lon);
    });
  }, []);

  return [lat, lon];
};

export default usePositionStack;