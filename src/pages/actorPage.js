import React, { useState } from "react";
import Cast from "../components/actorCard";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { getCast } from "../api/tmdb-api";
import Grid from "@material-ui/core/Grid";



const CastPage = ({movie}) => {
      const {  data, error, isLoading, isError }  = useQuery(["cast", { id: movie.id}] , getCast);

      // const { id } = useParams();
      // const { data: movie, error, isLoading, isError } = useQuery(
      //   ["movie", { id: id }],
      //   getMovie
    
      if (isLoading) {
            return <Spinner />
          }
        
          if (isError) {
            return <h1>{error.message}</h1>
          }  
          const cast = data.cast;
    
          let castList = cast.map((c) => (
            <Grid key={c.id}>
              <Cast key={c.id} cast={c}/>
            </Grid>
          ));
        
          return castList;
        };
    
    export default CastPage;