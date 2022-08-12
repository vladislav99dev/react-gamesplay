import { Link } from 'react-router-dom'

const GameCard = ({
    game
}) => {
    return(
        <div className="game">
        <div className="image-wrap">
            <img src={game.imageUrl}/>
        </div>
        <h3>{game.title}</h3>
        <div className="rating">
            <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div className="data-buttons">
            <Link className='"btn details-btn' to={`/games/details/${game._id}`}>Details</Link>
        </div>
    </div>
    );
}

export default GameCard