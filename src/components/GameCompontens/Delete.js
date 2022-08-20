import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";
import * as gameService from "../../services/gameServices";

const Delete = () => {
  const { gameId } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        let response = await gameService.deleteOne(gameId, user.accessToken);
        if (response.ok !== true) {
          let jsonResult = await response.json();
          throw new Error(jsonResult.message);
        } else {
          navigate(-2);
        }
      } catch (err) {
        console.log(err);
        navigate(-2)
        alert('Invalid accessToken, you should re-login')
      }
    })();
  }, []);

  return null;
};

export default Delete;
