import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavoriteAction,
  removeFavoriteAction,
} from "../store/actions/favoriteAction";
export default function MovieCard({ movie, isLiked }) {
  console.log(movie);
  const [like, setLike] = React.useState(isLiked);

  const dispatch = useDispatch();
  const handleLike = () => {
    if (!like) {
      dispatch(addFavoriteAction(movie));
    } else {
      dispatch(removeFavoriteAction(movie.id));
    }
    setLike(!like);
  };
  return (
    <Card sx={{ maxWidth: 345 }} className="cardd">
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          className="cardTitle"
        >
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          className="paragraph"
          color="text.secondary"
        >
          {movie.overview}
        </Typography>
      </CardContent>
      <CardActions className="CardAction">
        <Link to={`/details/${movie.id}`} className="readMore">
          See More...
        </Link>
        <IconButton
          color="error"
          aria-label="upload picture"
          component="span"
          className="favBtn"
          onClick={handleLike}
        >
          {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
