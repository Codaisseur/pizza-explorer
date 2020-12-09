import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getAllPizzas, getPizzaById } from "../store/pizzas/selectors";

export default function PizzaExplorer() {
  const allPizzas = useSelector(getAllPizzas);
  const [selectedId, setSelected] = useState(allPizzas[0].id);

  const selectedPizza = useSelector(getPizzaById(selectedId));
  // display a list of the user's favourite pizzas.
  // array with user's favs. => userReducer.
  // and the pizza information. => pizzaReducer.
  console.log("selected", selectedId);
  return (
    <div>
      <h2>User favs</h2>
      <select
        value={selectedId}
        onChange={e => setSelected(parseInt(e.target.value))}
      >
        {allPizzas.map(p => (
          <option value={p.id} key={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <div>
        <h2>{selectedPizza.name}</h2>
        <h2>{selectedPizza.description}</h2>
      </div>
    </div>
  );
}
