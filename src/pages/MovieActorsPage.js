import React, {useContext} from "react";
import { getActorsImages } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '../components/cardIcons/addToPlaylist';

const MovieActorsPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getActorsImages)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  

  const actors = data.results;
    return (
      <PageTemplate
        title="Actors"
        actors={actors}
      
        />
    );
};
export default MovieActorsPage;