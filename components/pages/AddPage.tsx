"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Button } from "../ui/button";

type TCountryData = {
    name: string;
    color: string;
    neighbours: TCountryData;
}

type TAddPage = {
    handleAdd: () => void;
}

const AddPage = ({ handleAdd }: TAddPage) => {
    const [countryData, setCountryData] = useState<TCountryData[]>([]);

    return (
        <main className="flex justify-center items-center h-screen flex-col gap-2">
            <div className="w-[90%] md:w-[60%] lg:w-[40%] flex flex-col gap-2">
                <p className="text-3xl font-bold text-left">Add new country</p>

                <form className="flex flex-col gap-2">
                    <Input placeholder="Country Name"/>
                    <Input placeholder="HEX Country Color ( random if empty )"/>
                    <Button>Add</Button>
                </form>
            </div>
        </main>
    )
}

export default AddPage;