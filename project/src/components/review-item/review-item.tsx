import { Review } from '../../types/film';

function ReviewItem({comment, user, rating, date}:Review) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">
          {comment}
        </p>
        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>
            December 24, 2016
          </time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
}

export default ReviewItem;
