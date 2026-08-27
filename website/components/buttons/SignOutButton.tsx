import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <div>
      <button
        onClick={() => {
          signOut();
        }}
        className=""
      >
        log out
      </button>
    </div>
  );
}
