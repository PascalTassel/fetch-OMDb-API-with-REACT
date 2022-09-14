import { memo, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Backdrop, CircularProgress } from "@mui/material";
import Modal from "../components/Modal/Modal";
import { requestFetchMovie } from "../requests/moviesRequests";

function ModalContainer({ modalClose, movieId }) {
  const [movie, setMovie] = useState({});
  /**
   * fetch movie from API
   * @param {string} id Movie Id
   */
  const fetchMovie = async (id) => {
    const response = await requestFetchMovie(id);
    const { Response } = response.data;
    const movieExist = Response === "True";
    if (movieExist) {
      setMovie(response.data);
    }
  };

  /**
   * get movie when component rendered
   */
  useEffect(() => {
    fetchMovie(movieId);
  }, [movieId]);

  return movie.Title ? (
    <Modal modalClose={modalClose} {...movie} />
  ) : (
    <Backdrop
      sx={{
        color: (theme) => theme.palette.text.icon,
        zIndex: (theme) => theme.zIndex.drawer + 1
      }}
      open={true}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

ModalContainer.propTypes = {
  modalClose: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired
};

export default memo(ModalContainer);
