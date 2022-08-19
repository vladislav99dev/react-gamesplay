import { useAuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const IsLoggedIn = (Component) => {
  const WrapperComponent = (props) => {
    const { user } = useAuthContext();

    return !user.email ? <Component {...props} /> : <Navigate to={"/"} />;
  };
  return WrapperComponent;
};
