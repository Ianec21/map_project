"use client";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import GoogleMaps from "../GoogleMaps";

const HomePage: React.FC = () => {
    const router = useRouter();

    return (
        <main className="flex h-screen justify-center items-center flex-col gap-5">
            <p className="text-6xl font-bold">Countries<span className="animate-pulse absolute ">.</span></p>
            <Button onClick={() => router.push("/map")}>Show Map</Button>
        </main>
    )
}

export default HomePage;