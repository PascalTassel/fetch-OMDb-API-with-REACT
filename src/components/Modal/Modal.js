import { memo } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  IconButton,
  Rating,
  Typography
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Modal({ modalClose, ...rest }) {
  const theme = useTheme();
  const {
    Actors,
    Awards,
    Country,
    Director,
    Genre,
    Language,
    Plot,
    Poster,
    Ratings,
    Released,
    Runtime,
    Title,
    Type,
    Writer
  } = rest;

  const hasImdbRate = Ratings.length >= 1;
  const hasRottenRate = Ratings.length === 2;

  /**
   * Extract imdb rate from ratings list
   */
  const getImdbRate = () => {
    const [rate] = Ratings;
    const { Value: note } = rate;
    return Number(note.split("/")[0]) / 2;
  };

  /**
   * Extract rotten tomatoes rate from ratings list
   */
  const getRottenRate = () => {
    const [, rate] = Ratings;
    const { Value: note } = rate;
    return Number(note.replace("%", "")) / 10 / 2;
  };

  /**
   * close modal
   */
  const handleClose = () => {
    modalClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="movie-modal"
      open={true}
      PaperProps={{ elevation: 0 }}
      maxWidth="md"
    >
      <DialogTitle
        id="movie-modal"
        onClose={handleClose}
        sx={{ fontSize: "1.5rem" }}
      >
        {Title}
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            float: "right",
            color: (theme) => theme.palette.grey[500]
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid
            item
            sx={{
              textAlign: "center",
              [theme.breakpoints.down("sm")]: {
                flex: 1
              },
              [theme.breakpoints.up("sm")]: {
                width: "30%"
              }
            }}
          >
            <Box
              component="img"
              src={Poster}
              alt="title"
              sx={{ maxWidth: "100%" }}
            />
          </Grid>
          <Grid
            item
            sx={{
              [theme.breakpoints.up("sm")]: {
                width: "70%"
              }
            }}
          >
            <Chip label={Type} color="secondary" size="small" sx={{ mr: 1 }} />

            <Box component="small" sx={{ verticalAlign: "middle" }}>
              {Country} / {Language}
            </Box>

            <Typography gutterBottom variant="body2" sx={{ mt: 2 }}>
              Released:{" "}
              <Box
                component="span"
                sx={{ color: (theme) => theme.palette.primary.main }}
              >
                {Released}
              </Box>{" "}
              / {Runtime} / {Genre}
            </Typography>

            <Typography gutterBottom>
              <Box
                component="span"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
                By:
              </Box>{" "}
              {Director}
            </Typography>

            <Typography gutterBottom>
              <Box
                component="span"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
                Script:
              </Box>{" "}
              {Writer}
            </Typography>

            <Typography>
              <Box
                component="span"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
                With:
              </Box>{" "}
              {Actors}
            </Typography>

            <Typography
              sx={{
                my: 3
              }}
            >
              {Plot}
            </Typography>

            <Typography gutterBottom>
              <Box
                component="span"
                sx={{ color: (theme) => theme.palette.grey[500] }}
              >
                Awards:
              </Box>{" "}
              {Awards}
            </Typography>

            {hasImdbRate && (
              <>
                <Typography
                  sx={{ mt: 1, color: (theme) => theme.palette.grey[500] }}
                >
                  Internet Movie Database:
                </Typography>
                <Rating
                  value={getImdbRate()}
                  precision={0.1}
                  sx={{ verticalAlign: "middle", mr: 1 }}
                  readOnly
                />
                <Box component="span" sx={{ verticalAlign: "middle" }}>
                  {getImdbRate()}/5
                </Box>
              </>
            )}

            {hasRottenRate && (
              <>
                <Typography
                  sx={{ mt: 1, color: (theme) => theme.palette.grey[500] }}
                >
                  Rotten Tomatoes:
                </Typography>
                <Rating
                  value={getRottenRate()}
                  precision={0.1}
                  sx={{ verticalAlign: "middle", mr: 1 }}
                  readOnly
                />
                <Box component="span" sx={{ verticalAlign: "middle" }}>
                  {getRottenRate()}/5
                </Box>
              </>
            )}
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
}

Modal.propTypes = {
  Actors: PropTypes.string.isRequired,
  Awards: PropTypes.string.isRequired,
  Country: PropTypes.string.isRequired,
  Director: PropTypes.string.isRequired,
  Genre: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired,
  modalClose: PropTypes.func.isRequired,
  Plot: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Ratings: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string,
      value: PropTypes.string
    })
  ).isRequired,
  Released: PropTypes.string.isRequired,
  Runtime: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Writer: PropTypes.string.isRequired
};

export default memo(Modal);
