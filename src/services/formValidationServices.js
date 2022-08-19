export const validate = (service, data) => {
  let errorMessages = [];
  if (service === "register") {
    if (data["password"] !== data["confirm-password"]) {
      errorMessages.push("Passwords doesn't match!");
    }
    if (data["password"].length < 6) {
      errorMessages.push("Password should be more than 5 characters!");
    }
  }

  if (
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email) === false
  ) {
    errorMessages.push("You should enter valid email!");
  }

  return errorMessages;
};

export const validateRegister = validate.bind(null, "register");
export const validateLogin = validate.bind(null, "login");
