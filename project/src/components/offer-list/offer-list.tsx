import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import ClipLoader from 'react-spinners/ClipLoader';


type OfferListProps = {
  onListItemHover?: (listItemName: string) => void;
}

function OfferList({onListItemHover}: OfferListProps) : JSX.Element {
  const {loadedOffers, isLoading} = useAppSelector((state) => state);
  if (isLoading) {
    return <ClipLoader/>;
  }


  return (
    <div className="cities__places-list places__list tabs__content">
      {
        loadedOffers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} onListItemHover={onListItemHover} />)
      }
    </div>
  );
}

export default OfferList;
