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
        bmr,
        carb,
        fat,
        protein, 
        imgUserObject     
    } = useAuth();    

    return(
        <div className=" text-white m-4 mt-10 flex-1 md:text-xl md:flex">
            <div className=" relative text-center lg:mx-10 xl:mx-24">
                <div className="relative inline-block">
                {imgUserObject && (
                    <img 
                        src={imgUserObject.url} 
                        alt={`${name}'s profile`} 
                        className=" object-cover rounded-full size-28 xl:size-32 block ml-auto mr-auto border-[3px] border-lime-400"
                    />
                )}
                </div>
            <h1 className=" m-2 text-xl xl:text-2xl">{name}</h1>
            <div className="flex justify-center items-center gap-10">
            <div>
                <div className="mx-auto mt-5 border-2 border-purple-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-purple-400 p-5 xl:p-7">
                    <GiWeight className="size-[2rem] block mx-auto text-purple-400"/>
                    <h3 className="text-xl xl:text-2xl font-bold tracking-wide block ">Weight</h3>
                    <h4 className="text-sm xl:text-lg font-medium tracking-wide block">{weight}</h4>
                </div>
                <div className="mx-auto mt-5 border-2 border-teal-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-teal-400 p-5 xl:p-7">
                    <BiMaleFemale className="size-[2rem] block mx-auto text-teal-400"/>
                    <h3 className="text-xl xl:text-2xl font-bold tracking-wide block ">Gander</h3>
                    <h4 className="text-sm xl:text-lg font-medium tracking-wide block">{gender}</h4>
                </div>
            </div>
            <div>
                <div className="mx-auto mt-5 border-2 border-orange-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-orange-400 p-5 xl:p-7">
                    <GiBodyHeight className="size-[2rem] block mx-auto text-orange-400"/>
                    <h3 className="text-xl xl:text-2xl font-bold tracking-wide block ">Height</h3>
                    <h4 className="text-sm xl:text-lg font-medium tracking-wide block">{height}</h4>
                </div>
                
                <div className="mx-auto mt-5 border-2 border-pink-400 rounded-tl-3xl rounded-br-3xl overflow-hidden relative shadow-lg shadow-pink-400 p-5 xl:p-7">
                    <GiAges className="size-[2rem] block mx-auto text-pink-400"/>
                    <h3 className="text-xl xl:text-2xl font-bold tracking-wide block ">Age</h3>
                    <h4  className="text-s xl:text-lg font-medium tracking-wide block">{age}</h4>
                </div>
            </div>
            </div>
        </div>
            <div className="xl:m-4">
            <div className='mt-3 hidden md:block'>
                <h1 className='text-xl lg:text-2xl xl:text-3xl font-Handlee p-3 text-center text-lime-400 tracking-wider xl:mb-2'>
                    "Remember this advice of the day!"
                </h1>
                <p className="text-sm lg:text-lg xl:text-xl font-Handlee text-justify px-4 xl:mb-3">
                    Feeling 'hangry' is a real thing. Your brain needs a steady supply of glucose, so eating regularly is crucial. 
                    Don't fear good fats, as they are essential for maintaining brain and cell structure. Good fats can be found 
                    in olive oil, nuts, seeds, and avocados.
                </p>
            </div>
        <div className="flex md:ml-3">
            <div className="flex-1 m-2 task-list flex flex-col gap-3 md:my-10 my-5 lg:my-3">
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Calorie<p className="text-base ml-2 float-right text-white">{bmr} g</p></p>
            </div>
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Carbohydrates<p className="text-base ml-2 float-right text-white">{carb} g</p></p>
            </div>
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Fat<p className="text-base ml-2 float-right text-white">{fat} g</p></p>
            </div>
            <div className="task items-center justify-between p-2 rounded-md border border-white">
            <p className="text-base font-medium text-lime-400">Protein<p className="text-base ml-2 float-right text-white">{protein} g</p></p>
            </div>
        </div>
        </div>
        </div>
    </div>
    );
}
export default Profile;