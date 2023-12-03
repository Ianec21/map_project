"use client";

import { LoadScript, GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
export const dynamic = 'force-dynamic';

type TCountry = {
    id: string;
    name: string;
    color: string;
    lat: number;
    lng: number;
    user_id: string;
}

const center = {
    lat: 15,
    lng: 15,
}

const GoogleMaps = ({
    countries
}: { countries: any | [] }) => {

    const [selectedCountry, setSelectedCountry] = useState<TCountry | null>(null);

    return (
        <div className="grow">
            <LoadScript googleMapsApiKey="AIzaSyBCbmUdTQJOxiTSU5WqjCSRLZs0YII-SNY">
                <GoogleMap
                    mapContainerClassName="w-[100%] h-[100%]"
                    center={center}
                    zoom={3}
                >
                    {countries && countries.length > 0 && countries.map((country: TCountry) => <Marker
                        key={`marker_${country.id}`}
                        position={
                            {
                                lat: country.lat,
                                lng: country.lng
                            }
                        }
                        title={country.name}
                        icon={{
                            path: 'M10 0C4.48 0 0 4.48 0 10s10 22 10 22 10-17.52 10-22S15.52 0 10 0zm0 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
                            fillColor: `${country.color}`,
                            fillOpacity: 1,
                            strokeColor: 'black',
                            strokeWeight: 1,
                            scale: 1,
                          }}
                        onClick={() => setSelectedCountry(country)}
                        />
                    )}

                    {selectedCountry 
                        && 
                    <InfoWindow
                        position={{
                            lat: selectedCountry.lat,
                            lng: selectedCountry.lng,
                        }}
                        onCloseClick={() => setSelectedCountry(null)}
                    >
                        <div>
                            <h3>{selectedCountry.name}</h3>
                            <p>Created by {selectedCountry.user_id}</p>
                        </div>
                    </InfoWindow>}
                </GoogleMap>
            </LoadScript>
        </div>
    )
}

export default GoogleMaps;