import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadGameDetails from "../actions/detailAction";

const Game = ({ id, name, release, platform, genre, image, rating }) => {
  const dispatch = useDispatch();
  const detailHandler = () => {
    dispatch(loadGameDetails(id));
  };
  return (
    <StyledGame onClick={detailHandler}>
      <h3>{name}</h3>
      <p>Release date: {release}</p>
      <img src={image} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  border-radius: 1.2rem;
  background-color: #202020;
  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
  }
  :hover {
    cursor: pointer;
  }
`;

export default Game;