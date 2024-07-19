import { useNavigate } from 'react-router-dom';
import img from '../Images/orange.webp';


function WelcomePage() {
    const navigate = useNavigate();

    const handleButton = () => {
        navigate('/Profile')
    }

    return(
        <div>
            <div className='w-[300px] h-[300px]  block m-auto'>
            <img src={img} alt="" className='w-[250px] h-[250px] object-cover rounded-[20px]' />
            </div>
            <div className='text-center text-white mb-[33px]'>
            <h2 className='text-[20px]'>Welcome to</h2>
            <span className='text-[32px]'>Our Health Care</span>
            </div>
            <button type="button" onClick={handleButton} className=" w-9/12 h-11/12 bg-lime-400 rounded-full shadow-lg shadow-lime-400 border border-black block ml-auto mr-auto">Get started</button>
        </div>
    );
}
export default WelcomePage;