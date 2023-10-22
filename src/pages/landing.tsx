export default function Landing() {
    return <div id="container" className="w-full h-full flex bg-base-100 flex-col min-h-screen">
        <div className="navbar space-x-3 flex justify-center bg-black h-14">
            <label className="text-red-400 rounded  flex items-center justify-center text-2xl">Master of Shadow</label>
        </div>
        <div id="body" className="flex flex-col">
            <label className="flex justify-center capitalize text-2xl m-5">The eminence shadow</label>
            <div id="img" className="min-w-screen min-h-[13rem] mx-3 bg-white"></div>
        </div>
    </div>
}