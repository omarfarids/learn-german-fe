import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { TextInput } from "@mantine/core";
import Button from "./Button";
import { Buffer } from "buffer";
import { AppContext, URL } from "context/context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Login = ({ close }: any) => {
  const { setUser } = useContext<any>(AppContext);
  const [loginError, setLoginError] = useState("");

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  // user login function
  const login = async (data: any) => {
    fetch(URL + "/login", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(data.email + ":" + data.password).toString("base64"),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("firstName", data.body.firstName);
        localStorage.setItem("lastName", data.body.lastName);
        setUser({
          firstName: localStorage.getItem("firstName"),
          lastName: localStorage.getItem("lastName"),
        });
        setLoginError("");
        close();
      })
      .catch((err) =>
        setLoginError("You have entered a wrong Email or Password")
      );
  };

  return (
    <form
      className="flex flex-col items-stretch"
      onSubmit={handleSubmit((data) => {
        login(data);
      })}
    >
      <TextInput
        mt="md"
        withAsterisk
        label="Email"
        placeholder="Your Email"
        {...register("email")}
        required
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
        required
      />
      {errors.password && (
        <p className="font-semibold text-xs pl-1 text-red">
          You must enter a valid password
        </p>
      )}
      <p className="font-semibold text-xs p-3 text-center text-red">
        {loginError}
      </p>
      <Button label="Submit" type="submit" className="w-full" />
    </form>
  );
};

export default Login;
