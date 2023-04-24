import { createContext, useReducer } from 'react';

const RatingContext = createContext();

const ratingReducer = (state, action) => {
  switch (action.type) {
    case 'SET_RATING':
      return { rating: action.rating };
    default:
      return state;
  }
};

const RatingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ratingReducer, { rating: 0 });

  return (
    <RatingContext.Provider value={{ state, dispatch }}>
      {children}
    </RatingContext.Provider>
  );
};

export { RatingContext, RatingProvider };
