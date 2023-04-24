import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const StarRating = ({ value }) => {
  const renderStar = (i) => {
    const ratingValue = i + 1;
    const filledStars = Math.floor(value);
    const hasHalfStar = value - filledStars >= 0.5 && ratingValue === filledStars + 1;
    const isFilled = ratingValue <= filledStars || hasHalfStar;
  
    return (
      <label key={i}>
        <input type="radio" name="rating" value={ratingValue} checked={ratingValue === Math.ceil(value)} onChange={() => {}} />
        {hasHalfStar ? (
          <FaStarHalfAlt className="star" color="#ffc107" />
        ) : (
          <FaStar className="star" color={isFilled ? "#ffc107" : "#e4e5e9"} />
        )}
      </label>
    );
  };
  
  return (
    <div>
      {[...Array(5)].map((_, i) => renderStar(i))}

      <style jsx>{`
        input[type="radio"] {
          display: none;
        }
        label {
          cursor: pointer;
        }
        label:hover,
        label:hover ~ label {
          color: #ffc107;
        }
      `}</style>
    </div>
  );
};

export default StarRating;
