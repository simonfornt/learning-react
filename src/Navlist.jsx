function Navbar(){
    return(
        <>
            <div className="flex justify-between gap-4 w-[1200px] mx-auto items-center">
                <div className="text-3xl font-extrabold text-teal-500">Logo</div>
                <div className=" flex justify-between gap-4 font-bold">
                <li className="list-none">Home</li>
                <li className="list-none">About</li>
                <li className="list-none">Contact</li>
                <li className="list-none">Login</li>
                </div>
                <div>
                    <button className="py-3 px-5 text-white rounded-xl bg-green-800 ">Login</button>
                </div>
            </div>
        </>
    )
}

export default Navbar;