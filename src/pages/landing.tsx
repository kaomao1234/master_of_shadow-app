export default function Landing() {
    return <div id="container" className="w-full h-full flex bg-base-100 flex-col min-h-screen">
        <div className="navbar space-x-3 flex justify-center bg-black h-14">
            <label className="text-red-400 rounded  flex items-center justify-center text-xl uppercase">Master of Shadow Wiki</label>
        </div>
        <div id="body" className="flex flex-col mt-3 mx-3">
            <div className=""></div>
            <div className="">
                <label className="text-2xl capitalize font-semibold flex mb-2">
                    Chornicle
                </label>
                <div className="flex flex-col w-full h-fit relative">
                    <button className="w-full h-fit btn">
                        <img src="https://www.w3schools.com/images/w3schools_green.jpg" className="relative z-0"></img>
                        <label className="z-1 absolute">chapter name</label>
                    </button>

                </div>
            </div>
        </div>
        <div className="footer"></div>
    </div>
}