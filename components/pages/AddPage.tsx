"use client";
import { Input } from "@/components/ui/input";
import { useState } from "react";

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
        <main>
            <form>
                <Input placeholder="Country Name"/>
            </form>
        </main>
    )
}

export default AddPage;