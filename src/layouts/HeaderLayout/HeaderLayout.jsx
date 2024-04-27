import { Suspense } from "react";
import { NavLink, Outlet} from "react-router-dom";


import Heading from "../../components/Heading/Heading";
import Spinner from "../../components/Spinner/Spinner";
import PAGE_NAMES from "../../router/paths";

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
