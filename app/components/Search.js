export const Search = (props) => {
  return (
    <div style={{margin: '20px'}}>
      <b>No. of Scooters</b><br/>
      <input 
        placeholder='Enter No. of Scooters' 
        name='numberOfScooters'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.numberOfScooters}
      />
      <br/>
      <b>Radius in Meters</b><br/>
      <input 
        placeholder='Enter Radius in Meters'
        name='radius'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.radius}
      />
      <br/>
      <b>Latitude</b><br/>
      <input 
        placeholder='Enter Latitude'
        name='lat'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.lat}
      />
      <br/>
      <b>Longitude</b><br/>
      <input 
        placeholder='Enter Longitude'
        name='lng'
        onChange={(e) => props.handleFieldChange(e.target.name, e.target.value)}
        value={props.lng}
      />
      <br/>
      <button 
        style={{
          backgroundColor: 'white', 
          border: '1px solid black',
          width: '100%',
          marginTop: 10,
          padding: 5
        }} 
        onClick={props.handleSearch}
      >
        Search
      </button>
    </div>
  );
}