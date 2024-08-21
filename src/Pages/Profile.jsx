import { useState } from "react";
import img from "../Images/Profile_avatar_placeholder_large.png"
import { GiWeight } from "react-icons/gi";
import { GiBodyHeight } from "react-icons/gi";
import { BiMaleFemale } from "react-icons/bi";
import { GiAges } from "react-icons/gi";
import { useAuth } from "../Component/ContextApi";



function Profile() {
    const { name,
        age,
        weight,
        height,
        gender,
        calculateNeeded,
    } = useAuth();
    const [imgUser, setImgUser] = useState(null);
    


    return(
        <div className=" text-white m-4 mt-10 flex-1 md:text-xl lg:flex">
            <div>
                <div className='mt-3'>
                <h1 className='text-3xl font-Handlee p-5  text-center text-lime-400 tracking-wider'>"Remember this advice of the day!"</h1>
                <p className="lg:text-xl font-Handlee text-justify p-4 mb-5">
                Feeling 'hangry' is a real thing. Your brain needs a steady supply of glucose, so eating regularly is 
                crucial. Don't fear good fats, as they are essential for maintaining brain and cell structure. 
                Good fats can be found in olive oil, nuts,seeds, and avocados.
                </p>
            </div>
            <div className="flex-1 m-2 task-list flex flex-col gap-2 lg:mr-">
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Kilojoules<p className="text-base ml-2 float-right text-white">{calculateNeeded.bmr} g</p></p>
            </div>
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Carbohydrates<p className="text-base ml-2 float-right text-white">{calculateNeeded.carb} g</p></p>
            </div>
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Fat<p className="text-base ml-2 float-right text-white">{calculateNeeded.fat} g</p></p>
            </div>
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Protein<p className="text-base ml-2 float-right text-white">{calculateNeeded.protein} g</p></p>
            </div>
        </div>
        </div>
            <div className=" relative text-center lg:mx-32">
                <div className="relative inline-block">
            <img 
            src={imgUser ? URL.createObjectURL(imgUser) : img} 
            alt="imgUser" 
            className=" object-cover rounded-full size-24 lg:size-32 block ml-auto mr-auto border-2 border-lime-400"/>
            <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={(event) => {
                console.log(event.target.files[0]); 
                setImgUser(event.target.files[0]); 
                }}
            />
            </div>
            <h1 className=" m-2">{name}</h1>
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