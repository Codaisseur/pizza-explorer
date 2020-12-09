// src/components/AddPizzaForm.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizzaAction } from "../store/pizzas/actions";

export default function AddPizzaForm() {
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");

  const dispatch = useDispatch();

  // steps to add a pizza:
  // 0. Set up the form -  DONE
  // 1. Set up an action and dispatch it.
  // 2. Set case in pizza reducer to handle this.

  const submit = event => {
    event.preventDefault();
    const action = addPizzaAction(name, description); // { type: 'ADD_PIZZA', payload: {...} }
    dispatch(action);
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type='text'
            value={name}
            onChange={e => set_name(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type='text'
            value={description}
            onChange={e => set_description(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type='submit'>Add this pizza!</button>
      </p>
    </form>
  );
}
