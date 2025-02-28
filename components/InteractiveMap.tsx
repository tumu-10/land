"use client";
import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const InteractiveMap: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    // Prevent duplicate map initialization
    if (mapRef.current) {
      mapRef.current.invalidateSize();
      return;
    }

    // Office coordinates based on plus code "9HWV+49J, Kyanja Rd, Kampala"
    const officeCoordinates: [number, number] = [0.3477, 32.6074];

    // Initialize the map centered on the office location
    mapRef.current = L.map(mapContainerRef.current, {
      center: officeCoordinates,
      zoom: 16, // Adjust zoom level for a closer view
      layers: [
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>',
        }),
      ],
    });

    // Add a pinned marker for the office location that always remains on the map
    const officeMarker = L.marker(officeCoordinates, {
      title: "Our Office",
      riseOnHover: true,
      draggable: false, // Ensure the marker cannot be moved
    }).addTo(mapRef.current);
    
    // Bind a popup and open it immediately
    officeMarker.bindPopup("Our Office: Kyanja Mall, Kampala").openPopup();

    // Cleanup function to remove the map on component unmount
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={mapContainerRef} style={{ height: "400px", width: "100%" }} />;
};

export default InteractiveMap;
