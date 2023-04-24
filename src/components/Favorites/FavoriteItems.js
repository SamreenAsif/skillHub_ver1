
import { Star, StarHalf } from "@mui/icons-material";
import "./Favorites.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

function FavoriteItem(props) {
  const [isClicked, setIsClicked] = useState(false);
  const [heartIcon, setHeartIcon] = useState(solidHeart);

  const handleAddToCart = () => {
    setIsClicked(true);
    props.handleAddToCart(props.result);
  };


  const removeFromFavorites= ()=>{
    setHeartIcon(regularHeart);
    props.unFavorite();
  }

  return (
    <>
      {props.result && (
        <div className="course-container">
          <div key={props.result.title} className="search-card">
            <div className="course-img-wrapper">
              <img src={props.result.imgUrl} alt="" className="course-img" />
              <button
                className="hovered-button"
                onClick={handleAddToCart}
                disabled={isClicked}
              >
                {isClicked ? "Added" : "Add To Cart"}
              </button>
              <div className="course-text-wrapper">
                <h2>{props.result.title}</h2>
                <p>Instructor: {props.result.instructor}</p>
                <p>Duration: {props.result.duration}</p>
                <p>Rating: {props.result.rating}</p>
                <div id="search-card-price-flex">
                  <span className="course-price">Price: {props.result.price}</span>
                  <span id="search-card-heart-icon" onClick={()=>removeFromFavorites()}>
               
                    <FontAwesomeIcon icon={heartIcon} />
                  </span>
                </div>
              </div>
            </div>
            <div className="course-img-wrapper">
              {/* <img src={item.img} alt={item.title} className="course-img" /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FavoriteItem;
