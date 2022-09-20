import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

const locationIcon = new Icon({
    iconUrl: '/icon-location.svg',
    iconSize: [30, 35]
})

export default function Map({ location }) {
    const { lat, lng, region } = location;
    const center = [lat, lng]; // latitude and longitude of the ip address
    return (
        <>
            <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center} icon={locationIcon}>
                    <Popup>
                        {region}
                    </Popup>
                </Marker>
            </MapContainer>
        </>
    )
}