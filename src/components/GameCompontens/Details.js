import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import { useGameContext } from "../../context/GameContext";

import * as gameService from "../../services/gameServices";


const Details = () => {
  const {game, setGame, clearGameState} = useGameContext();
  const { gameId } = useParams();

  const { user } = useAuthContext();

  useEffect(() => {
    gameService
      .getOne(gameId)
      .then((result) => setGame(result))
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const ownerButtons = () => (
    <div className="buttons">
      <Link to={`/games/edit/${gameId}`} className="button">
        Edit
      </Link>
      <Link to={`/games/delete/${gameId}`} className="button">
        Delete
      </Link>
    </div>
  );

  console.log(game);

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} alt="game img" />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">{game.summary}</p>

        <div className="details-comments">
          <h2>Comments:</h2>
          {game.comments ? (
            <ul>
              <li className="comment">
                <p>Content: I rate this one quite highly.</p>
              </li>
              <li className="comment">
                <p>Content: The best game.</p>
              </li>
            </ul>
          ) : (
            <p className="no-comment">No comments.</p>
          )}
        </div>
        {/*TODO buttons if owner*/}
        {user._id === game._ownerId ? ownerButtons() : null}
      </div>

      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input className="btn submit" type="submit" />
        </form>
      </article>
    </section>
  );
};

export default Details;
