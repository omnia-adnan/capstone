import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Card } from "../Component/Card";
import '../style.css';
import { Information } from "../Component/Information";
import img from "../Images/fireman.webp";
import CalorieCalculator from "../Component/CalorieCalculator";


function Home() {
    // const [video, setVideo] = useState(0);
    const [gitData, setGitData] = useState([]);

    useEffect(() =>{
        fetch("https://x8ki-letl-twmt.n7.xano.io/api:wt6EPZDC/article_link")
        .then((data) => data.json())
        .then(json => setGitData(json));
        console.log(setGitData);
        }, []);

        
    const herosSection = [
        "https://www.youtube.com/watch?v=orVIPr25ivo",
        "https://www.youtube.com/watch?v=mMHVEFWNLMc",
        "https://www.youtube.com/watch?v=Vpx-RlF0AcA",
    ]

    // const randomHero = e => {
    //     const len = herosSection.length;
    //     setVideo(Math.floor(Math.random() * len));
    //         };

    return(
        <div>
        <div className="video-container" style={{ position: 'relative', paddingTop: '56.25%'}}>
            <ReactPlayer
            className="react-player"
            url={herosSection}
            controls={true}
            playing={true}
            style={{ position: 'absolute', top: '0', left: '0' }}
            width= "100%"
            height="100%"
            />
        </div>
        
        <div>
        <div>
            <div>
            <Information description="A mother's love profoundly sculpts a child's development, 
            influencing emotional well-being, social skills, cognitive growth, and moral understanding. 
            Her presence fosters self-esteem, and self-confidence, and empowers her child to navigate life's 
            challenges. This bond impacts emotional intelligence, social interactions, intellectual growth, 
            and moral understanding, leaving an indelible mark on their trajectory."/>
            <h1 className="text-2xl px-2 xl:px-3 text-lime-400 mb-5 font-semibold">Calculate how many calories yourchild's body needs per day</h1>
            <CalorieCalculator/>
            </div>
            <Information description="As a parent or caregiver, you play a big part in shaping children's eating and drinking habits. 
            When you make it a habit to consume foods and beverages that are low in added sugars, saturated fat, 
            and salt and high in fiber, the children you care for may learn to like these foods. 
            If a child does not want a new food, don't be upset. Children often need to see a new food many 
            times before they will try it."/>
            <div>
            <div className="sm:flex">
            <img src={img} alt="carcter" className="block mx-auto sm:size-1/2"/>
            </div>
        </div>
        </div>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-3 2xl:gap-8 md:float-right">
        {gitData.map((data) => (
        <Card key={data.user} title={data.title} description={data.description} url={data.url}/>
        ))}
        </div>
        </div>
    </div>
    );
}
export default Home;
