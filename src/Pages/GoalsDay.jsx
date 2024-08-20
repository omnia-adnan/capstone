/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Component/ContextApi';
import axios from 'axios';

function GoalsDay() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const { todoDays, setTodoDays, calculateNeeded } = useAuth();
    const [chkValue, setChkValue] = useState({});
    const navigate = useNavigate();

    const handleDoneButton = async (e) => {
        e.preventDefault();
    
        // Get all checked tasks
        const checkedTasks = Object.keys(chkValue)
            .filter(itemId => chkValue[itemId]) // Get only those tasks that are checked
            .map(itemId => todoDays.find(task => task.id === parseInt(itemId))); // Find the corresponding task
    
        // Construct the data to send
        const data = {
            title, // Assuming title is set elsewhere in your component
            description, // Assuming description is set elsewhere in your component
            date: new Date().toISOString().split('T')[0], // Current date
            tasks: checkedTasks, // Send all checked tasks
        };
    
        console.log('Data being sent:', data);
    
        try {
            // Send data to Xano
            const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:epthuZZq/save_tasks', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Response:', response.data);
    
            if (response.status === 200) {
                navigate('/FinishWorkoutpage');
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error saving tasks:', error);
        }
    };
    


    const handleCheckboxChange = (itemId) => {
        setChkValue((prev) => ({
            ...prev,
            [itemId]: !prev[itemId],
            }));
        };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = "https://x8ki-letl-twmt.n7.xano.io/api:7P5ZsfI2/tasks_by_age";
                const ageGroupId = JSON.parse(localStorage.getItem('ageGroupId'));
        
                const response = await fetch(url);
                if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
                }
        
                const json = await response.json();
                setTodoDays(json.filter(item => item.age_groups_id === ageGroupId));
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
            };
        
            fetchData();
        }, []);      


        const today = new Date();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayName = daysOfWeek[today.getDay()]; 
        const tasks_by_age = todoDays.filter((item) => item.days === currentDayName);

        const isButtonDisabled = !Object.values(chkValue).some((value) => value);

    return (
        <div className="sm:flex 3xl:text-7xl flex flex-col text-white">
        <div className=" gap-20">
        <div className='lg:fle mt-3'>
            <div>
                <h1 className='text-3xl 3xl:text-5xl font-thin mt-8 p-5  text-center text-lime-400 leading-9 tracking-wider px-2 xl:px-3 mb-5'>Remember this advice of the day!</h1>
                <p className="text-2xl font-thin leading-9 tracking-wider p-4 mb-5 3xl:mt-24">
                Feeling 'hangry' is a real thing. Your brain needs a steady supply of glucose, so eating regularly is 
                crucial. Don't fear good fats, as they are essential for maintaining brain and cell structure. 
                Good fats can be found in olive oil, nuts,seeds, and avocados.
                </p>
            </div>    
            <div className="flex-1 m-2 3xl:mt-24 task-list flex flex-col gap-2">
                {tasks_by_age.map((item) => (
                    <div key={item.id} className='task items-center justify-between p-2 rounded-md border border-white'>
                    <p className='text-base font-medium text-lime-400'>{item.title}</p>
                    <input
                        type="checkbox"
                        className="float-right"
                        checked={chkValue[item.id] || false}
                        onChange={() => handleCheckboxChange(item.id)}
                    />
                    <p className='text-base ml-2'>{item.description}</p>
                    </div>
                ))}
                <button
                    type="submit"
                    disabled={isButtonDisabled}
                    onClick={handleDoneButton}
                    className="font-semibold bg-lime-400 shadow-lg shadow-lime-400 border
                    border-black text-black w- py-2 rounded-full mb-2 hover:shadow-lime-700 hover:translate-y-1 transition-shadow
                    duration-200 ease-in flex items-center justify-center focus:shadow-outline focus:outline-none
                    btn mt-4 px-4 text-center"
                >
                    Done
                </button>
            </div>  
        </div>
        <div className="py-2 3xl:py-10 3xl:-ml-[6%] 3xl:mr-[6%]">
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 3xl:p-14 pl-3">Kilojoules</p>
            <p className="absolute right-3 3xl:right-[5%] pt-2 3xl:pt-14">{calculateNeeded.bmr} g</p>
            </div>
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 3xl:p-14 pl-3">Carbohydrates</p>
            <p className="absolute right-3 3xl:right-[5%] pt-2 3xl:pt-14">{calculateNeeded.carb} g</p>
            </div>
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 3xl:p-14 pl-3">Fat </p>
            <p className="absolute right-3 3xl:right-[5%] pt-2 3xl:pt-14">{calculateNeeded.fat} g</p>
            </div>
            <div className="flex border-b-2 border-blue-500">
            <p className="relative p-[10px] 3xl:p-14 pl-3">Protein</p>
            <p className="absolute right-3 3xl:right-[5%] pt-2 3xl:pt-14">{calculateNeeded.protein} g</p>
            </div>
        </div>
        </div>
    </div>
    );
}

export default GoalsDay;
