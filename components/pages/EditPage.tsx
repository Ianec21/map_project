import { TCountryData } from "@/app/add/page";
import Link from "next/link";

type TEditPage = {
    countries: any[] | null;
}

const EditPage = ({ countries }: TEditPage) => {

    if(!countries){
        return <main>
            <h1>No Countries Found</h1>
            <Link href="/">Go Back</Link>
        </main>
    }

    return (
        <main>
            <div>
                <p>Available Countries</p>
                <div>
                    {countries.map((country: TCountryData) => <div key={`country_${country.name}`}>
                        <p>{country.name}</p>
                    </div>)}
                </div>
            </div>
        </main>
    )
}

export default EditPage;