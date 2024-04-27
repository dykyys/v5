import { Suspense } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { RiMovie2Fill } from "react-icons/ri";

import Heading from "../../components/Heading/Heading";
import Spinner from "../../components/Spinner/Spinner";
import PAGE_NAMES from "../../router/paths";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogoClick = () => {
    navigate("/", { state: { from: location } });
  };

  return (
    <div >
      <header>
        <div >
         

          <nav>
            <NavLink
            
              to={PAGE_NAMES.homepage}
             
            >
              Home
            </NavLink>

            <NavLink
             
              to={PAGE_NAMES.movies}
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
