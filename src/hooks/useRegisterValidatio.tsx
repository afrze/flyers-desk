export const validation = (values: any) => {
  const error = {
    name: "",
    empid: "",
    email: "",
    password: "",
    conformPassword: "",
  };
  const email_prefiex = "@flyerssoft.com";

  const empid_regex = "FEC";

  const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;

  if (values.name === "") {
    error.name = "Name is Required";
  }

  if (values.empid === "") {
    error.empid = "Employe Id is required";
  } else if (!values.empid.includes(empid_regex)) {
    error.empid = "Unauthorized entry";
  }

  if (values.email === "") {
    error.email = "Please provide email";
  } else if (!values.email.includes(email_prefiex)) {
    error.email = "Unauthorized email";
  }
  if (values.password === "") {
    error.password = "Password should not be empty";
  } else if (password_regex.test(values.password)) {
    error.conformPassword = "password matched";
  } else if (
    values.conformPassword === "" ||
    values.conformPassword !== values.password
  ) {
    error.conformPassword = "Password has to be same";
  }
  return error;
};
