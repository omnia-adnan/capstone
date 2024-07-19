import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Card } from "../Component/Card";
import '../style.css';
import { Information } from "../Component/Information";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
import img from "../Images/fireman.webp";
// import img2 from "../Images/ai-generated2.webp";

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
        "https://www.youtube.com/watch?v=mMHVEFWNLMc",
        "https://www.youtube.com/watch?v=orVIPr25ivo",
        "https://www.youtube.com/watch?v=Vpx-RlF0AcA",
    ]

    // const randomHero = e => {
    //     const len = herosSection.length;
    //     setVideo(Math.floor(Math.random() * len));
    //         };

    return(
        <div className="m-2">
        
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
        <div className="content">
        <div>
            <div className="size-full">
            <Information description="A mother's love is a powerful force, profoundly sculpting a child's development. It extends far beyond infancy, 
            influencing various aspects of a child's life,
            from emotional well-being and social skills to cognitive growth and moral understanding.
            The foundation of a child's emotional stability and social abilities is often rooted in a mother's love.
            Her nurturing presence fosters self-esteem and self-confidence, empowering her child to navigate life's complexities with resilience. 
            Furthermore, a mother's influence extends to a child's intellectual development, sparking curiosity and providing the necessary scaffolding for exploration.
            Beyond cognitive and emotional realms, a mother's love plays a vital role in teaching her child to manage emotions, 
            acting as a guiding light during challenging times. She is instrumental in shaping her child's moral compass, 
            instilling values of empathy, compassion, and ethical behavior.
            A mother's love and presence contribute significantly to her child's development. 
            This bond, foundational to a child's journey through life, impacts their emotional intelligence, 
            social interactions, intellectual growth, and moral understanding, leaving an indelible mark on their life's trajectory. 
            Let's celebrate the remarkable influence of mothers and the lasting impact of their love on their children's development.
            How can I help my child form healthy habits?
            As a parent or caregiver, you play a big part in shaping children's eating and drinking habits. 
            When you make it a habit to consume foods and beverages that are low in added sugars, 
            saturated fat, and salt and high in fiber, the children you care for may learn to like these foods. 
            If a child you for does not like a new food, don't be upset. Children often need to see a new food many times before they will try it."/>
            </div>
            <div className="sm:flex">
            {/* <img src={img2} alt="carcter" className="sm:size-auto 2xl:size-1/5 2xl:ml-auto 2xl:mr-auto"/> */}
            <img src={img} alt="carcter" className="sm:size-auto 2xl:size-1/3 2xl:ml-auto 2xl:mr-auto"/>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 2xl:grid-cols-3 gap-3 2xl:gap-8 md:float-right">
        {gitData.map((data) => (
        <Card key={data.user} title={data.title} description={data.description} url={data.url}/>
        ))}
        </div>
        </div>
        </div>
    );
}
export default Home;
