import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as userServices from "../services/userServices";
import * as userAuth from "../services/userAuth";

const Login = () => {
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    userServices
      .login(data)
      .then((result) => {
        if (result.message) {
          throw new Error(result.message);
        } else {
          userAuth.setUserInfo(result);
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={loginHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          {error.hasOwnProperty("message") ? (
            <p style={{ color: "rgb(235, 157, 142)", fontSize: "25px" }}>
              {error.message}
            </p>
          ) : (
            ""
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Sokka@gmail.com"
            defaultValue={""}
          />

          <label htmlFor="login-pass">Password:</label>
          <input
            type="password"
            id="login-password"
            name="password"
            defaultValue={""}
          />
          <input type="submit" className="btn submit" />
          <p className="field">
            <span>
              If you don't have profile click <a href="#">here</a>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
