import { memo } from "react";
import PropTypes from "prop-types";
import Search from "../Search/Search";
import { Box, Typography } from "@mui/material";

function Header({ query, setQuery }) {
  return (
    <Box
      component="header"
      sx={{
        textAlign: "center",
        position: "sticky",
        top: 0,
        p: (theme) => theme.spacing(2),
        borderBottom: 1,
        borderColor: (theme) => theme.palette.divider,
        background: (theme) => theme.palette.background.default,
        zIndex: 1
      }}
    >
      <Typography variant="h1" sx={{ mb: (theme) => theme.spacing(2) }}>
        Search movies in OMDb API
      </Typography>
      <Search query={query} setQuery={setQuery} />
    </Box>
  );
}

Header.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default memo(Header);
