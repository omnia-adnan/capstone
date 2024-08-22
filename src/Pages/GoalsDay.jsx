/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import img from '../Images/ai-generated1.webp'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Component/ContextApi';
import axios from 'axios';

function GoalsDay() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { todoDays, setTodoDays } = useAuth();
    const [chkValue, setChkValue] = useState({});
    const navigate = useNavigate();

    const handleDoneButton = async (e) => {
        e.preventDefault();
        const checkedTasks = Object.keys(chkValue)
            .filter(itemId => chkValue[itemId])
            .map(itemId => todoDays.find(task => task.id === parseInt(itemId)))
            .filter(task => task);

        if (checkedTasks.length === 0) {
            console.log('No tasks selected.');
            return;
        }

        const data = {
            title: "Completed Tasks",
            description: "You are doing well",
            date: new Date().toISOString().split('T')[0], 
            tasks: checkedTasks.map(task => ({
                id: task.id,
                age_groups_id: task.age_groups_id, 
                title: task.title,
                description: task.description,
            })),
        };
        try {
            const response = await axios.post('https://x8ki-letl-twmt.n7.xano.io/api:epthuZZq/save_tasks', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                navigate('/FinishWorkoutpage');
            } else {
                console.error('Unexpected response status:', response.status);
            }
        } catch (error) {
            console.error('Error saving tasks:', error.response ? error.response.data : error.message);
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
        <div className="sm:flex flex flex-col text-white">
        <div className=" gap-20">    
        <div className='lg:flex mt-8'>
            <img src={img} alt="carcter" className="bg-cover size-[45%] hidden lg:block"/>
            <div className="flex-1 m-2 task-list flex flex-col gap-2 lg:mx-8">
                {tasks_by_age.map((item) => (
                    <div key={item.id} className='task items-center justify-between p-2 rounded-md border border-white'>
                    <p className='text-base font-medium text-lime-400'>{item.title}</p>
                    <input
                        type="checkbox"
                        className="float-right size-5 mb-1 accent-lime-400"
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
                    border-black text-xl text-black py-2 rounded-full mb-2 hover:shadow-lime-700 hover:translate-y-1 transition-shadow
                    duration-200 ease-in flex items-center justify-center focus:shadow-outline focus:outline-none
                    btn mt-2 px-4 text-center"
                >
                    Done
                </button>
            </div>  
        </div>

        </div>
    </div>
    );
}

export default GoalsDay;
