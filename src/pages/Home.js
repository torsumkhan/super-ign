import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import loadGames from "../actions/gamesAction";
import Game from "../components/Game";
import Loading from "../components/Loading";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";
import { gameDetailsUrl } from "../api";
import { searchGames } from "../actions/gamesAction";
import Masonry from "react-masonry-css";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames()).then(() => {
      if (pathId) {
        dispatch(GameDetail(pathId));
      }
    });
  }, [dispatch]);

  const breakpoints = {
    default: 3,
    1200: 1,
    700: 1,
  };

  const { popular_games, new_games, upcoming_games, searched_game } =
    useSelector((state) => state.games);

  if (upcoming_games.length < 1) {
    return <Loading />;
  }
  return (
    <GameList>
      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>

        {searched_game.length ? (
          <div className="searched">
            <h2>Search results: </h2>

            <Games>
              <Masonry
                breakpointCols={breakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {searched_game.map((game) => {
                  return (
                    <Game
                      id={game.id}
                      name={game.name}
                      release={game.released}
                      platform={game.platforms}
                      genre={game.genre}
                      x
                      image={game.background_image}
                      rating={game.rating}
                      key={game.id}
                      meta={game.metacritic}
                    />
                  );
                })}
              </Masonry>
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Trending</h2>
        <Games>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
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
                  meta={game.metacritic}
                />
              );
            })}
          </Masonry>
        </Games>

        <h2>Upcoming</h2>
        <Games>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
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
                  meta={game.metacritic}
                />
              );
            })}
          </Masonry>
        </Games>

        <h2>Popular</h2>
        <Games>
          <Masonry
            breakpointCols={breakpoints}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
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
                  meta={game.metacritic}
                />
              );
            })}
          </Masonry>
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
    font-weight: 500;
  }
`;
const Games = styled(motion.div)`
  // min-height: 80vh;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  // grid-column-gap: 30px;
  // grid-row-gap: 40px;
`;
export default Home;
