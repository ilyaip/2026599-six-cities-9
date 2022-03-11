import {useState, ChangeEvent, Fragment} from 'react';
import { nanoid } from 'nanoid';

const RATING_STARS = [5, 4, 3, 2, 1];

function CommentForm() : JSX.Element {
  const [userComment, setUserComment] = useState({
    userRating: '',
    desc: '',
  });

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          RATING_STARS.map((rating) =>
            (
              <Fragment key={nanoid(5)}>
                <input className="form__rating-input visually-hidden" checked={rating === Number(userComment.userRating)} name="rating" value={rating} id={`${rating}-stars`} type="radio"
                  onChange={({target}: ChangeEvent<HTMLInputElement>) => {
                    setUserComment({
                      ...userComment,
                      userRating: target.value,
                    });
                  }}
                />
                <label htmlFor={`${rating}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </Fragment>
            ),
          )
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={({target}: ChangeEvent<HTMLTextAreaElement>) => {
          setUserComment({
            ...userComment,
            desc: target.value,
          });
        }}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
