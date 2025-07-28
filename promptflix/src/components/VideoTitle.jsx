export function VideoTitle({title,overview}){
    return (
        <div className=" w-screen aspect-video pt-[8%] px-36 absolute text-white bg-gradient-to-r from-black" >
            <h1 className="text-4xl font-bold" >{title}</h1> 
            <p className="py-6 text-lg w-1/3" >
            {overview?.split(" ").slice(0, 30).join(" ") + (overview?.split(" ").length > 30 ? "..." : "")}
                </p> 
            <div className="">
                <button className="bg-gray-700 hover:bg-opacity-50  text-white p-4 px-10 text-xl rounded-lg" > ▶️ Play</button> 
                <button className="bg-gray-600 text-white p-4 px-10 text-xl ml-4 rounded-lg"> ℹ More Info</button>
            </div>
        </div>
    )
}