import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default function LiveMapView() {
  const mapRef = useRef(null);

  useEffect(() => {
    const mapContainer = document.getElementById('map');

    // Prevent Leaflet from throwing if map is already initialized
    if (mapContainer && mapContainer._leaflet_id) {
      mapContainer._leaflet_id = null;
    }

    const victoriaTarlac = [15.5784, 120.6819];
    const map = L.map(mapContainer).setView(victoriaTarlac, 14);

    L.tileLayer(`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=499958bc884b4b8cae36c651db0a3d7d`, {
      attribution: 'Powered by Geoapify',
      maxZoom: 20
    }).addTo(map);

    mapRef.current = map;

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div className="map-container">
      <div id="map" style={{ height: '100%', width: '100%' }} />
      <div className="map-controls">
        <button className="map-control" title="Zoom In"><i className="fas fa-plus" /></button>
        <button className="map-control" title="Zoom Out"><i className="fas fa-minus" /></button>
        <button className="map-control" title="Locate Me"><i className="fas fa-location-arrow" /></button>
      </div>
    </div>
  );
}
