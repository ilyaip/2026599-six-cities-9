import { Offer } from '../../types/offer';
import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';

const URL_MARKER_DEFAULT = '../../../img/pin.svg';

function RoomScreenMap() : JSX.Element {
  const { activeOffer, nearbyOffers} = useAppSelector((state) => state);

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeOffer!.city);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      nearbyOffers.forEach((item: Offer) => {
        const marker = new Marker({
          lat: +item.location.latitude,
          lng: +item.location.longitude,
        });
        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, nearbyOffers, activeOffer]);
  return (
    <section className="property__map map" ref={mapRef}></section>
  );
}

export default RoomScreenMap;