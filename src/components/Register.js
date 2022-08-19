import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { IsLoggedIn } from "../hoc/IsLoggedIn";
import * as userServices from "../services/userServices";
import { validateRegister } from "../services/formValidationServices";
import { useValidationsContext } from "../context/ValidationsContext";
import ErrorMessage from "../partials/ErrorMessage";

const Register = () => {
  const { errors, clearErrors, setErrorsArr } = useValidationsContext();
  const navigate = useNavigate();

  useEffect(()=> {
    return ()=> {
      clearErrors();
    }
  },[])

  const registerHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const errorMessages = validateRegister(data);

    if (errorMessages.length > 0) {
      setErrorsArr(errorMessages);
    } else {
      userServices.register(data).then((result) => {
        if (result.message) {
          setErrorsArr([result.message]);
        } else {
          clearErrors();
          navigate("/users/login", { replace: true });
        }
      });
      clearErrors();
    }
  };

  return (
    <section id="register-page" className="content auth">
      <form id="register" onSubmit={registerHandler}>
        <div className="container">
          <div className="brand-logo"></div>
          <h1>Register</h1>
          {errors.length > 0
            ? errors.map((err) => <ErrorMessage key={err} message={err} />)
            : null}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="maria@email.com"
          />

          <label htmlFor="pass">Password:</label>
          <input type="password" name="password" id="register-password" />

          <label htmlFor="con-pass">Confirm Password:</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />

          <input className="btn submit" type="submit" />

          <p className="field">
            <span>
              If you already have profile click{" "}
              <Link to="/users/login">here</Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default IsLoggedIn(Register);
