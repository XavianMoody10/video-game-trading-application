import SignupForm from "@/components/signup-form";
import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
      <div className=" max-w-[350px] w-[90%] space-y-5">
        <SignupForm />

        <Link
          href={"/"}
          className=" text-white text-center block mx-auto hover:underline"
        >
          Already a member?
        </Link>
      </div>
    </main>
  );
}
