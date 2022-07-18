import React, { useState } from "react";
import axios from "axios";
import {
  popularGamesUrl,
  upcomingGamesUrl,
  newGamesUrl,
  searchGameUrl,
} from "../api";

const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const upcomingData = await axios.get(upcomingGamesUrl());
  const newData = await axios.get(newGamesUrl());

  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular_games: popularData.data.results,
      upcoming_games: upcomingData.data.results,
      new_games: newData.data.results,
    },
  });
};

export const searchGames = (game_name) => async (dispatch) => {
  const searchData = await axios.get(searchGameUrl(game_name));

  dispatch({
    type: "SEARCH_GAMES",
    payload: {
      searched_game: searchData.data.results,
    },
  });
};

export default loadGames;
