import React from "react";

const initState = {
  game_details: { platforms: [] },
  game_screenshot: {},
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GAME_DETAILS":
      return {
        ...state,
        game_details: action.payload.game_details,
        game_screenshot: action.payload.game_screenshot,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
