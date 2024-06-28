function GoalsDay() {
    return(
        <div  className="2xl:text-7xl">
        {/* <div>
            <img src="https://cdn.pixabay.com/photo/2021/01/01/16/06/hand-5879027_1280.jpg" alt="healthy" className=" size-fit md:mr-16"/>
        </div> */}
        <div className=" lg:grid lg:grid-cols-2">
        <div>
        <div className=" text-white w-full h-auto p-1">
            <lable>
            Water <br /> 250 l in day
            <input 
            type="checkbox"
            className=" float-right"
            required
            />
            </lable>
        </div>
        <div className=" text-white w-full h-auto p-1">
            <lable>
            Breakfast <br />250 g beoten and 100 g Starches
            <input 
            type="checkbox"
            className=" float-right"
            required
            />
            </lable>
        </div>
        <div className=" text-white w-full h-auto p-1">
            <lable>
            Lunch <br />250 g beoten and 100 g Starches
            <input 
            type="checkbox"
            className=" float-right"
            required
            />
            </lable>
        </div>
        <div className=" text-white w-full h-auto p-1">
            <lable>
            Dinner <br />250 g beoten and 100 g Starches
            <input 
            type="checkbox"
            className=" float-right"
            required
            />
            </lable>
        </div>
        <div className=" text-white w-full h-auto p-1">
            <lable>
            Sleep <br />10 hours
            <input 
            type="checkbox"
            className=" float-right"
            required
            />
            </lable>
        </div>
        <button type="submit" className=" w-9/12 h-11/12 bg-lime-400 rounded-full">Done</button>
        </div>
        <div>
        {/* <div class="MuiGrid-root css-9k7ul8" data-testid="qa-regression-energy=Kilojoules">
        <div class="MuiBox-root css-k008qs">
            <p class="MuiTypography-root MuiTypography-inherit css-5nbcix">
                "Kilojoules"
                "&nbsp;"
            </p>
            <div class="MuiBox-root css-0">
                <p class="MuiTypography-root MuiTypography-inherit css-5nbcix">5021</p>
            </div>
        </div>
        </div> */}
        <div>
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
        </div>
        </div>
    );
}
export default GoalsDay;