import React, { useContext } from "react";
import { TextInput } from "@mantine/core";
import Button from "./Button";
import { AppContext, URL } from "context/context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const Signup = ({ close }: any) => {
  const { setIsLoginForm } = useContext<any>(AppContext);

  const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).max(24).required(),
    confirmPassword: yup
      .string()
      .when("password", (password, field) =>
        password ? field.required().oneOf([yup.ref("password")]) : field
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(schema),
  });

  const signup = async (data: any) => {
    delete data.confirmPassword;

    fetch(URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={handleSubmit((data) => {
        signup(data);
        close();
      })}
    >
      <div className="flex flex-row gap-10">
        <div>
          <TextInput
            withAsterisk
            label="First name"
            placeholder="Your first name"
            {...register("firstName")}
          />
          {errors.firstName && (
            <p className="font-semibold text-xs pl-1 text-red">
              You must enter a first name
            </p>
          )}
        </div>
        <div>
          <TextInput
            withAsterisk
            label="Last name"
            placeholder="Your last name"
            {...register("lastName")}
          />
          {errors.lastName && (
            <p className="font-semibold text-xs pl-1 text-red">
              You must enter a last name
            </p>
          )}
        </div>
      </div>
      <TextInput
        mt="md"
        withAsterisk
        label="Email"
        type="email"
        placeholder="Your Email"
        {...register("email")}
      />
      {errors.email && (
        <p className="font-semibold text-xs pl-1 text-red">
          You must enter a valid email
        </p>
      )}
      <TextInput
        mt="md"
        withAsterisk
        label="Password"
        placeholder="Password"
        type="password"
        {...register("password")}
      />
      {errors.password && (
        <p className="font-semibold text-xs pl-1 text-red">
          You must enter a valid password
        </p>
      )}
      <TextInput
        mt="md"
        type="password"
        withAsterisk
        label="Confirm Password"
        placeholder="Confirm Password"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <p className="font-semibold text-xs pl-1 text-red">
          the password doesn't match
        </p>
      )}
      <div className="flex flex-row justify-evenly">
        <Button label="Submit" type="submit" />
        <Button
          label="Login"
          btn="secondary"
          type="button"
          onClick={() => setIsLoginForm(true)}
        />
      </div>
    </form>
  );
};

export default Signup;
