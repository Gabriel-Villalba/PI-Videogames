import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_BY_GENRE = "GET_BY_GENRE";
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME";
export const GET_DETAILS = "GET_DETAILS";
export const FILTER_CREATED = "FILTER_CREATED";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_RATING = "ORDER_RATING";

/* API call */
/*const fetchData = (url, type, dispatch) => {
  return axios
    .get(url)
    .then((response) => response.data)
    .then((data) => {
      dispatch({
        type,
        payload: data,
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};*/

//* funcion fectData con Async await 
const fetchData = async (url, type, dispatch) => {
  try {
    const response = await axios.get(url); // Espera a que se complete la petición GET
    const data = response.data;
   
    dispatch({
      type,
      payload: data,
    });
  } catch (error) {
  console.log("Error:", error);
  }
};
 
export function getVideogames() {
  return function (dispatch) {
    return fetchData("http://localhost:3001/videogames", GET_VIDEOGAMES, dispatch);
  };
}

export function getGenres() {
  return function (dispatch) {
    return fetchData(`http://localhost:3001/genres`, GET_GENRES, dispatch );
  };
}

export function getByGenre(name) {
  return function (dispatch) {
    return fetchData(`http://localhost:3001/genres/${name}`, GET_BY_GENRE, dispatch);
  };
}

export function searchVideogame(videogame) {
  return function (dispatch) {
    return fetchData(`http://localhost:3001/videogames?name=${videogame}`, SEARCH_VIDEOGAME, dispatch )
  };
}
export function getDetails(videogameId) {
  return function (dispatch) {
    return fetchData(`http://localhost:3001/videogames/${videogameId}`, GET_DETAILS, dispatch)
  };
}

export function filteredCreated(value) {
  return {
    type: FILTER_CREATED,
    payload: value,
  };
}

export function orderedByName(value) {
  return {
    type: ORDER_NAME,
    payload: value,
  };
}

export function orderedByRating(value) {
  return {
    type: ORDER_RATING,
    payload: value,
  };
}

