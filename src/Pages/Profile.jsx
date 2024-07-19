import img from "../Images/Profile_avatar_placeholder_large.png"

function Profile() {


    return(
        <div className=" text-white m-4 mt-10 2xl:mt-32 flex-1 md:text-xl 2xl:text-7xl">
            <div className="text-center">
            <img src={img} alt="" className=" object-cover rounded-full size-24 lg:size-32 2xl:size-[30rem] block ml-auto mr-auto border-2 border-lime-400"/>
            <h1 className=" m-2 2xl:m-10">{'use name'}</h1>
            <div className="flex justify-center items-center text-center">
            <div>
                <div className="bg-purple-500 rounded-bl-2xl rounded-tr-2xl 2xl:rounded-bl-4xl 2xl:rounded-tr-4xl block mb-[4%] text-white p-4 2xl:p-14 size-[5rem] 2xl:size-[40rem]
                    shadow-[0_14px_9px_-4px_#3b71ca] transition duration-150 ease-in-out m-3 2xl:m-10
                    hover:bg-purple-400 hover:shadow-[0_5px_10px_4px_rgba(59,113,202),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
                    0_4px_18px_0_rgba(59,113,202,0.2)]">
                    <h3>wight</h3>
                <h4>50</h4>
                </div>
                <div className="bg-red-500 rounded-tl-2xl rounded-br-3xl 2xl:rounded-tl-4xl 2xl:rounded-br-4xl block mb-[4%] text-white p-4 2xl:p-14 size-[5rem] 2xl:size-[40rem] 
                    shadow-[0_14px_9px_-4px_#3b71ca] transition duration-150 ease-in-out m-3 2xl:m-10
                    hover:bg-red-400 hover:shadow-[0_5px_10px_4px_rgba(59,113,202),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
                    0_4px_18px_0_rgba(59,113,202,0.2)]">
                    <h3>hight</h3>
                <h4>140</h4>
                </div>
                </div>
            <div>
            <div className="bg-teal-500 rounded-tl-2xl rounded-br-2xl 2xl:rounded-tl-4xl 2xl:rounded-br-4xl block mb-[4%] text-white p-4 2xl:p-14 size-[5rem] 2xl:size-[40rem] 
                    shadow-[0_14px_9px_-4px_#3b71ca] transition duration-150 ease-in-out m-3 2xl:m-10
                    hover:bg-teal-400 hover:shadow-[0_5px_10px_4px_rgba(59,113,202),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
                    0_4px_18px_0_rgba(59,113,202,0.2)]">
                    <h3>gander</h3>
                <h4>female</h4>
                </div>
                
                <div className="bg-orange-500 rounded-bl-2xl rounded-tr-2xl 2xl:rounded-bl-4xl 2xl:rounded-tr-4xl block mb-[4%] text-white p-4 2xl:p-14 size-[5rem] 2xl:size-[40rem]
                    shadow-[0_14px_9px_-4px_#3b71ca] transition duration-150 ease-in-out m-3 2xl:m-10
                    hover:bg-orange-400 hover:shadow-[0_5px_10px_4px_rgba(59,113,202),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:bg-primary-400 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] 
                    focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),
                    0_4px_18px_0_rgba(59,113,202,0.2)]">
                    <h3>age</h3>
                <h4>5</h4>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
export default Profile;