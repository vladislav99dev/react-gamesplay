import { Link, useNavigate } from "react-router-dom";

import * as userServices from "../services/userServices";
import ErrorMessage from "../partials/ErrorMessage";
import { useAuthContext } from "../context/AuthContext";
import { useValidationsContext } from "../context/ValidationsContext";

const Login = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { errors, clearErrors, setErrorsArr } = useValidationsContext();

  const loginHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    userServices
      .login(data)
      .then((result) => {
        if (result.message) {
          setErrorsArr([result.message]);
        } else {
          login(result);
          clearErrors();
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section id="login-page" className="auth">
      <form id="login" onSubmit={loginHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Login</h1>
          {errors.length > 0
            ? errors.map((err) => <ErrorMessage key={err} message={err} />)
            : null}
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
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
