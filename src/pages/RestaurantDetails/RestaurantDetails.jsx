import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./restaurantDetails.css";
import { CuisineContext } from "../../contexts/cuisine-context";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export function RestaurantDetails() {
  const [showModal, setShowModal] = useState(false);
  const [review, setReview] = useState({
    revName: "Tushar",
    pp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5tbKdv1HDbAjPc526SK0yDZuoOmaaOyGNoj_e1q3ngruK2bTqzub3&s=0",
    rating: 0,
    comment: "",
  });
  const navigate = useNavigate();
  const {
    cuisineState: { restaurant },
    addReview,
  } = useContext(CuisineContext);
  const { id, name, address, menu, averageRating, ratings } = restaurant;

  function handleInput(e) {
    setReview({ ...review, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addReview(id, review);
    setShowModal(false);
  }

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
        <button onClick={() => setShowModal(true)}>Add Review</button>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(false)} center>
        <h3>Add your review</h3>
        <form onSubmit={handleSubmit} className="review_form_container">
          <label>
          Rating:
            <input
              type="number"
              name="rating"
              min={"1"}
              max={"5"}
              required
              onChange={handleInput}
            />
          </label>
          <label>
            Comment
            <input type="text" name="comment" required onChange={handleInput} />
          </label>
          <button type="submit">Submit</button>
        </form>
      </Modal>

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
