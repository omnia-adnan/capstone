// import { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
// import { Card } from "../Component/Card";
import '../style.css';
import { Information } from "../Component/Information";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";


function Home() {
    // const [Name, setName] = useState('')
    // const [video, setVideo] = useState(0);
    // const [gitData, setGitData] = useState([]);
    // const navigate = useNavigate();

    // axios.defaults.withCredentials = true; 
    // useEffect(() => {
    //     axios.get('http://localhost:3000')
    //     .then(res => {
    //         if (res.data.valid) {
    //             setName(res.data.username);
    //         } else {
    //             navigate("/login")
    //         }
    //     })
    //     .catch ((err) =>{
    //         console.log(err);
    //     })
    // },[]);

    // useEffect(() =>{
    //     fetch("https://x8ki-letl-twmt.n7.xano.io/api:Wnz-Lmv_/article_links")
    //     .then((data) => data.json())
    //     .then(json => setGitData(json));
    
    //     }, []);

        // const client = new XanoClient({ 
        //     baseUrl: 'https://x8ki-letl-twmt.n7.xano.io/api:Wnz-Lmv_', 
        // });

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
            <Information description="How can I help my child form healthy habits?
            As a parent or caregiver, you play a big part in shaping children's eating and drinking habits. 
            When you make it a habit to consume foods and beverages that are low in added sugars, saturated fat, 
            and salt and are high in fiber, the children you care for may learn to like these foods as well. 
            If a child you are caring for does not like a new food right away, don't be upset. 
            Children often need to see a new food many times before they will try it."/>
        </div>
        {/* <div className="grid sm:grid-cols-3 gap-3 md:float-right">
        {gitData?.map((data) => (
        <Card key={data.user} title={data.title} description={data.description} url={data.url}/>
        ))}
        </div> */}
        </div>
        </div>
    );
}
export default Home;
