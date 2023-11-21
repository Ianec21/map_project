"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { TUser } from "@/app/auth/page";

type TAuthForm = {
    handleSignIn: (authData: TUser) => void;
    handleSignUp: (authData: TUser) => void;
}

const Auth = ({
    handleSignIn,
    handleSignUp
}: TAuthForm) => {
    const [authError, setAuthError] = useState<string | null>(null);
    const [authData, setAuthData] = useState<TUser>();

    const handleUpdate = (email: string | null, password: string | null) => {
        if(email && !password){
            setAuthData((prev: any) => {
                return {
                    ...prev,
                    email: email
                }
            })
        } else if(password && !email){
            setAuthData((prev: any) => {
                return {
                    ...prev,
                    password: password
                }
            })
        }
    }

    return (
        <form className="w-[90%] md:w-[50%] lg:w-[30%] flex gap-2 flex-col">
            <p className="text-3xl font-bold">Auth</p>
            <Input onChange={(e) => handleUpdate(e.target.value, null)} placeholder="E-Mail" required/>
            <Input onChange={(e) => handleUpdate(null, e.target.value)} placeholder="Password" type="password" required/>
            <Button onClick={() => handleSignIn(authData!)}>Sign In</Button>
            <Button onClick={() => handleSignUp(authData!)}>Sign Up</Button>
        </form>
    )
}

export default Auth;