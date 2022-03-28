import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';

type OfferListProps = {
  offers: Offer[];
  onListItemHover?: (listItemName: string) => void;
}

function OfferList({offers, onListItemHover}: OfferListProps) : JSX.Element {
  const activeCityObj = useAppSelector((state) => state.activeCityObj);


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        activeCityObj.offers.map((offer) => <PlaceCard key={offer.id} offer={offer} onListItemHover={onListItemHover} />)
      }
    </div>
  );
}

export default OfferList;
