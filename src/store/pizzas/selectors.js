export const getAllPizzas = reduxState => reduxState.pizzas.list;

export const getPizzaById = id => reduxState => {
  return reduxState.pizzas.list.find(p => p.id === id);
};
