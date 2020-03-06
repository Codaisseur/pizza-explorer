import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectUser = reduxState => {
  return reduxState.user;
};

const selectPizzas = reduxState => {
  return reduxState.pizzas.slice().sort((a, b) => {
    return b.bought - a.bought;
  });
};

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your {pizzas.length}{" "}
        favorite pizzas:
      </p>
      <ul>
        {pizzas.map(pizza => {
          const toggle = () => {
            dispatch({
              type: "TOGGLE_FAVORITE_PIZZA",
              payload: pizza.id
            });
          };

          return (
            <li key={pizza.id}>
              <strong>{pizza.name}</strong> ({pizza.description}){" "}
              <button onClick={toggle}>
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              <br />
              <em>Bought {pizza.bought} times</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
