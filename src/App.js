import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import HeaderContainer from "./container/HeaderContainer";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import CartPage from "./components/YourCart/CartPage";
import Checkout from "./components/Checkout/Checkout";
import SearchCourse from "./components/SearchCourse/SearchCourse";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Account from "./components/Account/accountSettings";
// import WishList from "./components/WishList/WishList";
import FavoritesTab from "./components/Favorites/FavoritesTab";
// import Rating from "./components/Ratings/Rating";

export const CartItemContext = createContext();

function App() {
  const [coursesInCart, setCourseInCart] = useState([]);
  const [coursesInWishList, setWishList] = useState([]);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [ratings, setRatings] = useState([
    { courseId: "1", ratingValue: 4 },
    { courseId: "2", ratingValue: 5 },
    { courseId: "1", ratingValue: 3 },
    { courseId: "3", ratingValue: 2 },
  ]);
  const updateLogInStatus = (status) => {
    setLoggedIn(status);
  };
  const handleAddToCart = (course) => {
    const isAlreadyInCart = coursesInCart.find((c) => c.id === course.id);

    if (!isAlreadyInCart) {
      setCourseInCart([...coursesInCart, course]);
    }

  };

  const handleAddToWishList = (course) => {
    const isInWishList = coursesInWishList.find((c) => c.id === course.id);

    if (!isInWishList) {
      setWishList([...coursesInWishList, course]);
      // alert("Item added: " + course.title);
    }

    // alert(course.id);
  };

  const getAverageRating = (courseId) => {
    const courseRatings = ratings.filter(rating => rating.courseId === courseId);
    const ratingSum = courseRatings.reduce((sum, rating) => sum + rating.ratingValue, 0);
    return courseRatings.length > 0 ? ratingSum / courseRatings.length : 0;
  };
  return (
    <>
      <CartItemContext.Provider value={{ coursesInCart, setCourseInCart }}>
        <Navigation isLoggedIn={isLoggedIn} />

        <Routes>
          <Route index element={<HeaderContainer />} />
          <Route
            path="/login"
            element={<Login updateLogInStatus={updateLogInStatus} />}
          />
          <Route path="/Profile" element={<Profile />} />

          <Route path="/Account" element={<Account />} />
          <Route
            path="/yourcart"
            element={<CartPage cartContent={coursesInCart} />}
          />
         
          <Route
            path="/wishList"
            element={<FavoritesTab wishListContent={coursesInWishList} handleAddToCart={handleAddToCart}/>}
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/SearchResult"
            element={
              <SearchCourse
                handleAddToCart={handleAddToCart}
                handleAddToWishList={handleAddToWishList}
                getAverageRating={getAverageRating}
              />
            }
          />
        </Routes>

        <Footer />
      </CartItemContext.Provider>
    </>
  );
}

export default App;
