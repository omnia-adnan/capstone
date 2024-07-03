// import { useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Card } from "../Component/Card";
import '../style.css';

function Home() {
    // const [video, setVideo] = useState(0);
    
    const herosSection = [
        "https://www.youtube.com/watch?v=Vpx-RlF0AcA",
        "https://www.youtube.com/watch?v=mMHVEFWNLMc",
        "https://www.youtube.com/watch?v=orVIPr25ivo",
    ]

    // const randomHero = e => {
    //     const len = herosSection.length;
    //     setVideo(Math.floor(Math.random() * len));
    //         };

    return(
        <div className="video-container">
            <ReactPlayer
            className="react-player"
            url={herosSection}
            controls={true}
            style={{marginLeft: "5px", marginTop: "20px", borderRadius: "3rem"}}
            width= "calc(100% - 3%)"
            height="calc(100% - 65%)"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 xl:mr-6">
            <Card title="Healthy food" descrpthion=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cum molestias "/>
            <Card title="Healthy food" descrpthion=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cum molestias "/>
            <Card title="Healthy food" descrpthion=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, cum molestias "/>
            </div>
        </div>
    );
}
export default Home;
