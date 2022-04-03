import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../header/header';
import { nanoid } from 'nanoid';
import { Navigate } from 'react-router';
import { ratingCalculation } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveOfferAction } from '../../store/api-actions';
import { useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

function RoomScreen() : JSX.Element {
  const params = useParams();
  const curId : string | undefined = params.id;

  const dispatch = useAppDispatch();

  const { activeOffer, isLoading} = useAppSelector((state) => state);

  useEffect(() => {
    (async()=> await dispatch(fetchActiveOfferAction(curId)))();
  }, []);

  if (isLoading) {
    return <ClipLoader/>;
  }

  if (!isLoading && !activeOffer) {
    return <Navigate to="*" />;
  }

  if (!activeOffer) {
    return <Navigate to="*" />;
  }

  return (
    <div className="page">
      <Header/>

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {
                activeOffer.images.map((image) =>
                  (
                    <div key={nanoid(5)} className="property__image-wrapper">
                      <img className="property__image" src={image} alt="Photo studio" />
                    </div>
                  ),
                )
              }
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {activeOffer.isPremium ?
                <div className="property__mark">
                  <span>premium</span>
                </div>
                : null}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {activeOffer.title}
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
                  <span style={{width: ratingCalculation(activeOffer.rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{activeOffer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {activeOffer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {activeOffer.bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {activeOffer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{activeOffer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {
                    activeOffer.goods.map((item) =>
                      (
                        <li key={nanoid(5)} className="property__inside-item">
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
                    <img className="property__avatar user__avatar" src={activeOffer.host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {activeOffer.host.name}
                  </span>
                  <span className="property__user-status">
                    {activeOffer.host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {activeOffer.description}
                  </p>
                </div>
              </div>
              {/* <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{curOffer.reviews.length}</span></h2>
                <ul className="reviews__list">
                  {
                    curOffer.reviews.map((review) =>
                      (
                        <li key={nanoid(5)} className="reviews__item">
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
                                <span style={{width: ratingCalculation(review.userRating)}}></span>
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
              </section> */}
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

