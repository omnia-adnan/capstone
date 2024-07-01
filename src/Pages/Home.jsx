import { useState } from "react";
import ReactPlayer from "react-player";
import { Card } from "../Component/Card";

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
        <div className=" m-4 2xl:mt-24 2xl:mr-32 border-3 border-red-800">
            <button onCompositionUpdate={randomHero} style={{ width: "100%"}}> 
                <ReactPlayer url={herosSection[video]} loop controls={true} width='100%'/>
            </button>
            {/* <img src="https://cdn.pixabay.com/photo/2024/03/07/19/31/ai-generated-8619138_1280.png" alt="pumpkin" className=" w-screen h-1/2"/> */}
            <div className=" md:grid md:grid-cols-2">
            <Card
            image="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png"
            title="lorem"
            descrpthion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            url='https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids'
            />
            <Card
            image="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png"
            title="lorem"
            descrpthion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            url='https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids'
            />
            <Card
            image="https://kids-bunny.co.uk/wp-content/uploads/INFOGRAPHIC-POST/healthy-lifestyle.png"
            title="lorem"
            descrpthion="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            url='https://www.gantrykids.com/the-importance-of-a-healthy-lifestyle-for-kids'
            />
            </div>
        </div>
    );
}
export default Home;