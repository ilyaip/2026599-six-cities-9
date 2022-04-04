import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { ratingCalculation } from '../../const';
import { useAppDispatch } from '../../hooks';
import { setLoading } from '../../store/action';

type FavoritesPlaceCardProps = {
  offer: Offer;
}

function FavoritesPlaceCard({offer}: FavoritesPlaceCardProps) : JSX.Element {

  const dispatch = useAppDispatch();

  return (
    <article className="cities__place-card place-card">
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>premium</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingCalculation(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${offer.id}`} onClick={() => {dispatch(setLoading(true));}}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesPlaceCard;
