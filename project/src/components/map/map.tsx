import { Offer } from '../../types/offer';
import React, {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

type MapProps = {
  offers: Offer[];
}

function Map({offers}: MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);
  useEffect(() => {
    if (map) {
      offers.forEach((item) => {
        leaflet
          .marker({
            lat: +item.mapCoordinates[0],
            lng: +item.mapCoordinates[1],
          }, {
            // icon: defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, offers]);
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
