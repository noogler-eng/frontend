import { signIn } from "next-auth/react"

export default function SignInButton(){
    return <div>
        <button onClick={() => signIn("google")} className="googleBtnLogin">
            Sign in with Google
        </button>
    </div>
}