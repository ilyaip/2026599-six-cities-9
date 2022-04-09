import { Offer } from '../../types/offer';
import { Link } from 'react-router-dom';
import { ratingCalculation } from '../../const';
import { fetchFavoriteOffersAction, fetchToggleFavoriteAction } from '../../store/api-actions';
import { useAppDispatch } from '../../hooks';
type FavoritesPlaceCardProps = {
  offer: Offer;
}

function FavoritesPlaceCard({offer}: FavoritesPlaceCardProps) : JSX.Element {
  const dispatch = useAppDispatch();

  const addFavoriteHandler = async (curOffer: Offer) => {
    const status = 0;

    await dispatch(fetchToggleFavoriteAction({hotelId: String(curOffer.id) , status}));
    dispatch(fetchFavoriteOffersAction());
  };

  return (
    <article className="favorites__card place-card">
      {offer.isPremium ?
        <div className="place-card__mark">
          <span>premium</span>
        </div>
        : null}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to="#">
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button onClick={() => addFavoriteHandler(offer)} className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
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
