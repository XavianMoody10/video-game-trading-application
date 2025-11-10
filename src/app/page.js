"use client";

import LoginForm from "@/components/login-form";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

export default function Home() {
  const { status } = useSession();

  return (
    <>
      {status === "loading" && (
        <div className=" fixed top-0 left-0 right-0 bottom-0 bg-black/55 flex items-center justify-center">
          <ClipLoader color="white" size={30} />
        </div>
      )}

      <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
        <div className=" max-w-[350px] w-[90%] space-y-5">
          <LoginForm />

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
