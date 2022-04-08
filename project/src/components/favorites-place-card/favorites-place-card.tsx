import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { ratingCalculation } from '../../const';
type FavoritesPlaceCardProps = {
  offer: Offer;
}

function FavoritesPlaceCard({offer}: FavoritesPlaceCardProps) : JSX.Element {

  return (
    <article className="cities__place-card place-card">
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>premium</span>
        </div>
        : null}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingCalculation(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritesPlaceCard;
