import { memo } from "react";
import PropTypes from "prop-types";
import { TextField } from "@mui/material";

function Search({ query, setQuery }) {
  /**
   * On input value change
   * @param {object} event Listener event
   */
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <TextField
      autoComplete="off"
      id="searchInput"
      label="Movie title"
      onChange={handleChange}
      sx={{
        width: "100%",
        maxWidth: "20rem",
        "& label.Mui-focused": {
          color: (theme) => theme.palette.primary.main
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: (theme) => theme.palette.primary.main
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: (theme) => theme.palette.primary.main
          }
        }
      }}
      value={query}
      variant="outlined"
    />
  );
}

Search.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default memo(Search);
