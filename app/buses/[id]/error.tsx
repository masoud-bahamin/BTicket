"use client"

export default function ErrorBoundary(){
    return (
        <div
        className="w-full h-full p-10 flex justify-center items-center">
        <p className="border p-6 rounded-lg">!error   in page please refresh the page</p>
        </div>
    )
}