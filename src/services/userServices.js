import { url } from "../utils/constans";

const userRequester = (service, data, accessToken) => {
  let options = {};
  let fetchUrl = "";
  if (service === "login") {
    Object.assign(options, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    fetchUrl = `${url}/users/login`;
  } else if (service === "logout") {
    Object.assign(options, {
      method: "GET",
      headers: {
        "X-Authorization": accessToken,
      },
    });
    fetchUrl = `${url}/users/logout`;
  } else if (service === "register") {
    Object.assign(options, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    fetchUrl = `${url}/users/register`;
  }
  return fetch(fetchUrl, options).then((res) => {
    // SERVER WORKS IN A WEIRD WAY WITH LOGOUT REQUESTS
    if (service === "logout") {
      if (res.ok === true) {
        return res;
      } else {
        return res.json();
      }
    } else {
      return res.json();
    }
  });
};

export const login = userRequester.bind(null, "login");
export const logout = userRequester.bind(null, "logout");
export const register = userRequester.bind(null, "register");

