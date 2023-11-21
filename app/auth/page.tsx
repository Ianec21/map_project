import Auth from "@/components/Auth"
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

export type TUser = {
    email: string;
    password: string;
}

const SignIn = () => {
    const handleSignIn = async(authData: TUser) => {
        "use server";
        let { data, error } = await supabase.auth.signInWithPassword(authData);
        console.log(data);
        if(!error){
            return redirect("/");
        }
    }

    const handleSignUp = async(authData: TUser) => {
        "use server";
        let { data, error } = await supabase.auth.signUp(authData);
        if(error){
            return redirect("/login")
        }
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <Auth handleSignIn={handleSignIn} handleSignUp={handleSignUp}/>
        </main>
    )
}

export default SignIn