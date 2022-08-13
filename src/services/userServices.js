import { url } from "../utils/constans";

export const login = (data) => {
    return fetch(`${url}/users/login`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
    .then((response) => response.json())
}