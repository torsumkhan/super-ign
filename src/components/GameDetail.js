import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resizeImage } from "../util";
import xbox from "../img/xbox-brands.svg";
import playstation from "../img/playstation.svg";
import nintendo from "../img/nintendo.svg";
import steam from "../img/steam.svg";
import gamepad from "../img/gamepad.svg";
import apple from "../img/apple.svg";

const GameDetail = ({ pathId }) => {
  const history = useHistory();
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  const platformLogos = (platform) => {
    if (platform.includes("PlayStation")) {
      return playstation;
    } else if (platform.includes("Xbox")) {
      return xbox;
    } else if (platform === "PC") {
      return steam;
    } else if (platform === "Nintendo Switch") {
      return nintendo;
    } else if (platform.includes("OS")) {
      return apple;
    } else {
      return gamepad;
    }
  };
  const { game_details, game_screenshot, isLoading } = useSelector(
    (state) => state.details
  );
  return (
    <>
      {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
          <Detail layoutId={pathId}>
            <Stats>
              <div className="rating">
                <motion.h2 layoutId={`title ${pathId}`}>
                  {game_details.name}
                </motion.h2>
                <p>Rating: {game_details.rating}</p>
                <p>ESRB Rating: {game_details.esrb_rating.name}</p>
                <Genre>
                  <p>Genre: </p>
                  {game_details.genres.map((genre) => {
                    return (
                      <p className="genre-name" style={{ marginLeft: ".5rem" }}>
                        {genre.name}
                      </p>
                    );
                  })}
                </Genre>
                <Developers>
                  <p>Developers: </p>
                  {game_details.developers.map((developer) => {
                    return (
                      <p
                        className="developer-name"
                        style={{ marginLeft: ".5rem" }}
                      >
                        {developer.name}
                      </p>
                    );
                  })}
                </Developers>
                <Publishers>
                  <p>Publishers: </p>
                  {game_details.publishers.map((publisher) => {
                    return (
                      <p
                        className="publisher-name"
                        style={{ marginLeft: ".5rem" }}
                      >
                        {publisher.name}
                      </p>
                    );
                  })}
                </Publishers>
              </div>
              <Info>
                <h3>Platforms</h3>
                <Platforms>
                  {game_details.platforms.map((data) => {
                    return (
                      <img
                        key={data.platform.id}
                        src={platformLogos(data.platform.name)}
                        className="icon"
                        alt={data.platform.name}
                        title={data.platform.name}
                      />
                    );
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media>
              <motion.img
                layoutId={`image ${pathId}`}
                src={resizeImage(game_details.background_image, 1280)}
              />
            </Media>
            <Desc>
              <h3>Description</h3>
              <p>{game_details.description_raw}</p>
            </Desc>
            <Gallery>
              {game_screenshot.results.map((screen) => {
                return <img src={resizeImage(screen.image, 640)} />;
              })}
            </Gallery>
          </Detail>
        </CardShadow>
      )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  z-index: 2;
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
  background: #202020;
  border-radius: 1rem;
  padding: 2rem 20rem;
  position: absolute;
  padding: 3rem;
  left: 10%;
  img {
    width: 100%;
  }
  h2 {
    font-size: 50px;
    padding: 0;
  }
  p {
    font-size: 1rem;
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
    width: 30px;
    height: 30px;
    color: white;
    fill: currentColor;
  }
  svg path {
    fill: currentColor;
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

const Genre = styled(motion.div)`
  display: flex;
`;

const Developers = styled(motion.div)`
  display: flex;
`;

const Publishers = styled(motion.div)`
  display: flex;
`;

const Desc = styled(motion.div)`
  margin: 5rem 0rem;
  p {
    font-size: 1rem;
  }
  h3 {
    font-weight: 500;
  }
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

export default GameDetail;
