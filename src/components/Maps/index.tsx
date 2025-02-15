import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = { width: "100%", height: "400px" };
const center = { lat: 20.840410, lng: 105.856610 }
const KEY_MAPS = "AIzaSyBUnw1bG2R7OuM0_2ZqB_Rztnftydq26iY"

const MapsCom = ({center = { lat: 20.840410, lng: 105.856610 }}: { center: { lat: number, lng: number} }) => {
  return (
    <LoadScript googleMapsApiKey={KEY_MAPS}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapsCom;