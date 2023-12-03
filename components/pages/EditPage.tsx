"use client";
import { TCountryData } from "@/app/add/page";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useRef, useEffect } from "react";
import { Input } from "../ui/input";

//disabling caching for this page, because it seems like next js is caching only 1 row..
//and it doesn't load all rows from supabase
export const dynamic = 'force-dynamic';

type TEditPage = {
    countries: any[] | null;
    errorMessage?: string;
    handleEdit: (country: TCountryData) => void;
}

const EditPage = ({ countries, errorMessage, handleEdit }: TEditPage) => {
    const [countryData, setCountryData] = useState<TCountryData>({
        id: "",
        name: "",
        color: "",
        coordinates: {
            lat: 0,
            lng: 0,
        }
    });

    useEffect(() => {
        if(nameRef.current){
            nameRef.current.value = countryData.name;
        }

        if(colorRef.current){
            colorRef.current.value = countryData.color;
        }
    }, [countryData]);

    const nameRef = useRef<HTMLInputElement>(null);
    const colorRef = useRef<HTMLInputElement>(null);

    if(!countries || countries.length <= 0){
        return <main className="flex justify-center items-center">
            <h1>No Countries Found</h1>
            <Link href="/map" className="w-[fit-content]"><Button className="w-full">Back</Button></Link>
        </main>
    }

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
        <main className="relative p-20 flex gap-5 flex-1 h-screen w-screen justify-around items-center">
            <Link href="/map" className="absolute top-20 left-20">
                <Button className="w-full">Back</Button>
            </Link>

            <div className="grow">
                <div className="w-[fit-content]">
                    <p className="font-bold text-2xl">Available Countries</p>
                    <p className="font-regular text-sm opacity-50 border-b-2 pb-2 mb-2">Select a country from below</p>
                    <div>
                        {countries.map((country: TCountryData) => 
                        <div 
                            key={`country_${country.name}`}
                            onClick={() => setCountryData(country)}
                            className="p-2 hover:cursor-pointer rounded-md hover:bg-primary-foreground"
                        >
                            <p className="hover:color-primary-foreground">{country.name}</p>
                        </div>)}
                    </div>
                </div>
            </div>

            <form className="flex flex-col gap-2 grow">
                {errorMessage ? <p>{errorMessage}</p> : <></>}
                <Input ref={nameRef} onChange={(e) => updateCountryData(e.target.value, null)} placeholder="Country Name"/>
                <Input ref={colorRef} onChange={(e) => updateCountryData(null, e.target.value)} placeholder="HEX Country Color ( random if empty )"/>
                <Button type="button" onClick={() => handleEdit(countryData)}>Edit</Button>
            </form>
        </main>
    )
}

export default EditPage;