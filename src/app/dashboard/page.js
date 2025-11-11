import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  return (
    <main className="bg-linear-to-b from-black to-gray-900 min-h-screen flex items-center justify-center text-white">
      <p>
        Welcome, <span className=" font-extrabold">{session.user.name}</span>
      </p>
    </main>
  );
}
