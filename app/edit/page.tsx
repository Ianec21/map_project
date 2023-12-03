import EditPage from "@/components/pages/EditPage";
import { TCountryData } from "../add/page";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

//disabling caching for this page, because it seems like next js is caching only 1 row..
//and it doesn't load all rows from supabase
export const dynamic = 'force-dynamic';

const Edit = async({
    searchParams
}: { searchParams: { message: string }}) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    //checking if the user is logged in.
    const { data: user } = await supabase.auth.getUser();
    if(!user){
        return redirect("/auth");
    }

    const { data: countries, error } = await supabase.from("countries").select();

    const handleEdit = async(country: TCountryData) => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const { data, error } = await supabase.from("countries").update({...country}).eq("id", country.id);

        if(!error){
            redirect("/map");
        } else {
            redirect("/edit?message=" + error.message)
        }
    }

    const handleDelete = async(country: TCountryData) => {
        "use server";

        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        await supabase.from("countries").delete().eq("id", country.id);
    }

    return <EditPage countries={countries} errorMessage={searchParams.message} handleEdit={handleEdit} handleDelete={handleDelete}/>
}

export default Edit;