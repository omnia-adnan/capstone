function Exercises() {
    return(
        <div  className="2xl:text-7xl">
        <div>
            <img src="https://cdn.pixabay.com/photo/2022/04/27/22/42/sport-7161424_1280.jpg" alt="healthy" className=" w-11/12 h-1/2"/>
        </div>
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
    );
}
export default Exercises;