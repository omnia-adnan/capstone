import { useState } from "react";
import { Link } from "react-router-dom";

function CalorieCalculator() {
    const [activity, setActivity] = useState("");
    const [age, setAge] = useState("");
    const [weightKg, setWeightKg] = useState("");
    const [heightCm, setHeightCm] = useState("");
    const [gender, setGender] = useState("");
    const [bmr, setBmr] = useState("");
    const [bmi, setBmi] = useState('');
    const [message, setMessage] = useState('');


    const calculateMetrics = (e) => {
        e.preventDefault();
        const weight = parseFloat(weightKg);
        const height = parseFloat(heightCm);
        const ageValue = parseInt(age);
        const activityLevel = parseFloat(activity);
    
        if (isNaN(weight) || isNaN(height) || isNaN(ageValue) || isNaN(activityLevel) || gender === "") {
        setMessage("Please fill in all required fields.");
        return;
        }
    
        if (weight <= 0 || height <= 0 || ageValue <= 0 || activityLevel <= 0) {
        setMessage("Please enter positive values for weight, height, age, and activity level.");
        return;
        }
    
        let bmrCalc = 0;
        if (gender === "1") {
        bmrCalc =  (10 * weight) + (6.25 * height) - (5 * ageValue) + 5;
        } else if (gender === "2") {
        bmrCalc = (10 * weight) + (6.25 * height) - (5 * ageValue) - 161;
        } else {
        setMessage("Invalid gender selection.");
        return;
        }
    
        const totalBMR = bmrCalc * activityLevel;
        setBmr(totalBMR.toFixed(2));
    
        const bmi = (weight / (height * height)) * 10000;
        setBmi(bmi.toFixed(1));
    
        if (bmi < 18.5) {
        setMessage("underweight.");
        } else if (bmi >= 18.5 && bmi < 25) {
        setMessage("healthy weight.");
        } else {
        setMessage("overweight.");
        }
    };
    
    let imgSrc;

    if (bmi < 1) {
        imgSrc = null
        } else {
        if(bmi < 25) {
            imgSrc = require('../Images/underweight.png')
        } else if (bmi >= 25 && bmi < 30) {
            imgSrc = require('../Images/healthy.png')
        } else {
            imgSrc = require('../Images/overweight.png')
        }
    }
    
    return(
        <div>
            {message && <p className="text-2xl px-2 xl:px-3 text-white mb-5">Your health is your greatest asset. <Link to="/SignUp"> <span className="text-lime-400 font-semibold">Sign Up</span></Link> now to access essential resources and take the next step on your wellness journey.</p>}
            <form className="block mx-3 lg:flex sm:mx-auto max-w-sm lg:max-w-3xl text-white xl:text-xl rounded-lg p-6 mb-10 border border-black shadow-[0_2px_15px_-3px_#a3e635]">
                <div className="lg:w-1/2 lg:mr-4">
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
                <button type="submit" onClick={calculateMetrics}
                className="mt-5 tracking-wide bg-lime-400 text-black w-full py-1.5 rounded-4xl mb-2 transition-all duration-300 hover:text-lime-50 ease-in-out flex items-center justify-center"
                >Calculate BMR</button>
                </div>
                <div className="lg:border-l border-black">
                <h1 className="text-xl px-2 xl:px-3 text-lime-400 mb-1 my-5 lg:my-0">The Result 
                </h1>
                <div className="lg:ml-6">
                {bmr && <p>BMR: {bmr} Cal/d</p>}
                {bmi && <p>BMI: {bmi}</p>}
                {message && <p> Based on your BMI, you are classified as: {message}</p>}
                </div>
                <img src={imgSrc} alt="" className=" block mx-auto w-1/4" />
                </div>
            </form>
        </div>
    );
}
export default CalorieCalculator;