import { useNavigate } from 'react-router-dom';
import img from '../Images/ai-generated2.webp';


function WelcomePage() {
    const navigate = useNavigate();
    
    const handleButton = () => {
        navigate('/')
    }

    return(
        <div className='grid gap-4'>
            <div style={{maxInlineSize: 'auto', blockSize: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
            <img src={img} alt="" className='block mr-auto ml-auto object-cover rounded-2xl sm:h-96'/>
            </div>
            <div className='text-center text-white'>
            <p className='text-[20px]'>Congratulations, You Have Finished Your Workout</p>
            <h1 className='text-[12px]'>Exercises is king and nutrition is queen. Combine the two and you will have a kingdom</h1>
            <p className='text-[12px]'>-Jack Lalanne</p>
            </div>
            <button type="button" onClick={handleButton} className="block ml-auto mr-auto px-6 w-60 sm:w-[16rem] bg-lime-400 py-1 shadow-lg shadow-lime-400 border border-black rounded-3xl text-black">Finish</button>
        </div>
    );
}
export default WelcomePage;