import { Suspense } from "react";
import { Link, Outlet} from "react-router-dom";


const HeaderLayout = () => {


  return (
    <div >
      <header>
        <div >
         

          <nav>
            <Link
            
             to="/"
             
            >
              Home
            </Link>

            <Link
             
              to="/movies"
            >
              Movies
            </Link>
          </nav>
        </div>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default HeaderLayout;
