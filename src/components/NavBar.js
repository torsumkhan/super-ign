import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { searchGames } from "../actions/gamesAction";

const NavBar = () => {
  const [search, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(searchGames(search));
    setSearchTerm("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_GAMES" });
  };
  return (
    <StyledNav search={search}>
      <h1 onClick={clearSearched}>super IGN</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search 763,678 games"
          value={search}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  padding: 2rem 5rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  gap: 12px;
  h1 {
    font-style: italic;
    font-size: 2rem;
    color: #fbc730;
    cursor: pointer;
  }

  form {
    width: 75%;
    display: flex;
    gap: 15px;
  }

  form {
    input {
      width: 75%;
      height: 2.5rem;
      padding: 0.5rem;
      border: none;
      outline: none;
      color: white;
      background-color: #3b3b3b;
      border-radius: 30px;
      transition: background-color 0.3s ease-in;
      &:hover {
        background-color: white;
        color: black;
      }
    }
    button {
      border: none;
      font-size: 1rem;
      padding: 0.5rem 2rem;
      cursor: pointer;

      border-radius: 30px;
      background-color: #fbc730;
    }
  }
`;
export default NavBar;
