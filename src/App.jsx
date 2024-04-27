import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import PAGE_NAMES from "./router/paths";

import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";

export const App = () =>{
  return (
  
     
     <Routes>
        <Route path="/" element={ <HeaderLayout/>}>
          <Route index element={ <h1>home</h1>} />
            </Route>
      </Routes>
  
  );
}


