import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ClipLoader from 'react-spinners/ClipLoader';
import FavoritesPlaceCard from '../favorites-place-card/favorites-place-card';
import { useEffect } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';


function FavoritesList() : JSX.Element {
  const {favorites, isLoading} = useAppSelector((state) => state);

  const dispatch = useAppDispatch();


  useEffect(() => {
    (async()=> await dispatch(fetchFavoriteOffersAction()))();
  }, []);

  // eslint-disable-next-line no-console
  console.log('favorites: ', favorites);


  if (isLoading) {
    return <ClipLoader/>;
  }
  return (
    <div className="cities__places-list places__list tabs__content">
      {
        favorites.map((offer: Offer) => <FavoritesPlaceCard key={offer.id} offer={offer} />)
      }
    </div>
  );
}

export default FavoritesList;
