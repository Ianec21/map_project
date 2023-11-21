import AddPage from "@/components/pages/AddPage";
import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

const Add: React.FC = async() => {
    //checking if the user is logged in.
    const { data: user } = await supabase.auth.getUser();
    if(!user.user){
        return redirect("/auth");
    }

    //in order to send a server function to a client component I need to set "use server"
    //and make the function async, that's how Next.JS handles it.
    const handleAddCountry = async() => {
        "use server";
    }

    return <AddPage handleAdd={handleAddCountry}/>
}

export default Add;