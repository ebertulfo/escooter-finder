import { useState } from 'react';
import { Map } from '../components/Map';
import { Search } from '../components/Search';
import { getScooters } from '../services/api';

export default () => {
  //Search Component state
  const [search, setSearch] = useState({
    radius: 500,
    numberOfScooters: 10,
    lat: 1.3607474,
    lng: 103.7986503
  })
  //Scooters state which is an array of the scooters found
  const [scooters, setScooters] = useState([]);
  //Map state to store the map's current zoom levels etc.
  const [map, setMap] = useState({});

  //Submits search to API
  const handleSearch = async () => {
    let scooters = await getScooters(search);
    setScooters(scooters.data.objects);
  }

  //Handles changing of the lat and lng when clicking on a point in the map.
  const handleMapClick = (map) => {
    setSearch({...search, lng: map.lng, lat: map.lat});
  }

  //Handles the field changes in the Search Component
  const handleFieldChange = (field, value) => {
    setSearch({...search, [field]: value});
  }

  return (
    <div>
      <Search
        {...search}
        handleSearch={handleSearch}
        handleFieldChange={handleFieldChange}
      />
      <Map
        onMapClick={handleMapClick}
        onChange={setMap}
        scooters={scooters}
        circleCenter={{lng: search.lng, lat: search.lat}}
        radius={search.radius}
        mapState={map}
      />  
    </div>
  );
};