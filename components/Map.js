import GoogleMapReact from 'google-map-react';

const Scooter = ({ text }) => {
  return (
    <div style={{
      height: "10px",
      width: "10px",
      border: "1px solid black",
    }}>
      <img src="https://img.icons8.com/ios-glyphs/30/000000/kick-scooter.png" />
    </div>
  );
}

export const Map = (props) => {
  const defaultProps = {
    center: {
      lat: 1.3607474,
      lng: 103.7986503
    },
    zoom: 10
  };

  // Important! Always set the container height explicitly
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDj2btNw6ysoYKUb68lFis1Zrj1gROEKaU" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <Scooter
          lat={1.3607474}
          lng={103.7986503}
        />
      </GoogleMapReact>
    </div>
  );
}