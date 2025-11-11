"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { FaRegUserCircle as UserPlaceholder } from "react-icons/fa";
import { FiLogOut as LogoutIcon } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className=" fixed top-0 w-full">
      <div className=" w-[90%] mx-auto py-6 flex items-center justify-between">
        <div className=" flex items-center gap-2">
          {session?.user.image ? (
            <Image
              width={40}
              height={40}
              src={session?.user.image}
              className=" rounded-full"
            />
          ) : (
            <UserPlaceholder color="white" size={30} />
          )}

          <span className=" text-white text-lg font-quicksand font-bold">
            {session?.user.name}
          </span>
        </div>

        <LogoutIcon
          color=" white"
          size={25}
          className=" hover:scale-110 duration-150"
          onClick={() => signOut({ callbackUrl: "/" })}
        />
      </div>
    </header>
  );
}
