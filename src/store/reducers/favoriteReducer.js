const INITIAL_STATE = [];

export default function favoriteReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "REMOVE":
      const arr = state.filter((movie) => movie.id !== action.payload);
      return arr;
    default:
      return state;
  }
}
