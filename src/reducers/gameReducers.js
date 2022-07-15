import React from "react";

const initState = {
  popular_games: [],
  new_games: [],
  upcoming_games: [],
};

const gameReducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular_games: action.payload.popular_games,
        new_games: action.payload.new_games,
        upcoming_games: action.payload.upcoming_games,
      };
    default:
      return { ...state };
  }
};

export default gameReducers;
