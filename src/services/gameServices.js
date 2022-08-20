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

export const gameRequester = (service, gameId, accessToken, data) => {
  let options = {};
  let fetchUrl = `${url}/data/games/${gameId}`;
  if (service === "DELETE") {
    Object.assign(options, {
      method: service,
      headers: {
        "content-type": "application/json",
        "X-Authorization": accessToken,
      },
    });
  } else if (service === "PUT" || service === "POST") {
    Object.assign(options, {
      method: service,
      headers: {
        "content-type": "application/json",
        "X-Authorization": accessToken,
      },
      body: JSON.stringify({
        title: data.title,
        category: data.category,
        maxLevel: data.maxLevel,
        imageUrl: data.imageUrl,
        summary: data.summary,
      }),
    });
  }

  if (service === "POST") {
    fetchUrl = `${url}/data/games`;
  }

  return fetch(fetchUrl, options);
};

export const deleteOne = gameRequester.bind(null, "DELETE");
export const editOne = gameRequester.bind(null, "PUT");
export const createOne = gameRequester.bind(null, "POST");

