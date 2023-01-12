import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import style from "../../styles/Home.module.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  CircleMarker,
} from "react-leaflet";
import { polyline } from "leaflet";

export default function Map() {
  const position = [49.28524524981317, -123.11434751643503];

  const polyline = [
    [49.28524524981317, -123.11434751643503, "Waterfront"],
    [49.285581150633966, -123.12012245876285, "Burrard"],
    [49.28276795358473, -123.1164699145821, "Granville"],
    [49.28010484687972, -123.11012142014103, "Stadium-Chinatown"],
    [49.273374980784865, -123.10037145876296, "Main Street-Science World"],
    [49.262721001091556, -123.06927941643552, "Commercial-Broadway"],
    [49.24844626535717, -123.05598167410812, "Nanaimo"],
    [49.24436337925635, -123.04537402992739, "29th Avenue"],
    [49.23855530902799, -123.0317256145831, "Joyce-Collingwood"],
    [49.22991271599505, -123.01265107225555, "Patterson"],
    [49.22593989446889, -123.00385127225569, "Metrotown"],
    [49.220193228996386, -122.98845204229738, "Royal Oak"],
    [49.21254265709066, -122.95914504342, "Edmonds"],
    [49.200068725477024, -122.94922489130668, "22nd Street"],
    [49.20159918383558, -122.91263972992837, "New Westminster"],
    [49.204943945073374, -122.90607708574763, "Columbia"],
    [49.204575904842045, -122.87402738018886, "Scott Road"],
    [49.1991136014707, -122.85066387225632, "Gateway"],
    [49.18971392944762, -122.84792071458409, "Surrey Central"],
    [49.1829310367517, -122.84473292807587, "King George. You've reached your destination!"],
    // [49.224860238697396, -122.88949270294468, "Sapperton"],
    // [49.23268213068468, -122.88456287225554, "Braid"],
    // [49.24875892482227, -122.89717730665, "Lougheed Town Centre"],
    // [49.25367827613695, -122.91868207173422, "Production Way-University"],
  ];

  const polyline1 = [
    [49.204943945073374, -122.90607708574763, "Columbia"],
    [49.224860238697396, -122.88949270294468, "Sapperton"],
    [49.23268213068468, -122.88456287225554, "Braid"],
    [49.24875892482227, -122.89717730665, "Lougheed Town Centre"],
    [49.25367827613695, -122.91868207173422, "Production Way-University"],
  ]

  const orangeOption = { color: "orange" };
  const redOption = { color: "red" };
  const greenOption = { color: "green" };
  const blueOption = { color: "blue" };

  return (
    <MapContainer
      className={style.map}
      center={position}
      zoom={14}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {polyline.map((item) => (
        <Marker key={item[0]} position={item.slice(0, 2)}>
          <Popup>
            Skytrain. <br /> {item[2]}
          </Popup>
        </Marker>
      ))}
      {polyline1.map((item) => (
        <Marker key={item[0]} position={item.slice(0, 2)}>
          <Popup>
            Skytrain. <br /> {item[2]}
          </Popup>
        </Marker>
      ))}
      <CircleMarker
        center={[49.1829310367517, -122.84473292807587]}
        pathOptions={redOption}
        radius={20}
      />
      <CircleMarker
        center={[49.204943945073374, -122.90607708574763]}
        pathOptions={greenOption}
        radius={20}
      />
      <CircleMarker
        center={[49.25367827613695, -122.91868207173422]}
        pathOptions={blueOption}
        radius={20}
      />

      <Polyline pathOptions={orangeOption} positions={polyline} />
      <Polyline pathOptions={orangeOption} positions={polyline1} />
    </MapContainer>
  );
}
