import { ChangeEvent, useState } from "react";

import Input from "../../components/Input";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const initialState = {
  name: "",
  empid: "",
  email: "",
  password: "",
  conformPassword: "",
};

const Register = () => {
  const [values, setValues] = useState<any>(initialState);
  const [errors, setErrors] = useState<any>(false);
  // const [success, setSuccess] = useState<any>(false);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validation = (values: any) => {
    const error = {
      name: "",
      empid: "",
      email: "",
      password: "",
      conformPassword: "",
    };
    const email_regex = /@flyerssoft\.com/i;

    const empid_regex = /FEC/i;

    if (values.name === "") {
      error.name = "Name is Required";
    }
    if (empid_regex.test(values.empid)) {
      error.empid = "Employe Id is same";
      // alert("authorized");
    } else if (values.empid === "") {
      error.empid = "Employe Id is required";
      // alert("please provide employee id");
    } else {
      error.empid = "Employe Id is not same";
      // alert("Employ id not same");
    }
    if (email_regex.test(values.email)) {
      alert("email flyers success");
    } else if (values.email === "") {
      error.email = "please provide email";
    } else {
      alert("unauthorised email");
    }
    return error;
  };

  const handleSubmit = () => {
    setErrors(validation(values));
  };

  return (
    <section className="flex flex-col h-screen items-center justify-center py-3 px-5">
      <div className="w-full sm:w-1/2">
        <div className="w-full flex justify-center items-center mb-3">
          <div className="w-[30%] sm:w-1/2">
            <img
              className="w-[75%] sm:w-[25%] rounded"
              src="../../../public/flyers_logo.jpeg"
              alt="fs-logo"
            />
          </div>
          <div className="w-full sm:w-3/4">
            <Text type="h1" className="text-primary-500">
              Registration
            </Text>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <div className="w-full sm:flex sm:gap-3">
            <div className="w-full flex flex-col my-3 sm:w-1/2 sm:justify-center">
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full border border-solid rounded-xl py-3 px-5"
                value={values.name}
                onChange={changeHandler}
                error={errors.name}
              />
            </div>
            <div className="w-full flex-col my-3 sm:w-[50%] sm:justify-center">
              <Input
                type="text"
                name="empid"
                value={values.empid}
                placeholder="Employee ID FEC****"
                className="w-full border border-solid rounded-xl py-3 px-5"
                onChange={changeHandler}
                error={errors.empid}
                // error={errorMessage.empid}
              />
            </div>
          </div>
          <div className="w-full flex-col my-3  sm:justify-center">
            <Input
              type="email"
              name="email"
              value={values.email}
              placeholder="email@flyerssoft.com"
              className="w-full border border-solid rounded-xl py-3 px-5"
              onChange={changeHandler}
              error={errors.email}
              // error={errorMessage.email}
            />
          </div>
          <div className="w-full  sm:flex sm:gap-3">
            <div className="w-full flex flex-col my-3 sm:w-[50%] sm:justify-center">
              <Input
                type="password"
                name="password"
                value={values.password}
                placeholder="Password"
                className="w-full border border-solid rounded-xl py-3 px-5"
                onChange={changeHandler}
              />
            </div>
            <div className="w-full flex flex-col my-3 sm:w-[50%] sm:justify-center">
              <Input
                type="password"
                name="conformPassword"
                value={values.conformPassword}
                placeholder="Conform Password"
                className="w-full border border-solid rounded-xl py-3 px-5"
                onChange={changeHandler}
              />
            </div>
          </div>
          <div className="w-full border rounded-2xl mx-4 my-3 ">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Text className="mr-3 text-bold" type="h3">
          Already have an account ?
        </Text>
        <Link className="text-sm" to="/login">
          Login
        </Link>
      </div>
    </section>
  );
};

export default Register;
