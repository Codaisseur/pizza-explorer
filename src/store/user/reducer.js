// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
  favorites: [67283, 357311],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLE_FAVORITE": {
      // action.payload => pizzaId

      const isFavorite = state.favorites.includes(action.payload);

      if (isFavorite) {
        const updatedFavs = state.favorites.filter(id => id !== action.payload);
        return {
          ...state,
          favorites: updatedFavs,
        };
      } else {
        // not there
        return { ...state, favorites: [...state.favorites, action.payload] };
      }
    }
    default: {
      return state;
    }
  }
}
