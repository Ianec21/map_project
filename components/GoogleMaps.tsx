"use client";

import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";

const center = {
    lat: 15,
    lng: 15,
}

const GoogleMaps = () => {
    return (
        <div className="grow">
            <LoadScript googleMapsApiKey="AIzaSyBCbmUdTQJOxiTSU5WqjCSRLZs0YII-SNY">
                <GoogleMap
                    mapContainerClassName="w-[100%] h-[100%]"
                    center={center}
                    zoom={3}
                />
            </LoadScript>
        </div>
    )
}

export default GoogleMaps;