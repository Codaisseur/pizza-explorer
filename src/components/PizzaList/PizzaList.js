import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPizzas } from "../../store/pizzas/selectors";
import "./PizzaList.scss";

export default function PizzaList() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const pizzas = useSelector(getAllPizzas);
  console.log(pizzas);
  const user = { favorites: [], name: "" };

  return (
    <div className='PizzaList'>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! You have{" "}
        {user.favorites.length} favorite pizzas:
      </p>
      <ul className='Pizzas'>
        {pizzas.map(pizza => {
          const toggle = () => {
            dispatch({
              type: "TOGGLE_FAVORITE_PIZZA",
              payload: pizza.id,
            });
          };

          return (
            <li
              key={pizza.id}
              className='Pizza'
              style={{ backgroundImage: `url(${pizza.image})` }}
            >
              <button
                onClick={toggle}
                className={`FavToggle ${
                  user.favorites.includes(pizza.id) ? "fav" : ""
                }`}
              >
                {user.favorites.includes(pizza.id) ? "♥" : "♡"}
              </button>
              <div className='Overlay'>
                <strong>{pizza.name}</strong> ({pizza.description}) <br />
                <em>Bought {pizza.bought} times</em>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
