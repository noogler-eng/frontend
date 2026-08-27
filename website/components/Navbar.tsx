"use client";

import SignInButton from "./buttons/SignInButton";
import { useSession } from "next-auth/react";
import SignOutButton from "./buttons/SignOutButton";
import ShareButton from "./buttons/ShareButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="h-screen w-1/3 flex flex-col justify-between px-8 py-12">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Personel Finance</h1>
        <h2 className="text-2xl pr-6 text-gray-400">
          Manage your personal finance in better way
        </h2>
        <h3 className="text-xl mt-6">About</h3>
      </div>
      <div className="flex flex-col items-start">
        <div className="flex">
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
        <ShareButton />
      </div>
    </div>
  );
}
