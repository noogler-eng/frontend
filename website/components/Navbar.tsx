"use client"

import SignInButton from "./buttons/SignInButton";
import { useSession } from "next-auth/react";
import SignOutButton from "./buttons/SignOutButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div>
      Navbar
      <div>
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </div>
  );
}
