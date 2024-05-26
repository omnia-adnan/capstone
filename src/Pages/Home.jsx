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
            <div className=" flex justify-center">
                <div>
                <ReactPlayer url={herosSection[video]} width={271} height={240} />
            <button onClick={randomHero}> Change</button>
                </div>
            </div>
            <div className=" p-5 text-sm">
                <a href="https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids" className=" flex justify-center bg-blue-950 rounded-xl w-64 h-1/5 m-2">
                <img src="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png" alt="" width={50} className=" rounded-full m-2"/>
                <div>
                    <h4 className=" m-3 ">The importance of a healthy lifestyle for kids</h4>
                </div>
                </a>
                <a href="https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids" className=" flex justify-center bg-blue-950 rounded-xl w-64 h-1/5 m-2">
                <img src="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png" alt="" width={50} className=" rounded-full m-2"/>
                <div>
                    <h4 className=" m-3 ">The importance of a healthy lifestyle for kids</h4>
                </div>
                </a>
                <a href="https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids" className=" flex justify-center bg-blue-950 rounded-xl w-64 h-1/5 m-2">
                <img src="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png" alt="" width={50} className=" rounded-full m-2"/>
                <div>
                    <h4 className=" m-3 ">The importance of a healthy lifestyle for kids</h4>
                </div>
                </a>
            </div>
        </div>
    );
}
export default Home;