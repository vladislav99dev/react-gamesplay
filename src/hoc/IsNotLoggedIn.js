import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const IsNotLoggedIn = (Component) => {
  const WrapperComponent = (props) => {
    const { user } = useAuthContext();
    return !user.email ? <Navigate to={"/users/login"} /> : <Component {...props} />;

  };
  return WrapperComponent;
};