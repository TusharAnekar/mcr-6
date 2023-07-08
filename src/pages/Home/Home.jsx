import { useContext } from "react";

import "./home.css"
import { CuisineContext } from "../../contexts/cuisine-context";

export function Home() {
  const {
    cuisineState: { cuisine, restaurants },
    handleCuisineButton, handleRestaurantSelection
  } = useContext(CuisineContext);

  return (
    <>
      <h1>Food Ordering App</h1>
      <h2>Select Your Cuisine</h2>

      <div>
        {cuisine.map(({ id, name }) => (
          <button key={id} onClick={() => handleCuisineButton(id)}>
            {name}
          </button>
        ))}
      </div>

      <div>
        {restaurants.map(({ id, name, menu }) => (
          <div key={id}>
            <h3 onClick={() => handleRestaurantSelection(id)}>Dishes by {name}</h3>
            <div className="menu_container">
              {menu.map(({ name, imgSrc, price, qty }, index) => (
                <div key={index} className="item_container">
                  <img src={imgSrc} alt={name} />
                  <h4>{name}</h4>
                  <p>
                    Rs. {price} for {qty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
