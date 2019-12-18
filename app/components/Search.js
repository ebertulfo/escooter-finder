export const Search = (props) => {
  return (
    <div style={{marginBottom: '20px'}}>
      <input 
        placeholder='Enter No. of Scooters' 
        name='numberOfScooters'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.numberOfScooters}
      />
      <input 
        placeholder='Enter Radius in KM'
        name='radius'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.radius}
      />
      <input 
        placeholder='Enter Latitude'
        name='lat'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.lat}
      />
      <input 
        placeholder='Enter Longitude'
        name='lng'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.lng}
      />
      <button onClick={props.handleSearch}>Search</button>
    </div>
  );
}