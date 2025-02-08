
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize map with a temporary token - in production, this should be handled securely
    mapboxgl.accessToken = 'ENTER_YOUR_MAPBOX_TOKEN_HERE';
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // Default location
      zoom: 13
    });

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <div className="w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
