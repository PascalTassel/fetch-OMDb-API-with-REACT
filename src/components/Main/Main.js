import { memo } from "react";
import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import MoviesList from "../MoviesList/MoviesList";

function Main({ fetchPage, moviesList, pagination, query }) {
  const { count: countResults } = pagination;

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        p: (theme) => theme.spacing(2),
        mx: "auto",
        width: "100%",
        maxWidth: "1600px",
        ...(query.length < 3 && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        })
      }}
    >
      {query.length >= 3 ? (
        <Typography variant="h2" component="p" sx={{ mb: 2 }}>
          {countResults !== 0
            ? `${countResults} result${countResults > 1 ? "s" : ""}`
            : "No result"}
          {` for "${query}"`}
        </Typography>
      ) : (
        <Box
          sx={{
            color: (theme) => theme.palette.text.secondary
          }}
        >
          {"Waiting for search results"}
        </Box>
      )}

      {moviesList.length ? (
        <MoviesList
          fetchPage={fetchPage}
          moviesList={moviesList}
          pagination={pagination}
        />
      ) : null}
    </Box>
  );
}

Main.propTypes = {
  fetchPage: PropTypes.func.isRequired,
  moviesList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pagination: PropTypes.shape({
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
  }).isRequired,
  query: PropTypes.string.isRequired
};

export default memo(Main);
