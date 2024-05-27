function Caloriecalculator() {
    return(
        <div  className=" grid grid-cols-1 2xl:text-7xl">
        <div className=" place-content-center">
            <img src="https://cdn.pixabay.com/photo/2022/02/10/11/59/kid-7005169_1280.png" alt="healthy kid" className=" w-48 h-56 2xl:w-auto 2xl:h-auto md:ml-32"/>
        </div>
        <div className=" -ml-3 md:ml-20">
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-3">
                    <p className=" text-center text-white pt-1">Maintain weight</p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">2,425  100% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-0">
                    <p className=" text-center text-white pt-1">Mild weight loss 0.25 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">2,175 90% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-0">
                    <p className=" text-center text-white pt-1">Weight loss 0.5 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">1,925 79% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-0">
                    <p className=" text-center text-white pt-1">Extreme weight loss 1 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12  h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">1,425 59% <br />Calories/day</p>
            </div>
        </div>
        </div>
    );
}
export default Caloriecalculator;