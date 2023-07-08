export const initialCuisineState = {
  cuisine: [],
  restaurants: [],
  restaurant: {},
};

export const cuisineReducer = (state, { type, payload }) => {
  switch (type) {
    case "DISPLAY_CUISINE":
      return { ...state, cuisine: payload };
      case "DISPLAY_RESTAURANTS":
        return { ...state, restaurants: payload };
        case "DISPLAY_RESTAURANT":
          return { ...state, restaurant: payload };
          case "ADD_REVIEW":
          return { ...state, restaurant: payload };
    default:
      return state;
  }
};
