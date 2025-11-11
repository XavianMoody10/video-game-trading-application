import { getServerSession } from "next-auth";
import Header from "@/components/header";
import NotAuthorizedMessage from "@/components/not-authorized-message";

export default async function DashboardPage() {
  const session = await getServerSession();

  return (
    <>
      {session ? (
        <>
          <Header />

          <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex items-center justify-center">
            <p className=" text-white">
              Welcome,{" "}
              <span className=" font-extrabold">{session?.user.name}</span>
            </p>
          </main>
        </>
      ) : (
        <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex flex-col items-center justify-center">
          <NotAuthorizedMessage href={"/"} />
        </main>
      )}
    </>
  );
}
