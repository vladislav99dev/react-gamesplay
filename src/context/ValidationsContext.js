import { createContext, useContext, useState } from "react";

const ValidationsContext = createContext();

export const ValidationProvider = ({ children }) => {
  const [errors, setErrors] = useState([]);

  const clearErrors = () => {
    setErrors([]);
  };

  const setErrorsArr = (errorsArr) => {
    setErrors(errorsArr);
  };

  return (
    <ValidationsContext.Provider value={{ errors, clearErrors, setErrorsArr }}>
      {children}
    </ValidationsContext.Provider>
  );
};

export const useValidationsContext = () => {
    const validationsState = useContext(ValidationsContext);

    return validationsState;
}