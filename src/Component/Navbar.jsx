import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import logo from '../Images/logo-the-capston.png'

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
            <span className=" sm:hidden flex bg-lime-400 z-40 text-blue-900 font-semibold">
                <Link to="/">
                <img src={logo} alt="logo" className="w-[38%] object-cover p-1"/>
                </Link>
            </span>
            
            <div onClick={() => setTogglebar(!togglebar)} className=" absolute right-1.5 top-1.5 sm:hidden">
            {togglebar ? <MdClose className="size-[1.8em] text-blue-900 font-bold"/> : <FiMenu className="size-[1.8em] text-blue-900 font-bold"/>}             
            </div>
            
        <nav id="nav" onClick={handleClickAway} className={` duration-500 ease-in ${togglebar ? 'bg-lime-400 w-full p-3 pt-0 z-40 text-base absolute' 
            :' hidden sm:flex rounded-xl 3xl:rounded-5xl bg-lime-400 h-[calc(100vh_-_2rem)] 3xl:h-[calc(100vh_-_10rem)] mx-4 3xl:mx-36 xl:mx-8 mt-4 xl:mt-5 3xl:mt-24 w-[22%] xl:w-[20%] 3xl:w-[18%]  p-6 3xl:p-12'}`}>
            
            <ul>
                <span className="hidden sm:flex justify-center">
                    <Link to="/">
                        <img src={logo} alt="logo" className="p-4"/>
                    </Link>
                </span>
                <li>
                <Link to="/" className="flex items-center text-lg xl:text-2xl 3xl:text-6xl pb-2 3xl:pb-8 mt-4 text-violet-950 hover:duration-150 hover:font-extrabold hover:text-lime-50">
                <div className="size-[10%] sm:size-[23%]"><img src="https://cdn.pixabay.com/photo/2023/05/28/14/11/tree-house-8023784_1280.png" alt="" /></div>
                <span className="pl-[4%]">Home</span>
                </Link>
                </li>
                <li>
                <Link to="/Profile" className="flex items-center text-lg xl:text-2xl 3xl:text-6xl pb-2 3xl:pb-8 text-violet-950 hover:duration-150 hover:font-extrabold hover:text-lime-50">
                <div className="size-[9%] sm:size-[20%]"><img src="https://cdn.pixabay.com/photo/2022/02/28/20/42/rabbit-7040066_960_720.png" alt="" /></div>
                <span className="pl-[4%]">Profile</span>
                    </Link>
                </li>
                <li>
                <Link to="/GoalsDay" className="flex items-center text-lg xl:text-2xl 3xl:text-6xl pb-2 3xl:pb-8 text-violet-950 hover:duration-150 hover:font-extrabold hover:text-lime-50">
                <div className="size-[9%] sm:size-[20%]"><img src="https://cdn.pixabay.com/photo/2023/04/12/01/47/cartoon-7918608_1280.png" alt="" /></div>
                <span className="pl-[4%]">GoalsDay</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Calendar" className="flex items-center text-lg xl:text-2xl 3xl:text-6xl pb-2 3xl:pb-8 text-violet-950 hover:duration-150 hover:font-extrabold hover:text-lime-50">
                <div className="size-[9%] sm:size-[20%]"><img src="https://cdn.pixabay.com/photo/2013/07/13/12/04/calendar-159098_1280.png" alt="" /></div>
                <span className="pl-[4%]">Calendar</span>
                    </Link>
                </li>
                { user ? (
                    <li className="pb-2 3xl:pb-8">
                        <Link to="/Login" className="flex justify-center items-center text-lg xl:text-2xl 3xl:text-6xl text-violet-950 border border-black py-1 px-4 w-[80%] ml-1 rounded-full hover:duration-150 hover:font-bold hover:bg-lime-200" onClick={handleLogout}>
                            <div className="size-[7%] sm:size-[20%]"><img src="https://cdn.pixabay.com/photo/2014/04/03/00/33/hand-308667_1280.png" alt="" /></div>
                            <span className="pl-[4%]"> Logout </span>
                        </Link>
                    </li>
                    ) : (
                        <>
                    <li className="pb-2 3xl:pb-8">
                        <Link to="/Registra" className="flex justify-center items-center text-lg xl:text-2xl 3xl:text-6xl text-violet-950 border border-black w-[80%] ml-1 mb-3 rounded-full hover:duration-150 hover:font-bold hover:bg-lime-200">
                            <div className="size-[7%] sm:size-[20%]"><img src="https://cdn.pixabay.com/photo/2014/04/03/00/33/hand-308667_1280.png" alt="" /></div>
                            <span className="pl-[4%]"> Sign Up</span>
                        </Link>
                    </li>
                    <li className="pb-2 3xl:pb-8">
                        <Link to="/Login" className="flex justify-center items-center text-lg xl:text-2xl 3xl:text-6xl text-violet-950 border border-black w-[80%] ml-1 rounded-full hover:duration-150 hover:font-bold hover:bg-lime-200">
                            <span className="pr-[4%]">Login </span>
                            <div className="size-[7%] sm:size-[20%]"><img src="https://cdn.pixabay.com/photo/2016/03/31/21/55/hand-1296726_1280.png" alt="" /></div>
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