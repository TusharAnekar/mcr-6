import { createContext, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import {
  cuisineReducer,
  initialCuisineState,
} from "../reducers/cuisineReducer";
import { cuisineData } from "../db/cuisineData";
import { restaurantsData } from "../db/restaurantsData";

export const CuisineContext = createContext();

export function CuisineProvider({ children }) {
  const [cuisineState, cuisineDispatch] = useReducer(
    cuisineReducer,
    initialCuisineState
  );

  const navigate = useNavigate();

  function getCuisine() {
    cuisineDispatch({ type: "DISPLAY_CUISINE", payload: cuisineData });
  }

  useEffect(() => {
    getCuisine();
  }, []);

  function handleCuisineButton(id) {
    cuisineDispatch({
      type: "DISPLAY_RESTAURANTS",
      payload: restaurantsData.filter(({ cuisine_id }) => cuisine_id === id),
    });
  }

  function handleRestaurantSelection(id) {
    cuisineDispatch({
      type: "DISPLAY_RESTAURANT",
      payload: restaurantsData.find((restaurant) => restaurant.id === id),
    });
    navigate(`/${id}`)
  }

  return (
    <CuisineContext.Provider
      value={{ cuisineState, handleCuisineButton, handleRestaurantSelection }}
    >
      {children}
    </CuisineContext.Provider>
  );
}
