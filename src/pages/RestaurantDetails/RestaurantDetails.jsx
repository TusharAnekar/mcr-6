import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./restaurantDetails.css";
import { CuisineContext } from "../../contexts/cuisine-context";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export function RestaurantDetails() {
  const navigate = useNavigate();
  const {
    cuisineState: { restaurant },
  } = useContext(CuisineContext);
  const { name, address, menu, averageRating, ratings } = restaurant;

  return (
    <div className="restaurant_page">
      <ArrowBackIcon onClick={() => navigate("/")} />
      <div className="restaurant_details_container">
        <div>
          <h1>{name}</h1>
          <div className="menu_container">
            {menu.map(({ name }, index) => (
              <p key={index}>{name}</p>
            ))}
          </div>
          <p>{address}</p>
          <p>Average Rating: {averageRating}</p>
        </div>
        <button>Add Review</button>
      </div>

      <div>
        <h2>Reviews</h2>
        <div>
          {ratings.map(({ rating, comment, revName, pp }, index) => (
            <div key={index} className="rating_container">
              <div>
                <div className="img_name_container">
                  <img src={pp} alt={revName} />
                  <p>{revName}</p>
                </div>
                <p>{comment}</p>
              </div>
              <p>{rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
