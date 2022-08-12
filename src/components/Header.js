import { Link, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link className="home" to={"/"}>
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to={"/games/catalog"}>All Games</Link>

        <div id="user">
          <Link to={"/create"}>Create Game</Link>
          <Link to={"/users/logout"}>Logout</Link>
        </div>
        <div id="guest">
          <Link to={"/users/login"}>Login</Link>
          <Link to={"/users/register"}>Register</Link>
        </div>
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
