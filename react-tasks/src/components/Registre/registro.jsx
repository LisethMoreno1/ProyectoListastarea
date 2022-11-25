import "./App.css";
import { registerUser } from "./services/registerUser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React from "react";
import { useState } from "react";

const SignupSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().required().positive().integer(),
  password: yup.number().required().positive().integer(),
});

export function App() {
  const {
    register,
    handleSubmit,
    watch,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });

  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  function getPassword(e) {
    setPassword(e.target.value);
    console.log(password);
  }

  function confirmPassword(e) {
    let confirmar = e.target.value;
    console.log(confirmPass);
    if (password === confirmar) {
      console.log(confirmPass);
      setConfirmPass("matched");
      // setConfirmPass("Password matched");
    } else {
      console.log(confirmPass);
      setConfirmPass("Contraseña no concide");
    }
  }

  const [email, setEmail] = useState("");
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label htmlFor="email">Email</label>
        <input
          {...register("email")}
          placeholder="lis@hotmail.com"
          type="email"
        />
        {errors?.email?.type === "required" && (
          <p style={{ color: "red" }}>Este campo es obligatorio</p>
        )} */}

        <label htmlFor="registerEmail">Email</label>
        <input
          tabIndex={4}
          type="email"
          name="email"
          id="registerEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.firstName?.type === "required" && (
          <p style={{ color: "red" }}>Este campo es obligatorio</p>
        )}
        {errors?.firstName?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            El nombre no puede superar los 20 caracteres
          </p>
        )}
        {errors?.firstName?.type === "pattern" && (
          <p style={{ color: "red" }}>Sólo caracteres alfabéticos</p>
        )}

        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        {errors?.lastName?.type === "required" && (
          <p style={{ color: "red" }}>Este campo es obligatorio</p>
        )}
        {errors?.lastName?.type === "maxLength" && (
          <p style={{ color: "red" }}>
            El nombre no puede superar los 20 caracteres
          </p>
        )}
        {errors?.lastName?.type === "pattern" && (
          <p style={{ color: "red" }}>Sólo caracteres alfabéticos</p>
        )}

        <label>Age</label>
        <input type="number" {...register("age", { valueAsNumber: true })} />
        {errors.age && <p style={{ color: "red" }}>Ingresa tu edad </p>}

        <label>
          Password
          <input type="password" onChange={getPassword} />
          {errors.password && (
            <p style={{ color: "red" }}>Ingresa tu Password</p>
          )}
        </label>

        <label>
          Repeat Password
          <input type="password" onChange={confirmPassword} />
        </label>

        <p> {confirmPass} </p>

        <div>
          <label>
            <label htmlFor="isDeveloper"></label>
            <input
              type="checkbox"
              {...register("isDeveloper")}
              placeholder="luo"
              value="yes"
            />
            Accept terms & conditions: Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Pellentesque pharetra, tortor ac placerat
            elementum, neque libero luctus mi, ut efficitur nisl mauris at nisl.
            Suspendisse non neque et neque facilisis convallis. Praesent erat
            magna, sollicitudin eu porttitor ut, tincidunt sit amet urna.
            Vestibulum congue neque metus.
          </label>
          <span className="error" role="alert"></span>
        </div>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
