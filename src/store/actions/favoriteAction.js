
export const addFavoriteAction = (payload) => {
  return {
    type: "ADD",
    payload,
  };
};

export const removeFavoriteAction = (payload) => {
  return {
    type: "REMOVE",
    payload,
  };
};
