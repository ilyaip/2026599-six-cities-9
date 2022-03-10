import {useParams} from 'react-router-dom';
import { Offer } from '../../types/offer';
import CommentForm from '../comment-form/comment-form';
import { Link } from 'react-router-dom';

type RoomScreenProps = {
  offers: Offer[]
}

function RoomScreen({offers} : RoomScreenProps) : JSX.Element {
  const params = useParams();
  const curId : string | undefined = params.id;
  const curOffer: Offer = offers?.filter((item) => item.id === +curId!)[0];

  // eslint-disable-next-line no-console
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to="/">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link className="header__nav-link" to="#">
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                curOffer.photosSrc.map((image) =>
                  (
                    <div key={image} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  ),
                )
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>{curOffer.premium}</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {curOffer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${+curOffer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{curOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {curOffer.roomType}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {curOffer.numberOfRooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {curOffer.numberOfGuests} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{curOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    curOffer.roomService.map((item) =>
                      (
                        <li key={item} className="property__inside-item">
                          {item}
                        </li>
                      ),
                    )
                  }
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={curOffer.host.userPhotoSrc} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {curOffer.host.userName}
                  </span>
                  <span className="property__user-status">
                    {curOffer.host.userStatus}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {curOffer.host.offerDesc}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{curOffer.reviews.length}</span></h2>
                <ul className="reviews__list">
                  {
                    curOffer.reviews.map((review) =>
                      (
                        <li key={review.userName} className="reviews__item">
                          <div className="reviews__user user">
                            <div className="reviews__avatar-wrapper user__avatar-wrapper">
                              <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar" />
                            </div>
                            <span className="reviews__user-name">
                              {review.userName}
                            </span>
                          </div>
                          <div className="reviews__info">
                            <div className="reviews__rating rating">
                              <div className="reviews__stars rating__stars">
                                <span style={{width: `${+review.userRating * 20}%`}}></span>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <p className="reviews__text">
                              {review.review}
                            </p>
                            <time className="reviews__time" dateTime="2019-04-24">{review.reviewDate}</time>
                          </div>
                        </li>
                      ),
                    )
                  }
                </ul>
                <CommentForm></CommentForm>
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <Link to="#">
                    <img className="place-card__image" src="img/room.jpg" width="260" height="200" alt="Place image" />
                  </Link>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;80</b>
                      <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                      <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                      </svg>
                      <span className="visually-hidden">In bookmarks</span>
                    </button>
                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <Link to="#">Wood and stone place</Link>
                  </h2>
                  <p className="place-card__type">Private room</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <Link to="#">
                    <img className="place-card__image" src="img/apartment-02.jpg" width="260" height="200" alt="Place image" />
                  </Link>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;132</b>
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
                      <span style={{width: '80%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <Link to="#">Canal View Prinsengracht</Link>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>

              <article className="near-places__card place-card">
                <div className="place-card__mark">
                  <span>Premium</span>
                </div>
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <Link to="#">
                    <img className="place-card__image" src="img/apartment-03.jpg" width="260" height="200" alt="Place image" />
                  </Link>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">&euro;180</b>
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
                      <span style={{width: '100%'}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <Link to="#">Nice, cozy, warm big bed apartment</Link>
                  </h2>
                  <p className="place-card__type">Apartment</p>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;

