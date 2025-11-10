"use client";

import FormButton from "./form-button";
import FormInput from "./form-input";

export default function LoginForm({ action }) {
  return (
    <form className=" space-y-4" action={action}>
      <div className=" space-y-2">
        <FormInput type={"email"} placeholder={"Email"} />
        <FormInput type={"password"} placeholder={"Password"} />
      </div>
      <FormButton>Login</FormButton>
    </form>
  );
}
