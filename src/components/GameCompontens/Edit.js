import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import { useValidationsContext } from "../../context/ValidationsContext";

import { validateCreateAndEdit } from "../../services/formValidationServices";
import * as gameServices from "../../services/gameServices";

import ErrorMessage from "../../partials/ErrorMessage";

const Edit = () => {
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const { errors, clearErrors, setErrorsArr } = useValidationsContext();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let response = await gameServices.getOne(gameId);
        setGame(response);
      } catch (err) {
        console.log(err);
      }
    })();
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
      (async () => {
        try {
          let response = await gameServices.editOne(
            gameId,
            user.accessToken,
            data
          );
          if (response.ok !== true) {
            let jsonResult = await response.json();
            throw new Error(jsonResult.message);
          } else {
            clearErrors();
            navigate(-2);
          }
        } catch (err) {
          console.log(err);
          navigate(-2);
        }
      })();
    }
  };

  return (
    <section id="edit-page" className="auth">
      <form id="edit" onSubmit={submitHandler}>
        <div className="container">
          <h1>Edit Game</h1>
          {errors.length > 0
            ? errors.map((err) => <ErrorMessage key={err} message={err} />)
            : null}
          <label htmlFor="leg-title">Legendary title:</label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={game.title}
          />

          <label htmlFor="category">Category:</label>
          <input
            type="text"
            id="category"
            name="category"
            defaultValue={game.category}
          />

          <label htmlFor="levels">MaxLevel:{game.maxLevel}</label>
          <input
            type="number"
            id="maxLevel"
            name="maxLevel"
            min="1"
            defaultValue={game.maxLevel}
          />

          <label htmlFor="game-img">Image:{game.imageUrl}</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            defaultValue={game.imageUrl}
          />

          <label htmlFor="summary">Summary:</label>
          <textarea
            name="summary"
            id="summary"
            defaultValue={game.summary}
          ></textarea>
          <input className="btn submit" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default Edit;
