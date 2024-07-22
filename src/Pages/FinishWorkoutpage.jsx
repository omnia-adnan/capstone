import { useNavigate } from 'react-router-dom';
import img from '../Images/boy.jpg';


function WelcomePage() {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/')
    }

    return(
        <div>
            <div className='w-[300px] h-[300px] mx-[35px] mt-[55px] block'>
            <img src={img} alt="" className='w-[250px] h-[250px] object-cover rounded-[20px]' />
            </div>
            <div className='text-center text-white mb-[33px]'>
            <p className='text-[20px]'>Congratulations, You Have Finished Your Workout</p>
            <h1 className='text-[12px]'>Exercises is king and nutrition is queen. Combine the two and you will have a kingdom</h1>
            <p className='text-[12px]'>-Jack Lalanne</p>
            </div>
            <button type="button" onClick={handleButton} className=" w-9/12 h-11/12 bg-lime-400 rounded-full shadow-lg shadow-lime-400 border border-black block ml-auto mr-auto">Finish</button>
        </div>
    );
}
export default WelcomePage;