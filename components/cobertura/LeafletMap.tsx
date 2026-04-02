"use client";

import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix ícone padrão do Leaflet no Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

const activeIcon = new L.DivIcon({
  html: `<div style="
    width:36px;height:36px;
    background:linear-gradient(135deg,#F06A00,#FF8C2A);
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    border:3px solid #fff;
    box-shadow:0 4px 12px rgba(240,106,0,0.6);
  "></div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
  className: "",
});

const soonIcon = new L.DivIcon({
  html: `<div style="
    width:36px;height:36px;
    background:linear-gradient(135deg,#0D4C8B,#1565C0);
    border-radius:50% 50% 50% 0;
    transform:rotate(-45deg);
    border:3px solid #fff;
    box-shadow:0 4px 12px rgba(13,76,139,0.6);
  "></div>`,
  iconSize: [36, 36],
  iconAnchor: [18, 36],
  popupAnchor: [0, -36],
  className: "",
});

const cities = [
  {
    name: "Itatira",
    lat: -4.5394,
    lng: -39.6197,
    status: "active",
    desc: "Atendimento completo com fibra óptica",
  },
  {
    name: "Caiçara",
    lat: -4.3114,
    lng: -39.4508,
    status: "active",
    desc: "Distrito de Canindé — atendimento completo com fibra óptica",
  },
  {
    name: "Canindé",
    lat: -4.3556,
    lng: -39.3139,
    status: "soon",
    desc: "Em breve na sua cidade!",
  },
];


export default function LeafletMap() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.07)] shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
      <MapContainer
        center={[-4.5, -39.55]}
        zoom={10}
        style={{ height: "500px", width: "100%" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>'
        />

        {cities.map((city) => (
          <div key={city.name}>
            <Circle
              center={[city.lat, city.lng]}
              radius={city.status === "active" ? 8000 : 6000}
              pathOptions={{
                color:       city.status === "active" ? "#F06A00" : "#1565C0",
                fillColor:   city.status === "active" ? "#F06A00" : "#1565C0",
                fillOpacity: city.status === "active" ? 0.15      : 0.1,
                weight:      2,
                dashArray:   city.status === "soon" ? "6 4" : undefined,
              }}
            />
            <Marker
              position={[city.lat, city.lng]}
              icon={city.status === "active" ? activeIcon : soonIcon}
            >
              <Popup>
                <div style={{ fontFamily: "Inter, sans-serif", minWidth: "160px" }}>
                  <div
                    style={{
                      background:
                        city.status === "active"
                          ? "linear-gradient(135deg,#F06A00,#FF8C2A)"
                          : "linear-gradient(135deg,#0D4C8B,#1565C0)",
                      color: "#fff",
                      padding: "8px 12px",
                      borderRadius: "8px 8px 0 0",
                      fontWeight: 700,
                      fontSize: "14px",
                    }}
                  >
                    📍 {city.name}
                  </div>
                  <div
                    style={{
                      padding: "10px 12px",
                      background: "#1e293b",
                      borderRadius: "0 0 8px 8px",
                    }}
                  >
                    <p style={{ color: "#e2e8f0", fontSize: "13px", margin: 0 }}>
                      {city.desc}
                    </p>
                    <span
                      style={{
                        display: "inline-block",
                        marginTop: "8px",
                        padding: "2px 10px",
                        borderRadius: "20px",
                        fontSize: "11px",
                        fontWeight: 700,
                        background:
                          city.status === "active"
                            ? "rgba(240,106,0,0.2)"
                            : "rgba(13,76,139,0.3)",
                        color:
                          city.status === "active" ? "#F06A00" : "#60A5FA",
                      }}
                    >
                      {city.status === "active" ? "✅ Disponível" : "🔵 Em breve"}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          </div>
        ))}
      </MapContainer>
    </div>
  );
}
