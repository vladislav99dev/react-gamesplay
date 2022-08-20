const validate = (service, data) => {
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

export const validateCreateAndEdit = (data) => {
  let errorMessages = [];
  if(data.title.length < 3){
    errorMessages.push('Game title should be more than 2 characters.')
  }
  if(data.category.length < 3){
    errorMessages.push('Game category should be more than 2 characters.')
  }
  if(data.maxLevel < 10){
    errorMessages.push('Game max level should be at least 10.')
  }
  if(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(data.imageUrl) === false){
    errorMessages.push('You should enter valid image URL.')
  }
  if(data.summary.length < 10){
    errorMessages.push('Data summary should be more than 10 characters.')
  }
  return errorMessages;
}



export const validateRegister = validate.bind(null, "register");
export const validateLogin = validate.bind(null, "login");
