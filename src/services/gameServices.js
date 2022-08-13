import { url } from "../utils/constans";

export const getAll = () => {
  return fetch(`${url}/data/games?sortBy=_createdOn%20desc`).then((response) =>
    response.json()
  );
};
export const getOne = (gameId) => {
  return fetch(`${url}/data/games/${gameId}`).then((response) =>
    response.json()
  );
};
