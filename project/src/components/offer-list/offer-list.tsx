import PlaceCard from '../place-card/place-card';
import { Offer } from '../../types/offer';
import { useAppSelector } from '../../hooks';
import ClipLoader from 'react-spinners/ClipLoader';
import { useParams } from 'react-router-dom';
import React from 'react';


type OfferListProps = {
  onListItemHover?: (listItemName: string) => void;
}

function OfferList({onListItemHover}: OfferListProps) : JSX.Element {
  const {loadedOffers, nearbyOffers, isLoading} = useAppSelector((state) => state);
  const params = useParams();
  const isRoomScreen = params.id;

  if (isLoading) {
    return <ClipLoader/>;
  }


  return (
    <div className={isRoomScreen ? 'near-places__list places__list' : 'cities__places-list places__list tabs__content'}>
      {isRoomScreen ?
        nearbyOffers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer}/>)
        :
        loadedOffers.map((offer: Offer) => <PlaceCard key={offer.id} offer={offer} onListItemHover={onListItemHover} />)}
    </div>
  );
}

export default React.memo(OfferList);
