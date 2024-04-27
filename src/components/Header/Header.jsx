import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/country">Countries</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
