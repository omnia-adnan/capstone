function Caloriecalculator() {
    return(
        <div  className=" grid grid-cols-1 2xl:text-7xl">
        <div>
            <img src="https://cdn.pixabay.com/photo/2021/01/01/16/06/hand-5879027_1280.jpg" alt="healthy" className=" w-11/12 h-1/2 mt-16 -ml-5 md:ml-6 md:mt-4"/>
        </div>
        <div className=" -ml-8 mr-2 -mt-28 md:ml-6 md:mr-6 md:-mt-60">
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-3">
                    <p className=" text-center text-white pt-1">Maintain weight</p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3 h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">2,425  100% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-0">
                    <p className=" text-center text-white pt-1">Mild weight loss 0.25 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3 h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">2,175 90% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-0">
                    <p className=" text-center text-white pt-1">Weight loss 0.5 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3 h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">1,925 79% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:mt-2 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3  h-14 md:h-16 2xl:h-28 z-10 -mr-6 md:pt-0">
                    <p className=" text-center text-white pt-1">Extreme weight loss 1 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 md:w-8/12 lg:w-60 lg:h-20 lg:pt-3 h-14 md:h-16 2xl:h-28 pt-1 md:pt-0">1,425 59% <br />Calories/day</p>
            </div>
        </div>
        </div>
    );
}
export default Caloriecalculator;