export const userFavoritePizzas = reduxState => {
  const userFavs = reduxState.user.favorites;
  const allPizzas = reduxState.pizzas.list;
  // userFavs.map => converting them to the actual pizza object.
  // allPizzas.filter(with user favs id);

  const favList = userFavs.map(id => {
    return allPizzas.find(p => p.id === id);
  });

  // const favList2 = allPizzas.filter(p => userFavs.includes(p.id));

  return favList;
};
