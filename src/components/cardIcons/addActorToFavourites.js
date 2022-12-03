import React, { useContext } from "react";
import { ActorContext } from "../../contexts/actorContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ actor }) => {
  const context = useContext(ActorContext);

  const handleAddToFavourites = (e) => {
    e.preventDefault();
    context.addToFavourites(actor);
  };

  return (
    <IconButton aria-label="add to favorites" onClick={handleAddToFavourites}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;