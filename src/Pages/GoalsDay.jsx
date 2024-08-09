/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Component/ContextApi';

function GoalsDay() {
    const { todoDays, setTodoDays } = useAuth();
    const navigate = useNavigate();

    const handleDoneButton = () => {
        navigate('/FinishWorkoutpage');
    };

    useEffect(() =>{
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/tasks_by_age")
        .then((data) => data.json())
        .then(json => setTodoDays(json));
        console.log(setTodoDays);
        }, []);


        const today = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayName = daysOfWeek[today.getDay()]; // Get the current day of the week
        console.log(currentDayName);
        console.log(todoDays);
        

    return (
        <div className="sm:flex 2xl:text-7xl flex flex-col text-white">
        <div className="lg:flex gap-20">
            <p className="text-xl p-2 text-justify mb-5 3xl:mt-24 font-semibold lg:w-1/2">
            Feeling 'hangry' is a real thing. Your brain needs a steady supply of glucose,
            so eating regularly is crucial. Don't fear good fats, as they are essential for
            maintaining brain and cell structure. Good fats can be found in olive oil, nuts,
            seeds, and avocados.
            </p>
            <div className="flex-1 m-2 3xl:mt-24">
            {todoDays.filter((item) => item.days === currentDayName).map((item) => (
                <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.description}</p>
                <input
                    type="checkbox"
                    className="float-right"
                    required
                />
                </div>
            ))}
            <button
                type="submit"
                onClick={handleDoneButton}
                className="mt-5 tracking-wide font-semibold bg-lime-400 shadow-lg shadow-lime-400 border border-black text-black w-full py-2 rounded-full mb-2 hover:bg-lime-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                Done
            </button>
            </div>
        </div>
        <div className="py-2 2xl:py-10 2xl:-ml-[6%] 2xl:mr-[6%]">
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 2xl:p-14 pl-3">Maintain weight</p>
            <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">100% Cal/d</p>
            </div>
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 2xl:p-14 pl-3">Mild weight loss 0.25 kg/week</p>
            <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">90% Cal/d</p>
            </div>
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 2xl:p-14 pl-3">Weight loss 0.5 kg/week</p>
            <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">79% Cal/d</p>
            </div>
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 2xl:p-14 pl-3">Extreme weight loss 1 kg/week</p>
            <p className="absolute right-3 2xl:right-[5%] pt-2 2xl:pt-14">59% Cal/d</p>
            </div>
        </div>
    </div>
    );
}

export default GoalsDay;
