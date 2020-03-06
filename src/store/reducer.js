// src/store/reducer.js
const initialState = {
  user: {
    name: "Helva"
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margarita",
      description: "Minimalism is key!",
      bought: 5
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description: "Like Margarita, but without the basil.",
      bought: 2
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description: "Did somebody say oil?",
      bought: 10
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
}
