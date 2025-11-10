"use client";

import SignupForm from "@/components/signup-form";
import Link from "next/link";
import { createUserAccount } from "../../actions/users.actions";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import LoadingPageOverlay from "@/components/loading-page-overlay";
import PageErrorMessage from "@/components/page-error-message";

export default function SignupPage() {
  const { status } = useSession();

  const [errorMessage, setErrorMessage] = useState({
    isOpen: false,
    message: "",
  });

  async function signupAction(formData) {
    const data = {
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    if (!data.username) {
      setErrorMessage({ isOpen: true, message: "Please create a username" });

      setTimeout(() => {
        setErrorMessage({ isOpen: false, message: "Please create a username" });
      }, 5000);

      return;
    }

    if (data.username.length < 5) {
      setErrorMessage({
        isOpen: true,
        message: "Username must be atleast 5 characters long",
      });

      setTimeout(() => {
        setErrorMessage({
          isOpen: false,
          message: "Username must be atleast 5 characters long",
        });
      }, 5000);

      return;
    }

    if (!data.email) {
      setErrorMessage({ isOpen: true, message: "Please enter an email" });

      setTimeout(() => {
        setErrorMessage({ isOpen: false, message: "Please enter an email" });
      }, 5000);

      return;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
      setErrorMessage({ isOpen: true, message: "Email is invalid" });

      setTimeout(() => {
        setErrorMessage({ isOpen: false, message: "Email is invalid" });
      }, 5000);

      return;
    }

    if (!data.password) {
      setErrorMessage({ isOpen: true, message: "Please create a password" });

      setTimeout(() => {
        setErrorMessage({ isOpen: false, message: "" });
      }, 5000);

      return;
    }

    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(
        data.password
      )
    ) {
      setErrorMessage({
        isOpen: true,
        message:
          "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one symbol.",
      });

      setTimeout(() => {
        setErrorMessage({
          isOpen: false,
          message:
            "Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, one number, and one symbol.",
        });
      }, 8000);

      return;
    }

    const response = await createUserAccount(data);

    const results = JSON.parse(response);

    await signIn("credentials", {
      email: results.email,
      password: results.password,
      callbackUrl: "/dashboard",
    });
  }

  return (
    <>
      {status === "loading" && <LoadingPageOverlay />}

      <PageErrorMessage
        isOpen={errorMessage.isOpen}
        message={errorMessage.message}
      />

      <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
        <div className=" max-w-[350px] w-[90%] space-y-5">
          <SignupForm action={signupAction} />

          <Link
            href={"/"}
            className=" text-white text-center block mx-auto hover:underline"
          >
            Already a member?
          </Link>
        </div>
      </main>
    </>
  );
}
