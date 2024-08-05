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
        console.log(setTodos);
        }, []);

        const today = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayName = daysOfWeek[today.getDay()]; 
        console.log(currentDayName); 

    return(
        <div  className="sm:flex 2xl:text-7xl flex flex-col text-white">
            <div className="lg:flex gap-20">
                <p className="text-xl p-2 xl:px-3 text-start mb-5 font-semibold">
                    Feeling 'hangry' is a real thing. Your brain needs a steady supply of glucose, 
                    so eating regularly is crucial. Don't fear good fats, as they are essential for 
                    maintaining brain and cell structure. Good fats can be found in olive oil, nuts, 
                    seeds, and avocados.</p>
        <div className="flex-1 m-2 sm:mt-24"> 
        <div className=" text-white w-full h-auto p-1">
        {todos.filter((item) => item.days === currentDayName).map((item) => (
                                <div key={item.id}>
                                    <h1 className="text-xl text-lime-400">{item.title}</h1>
                                    <p>{item.description}</p>
                                    <div>
                                        <input
                                            type="checkbox"
                                            className="float-right"
                                            required
                                        />
                                    </div>
                                </div>
                            ))
                        }
        </div>
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