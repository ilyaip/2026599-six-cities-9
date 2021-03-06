import {useParams} from 'react-router-dom';
import Header from '../header/header';
import { nanoid } from 'nanoid';
import { Navigate } from 'react-router';
import { AppRoute, ratingCalculation } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchActiveOfferAction, fetchCommentsAction, fetchNearbyOffersAction, fetchToggleFavoriteAction } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import CommentForm from '../comment-form/comment-form';
import RoomScreenMap from '../room-screen-map/room-screen-map';
import OfferList from '../offer-list/offer-list';

function RoomScreen() : JSX.Element {
  const params = useParams();
  const curId : string | undefined = params.id;

  const dispatch = useAppDispatch();

  const { activeOffer, comments } = useAppSelector(({DATA}) => DATA);
  const { authorizationStatus} = useAppSelector(({USER}) => USER);

  let commentsCopy = comments.slice();
  commentsCopy = commentsCopy.sort((a, b) => b.id - a.id);
  if (commentsCopy.length > 10) {
    commentsCopy = commentsCopy.slice(0, 10);
  }

  const [isLoading, setLoading ] = useState(true);

  useEffect(() => {
    Promise.all([dispatch(fetchCommentsAction(curId)), dispatch(fetchActiveOfferAction(curId)), dispatch(fetchNearbyOffersAction(curId))]).finally( () => setLoading(false));
  }, [curId, dispatch]);

  const addFavoriteHandler = () => {
    if (authorizationStatus === 'AUTH') {
      const status = activeOffer?.isFavorite ? 0 : 1;

      dispatch(fetchToggleFavoriteAction({hotelId: curId, status}));
    } else {
      window.location.href=AppRoute.Login;
    }

  };

  if (isLoading) {
    return <ClipLoader/>;
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
                      <img className="property__image" src={image} alt="studio" />
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
                <button onClick={addFavoriteHandler} className={activeOffer.isFavorite ? 'property__bookmark-button button property__bookmark-button--active' : 'property__bookmark-button button'} type="button">
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
              {comments ?
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
                  <ul className="reviews__list">
                    {
                      commentsCopy.map((comment) =>
                        (
                          <li key={comment.id} className="reviews__item">
                            <div className="reviews__user user">
                              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                                <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                              </div>
                              <span className="reviews__user-name">
                                {comment.user.name}
                              </span>
                            </div>
                            <div className="reviews__info">
                              <div className="reviews__rating rating">
                                <div className="reviews__stars rating__stars">
                                  <span style={{width: ratingCalculation(comment.rating)}}></span>
                                  <span className="visually-hidden">Rating</span>
                                </div>
                              </div>
                              <p className="reviews__text">
                                {comment.comment}
                              </p>
                              <time className="reviews__time" dateTime="2019-04-24">{comment.date}</time>
                            </div>
                          </li>
                        ),
                      )
                    }
                  </ul>
                  {authorizationStatus === 'AUTH' ?
                    <CommentForm/>
                    : ''}
                </section>
                : ''}
            </div>
          </div>
          <RoomScreenMap/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default RoomScreen;

