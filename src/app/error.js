"use client"

import { useEffect } from "react"

export default function Error({ error, reset }) {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return <div class="text-center mt-10">
        <h1>Somthing went wrong!</h1>
        <button class="hover:text-amber-600" onClick={() => reset()}>Try Again</button>
    </div>
}
