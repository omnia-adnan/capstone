import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Component/ContextApi';

function GoalsDay() {
    const { todoDays, setTodoDays } = useAuth();
    const [filteredTodos, setFilteredTodos] = useState([]);
    const navigate = useNavigate();

    const handleDoneButton = () => {
        navigate('/FinishWorkoutpage');
    };

    useEffect(() => {
        const fetchTodos = async () => {
        try {
            const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/todo_day');
            if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            console.log('API Response:', data); 
            setTodoDays(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
        };

        fetchTodos();
    }, [setTodoDays]);

    useEffect(() => {
        console.log('Todo Days from Context:', todoDays); 
        if (todoDays.length > 0) {
        const today = new Date();
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDayName = daysOfWeek[today.getDay()];
        console.log('Current Day Name:', currentDayName); 

        const filtered = todoDays.filter((item) => item.days.includes(currentDayName));
        console.log('Filtered Todos:', filtered); 
        setFilteredTodos(filtered);
        }
    }, [todoDays]);

    const handleCheckboxChange = (id) => {
        const updatedTodos = todoDays.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodoDays(updatedTodos);

    const today = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[today.getDay()];

    const filtered = updatedTodos.filter((item) => item.days.includes(currentDayName));
    setFilteredTodos(filtered);
};

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
            <div className="text-white w-full p-1">
                {filteredTodos.length > 0 ? (
                filteredTodos.map((item) => (
                    <div key={item.id}>
                    <h1 className="text-xl text-lime-400">{item.title}</h1>
                    <div>
                        <input
                        type="checkbox"
                        className="float-right"
                        checked={item.checked || false}
                        onChange={() => handleCheckboxChange(item.id)}
                        required
                        />
                    </div>
                    <p>{item.description}</p>
                    </div>
                ))
                ) : (
                <p>No todos available for today.</p>
                )}
            </div>
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
