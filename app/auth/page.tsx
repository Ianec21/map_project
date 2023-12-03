import Auth from "@/components/Auth"
import { supabase } from "@/lib/supabase";
import { AuthError } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export type TUser = {
    email: string;
    password: string;
}

const SignIn = ({
    searchParams
}: { searchParams: { message: string }}) => {
    let errorMessage: string = "";

    const handleSignIn = async(authData: TUser) => {
        "use server";
        let { data, error } = await supabase.auth.signInWithPassword(authData);

        if(!error){
            return redirect("/");
        } else {
            return redirect('/auth?message=Could not authenticate user')
        }
    }

    const handleSignUp = async(authData: TUser) => {
        "use server";
        let { data, error } = await supabase.auth.signUp(authData);
        console.log(data);
        if(!error){
            return redirect('/auth?message=Check email to continue sign in process')
        } else {
            return redirect('/login?message=Could not sign up user')
        }
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <Auth handleSignIn={handleSignIn} handleSignUp={handleSignUp} infoText={searchParams.message}/>
        </main>
    )
}

export default SignIn