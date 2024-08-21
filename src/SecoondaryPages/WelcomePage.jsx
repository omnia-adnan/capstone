import { useNavigate } from 'react-router-dom';
import img from '../Images/elephant.webp';


function WelcomePage() {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate('/Profile')
    }

    return(
        <div>
            <div style={{maxInlineSize: '90%', blockSize: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
            <img src={img} alt="" className='block mr-auto ml-auto mt-5 xl:mt-5 mb-6 2xl:mb-12 sm:my-3 object-cover rounded-2xl sm:h-96 2xl:size-9/12 2xl:rounded-4xl'/>
            </div>
            <div className='text-center text-white mb-[33px]'>
            <h2 className='text-[20px] xl:text-[2em]'>Welcome to</h2>
            <span className='text-[32px] xl:text-[2.5em]'>Our Health Care</span>
            </div>
            <button type="button" onClick={handleButton} 
            className="block mr-auto ml-auto px-6 w-60 sm:w-[16rem] bg-lime-400 py-1 shadow-lg shadow-lime-400 
            border border-black rounded-3xl mb- text-black 2xl:py-3 2xl:w-1/3 2xl:rounded-full 2xl:text-7xl
            mt-5 tracking-wide font-semibold hover:shadow-lime-700 
            transition-shadow duration-200 ease-in items-center justify-center hover:translate-y-1 
            focus:shadow-outline btn text-center">Get started</button>
        </div>
    );
}
export default WelcomePage;