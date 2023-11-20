import AddPage from "@/components/pages/AddPage";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type TCountryData = {
    name: string;
    color: string;
    neighbours: TCountryData;
}

const Add: React.FC = () => {
    //in order to send a server function to a client component I need to set "use server"
    //and make the function async, that's how Next.JS handles it.
    const handleAddCountry = async() => {
        "use server";

        alert("Hey.");
    }

    return <AddPage handleAdd={handleAddCountry}/>
}

export default Add;