import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";

const GameDetail = () => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { game_details, game_screenshot, isLoading } = useSelector(
    (state) => state.details
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail>
            <button type="button" onClick={() => history.push("/")}>
              Back
            </button>
            <Stats>
              <div className="rating">
                <h3>{game_details.name}</h3>
                <p>Rating: {game_details.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game_details.platforms.map((data) => {
                    return <h3>{data.platform.name}</h3>;
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <img src={game_details.background_image} />
            </Media>
            <Desc>
              <p>{game_details.description_raw}</p>
            </Desc>
            <div className="gallery">
              {game_screenshot.results.map((screen) => {
                return <img src={screen.image} />;
              })}
            </div>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
  }
  &::-webkit-scrollbar-track {
    background-color: orange;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  background: black;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  padding: 5rem;
  left: 10%;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
`;

const Desc = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
