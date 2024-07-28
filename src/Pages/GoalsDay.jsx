/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function GoalsDay() {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();

    const handleDoneButton = () => {
        navigate('/FinishWorkoutpage')
    }
    
    useEffect(() =>{
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/todo_day")
        .then((data) => data.json())
        .then(json => setTodos(json));
        console.log(todos);
        }, []);

        const today = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayName = daysOfWeek[today.getDay()]; 
        console.log(currentDayName); 

    return(
        <div  className="sm:flex 2xl:text-7xl flex flex-col text-white">
            <div className="lg:flex gap-20">
            <img src="https://cdn.pixabay.com/photo/2021/01/01/16/06/hand-5879027_1280.jpg" alt="healthy"
                className="h-auto sm:h-[calc(100vh_-_15rem)] 2xl:h-[calc(100vh_-_60rem)] sm:mt-3 2xl:mt-24 2xl:-ml-[6%] max-w-full rounded-xl"
            />
        <div className="m-2 sm:mt-24"> 
        {/* <div className=" text-white w-full h-auto p-1">
            {todos.filter((item) => item.days === currentDayName).map((item) => 
                <>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <div >
                <input
                        type="checkbox"
                        className=" float-right"
                        required 
                        />
                    </div>
                </>
            )}
        </div> */}
        <button type="submit" onClick={handleDoneButton} className=" w-9/12 h-11/12 bg-lime-400 rounded-full">Done</button>
        </div>
        </div>
        <div className="py-2 2xl:py-10 2xl:-ml-[6%] 2xl:mr-[6%]">
            <div className=" flex border-b-2 border-blue-500">
                    <p className="relative p-[10px] 2xl:p-14 pl-3">Maintain weight</p>
                    <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">100% Cal/d</p>
            </div>
            <div className=" flex border-b-2 border-blue-500">
                    <p className="relative p-[10px] 2xl:p-14 pl-3">Mild weight loss 0.25 kg/week </p>
                    <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">90% Cal/d</p>
            </div>
            <div className=" flex border-b-2 border-blue-500">
                    <p className="relative p-[10px] 2xl:p-14 pl-3">Weight loss 0.5 kg/week </p>
                    <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">79% Cal/d</p>
            </div>
            <div className=" flex border-b-2 border-blue-500">
                    <p className="relative p-[10px] 2xl:p-14 pl-3">Extreme weight loss 1 kg/week </p>
                    <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">59% Cal/d</p>
            </div>
        </div>
        </div>
    );
}
export default GoalsDay;