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
        <div className=" m-4 mt-10 flex-1 ">
            <button onCompositionUpdate={randomHero}> 
                <ReactPlayer url={herosSection[video]} loop controls={true} width='100%' height='100%'/>
            </button>
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
    );
}
export default Home;