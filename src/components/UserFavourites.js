import React from "react";
import { useSelector } from "react-redux";
import { userFavoritePizzas } from "../store/selectors";

export default function UserFavs() {
  const userPizzas = useSelector(userFavoritePizzas);
  // display a list of the user's favourite pizzas.
  // array with user's favs. => userReducer.
  // and the pizza information. => pizzaReducer.
  return (
    <div>
      <h2>User favs</h2>
      <div>
        {userPizzas.map(p => (
          <h2 key={p.id}>{p.name}</h2>
        ))}
      </div>
    </div>
  );
}
