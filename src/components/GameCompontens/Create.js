import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { useValidationsContext } from "../../context/ValidationsContext";

import { validateCreateAndEdit } from "../../services/formValidationServices";
import * as gameService from "../../services/gameServices";

import ErrorMessage from "../../partials/ErrorMessage";

import { IsNotLoggedIn } from "../../hoc/userRoutesGuard";

const Create = () => {

  const { errors, clearErrors, setErrorsArr } = useValidationsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const errorMessages = validateCreateAndEdit(data);

    if (errorMessages.length > 0) {
      setErrorsArr(errorMessages);
    } else {
      gameService
        .createOne(null, user.accessToken, data)
        .then((response) => response.json())
        .then((res) => {
          if (res.message) {
            throw new Error(res.message);
          } else {
            clearErrors();
            navigate("/");
          }
        });
    }
  };
  return (
    <section id="create-page" className="auth">
      <form id="create" onSubmit={submitHandler}>
        <div className="container">
          <h1>Create Game</h1>
          {errors.length > 0
            ? errors.map((err) => <ErrorMessage key={err} message={err} />)
            : null}
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter game title..."
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            placeholder="Enter game category..."
          />

          <label htmlFor="levels">MaxLevel:</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            placeholder="1"
          />

          <label htmlFor="game-img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            placeholder="Upload a photo..."
          />

          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default IsNotLoggedIn(Create)
