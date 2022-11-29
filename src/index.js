import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import {Link} from 'react-router-dom';
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpComingPage from './pages/upcomingMovpages';
import PopularMoviesPage from "./pages/popularMoviesPage";
import MovieActorsPage from "./pages/MovieActorsPage.js";
import TopRatedMoviesPage from "./pages/topRateMoviePage";
import SignUpPage from "./pages/signupPage";
import LoginPage from "./pages/loginPage";  
import AuthProvider from "./contexts/authContext";
import AuthHeader from "./components/authHeader/index";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    {/* <AuthProvider> */}
        <SiteHeader />
        {/* <AuthHeader />      New Header  */}
          <MoviesContextProvider>
          <Routes>
          <Route path="/signup" component={SignUpPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
      <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route exact path="/movies/upcoming" element={<UpComingPage />} />
        <Route exact path="/movies/popular" element={<PopularMoviesPage />} />
        <Route exact path= "/movies/toprated" element={<TopRatedMoviesPage/>} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      </MoviesContextProvider>
      {/* </AuthProvider> */}
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );