import { signIn } from "next-auth/react"

export default function SignInButton(){
    return <div>
        <button onClick={() => signIn("google")} className="bg-blue-500 text-white px-4 py-2 rounded">
            Sign in with Google
        </button>
    </div>
}