import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadGameDetails from "../actions/detailAction";
import { Link, useHistory } from "react-router-dom";
import { resizeImage } from "../util";
import xbox from "../img/xbox-brands.svg";
import playstation from "../img/playstation.svg";
import nintendo from "../img/nintendo.svg";
import windows from "../img/windows.svg";
import gamepad from "../img/gamepad.svg";
import apple from "../img/apple.svg";
import linux from "../img/linux.svg";

const Game = ({ id, name, release, platform, genre, image, rating, meta }) => {
  const platformLogos = (platform) => {
    if (platform.includes("PlayStation")) {
      return playstation;
    } else if (platform.includes("Xbox")) {
      return xbox;
    } else if (platform === "PC") {
      return windows;
    } else if (platform === "Nintendo Switch") {
      return nintendo;
    } else if (platform.includes("OS")) {
      return apple;
    } else if (platform.includes("Linux")) {
      return linux;
    } else {
      return gamepad;
    }
  };

  const stringPathId = id.toString();
  const history = useHistory();
  if (history.location.pathname === "/") {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
  const dispatch = useDispatch();
  const detailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadGameDetails(id));
  };
  return (
    <StyledGame layoutId={stringPathId} onClick={detailHandler}>
      <Link to={`/game/${id}`} style={{ textDecoration: "none" }}>
        <motion.img
          layoutId={`image${stringPathId}`}
          src={resizeImage(image, 640)}
        />
        <HeaderInfo>
          <LogoIcons className="icon">
            {platform.map((plat) => {
              return (
                <img
                  src={platformLogos(plat.platform.name)}
                  key={plat.platform.name}
                  title={plat.platform.name}
                />
              );
            })}
          </LogoIcons>
          {meta === null ? <p>n/a</p> : <p title="Metascore">{meta}</p>}
        </HeaderInfo>
        <h3>{name}</h3>
        <p>Release date: {release}</p>
      </Link>
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  color: white;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1.2rem;
  background-color: #202020;
  overflow: hidden;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  h3 {
    color: white;
    padding: 1rem 1.2rem 0 1.2rem;
    text-align: left;
  }
  p {
    text-align: left;
    padding: 1.2rem;
  }
  span p {
    color: green;
    font-weight: bold;
    display: inline-block;
    text-align: left;
    border: 1px solid green;
  }
  :hover {
    cursor: pointer;
  }
`;

const LogoIcons = styled(motion.div)`
  display: flex;
  gap: 10px;
  img {
    width: 15px;
    height: 15px;
  }
`;

const HeaderInfo = styled(motion.div)`
  padding: 1rem 1.2rem 0 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-weight: bold;
    border: 1px solid #fbc730;
    padding: 1px 8px;
    border-radius: 6px;
    color: #fbc730;
  }
`;

export default Game;
