import React from "react";

const initState = {
  popular_games: [],
  new_games: [],
  upcoming_games: [],
  searched_game: [],
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
    case "SEARCH_GAMES":
      return {
        ...state,
        searched_game: action.payload.searched_game,
      };
    case "CLEAR_GAMES":
      return {
        ...state,
        searched_game: [],
      };
    default:
      return { ...state };
  }
};

export default gameReducers;
