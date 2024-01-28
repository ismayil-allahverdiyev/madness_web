import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";
import LocationIcon from "../../../../assets/icons/location_icon.svg"

export default function LocationComponent() {
    return <>
        <p className="text-2xl text-white pb-2">
            You wanna meet us?
        </p>
        <MapContainer center={[38.7427925, 35.4756975]} zoom={16} scrollWheelZoom={false} className="w-[95%] h-96 rounded-lg">
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            />
            <Marker position={[38.7427925, 35.4756975]} icon={new L.Icon({
                iconUrl: LocationIcon,
                iconSize: [40, 40]
            })} />
        </MapContainer>
    </>
}