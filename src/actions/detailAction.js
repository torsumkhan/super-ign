import React from "react";
import axios from "axios";
import { gameDetailsUrl, gameScreenshotUrl } from "../api";

const loadGameDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const gameDetails = await axios.get(gameDetailsUrl(id));
  const gameScreenshot = await axios.get(gameScreenshotUrl(id));

  dispatch({
    type: "GAME_DETAILS",
    payload: {
      game_details: gameDetails.data,
      game_screenshot: gameScreenshot.data,
    },
  });
};

export default loadGameDetails;
