import { useEffect, useState } from "react";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import App from "../components/App/App";
import theme from "../utils/theme";
import { requestFetchMovies } from "../requests/moviesRequests";

function AppContainer() {
  const [query, setQuery] = useState("");
  const [moviesList, setMoviesList] = useState([]);
  const [pagination, setPagination] = useState({
    count: 0,
    page: 1,
    totalPages: 1
  });
  const itemsPerpage = 10;

  /**
   * fetch movies from API and set movies list
   * @param {string} query Searched string
   */
  const fetchMovies = async (query) => {
    let count = 0;
    let results = [];
    const response = await requestFetchMovies({ page: 1, query });
    const { Response } = response.data;
    const hasResults = Response === "True";
    if (hasResults) {
      const { Search, totalResults } = response.data;
      count = Number(totalResults);
      results = Search;
    }
    setPagination({
      count,
      page: 1,
      totalPages: count === 0 ? 1 : Math.ceil(count / itemsPerpage)
    });
    setMoviesList(results);
  };

  /**
   * fetch results page
   */
  const fetchPage = async (pageNum) => {
    const response = await requestFetchMovies({ page: pageNum, query });
    const { Search: results } = response.data;
    setPagination({
      ...pagination,
      page: pageNum
    });
    setMoviesList(moviesList.concat(results));
  };

  /**
   * get results when query change
   */
  useEffect(() => {
    if (query.length >= 3) {
      fetchMovies(query);
    } else {
      setMoviesList([]);
    }
  }, [query]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App
        fetchPage={fetchPage}
        moviesList={moviesList}
        pagination={pagination}
        query={query}
        setQuery={setQuery}
      />
    </ThemeProvider>
  );
}

export default AppContainer;
