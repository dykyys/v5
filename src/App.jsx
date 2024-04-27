import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PAGE_NAMES from "./router/paths";

import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";


const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"));
const MovieDetailsPage = lazy(
  () => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"),
);
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage/NotFoundPage.jsx"),
);

export const App = () =>{
  return (
  
     
      <h1>home</h1>
  
  );
}


