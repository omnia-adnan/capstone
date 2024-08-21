import { useNavigate } from 'react-router-dom';


function WelcomePage() {
    const navigate = useNavigate();
    
    const handleButton = () => {
        navigate('/Calendar')
    }

    return(
        <div className='grid gap-4'>
            <div style={{maxInlineSize: 'auto', blockSize: '100%', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>
            <img src="https://cdn.pixabay.com/photo/2023/02/13/22/54/smiley-7788483_1280.png" alt="" className='block mr-auto ml-auto mt-5 xl:mt-5 mb-6 2xl:mb-12 sm:my-3 object-cover xl:w-7/12'/>
            </div>
            <div className='text-center text-white mb-[15px]'>
            <p className='text-[20px] xl:text-[1.8em] text-lime-400'>Congratulations, You Have Finished Your Workout</p>
            <h1 className='text-[17px] xl:text-[1.55em]'>Exercises is king and nutrition is queen. <br /> Combine the two and you will have a kingdom</h1>
            <p className='text-[15px] xl:text-[1.1rem]'>-Jack Lalanne</p>
            </div>
            <button type="button" onClick={handleButton} className="block ml-auto mr-auto px-6 w-60 sm:w-[16rem] bg-lime-400 py-1 text-xl shadow-lg shadow-lime-400 border border-black rounded-3xl text-black">Finish</button>
        </div>
    );
}
export default WelcomePage;