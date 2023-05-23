import { ChangeEvent } from "react";

import Input from "../../components/Input";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <section className="flex flex-col h-[100vh] items-center justify-center">
      <div className="w-full">
        <div className="flex justify-center mb-3">
          <Text type="h1" className="text-primary-500">
            Registration
          </Text>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full flex my-3 sm:w-[50%] sm:justify-center">
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-solid rounded-xl py-3 px-5"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full flex my-3 sm:w-[50%] sm:justify-center">
            <Input
              type="empid"
              name="employeeID"
              placeholder="Employee ID FEC****"
              className="w-full border border-solid rounded-xl py-3 px-5"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full flex my-3 sm:w-[50%] sm:justify-center">
            <Input
              type="email"
              name="email"
              placeholder="email@flyerssoft.com"
              className="w-full border border-solid rounded-xl py-3 px-5"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full flex my-3 sm:w-[50%] sm:justify-center">
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full border border-solid rounded-xl py-3 px-5"
              onChange={changeHandler}
            />
          </div>
          <div className="w-full flex my-3 sm:w-[50%] sm:justify-center">
            <Input
              type="conformPassword"
              name="conformPassword"
              placeholder="Conform Password"
              className="w-full border border-solid rounded-xl py-3 px-5"
              onChange={changeHandler}
            />
          </div>

          <div className="w-full border rounded-2xl mx-4 my-3 sm:w-[50%]">
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Text className="mr-3 text-bold" type="h3">
          Already have an account ?
        </Text>
        <Link className="text-sm" to="/">
          Login
        </Link>
      </div>
    </section>
  );
};

export default Register;
