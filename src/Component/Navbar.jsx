import { Link } from "react-router-dom";


function Navbar() {
    return(
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Profile">Profile</Link>
            </li>
            <li>
                <Link to="/Exercises">Exercises</Link>
            </li>
            <li>
                <Link to="/Calendar">Calendar</Link>
            </li>
            <li>
                <Link to="/Caloriecalculator">Calorie Calculator</Link>
            </li>
            <li>
                <Link to="/Signup">Signup</Link>
            </li>
        </ul>
    </nav>
        
    );
}
export default Navbar;