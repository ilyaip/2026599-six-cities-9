import {useEffect, useState, MutableRefObject} from 'react';
import leaflet from 'leaflet';
import {Map, TileLayer} from 'leaflet';
import { City } from '../types/offer';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City | undefined): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: city?.location.latitude || 123,
          lng: city?.location.longitude || 12321,
        },
        zoom: city?.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );

      instance.addLayer(layer);

      setMap(instance);
    } else if (mapRef.current !== null && map !== null && city !== undefined) {
      map.flyTo([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [city, mapRef, map]);

  return map;
}

export default useMap;
