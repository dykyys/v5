import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PAGE_NAMES from "./router/paths";



export const App = () =>{
  return (
  
     
     <Routes>
        <Route path="/" element={ <h1>home</h1>}>
          <Route index element={ <h1>home</h1>} />
            </Route>
      </Routes>
  
  );
}


