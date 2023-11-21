"use client";
import Link from "next/link";
import { Button } from "./ui/button"

const MapToolbar = () => {
    return (
        <div>
            <Link href="/add"><Button>Add Country</Button></Link>
        </div>
    )
}

export default MapToolbar;