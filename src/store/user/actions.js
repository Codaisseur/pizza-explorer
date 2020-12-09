export const toggleFavorite = pizzaId => {
  return {
    type: "TOGGLE_FAVORITE",
    payload: pizzaId,
  };
};
