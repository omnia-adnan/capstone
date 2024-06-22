function Profile() {
    return(
        <div className=" text-white m-4 mt-10 2xl:mt-32 flex-1 md:text-xl 2xl:text-7xl">
            <div className="text-center ">
            <img src="../Images/Profile_avatar_placeholder_large.png" alt="" className=" rounded-full size-24 lg:size-32 2xl:size-96 block ml-auto mr-auto border border-lime-400"/>
            <h1 className=" m-2 2xl:m-10">user name</h1>
            </div>
            <div className=" lg:grid lg:grid-cols-2 2xl:grid-cols-4 text-center">
                <div className=" bg-purple-400 rounded-br-3xl rounded-lg border border-lime-400 m-2">
                    <h3>wight</h3>
                <h4>50</h4>
                </div>
                <div className=" bg-red-400 rounded-tl-3xl rounded-lg border border-lime-400 m-2">
                    <h3>hight</h3>
                <h4>140</h4>
                </div>
                <div className=" bg-orange-400 rounded-tr-3xl rounded-lg border border-lime-400 m-2">
                    <h3>age</h3>
                <h4>5</h4>
                </div>
                <div className=" bg-teal-400 rounded-bl-3xl rounded-lg border border-lime-400 m-2">
                    <h3>gander</h3>
                <h4>female</h4>
                </div>
            </div>
        </div>
    );
}
export default Profile;