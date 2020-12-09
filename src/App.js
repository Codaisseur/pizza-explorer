import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PizzaList from "./components/PizzaList/PizzaList";
import AddPizzaForm from "./components/AddPizzaForm";
import UserFavs from "./components/UserFavourites";
import PizzaExplorer from "./components/PizzaExplorer";

function App() {
  return (
    <div className='App'>
      <PizzaList />
      <AddPizzaForm />
      <UserFavs />
      <PizzaExplorer />
    </div>
  );
}

export default App;
