import { memo } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography
} from "@mui/material";

function ListItem({ displayMovie, imdbID, Poster, Title, Type, Year }) {
  const theme = useTheme();

  return (
    <Grid
      item
      sx={{
        width: "100%",
        [theme.breakpoints.up("sm")]: {
          width: "50%"
        },
        [theme.breakpoints.up("md")]: {
          width: "33.3333333333%"
        },
        [theme.breakpoints.up("lg")]: {
          width: "25%"
        },
        [theme.breakpoints.up("xl")]: {
          width: "20%"
        }
      }}
    >
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          img: {
            transition: ".2s"
          },
          "&:hover": {
            img: {
              transform: "scale(1.05)"
            }
          }
        }}
      >
        <CardActionArea
          onClick={() => displayMovie(imdbID)}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            height: "100%"
          }}
        >
          <CardMedia component="img" height="150" image={Poster} alt={Title} />
          <CardContent sx={{ flex: 1 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              {Title}
            </Typography>
            <Box
              sx={{ color: theme.palette.grey[500], mb: 2, fontSize: ".85rem" }}
            >
              {Year}
            </Box>
            <Chip label={Type} color="secondary" size="small" />
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

ListItem.propTypes = {
  imdbID: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired
};

export default memo(ListItem);
