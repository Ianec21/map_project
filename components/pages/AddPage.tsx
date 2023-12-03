"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "../ui/button";
import { TCountryData } from "@/app/add/page";

type TAddPage = {
    handleAdd: (countryData: TCountryData) => void;
    errorMessage: string;
}

const AddPage = ({ handleAdd, errorMessage }: TAddPage) => {
    const [countryData, setCountryData] = useState<TCountryData>({
        id: "",
        name: "",
        color: "",
        coordinates: {
            lat: 0,
            lng: 0,
        }
    });

    const updateCountryData = (name: string | null, color: string | null) => {
        if(name && !color){
            setCountryData((prev) => {
                return {
                    ...prev,
                    name: name
                }
            })
        } else if(color && !name){
            setCountryData((prev) => {
                return {
                    ...prev,
                    color: color
                }
            })
        }
    }

    return (
        <main className="flex justify-center items-center h-screen flex-col gap-2">
            <div className="w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-2">
                <p className="text-3xl font-bold text-left">Add new country</p>
                <p>{errorMessage}</p>
                <form className="flex flex-col gap-2">
                    <Input onChange={(e) => updateCountryData(e.target.value, null)} placeholder="Country Name"/>
                    <Input onChange={(e) => updateCountryData(null, e.target.value)} placeholder="HEX Country Color ( random if empty )"/>
                    <Button type="button" onClick={() => handleAdd(countryData!)}>Add</Button>
                </form>
            </div>
        </main>
    )
}

export default AddPage;