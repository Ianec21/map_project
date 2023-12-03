"use client";
import Link from "next/link";
import { Button } from "./ui/button"

const MapToolbar = () => {
    return (
        <div className="flex gap-2">
            <Link href="/add"><Button>Add Country</Button></Link>
            <Link href="/edit"><Button>Edit Country</Button></Link>
        </div>
    )
}

export default MapToolbar;