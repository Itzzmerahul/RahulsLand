import { use, useEffect, useRef, useState } from "react"
import {Typewriter} from "react-simple-typewriter"
import hands1 from "../extra files/hands210.jpeg"
import hands2 from "../extra files/hands2.jpeg"
import gif from "../extra files/gif4.gif"
import distort from "../extra files/distort3.gif"
import ambient from "../extra files/ambient5.mp3"
import spin from "../extra files/fps.mp4"
import Glitcha from "../extra files/glitch.mp3"

export default function Cli(){

    const data=useRef(null)
    const vidplay = useRef(null)
    const [loaded,setloaded]= useState(false)
    const [Mygif,setgif] = useState(false)
    const [distortgif,setDistortgif] = useState(false)
    const [playaudi,setPlayaud]=useState(false)
    const [playvid,setPlayvid] =useState(false)
    const [glitchaud,setGlitchaud] = useState(false)
    const [glitchpara,setGlitchpara]= useState(false)

    console.log("GIF Path: ", gif);

   


    useEffect(() => {
  if (playvid && vidplay.current) {
    const video = vidplay.current;

    const handleEnd = () => {
      setPlayvid(false); // This will hide the video when it ends
    };

    video.addEventListener("ended", handleEnd);

    return () => {
      video.removeEventListener("ended", handleEnd);
    };
  }
}, [playvid]);


    useEffect(()=>{
        const time=setTimeout(() => setloaded(true),100);
        const mygif=setTimeout(()=> setgif(true),700)


        return ()=>{
            clearTimeout(time);
            clearTimeout(mygif)
           
        }
        }, []);
    
    return(


        <div className="cli" >
            
            <img src={hands1} alt="" className={`hands handsleft ${loaded?"active":""}`} />
           
        <div className="gif-wrapper">
  {distortgif && <div className="fill-animation" />}
  
  <img
    src={gif}
    alt="gif"
    className={`center-gif ${Mygif ? "visible" : ""} ${distortgif ? "shrink" : ""}`}
    onClick={() =>{
    setDistortgif(true); 
    setPlayaud(true);
    
    setTimeout(() => 
      setPlayvid(true), 300);
      

    setTimeout(() => 
         setGlitchaud(true),310);
     

    setTimeout(() => 
        setGlitchpara(true),300);


}}

  />
</div>
             {playaudi&&(<audio ref={data} autoPlay>
                <source src={ambient} type="audio/mpeg"/>browser doesnt support this aud
             </audio>
             )}
            
            <img src={hands2} alt=""  className={`hands handsright ${loaded?"active":""}`}/>

           {playvid&&(
            <video autoPlay className="vid" ref={vidplay}>
                <source src={spin} type="video/mp4"/>
            </video>)}

            {glitchaud&&(
            <audio autoPlay>
                <source src={Glitcha} type="audio/mp3"/>
            </audio>)}
            
            {glitchpara&&(<p className={`climode ${!playvid ? "climodeoff" : ""}`}>
                <Typewriter
                key={playvid ? "full" : "short"}
        words={!playvid? ['Cli Mode']:['U just entered the CLI Mode.']}
        loop={1}
        cursor
        cursorStyle='|'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
            </p>)}



            <div>
              
            </div>
        </div>




        
    )
}