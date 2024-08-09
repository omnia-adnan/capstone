import { useState } from "react";
import img from "../Images/Profile_avatar_placeholder_large.png"
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { BiMaleFemale } from "react-icons/bi";
import { GiAges } from "react-icons/gi";
import { ContextApi, useAuth } from "../Component/ContextApi";



function Profile() {
    const { name,
        age,
        weight,
        height,
        gender,
    } = useAuth(ContextApi);
    const [imgUser, setImgUser] = useState(null);

    
    


    return(
        <div className=" text-white m-4 mt-10 2xl:mt-32 flex-1 md:text-xl 2xl:text-7xl">
            <div className=" relative text-center">
                <div className="relative inline-block">
            <img 
            src={imgUser ? URL.createObjectURL(imgUser) : img} 
            alt="imgUser" 
            className=" object-cover rounded-full size-24 lg:size-32 2xl:size-[30rem] block ml-auto mr-auto border-2 border-lime-400"/>
            <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(event) => {
                console.log(event.target.files[0]); 
                setImgUser(event.target.files[0]); 
                }}
            />
            </div>
            <h1 className=" m-2 2xl:m-10">{name}</h1>
            <div className="flex justify-center items-center gap-10">
            <div>
                <div className="mx-auto mt-5 border-2 border-purple-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-purple-400 p-5 lg:p-7">
                    <GiWeight className="size-[2rem] block mx-auto"/>
                    <h3 className="text-xl lg:text-2xl font-bold tracking-wide block ">Weight</h3>
                    <h4 className="text-sm lg:text-lg font-medium tracking-wide block">{weight}</h4>
                </div>
                <div className="mx-auto mt-5 border-2 border-teal-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-teal-400 p-5 lg:p-7">
                    <BiMaleFemale className="size-[2rem] block mx-auto"/>
                    <h3 className="text-xl lg:text-2xl font-bold tracking-wide block ">Gander</h3>
                    <h4 className="text-sm lg:text-lg font-medium tracking-wide block">{gender}</h4>
                </div>
            </div>
            <div>
                <div className="mx-auto mt-5 border-2 border-orange-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-orange-400 p-5 lg:p-7">
                    <GiBodyHeight className="size-[2rem] block mx-auto"/>
                    <h3 className="text-xl lg:text-2xl font-bold tracking-wide block ">Height</h3>
                    <h4 className="text-sm lg:text-lg font-medium tracking-wide block">{height}</h4>
                </div>
                
                <div className="mx-auto mt-5 border-2 border-pink-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-pink-400 p-5 lg:p-7">
                    <GiAges className="size-[2rem] block mx-auto"/>
                    <h3 className="text-xl lg:text-2xl font-bold tracking-wide block ">Age</h3>
                    <h4  className="text-s lg:text-lg font-medium tracking-wide block">{age}</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
export default Profile;