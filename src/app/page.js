"use client";

import LoadingPageOverlay from "@/components/loading-page-overlay";
import LoginForm from "@/components/login-form";
import PageErrorMessage from "@/components/page-error-message";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const { status } = useSession();
  const [errorMessage, setErrorMessage] = useState({
    isOpen: false,
    message: "",
  });

  // Login process
  async function loginAction(formData) {
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email) {
      setErrorMessage({ isOpen: true, message: "Please enter email" });

      setTimeout(() => {
        setErrorMessage({
          isOpen: false,
          message: "Please enter email",
        });
      }, 5000);

      return;
    }

    if (!password) {
      setErrorMessage({ isOpen: true, message: "Please enter password" });

      setTimeout(() => {
        setErrorMessage({
          isOpen: false,
          message: "Please enter password",
        });
      }, 5000);

      return;
    }

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result.error) {
      setErrorMessage({ isOpen: true, message: result.error });

      return setTimeout(() => {
        setErrorMessage({
          isOpen: false,
          message: result.error,
        });
      }, 5000);
    }

    redirect("/dashboard");
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
          <LoginForm action={loginAction} />

          <Link
            href={"/signup"}
            className=" text-white text-center block mx-auto hover:underline"
          >
            Need an account?
          </Link>
        </div>
      </main>
    </>
  );
}
