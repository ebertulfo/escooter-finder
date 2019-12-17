export const Search = (props) => {
  return (
    <div>
      <input 
        placeholder="Enter No. of Scooters" 
        onChange={(e) => props.setNumberOfScooters(e.target.value)}
        value={props.numberOfScooters}
      />
      <input 
        placeholder="Enter Radius in KM"
        onChange={(e) => props.setRadius(e.target.value)}
        value={props.radius}
      />
      <input 
        placeholder="Enter Latitude"
        onChange={(e) => props.setLatitude(e.target.value)}
        value={props.latitude}
      />
      <input 
        placeholder="Enter Longitude"
        onChange={(e) => props.setLongitude(e.target.value)}
        value={props.longitude}
      />

    </div>
  );
}