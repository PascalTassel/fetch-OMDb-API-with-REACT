import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";
import ListItem from "../ListItem/ListItem";
import ModalContainer from "../../containers/Modal";

function MoviesList({ fetchPage, moviesList, pagination }) {
  const { page, totalPages } = pagination;
  const [openModal, setOpenModal] = useState(false);
  const [movieId, setMovieId] = useState("");

  /**
   * call next page
   */
  const fetchNextPage = () => {
    fetchPage(page + 1);
  };

  /**
   * set movie to display
   */
  const displayMovie = (movieId) => {
    setMovieId(movieId);
    setOpenModal(true);
  };

  /**
   * remove movie id on modal close
   */
  useEffect(() => {
    if (!openModal) {
      setMovieId("");
    }
  }, [openModal]);

  return (
    <>
      <InfiniteScroll
        dataLength={moviesList.length}
        next={fetchNextPage}
        hasMore={page !== totalPages}
        scrollableTarget="main"
      >
        <Grid container spacing={2}>
          {moviesList.map((movie) => (
            <ListItem
              key={movie.imdbID}
              displayMovie={displayMovie}
              {...movie}
            />
          ))}
        </Grid>
      </InfiniteScroll>
      {openModal && (
        <ModalContainer
          movieId={movieId}
          modalClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}

MoviesList.propTypes = {
  fetchPage: PropTypes.func.isRequired,
  moviesList: PropTypes.arrayOf(
    PropTypes.shape({
      imdbID: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  pagination: PropTypes.shape({
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
  }).isRequired
};

export default memo(MoviesList);
