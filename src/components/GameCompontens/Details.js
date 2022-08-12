import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as gameService from "../../services/gameServices";

const Details = () => {
  const [game, setGame] = useState({});
  const { gameId } = useParams();

  useEffect(() => {
      gameService.getOne(gameId)
      .then((result) => setGame(result))
  })

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>

        <p className="text">
            {game.summary}
        </p>

        <div className="details-comments">
          <h2>Comments:</h2>
          {game.comments
          ?
          <ul>
                <li className="comment">
                <p>Content: I rate this one quite highly.</p>
                </li>
                <li className="comment">
                <p>Content: The best game.</p>
                </li>
           </ul>
          : <p className="no-comment">No comments.</p>
          }


        </div>
                {/*TODO buttons if owner*/} 
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
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
