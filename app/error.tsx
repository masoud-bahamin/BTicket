"use client"

import { useRouter } from "next/navigation"

export default function ErrorBoundary() {
    const router = useRouter()
    return (
        <div
            className="w-full h-full p-10 flex justify-center items-center">
            <p className="border p-6 rounded-lg">!error in page. please refresh the page</p>
            <button
             onClick={() => router.replace("/")}
             className="ml-5 bg-green-200 px-10 py-2.5 rounded-lg"
             >Refresh</button>
        </div>
    )
}