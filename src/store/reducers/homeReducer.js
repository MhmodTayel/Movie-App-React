const INITIAL_STATE = [];

export default function homeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MOVIES":
      return [...action.payload];
    default:
      return state;
  }
}
