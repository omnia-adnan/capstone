import { useState } from "react";


function CalorieCalculator() {
    const [activity, setActivity] = useState("");
    const [age, setAge] = useState("");
    const [weightKg, setWeightKg] = useState("");
    const [heightCm, setHeightCm] = useState("");
    const [gender, setGender] = useState("");
    const [bmr, setBmr] = useState("");


    const calculateBMR = (e) => {
        e.preventDefault();
        const weight = parseFloat(weightKg);
        const height = parseFloat(heightCm);
        const ageValue = parseInt(age);
        const activityLevel = parseFloat(activity);

        if (isNaN(weight) || isNaN(height) || isNaN(ageValue) || isNaN(activityLevel) || gender === "") {
            console.log('Invalid input');
            return;
        }

        let bmrCalc = 0;
        if (gender === "1") {
            bmrCalc = 66.5 + ( 13.75 * weight) + ( 5.003 * height) - ( 6.755 * ageValue)
        } else if(gender === "2"){
            bmrCalc = 665 + ( 9.563 * weight) + ( 1.850 * height) - ( 4.676 * ageValue)
        } else {
            console.log('filed to calc');
        }
        console.log({ bmrCalc }); 
        const totalcalc = bmrCalc * activityLevel;
        setBmr(totalcalc.toFixed(2));
    }
    return(
        <form className="block mx-3 sm:mx-auto max-w-sm text-white xl:text-xl 3xl:text-4xl rounded-lg p-6 mb-10 border border-black shadow-[0_2px_15px_-3px_#a3e635]">
            <label>
                Your Gender 
            </label><br />
                <label>Male<input type="radio" name="gender" value='1' 
                onChange={(e) => setGender(e.target.value)} 
                className="m-3"
                checked={gender === '1'}
                required
                /></label>
                <label>Female<input type="radio" name="gender" value='2'
                onChange={(e) => setGender(e.target.value)} 
                className="m-3"
                checked={gender === '2'}
                required
                />
            </label><br />
            <label>
            your Age
            <input type="number" name="age" value={age} 
            min={0}
            max={120}
            required
            onChange={(e) => setAge(e.target.value)} 
            className="w-full px-8 py-2 rounded-full mb-2 font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            />
            </label><br />
            <label>
            Height in cm
            <input type="number" name="heightCm" value={heightCm} 
            min={30}
            max={220}
            required
            onChange={(e) => setHeightCm(e.target.value)} 
            className="w-full px-8 py-2 rounded-full mb-2 font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            />
            </label><br />
            <label>
            Weight in kg
            <input type="number" name="weightKg" value={weightKg} 
            min={3}
            max={400}
            required
            onChange={(e) => setWeightKg(e.target.value)} 
            className="w-full px-8 py-2 rounded-full mb-2 font-medium text-black bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
            />
            </label><br />
            <label> Workout in a Week
            <select name="activity" className="w-full px-8 py-2 rounded-full mb-2 font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white text-black" value={activity} onChange={(e) => setActivity(e.target.value)} required>
                        <option value="/">Select your Activity</option>
                        <option value="1.2">Sedentary (Very littel or no exercise, and desk job)</option>
                        <option value="1.375">Lightly Active (Light exercise 1 to 3 days per week)</option>
                        <option value="1.55">Moderately Active (Moderate exercise 3 to 5 days per week)</option>
                        <option value="1.725">Very Active (Heavy exercise 6 to 7 days per week)</option>
                        <option value="1.9">Extremely Active (very intense exercise, and physical job)</option>
            </select>
            </label>
            <div>
            {bmr && <p>Your BMR is: {bmr} Cal/d</p>}
            </div>
            <button type="submit" onClick={calculateBMR}
            className="block w-full rounded-lg bg-lime-400 text-black px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]]"
            >Calculate BMR</button>
        </form>
    );
}
export default CalorieCalculator;