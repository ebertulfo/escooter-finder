import { useState } from 'react';
import { Map } from '../components/Map';
import { Search } from '../components/Search';

export default () => {
  const [radius, setRadius] = useState(100);
  const [numberOfScooters, setNumberOfScooters] = useState(0);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();

  console.log(numberOfScooters,radius);
  return (
    <div>
      <Search
        radius={radius}
        numberOfScooters={numberOfScooters}
        latitude={latitude}
        longitude={longitude}
        setRadius={setRadius}
        setNumberOfScooters={setNumberOfScooters}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
      />
      <Map

      />
    </div>
  );
};