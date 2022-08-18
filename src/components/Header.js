import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {
  const { user } = useAuthContext();

  const guestNavigation = (
    <div id="guest">
      <Link to={"/users/login"}>Login</Link>
      <Link to={"/users/register"}>Register</Link>
    </div>
  );

  const userNavigation = (
    <div id="user">
      <Link to={"/games/create"}>Create Game</Link>
      <Link to={"/users/logout"}>Logout</Link>
    </div>
  );

  return (
    <header>
      <h1>
        <Link className="home" to={"/"}>
          GamesPlay
        </Link>
      </h1>
      <nav>
        <Link to={"/games/catalog"}>All Games</Link>
        {user.email ? userNavigation : guestNavigation}
      </nav>
      <Outlet />
    </header>
  );
};

export default Header;
