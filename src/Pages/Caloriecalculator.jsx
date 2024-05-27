function Caloriecalculator() {
    return(
        <>
        <div className=" flex justify-center text-center 2xl:text-7xl">
            <img src="https://cdn.pixabay.com/photo/2022/02/10/11/59/kid-7005169_1280.png" alt="healthy kid" className=" w-48 h-56 2xl:w-auto 2xl:h-auto"/>
        </div>
        <div>
            <div className=" flex justify-center mt-4 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 h-14 2xl:h-28 z-10 -mr-7 md:pt-3">
                    <p className=" text-center pt-1">Maintain weight</p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 h-14 2xl:h-28 pt-1 md:pt-0">2,425  100% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 h-14 2xl:h-28 z-10 -mr-7 md:pt-3">
                    <p className=" text-center pt-1">Mild weight loss 0.25 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 h-14 2xl:h-28 pt-1 md:pt-0">2,175 90% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 h-14 2xl:h-28 z-10 -mr-7 md:pt-3">
                    <p className=" text-center pt-1">Weight loss 0.5 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 h-14 2xl:h-28 pt-1 md:pt-0">1,925 79% <br />Calories/day</p>
            </div>
            <div className=" flex justify-center mt-4 md:justify-end md:text-lg 2xl:text-6xl">
                <div className=" rounded-r-full bg-blue-900 w-6/12 h-14 2xl:h-28 z-10 -mr-7 md:pt-3">
                    <p className=" text-center pt-1">Extreme weight loss 1 kg/week </p>
                </div>
                <p className=" bg-gray-300 text-center text-black w-6/12 h-14 2xl:h-28 pt-1 md:pt-0">1,425 59% <br />Calories/day</p>
            </div>
        </div>
        </>
    );
}
export default Caloriecalculator;