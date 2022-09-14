import axios from "axios";

const apiUrl = "https://www.omdbapi.com/?apikey=13c4b728";

/**
 * get movies by title
 * @param {object} params Search params
 * @param {number} params.page Page to display
 * @param {query} params.query Searched string
 */
export async function requestFetchMovies(params) {
  const { page, query } = params;

  try {
    const response = await axios.get(apiUrl, {
      params: {
        s: query,
        page
      }
    });

    return response;
  } catch (err) {
    return err.response;
  }
}

/**
 * get movie by Id
 * @param {string} movieId Movie id to fetch
 */
export async function requestFetchMovie(movieId) {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        i: movieId
      }
    });

    return response;
  } catch (err) {
    return err.response;
  }
}
