import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";


function Navbar() {
    const [togglebar, setTogglebar] = useState(false);
    const [user, setUser] = useState('');
    const navigate = useNavigate(); 
    

    const handleClickAway = () => {
        setTogglebar(false);
    };
    
    const handleLogout = () => {
        localStorage.removeItem('authToken'); 
            setUser(null); 
            navigate('/Register'); 
    }

    return(
        <div>
            <span className=" sm:hidden flex bg-lime-400 z-40 text-xl text-blue-900 font-semibold">
                <div className="flex m-1">
                <h1 className="text-pink-600 text-clamp -rotate-6">G</h1>
                <h2 className="mt-2 -translate-x-1">row</h2>
                <h1 className="text-orange-600 text-clamp -translate-x-1 rotate-6">S</h1>
                <h2 className="mt-2 -translate-x-2">trong</h2>
                </div>
            </span>
            
            <div onClick={() => setTogglebar(!togglebar)} className=" absolute right-1.5 top-1.5 sm:hidden">
            {togglebar ? <MdClose className="size-[1.8em] text-blue-900 font-bold"/> : <FiMenu className="size-[1.8em] text-blue-900 font-bold"/>}             
            </div>
            
        <nav id="nav" onClick={handleClickAway} className={` duration-500 ease-in ${togglebar ? 'bg-lime-400 w-full p-3 pt-0 z-40 text-base absolute' 
            :' hidden sm:flex px-3 py-4 overflow-y-auto rounded-lg 2xl:rounded-3xl bg-lime-400 h-[calc(100%_-_2rem)] mx-4 mt-4 w-[20%] 2xl:w-[15%] 2xl:p-16 2xl:mx-36 2xl:mt-28 2xl:h-[calc(100%_-_12rem)]'}`}>
            
            <ul className=" 2xl:text-6xl pt-4 sm:pt-11">
                <span className=" hidden sm:flex justify-center text-xl lg:text-2xl 2xl:text-8xl text-blue-950 2xl:pb-12 font-bold">
                    <div className="flex m-1">
                        <h1 className="text-pink-600 text-clamp -rotate-6">G</h1>
                        <h2 className="mt-2 -translate-x-1">row</h2>
                        <h1 className="text-orange-600 text-clamp -translate-x-1 rotate-6">S</h1>
                        <h2 className="mt-2 -translate-x-2">trong</h2>
                    </div>
                </span>
                <li>
                <Link to="/" className="flex items-center text-lg pb-3 2xl:p-6">
                <div className="size-[10%] sm:size-1/5"><img src="https://cdn.pixabay.com/photo/2023/05/28/14/11/tree-house-8023784_1280.png" alt="" /></div>
                <span className="pl-[4%]">Home</span>
                </Link>
                </li>
                <li>
                <Link to="/Profile" className="flex items-center text-lg pb-3 2xl:p-6">
                <div className="size-[9%] sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2022/02/28/20/42/rabbit-7040066_960_720.png" alt="" /></div>
                <span className="pl-[4%]">Profile</span>
                    </Link>
                </li>
                <li>
                <Link to="/GoalsDay" className="flex items-center text-lg pb-3 2xl:p-6">
                <div className="size-[9%] sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2023/04/12/01/47/cartoon-7918608_1280.png" alt="" /></div>
                <span className="pl-[4%]">GoalsDay</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Calendar" className="flex items-center text-lg pb-3 2xl:p-6">
                <div className="size-[9%] sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2013/07/13/12/04/calendar-159098_1280.png" alt="" /></div>
                <span className="pl-[4%]">Calendar</span>
                    </Link>
                </li>
                { user ? (
                <li>
                        <Link to="/Login" className="flex items-center text-lg pb-3 2xl:p-6 2xl:mx-32" onClick={handleLogout}>
                            <div className="size-[7%] sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2014/04/03/00/33/hand-308667_1280.png" alt="" /></div>
                            <span className="pl-[4%]"> Logout </span>
                        </Link>
                    </li>
                    ) : (
                        <>
                    <li>
                        <Link to="/Registra" className="flex items-center text-lg pb-3 2xl:p-6 2xl:mx-32">
                            <div className="size-[7%] sm:size-1/6"><img src="https://cdn.pixabay.com/photo/2014/04/03/00/33/hand-308667_1280.png" alt="" /></div>
                            <span className="pl-[4%]"> Sign Up</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/Login" className="flex items-center text-lg pb-3 2xl:p-6 2xl:mx-32">
                            <span className="pr-[4%]">Login </span>
                            <div className="size-[7%] sm:size-1/5"><img src="https://cdn.pixabay.com/photo/2016/03/31/21/55/hand-1296726_1280.png" alt="" /></div>
                        </Link>
                    </li>
                    </>
                    )} 
                <Link to="/WelcomePage"></Link>
                <Link to="/FinishWorkoutpage"></Link>
            </ul>
        </nav>
    </div>
    );
}
export default Navbar;