import { axiosInstace } from "../../network/axiosConfig";

export const getHomeAction = (lang) => (dispatch) => {
  console.log("from action", lang);
  return axiosInstace
    .get(`/discover/movie?language=${lang}`)
    .then((res) => {
      dispatch({
        type: "ADD_MOVIES",
        payload: res.data.results,
      });
    })
    .catch((err) => console.log(err));
};
