"use client"

import SignInButton from "./buttons/SignInButton";
import { useSession } from "next-auth/react";
import SignOutButton from "./buttons/SignOutButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="flex justify-between items-center p-4 rounded-full my-6 mx-10 bg-gray-800">
      <div className="flex items-center mx-4">
        <h1 className="text-xl font-bold">Finances</h1>
      </div>
      <div className="flex items-center mx-4">
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  );
}
