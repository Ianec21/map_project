import GoogleMaps from "@/components/GoogleMaps"
import MapToolbar from "@/components/MapToolbar";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

//disabling caching for this page, because it seems like next js is caching only 1 row..
//and it doesn't load all rows from supabase
export const dynamic = 'force-dynamic';

const Map = async() => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    let { data: countries, error } = await supabase.from("countries").select();

    return (
        <main className="p-20 flex flex-col gap-2 flex-1 h-screen w-screen">
            <MapToolbar/>
            <GoogleMaps countries={countries}/>
        </main>
    )
}

export default Map;