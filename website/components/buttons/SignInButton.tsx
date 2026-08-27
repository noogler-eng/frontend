import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SignInButton() {
  return (
    <div onClick={() => signIn("google")} className="flex items-center justify-center gap-1 px-4 py-2 rounded cursor-pointer">
      <Image
        src="/google.png"
        alt="Google Logo"
        width={20}
        height={20}
        className="mr-2"
      />
      Sign in with Google
    </div>
  );
}
