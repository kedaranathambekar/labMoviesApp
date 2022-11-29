import React, { useContext  } from "react";
//import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
//import CardActions from "@material-ui/core/CardActions";
import CardContent from "@mui/material/CardContent";  
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
// import Button from "@material-ui/core/Button";
import Typography from "@mui/material/Typography";
//import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
// import IconButton from "@material-ui/core/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png';
 import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//     card: { maxWidth: 345 },
//     media: { height: 500 },
//     avatar: {
//       backgroundColor: "rgb(255, 255, 255)",
//     },
//   });
  
  export default function CastCard({ cast}) {
     //const classes = useStyles();
    const classes = cast.classes;
  
    return (
      <Card className={classes.card}>
        <CardHeader
        className={classes.header}
        title={
          <Typography variant="h5" component="p">
            {cast.original_name}{" "}
          </Typography>
        }
      />
        <CardMedia
          className={classes.media}
          image={
            cast.profile_path
              ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
              : img
          }
        />
        <CardContent>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
             <Grid item xs={6}>
             <Typography variant="h6" component="p">
               {cast.name} 
             </Typography>
            </Grid>
              <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {cast.popularity}{" "}
              </Typography>
              </Grid>
              <Grid item xs={6}>
              <Typography variant="h6" component="p">
                {cast.character} 
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                {cast.known_for_department} 
              </Typography>
              </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }