import GoogleMaps from "@/components/GoogleMaps"
import MapToolbar from "@/components/MapToolbar";

const Map = () => {
    return (
        <main className="p-20 flex flex-col gap-2 flex-1 h-screen w-screen">
            <MapToolbar/>
            <GoogleMaps/>
        </main>
    )
}

export default Map;