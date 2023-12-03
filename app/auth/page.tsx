import Auth from "@/components/Auth"
import { createClient } from '@/utils/supabase/server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type TUser = {
    email: string;
    password: string;
}

const SignIn = async({
    searchParams
}: { searchParams: { message: string }}) => {
    let errorMessage: string = "";

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const handleSignIn = async(authData: TUser) => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        let { data, error } = await supabase.auth.signInWithPassword(authData);

        if(!error){
            return redirect("/");
        } else {
            return redirect('/auth?message=Could not authenticate user')
        }
    }

    const handleSignUp = async(authData: TUser, emailRedirect: string) => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        let { data, error } = await supabase.auth.signUp({
            ...authData,
            options: {
                emailRedirectTo: emailRedirect
            }
        });
        if(!error){
            return redirect('/auth?message=Check email to continue sign in process')
        } else {
            return redirect('/auth?message=Could not sign up user')
        }
    }

    return (
        <main className="w-screen h-screen flex justify-center items-center">
            <Auth handleSignIn={handleSignIn} handleSignUp={handleSignUp} infoText={searchParams.message}/>
        </main>
    )
}

export default SignIn