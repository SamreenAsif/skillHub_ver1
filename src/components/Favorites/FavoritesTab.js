import React, { useState } from "react";
import FavoriteItem from "./FavoriteItems";
const FavoritesTab = (props) => {
  const [favItems, setfavItems] = useState(props.wishListContent);
  const removeItem = (index) => {
    setfavItems(favItems.filter((_, i) => i !== index));
  };
  return (
    <>
      <div className="search-result-container">
        {/* <div className="fav-content"> */}
        {favItems.map((course, index) => (
          <FavoriteItem
            key={course.id}
            result={course}
            handleAddToCart={props.handleAddToCart}
            handleAddToWishList={props.handleAddToWishList}
            unFavorite={() => removeItem(index)}
          />
        ))}
      </div>
    </>
  );
};

export default FavoritesTab;
