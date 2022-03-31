import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';

type OfferListProps = {
  // offers: Offer[];
  onListItemHover?: (listItemName: string) => void;
}

function OfferList({onListItemHover}: OfferListProps) : JSX.Element {
  const loadedOffers = useAppSelector((state) => state.loadedOffers);


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        loadedOffers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} onListItemHover={onListItemHover} />)
      }
    </div>
  );
}

export default OfferList;
