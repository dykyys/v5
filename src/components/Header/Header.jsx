import { NavLink, Outlet } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header className="relative w-screen bg-white py-2 shadow-sm shadow-slate-300">
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/movies">movies</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
