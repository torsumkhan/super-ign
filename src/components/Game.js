import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import loadGameDetails from "../actions/detailAction";
import { Link, useHistory } from "react-router-dom";

const Game = ({ id, name, release, platform, genre, image, rating }) => {
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
    <StyledGame onClick={detailHandler}>
      <Link to={`/game/${id}`} style={{ textDecoration: "none" }}>
        <img src={image} />
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
    height: 30vh;
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
  :hover {
    cursor: pointer;
  }
`;

export default Game;
