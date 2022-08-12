import { useState, useEffect } from 'react';
import GameCard from './GameCard'
import * as gameServices from '../../../services/gameServices'

const Catalog = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
       gameServices.getAll()
       .then((result) => setGames(Object.values(result)))
    },[])

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {games.length > 0
      ? games.map((game) => <GameCard key={game._id} game={game}/>)
      : <h3 className="no-articles">No articles yet</h3>
      }


    </section>
  );
};

export default Catalog;
