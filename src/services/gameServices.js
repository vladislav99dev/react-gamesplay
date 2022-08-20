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

export const gameRequester = (service, gameId, accessToken,data) => {
  let options = {};
  if (service === "DELETE") {
    Object.assign(options, {
      method: service,
      headers: {
        "content-type": "application/json",
        "X-Authorization": accessToken,
      },
    });
  } else if (service === "PUT") {
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

  return fetch(`${url}/data/games/${gameId}`, options);
};

export const deleteOne = gameRequester.bind(null, "DELETE");
export const editOne = gameRequester.bind(null, "PUT");
