// { type, payload }

export const addPizzaAction = (name, description) => {
  return {
    type: "ADD_PIZZA",
    payload: { name, description },
  };
};
