import AddPage from "@/components/pages/AddPage";
import getCountryCoordinates from "@/lib/geocode";
import { generateRandomHexColor, isHexColorCode } from "@/lib/utils";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type TCountryData = {
    id: string;
    name: string;
    color: string;
    coordinates: {
        lat: number;
        lng: number;
    }
}

const Add = async({
    searchParams
}: { searchParams: { message: string }} ) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    //checking if the user is logged in.
    const { data: user } = await supabase.auth.getUser();
    if(!user){
        return redirect("/auth");
    }

    //in order to send a server function to a client component I need to set "use server"
    //and make the function async, that's how Next.JS handles it.
    const handleAddCountry = async(countryData: TCountryData) => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);
        
        if(countryData.name.length <= 0){
            return redirect("/add?message=Please enter a country name");
        }

        try {
            const coordinates = await getCountryCoordinates(countryData.name);
            
            countryData = {
                ...countryData,
                coordinates: {
                    lat: coordinates.lat,
                    lng: coordinates.lng
                }
            }
        } catch (err: any) {
            return redirect("/add?message=" + err.message);
        }

        const { data: userData } = await supabase.auth.getUser();
        if(userData.user){
            let { data, error } = await supabase.from("countries").insert({
                name: countryData.name,
                color: isHexColorCode(countryData.color) ? countryData.color : generateRandomHexColor(),
                user_id: userData.user.id,
                lat: countryData.coordinates.lat,
                lng: countryData.coordinates.lng
            });

            if(error){
                return redirect("/add?message=Could not add new country")
            } else {
                return redirect("/map");
            }
        } else return redirect("/auth");
    }

    return <AddPage handleAdd={handleAddCountry} errorMessage={searchParams.message}/>
}

export default Add;