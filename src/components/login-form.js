"use client";

import FormButton from "./form-button";
import FormInput from "./form-input";

export default function LoginForm({ action }) {
  return (
    <form action={action} className=" space-y-4">
      <div className=" space-y-2">
        <FormInput type={"email"} placeholder={"Email"} name={"email"} />
        <FormInput
          type={"password"}
          placeholder={"Password"}
          name={"password"}
        />
      </div>
      <FormButton>Login</FormButton>
    </form>
  );
}
