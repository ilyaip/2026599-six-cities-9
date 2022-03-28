import { Offer } from '../../types/offer';
import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

type MapProps = {
  offers: Offer[];
  selectedPoint?: Offer
}

const URL_MARKER_DEFAULT = '../../../img/pin.svg';

const URL_MARKER_CURRENT = '../../../img/pin-active.svg';


function Map({offers, selectedPoint}: MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers[0]);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = new Icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      offers.forEach((item) => {
        const marker = new Marker({
          lat: +item.mapCoordinates[0],
          lng: +item.mapCoordinates[1],
        });
        marker
          .setIcon(
            selectedPoint !== undefined && item.title === selectedPoint.title
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
