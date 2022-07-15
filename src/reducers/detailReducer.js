import React from "react";

const initState = {
  game_details: {},
  game_screenshot: {},
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAME_DETAILS":
      return {
        ...state,
        game_details: action.payload.game_details,
        game_screenshot: action.payload.game_screenshot,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
