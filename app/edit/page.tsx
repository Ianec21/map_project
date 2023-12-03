import EditPage from "@/components/pages/EditPage";
import { supabase } from "@/lib/supabase";

const Edit = async() => {
    const { data: countries, error } = await supabase.from("countries").select();

    return <EditPage countries={countries}/>
}

export default Edit;