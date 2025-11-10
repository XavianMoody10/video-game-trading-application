import LoginForm from "@/components/login-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className=" max-w-[300px] w-[90%] space-y-5">
        <LoginForm />

        <Link
          href={"/signup"}
          className=" text-white text-center block mx-auto hover:underline"
        >
          Need an account?
        </Link>
      </div>
    </main>
  );
}
