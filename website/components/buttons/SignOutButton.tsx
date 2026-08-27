import { signOut } from "next-auth/react"

export default function SignOutButton(){
    return <div>
        <button onClick={() => signOut()} className="bg-red-500 text-white px-4 py-2 rounded">
            log out
        </button>
    </div>
}