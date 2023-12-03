import EditPage from "@/components/pages/EditPage";
import { supabase } from "@/lib/supabase";
import { TCountryData } from "../add/page";
import { redirect } from "next/navigation";

const Edit = async({
    searchParams
}: { searchParams: { message: string }}) => {
    const { data: countries, error } = await supabase.from("countries").select();

    const handleEdit = async(country: TCountryData) => {
        "use server";
        const { data, error } = await supabase.from("countries").update({...country}).eq("id", country.id);

        if(!error){
            redirect("/map");
        } else {
            redirect("/edit?message=" + error.message)
        }
    }

    const handleDelete = async(country: TCountryData) => {
        "use server";
        const { data, error } = await supabase.from("countries").delete().eq("id", country.id);

        if(!error){
            redirect("/map");
        } else {
            redirect("/edit?message=" + error.message)
        }
    }

    return <EditPage countries={countries} errorMessage={searchParams.message} handleEdit={handleEdit}/>
}

export default Edit;