const initialState = {
  game: { platforms: [] },
  screen: { results: [] },
  isLoading: true,
}; //THIS IS ALSO VERY IMPORTANT GIVE THE STATE AN EMPTY ARRAY SO IT CAN MAP AND NOT CRASH ON FIRST RENDER

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
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
