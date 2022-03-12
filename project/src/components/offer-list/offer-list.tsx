import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
}

function OfferList({offers}: OfferListProps) : JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => <PlaceCard key={offer.id} offer={offer} />)
      }
    </div>
  );
}

export default OfferList;
