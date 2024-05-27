import { useState } from "react";
import ReactPlayer from "react-player";

function Home() {
    const [video, setVideo] = useState(0)
    
    const herosSection = ["https://www.youtube.com/watch?v=orVIPr25ivo",
        "https://www.youtube.com/watch?v=mMHVEFWNLMc",
        "https://www.youtube.com/watch?v=Vpx-RlF0AcA",
    ]

    const randomHero = e => {
        const len = herosSection.length;
        setVideo(Math.floor(Math.random() * len));
            };

            return(
        <div className="mt-4 rounded-3xl 2xl:text-7xl">
            <div className=" flex justify-center md:justify-end">
                <div>
                <ReactPlayer url={herosSection[video]} controls={true} width={271} height={240} />
            <button onClick={randomHero}> Change</button>
                </div>
            </div>
            <div className=" text-sm grid grid-cols-2">
                <a href="https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids" className=" flex bg-blue-950 rounded-xl w-11/12 h-2/6 md:h-5/6 m-3">
                <img src="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png" alt="" width={50} className=" rounded-full m-3"/>
                <div>
                    <h4 className=" m-3 ">The importance of a healthy lifestyle for kids</h4>
                </div>
                </a>
                <a href="https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids" className=" flex bg-blue-950 rounded-xl w-11/12 h-2/6 md:h-5/6 m-3">
                <img src="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png" alt="" width={50} className=" rounded-full m-3"/>
                <div>
                    <h4 className=" m-3 ">The importance of a healthy lifestyle for kids</h4>
                </div>
                </a>
                <a href="https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids" className=" flex bg-blue-950 rounded-xl w-11/12 h-2/6 md:h-5/6 m-3">
                <img src="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png" alt="" width={50} className=" rounded-full m-3"/>
                <div>
                    <h4 className=" m-3 ">The importance of a healthy lifestyle for kids</h4>
                </div>
                </a>
            </div>
        </div>
    );
}
export default Home;