import { useAuthContext } from "../context/AuthContext";
import { useGameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";

import ErrorPage from "../components/ErrorPage";

export const isOwner = (Component) => {
  const WrapperComponent = (props) => {
    const { user } = useAuthContext();
    const { game } = useGameContext();
    const navigate = useNavigate();

    return user._id === game._ownerId ? <Component {...props} />  : <ErrorPage/> ;

  };
  return WrapperComponent;
};