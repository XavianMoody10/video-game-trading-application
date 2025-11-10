"use client";

import FormButton from "./form-button";
import FormInput from "./form-input";

export default function SignupForm({ action }) {
  return (
    <form className=" space-y-4" action={action}>
      <div className=" space-y-2">
        <FormInput type={"text"} placeholder={"Username"} name={"username"} />
        <FormInput type={"text"} placeholder={"Email"} name={"email"} />
        <FormInput
          type={"password"}
          placeholder={"Password"}
          name={"password"}
        />
      </div>

      <FormButton>Create Account</FormButton>
    </form>
  );
}
