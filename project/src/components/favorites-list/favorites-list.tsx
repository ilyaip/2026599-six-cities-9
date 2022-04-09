import { Offer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ClipLoader from 'react-spinners/ClipLoader';
import FavoritesPlaceCard from '../favorites-place-card/favorites-place-card';
import { useEffect, useState } from 'react';
import { fetchFavoriteOffersAction } from '../../store/api-actions';


function FavoritesList() : JSX.Element {
  const {favorites } = useAppSelector(({DATA}) => DATA);

  const dispatch = useAppDispatch();

  const [isLoading, setLoading ] = useState(true);

  let citiesList:string[] =[];
  favorites.forEach((item) => {
    citiesList.push(item.city.name);
  });
  citiesList = Array.from(new Set(citiesList));

  useEffect(() => {
    (async()=> await dispatch(fetchFavoriteOffersAction()))().finally(() => setLoading(false));
  }, [dispatch]);


  if (isLoading) {
    return <ClipLoader/>;
  }
  return (
    <ul className="favorites__list">
      {
        citiesList.map((city: string) =>
          (
            <li key={city} className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <button style={{border: 'none'}} className="locations__item-link">
                    <span>{city}</span>
                  </button>
                </div>
              </div>
              <div className="favorites__places">
                {
                  favorites.filter((item) => item.city.name === city).map((offer: Offer) => <FavoritesPlaceCard key={offer.id} offer={offer} />)
                }
              </div>
            </li>
          ),
        )
      }
    </ul>
  );
}

export default FavoritesList;
