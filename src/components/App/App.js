import { memo } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";

function App({ fetchPage, moviesList, pagination, query, setQuery }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "auto",
        minHeight: "100vh"
      }}
    >
      <Header query={query} setQuery={setQuery} />
      <Main
        fetchPage={fetchPage}
        moviesList={moviesList}
        pagination={pagination}
        query={query}
      />
      <Footer />
    </Box>
  );
}

App.propTypes = {
  fetchPage: PropTypes.func.isRequired,
  moviesList: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  pagination: PropTypes.shape({
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired
  }).isRequired,
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default memo(App);
