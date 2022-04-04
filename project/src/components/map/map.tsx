import { Offer } from '../../types/offer';
import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';
import { useAppSelector } from '../../hooks';

type MapProps = {
  selectedPoint?: Offer
}

const URL_MARKER_DEFAULT = '../../../img/pin.svg';

const URL_MARKER_CURRENT = '../../../img/pin-active.svg';


function Map({selectedPoint}: MapProps) : JSX.Element {
  const { loadedOffers, activeCity} = useAppSelector((state) => state);

  const mapRef = useRef(null);
  const map = useMap(mapRef, loadedOffers[0].city);

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
      loadedOffers.forEach((item: Offer) => {
        const marker = new Marker({
          lat: +item.location.latitude,
          lng: +item.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== undefined && item.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, activeCity, selectedPoint]);
  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

export default Map;
