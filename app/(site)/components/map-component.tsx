"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
  borderRadius: "20px",
};

const center = {
  lat: 40.719,
  lng: -73.85,
};

export default function CustomMap() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
        options={{
          zoomControl: true,
          disableDefaultUI: true,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}
