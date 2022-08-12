let url = 'http://localhost:3030';

export const getAll = () => {
  return  fetch(`${url}/data/games?sortBy=_createdOn%20desc`)
    .then((response) => response.json())
}