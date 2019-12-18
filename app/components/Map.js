import GoogleMapReact from 'google-map-react';
import { meters2ScreenPixels } from 'google-map-react/utils'

const Scooter = () => {
  return (
    <div style={{
      height: '15px',
      width: '15px',
      border: '2px solid #4D1FFF',
      borderRadius: '50%',
      backgroundColor: 'white',
      padding: '5px'
    }}>
      <img style={{
        height: '100%',
        width: '100%',
        border: 'white',
      }} src='https://img.icons8.com/ios-glyphs/30/000000/kick-scooter.png' />
    </div>
  );
}

const Radius = (props) => {
  return (
    <div style={{
      width: props.width,
      height: props.height,
      borderRadius: '50%',
      border: '2px solid #000000',
      opacity: 0.2,
      backgroundColor: '#AAAAAA',
      display: 'inline-block',
      position: 'relative',
      bottom: props.height/2,
      right: props.width/2,
    }}>

    </div>
  )
  
}

export const Map = (props) => {
  const defaultProps = {
    center: {
      lat: 1.3607474,
      lng: 103.7986503
    },
    zoom: 10
  };

  const { w, h } = meters2ScreenPixels(props.radius*2, props.circleCenter, props.mapState.zoom)
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCo97i2qxMBu1KhHqQ7H7E13xYbDIkVQJ4' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={props.onMapClick}
        onChange={props.onChange}
      >
        {props.scooters.map((scooter) => {
          return <Scooter lat={scooter.object.coordinates[1]} lng={scooter.object.coordinates[0]}/>
        })}
        <Radius 
          lat={props.circleCenter.lat}
          lng={props.circleCenter.lng}
          width={w}
          height={h}
        />
      </GoogleMapReact>
    </div>
  );
}