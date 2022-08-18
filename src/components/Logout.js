import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import * as userRequester from "../services/userServices";

const Logout = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    userRequester
      .logout(null, user.accessToken)
      .then((res) => {
        logout();
        navigate("/");
      })
      .catch((err) => {
        // should render components with error message
        console.log(err);
        alert(err.statusText);
      });
  }, []);

  return null;
};

export default Logout;
