import { Suspense } from "react";
import { NavLink, Outlet} from "react-router-dom";


import Heading from "../../components/Heading/Heading";


const HeaderLayout = () => {


  return (
    <div >
      <header>
        <div >
         

          <nav>
            <NavLink
            
             to="/"
             
            >
              Home
            </NavLink>

            <NavLink
             
              to="movies"
            >
              Movies
            </NavLink>
          </nav>
        </div>
      </header>

      <Suspense
        fallback={ null  }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HeaderLayout;
