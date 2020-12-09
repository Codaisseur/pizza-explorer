// src/store/reducer.js
const initialState = {
  list: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://imgp2.schaer.com/sites/default/files/styles/header/public/2017-09/HeaderProducts_Pizza%20Margherita.jpg?itok=Fz-7_a56",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://img.static-rmg.be/a/food/image/q100/w480/h360/1087722/pizza-bianca-met-artisjok-en-mortadella.jpg",
    },
  ],
  selected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // state
      // action => payload => { name, description };
      const { name, description } = action.payload;
      const newPizza = {
        id: Math.floor(Math.random() * 10000),
        name,
        description,
        bought: 100,
        image: state.list[0].image,
      };

      return { ...state, list: [...state.list, newPizza] };
    }
    case "TOGGLE_FAVORITE_PIZZA": {
      // what data do i need to make this happen?
      const id = action.payload;

      const { favorites } = state.user;
      const isFavourite = favorites.includes(id);

      if (isFavourite) {
        const filteredFavorites = favorites.filter(pizzaId => pizzaId !== id);
        return {
          ...state,
          user: { ...state.user, favorites: filteredFavorites },
        };
      } else {
        return {
          ...state,
          user: { ...state.user, favorites: [...favorites, id] },
        };
      }
    }
    default: {
      return state;
    }
  }
}
