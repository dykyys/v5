import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

export const HeaderLayout = () => {
  return (
    <div className=" ml-auto mr-auto ">
      <header className="relative w-screen bg-white py-2 shadow-sm shadow-slate-300">
        <div className="flex items-center justify-center">
          <Link
            css={'absolute left-5 hover:cursor-pointer text-5xl font-bold'}
            level={1}
            to="/"
            title="To Home page"
          >
            <span className="flex items-center gap-2 text-slate-700">MDB</span>
          </Link>

          <nav className="flex justify-center gap-5 rounded-full bg-slate-700 px-9 py-1 text-lg">
            <NavLink
              className="px-4 py-2 text-white transition-all duration-200"
              to={'/'}
              end
            >
              Home
            </NavLink>

            <NavLink
              className="px-4 py-2 text-white transition-all duration-200"
              to={'/movies'}
            >
              Movies
            </NavLink>
          </nav>
        </div>
      </header>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
