import Head from "next/head";
import Image from "next/image";
import data from "../../data.json"
import { useState } from "react";

const colorMap = {
    "Reaction-bg": "red",
    "Memory-bg": "yellow",
    "Verbal-bg": "teal",
    "Visual-bg": "blue"
} as const

export default function Index() {
    const [items] = useState(data);


    return (
        <>
            <main className="bg-white min-h-screen w-screen md:flex md:justify-center md:items-center
              md:mx-auto">
                <article className="md:min-h-full md:rounded-3xl  md:max-w-screen-sm min-h-screen shadow-xl flex flex-col md:flex-row g-3 ">
                    <div className="md:flex-initial md:w-5/12  text-white rounded-b-3xl flex gap-2  md:rounded-3xl flex-col items-center justify-center p-5 md:items-center bg-div">
                        <h3 className="flex-1">Your result</h3>
                        <p className="flex-initial flex flex-col items-center text-center justify-center gap-1 rounded-full w-32 h-32 bg-circle shadow-lg">
                            <span className="text-5xl ">76</span>
                            <span className="text-xs text-gray-300 ">of&ensp;100</span>
                        </p>
                        <h2 className="font-extrabold text-xl">Great</h2>
                        <p className="p-1 text-center text-sm text-gray-200">Your scored higher than 65% of the people who have taken these tests</p>
                    </div>
                    <div className="md:flex-1 flex-grow  flex flex-col gap-4 text-black font-semibold   p-4 justify-between">

                        <div className="flex  flex-col gap-4 md:flex-none ">
                            <h2 className="flex-initial font-bold text-gray-800">Summary</h2>
                            {items.map((item) => (
                                <div key={item.category}
                                    className={`gap-3 p-3 rounded-lg ${colorMap[item.category + "-bg" as keyof typeof colorMap]} flex`}>
                                    <div className="self-center">
                                        <Image
                                            alt={item.category}
                                            src={item.icon}
                                            width={22}
                                            height={22}
                                            className="flex-none">
                                        </Image>
                                    </div>
                                    <h3 className={`flex-1`}>{item.category}</h3>
                                    <p className="text-slate-900">{item.score} <span className="text-gray-500">/ 100</span></p>
                                </div>
                            ))}
                        </div>
                        <button onClick={function (e) { alert('ciao') }} type="submit"
                            className="select-none rounded-3xl p-4 bg-slate-800 hover:bg-blue-700 active:bg-blue-900 text-white">Continue</button>
                    
                    </div>
                </article>
            </main>
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {}, // will be passed to the page component as props
    }
}