
import { Route, Routes } from "react-router-dom";


import HeaderLayout from "./layouts/HeaderLayout/HeaderLayout";

export const App = () =>{
  return (
  <><HeaderLayout/>
     <Routes>
        <Route path="/" element={<h1>home</h1> }>
        
            </Route>
      </Routes></>
     
  
  );
}


