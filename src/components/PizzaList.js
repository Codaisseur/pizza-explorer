import React from "react";
import { useSelector } from "react-redux";

const selectUser = reduxState => {
  return reduxState.user;
};

const selectPizzas = reduxState => {
  return reduxState.pizzas.slice().sort((a, b) => {
    return b.bought - a.bought;
  });
};

export default function PizzaList() {
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
          return (
            <li key={pizza.id}>
              <strong>{pizza.name}</strong> ({pizza.description})<br />
              <em>Bought {pizza.bought} times</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
