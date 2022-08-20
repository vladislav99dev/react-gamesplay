import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../context/AuthContext";

import { IsNotLoggedIn } from "../hoc/userRoutesGuard";

import * as userServices from "../services/userServices";

const Logout = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  useEffect(()=> {
    userServices.logout(null,user.accessToken)
    .then((res)=> {
      logout();
      navigate("/");
    })
  },[])

  return null;
};

export default IsNotLoggedIn(Logout);

