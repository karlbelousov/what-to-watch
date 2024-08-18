import { Review } from '../../types/film';
import ReviewItem from '../review-item/review-item';

type ReviewsProps = {
  reviews: Review[];
}

function Reviews({reviews}:ReviewsProps) {
  const index = Math.ceil(reviews.length / 2);

  return (
    <div className="film-card__reviews film-card__row">
      {reviews.length > 0 ? (
        <>
          <div className="film-card__reviews-col">
            {reviews.slice(0, index).map((review) => (
              <ReviewItem {...review} key={review.user.id} />
            ))}
          </div>
          <div className="film-card__reviews-col">
            {reviews.slice(index).map((review) => (
              <ReviewItem {...review} key={review.user.id} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Reviews;
