import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { resizeImage } from "../util";
import { FaBeer } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   solid,
//   regular,
//   brands,
// } from "@fortawesome/fontawesome-svg-core/import.macro";
import { faXbox } from "@fortawesome/free-solid-svg-icons";
import { faAtom } from "@fortawesome/free-solid-svg-icons";

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
    switch (platform) {
      case "PlayStation 4":
        return <FaBeer />;
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
                <motion.h3 layoutId={`title ${pathId}`}>
                  {game_details.name}
                </motion.h3>
                <p>Rating: {game_details.rating}</p>
              </div>
              <Info>
                <h3>Platforms</h3>
                <FaBeer />
                <Platforms>
                  {game_details.platforms.map((data) => {
                    return (
                      <img
                        key={data.platform.id}
                        src={platformLogos(data.platform.name)}
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
  p {
    font-size: 1rem;
  }
`;

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
`;

export default GameDetail;
