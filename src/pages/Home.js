import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import loadGames from "../actions/gamesAction";
import Game from "../components/Game";
import Loading from "../components/Loading";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular_games, new_games, upcoming_games } = useSelector(
    (state) => state.games
  );

  if (upcoming_games.length < 1) {
    return <Loading />;
  }
  return (
    <GameList>
      <GameDetail />
      <h2>Trending</h2>
      <Games>
        {new_games.map((game) => {
          return (
            <Game
              id={game.id}
              name={game.name}
              release={game.released}
              platform={game.platforms}
              genre={game.genre}
              image={game.background_image}
              rating={game.rating}
              key={game.id}
            />
          );
        })}
      </Games>

      <h2>Upcoming</h2>
      <Games>
        {upcoming_games.map((game) => {
          return (
            <Game
              id={game.id}
              name={game.name}
              release={game.released}
              platform={game.platforms}
              genre={game.genre}
              image={game.background_image}
              rating={game.rating}
              key={game.id}
            />
          );
        })}
      </Games>

      <h2>Popular</h2>
      <Games>
        {popular_games.map((game) => {
          return (
            <Game
              id={game.id}
              name={game.name}
              release={game.released}
              platform={game.platforms}
              genre={game.genre}
              image={game.background_image}
              rating={game.rating}
              key={game.id}
            />
          );
        })}
      </Games>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;
const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 30px;
`;
export default Home;
