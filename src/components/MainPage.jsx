import homevid from "../extra files/homevid-vmake.mp4"
import newspap from "../extra files/Newspapimg.png"
import birdsSong from "../extra files/birdssong1.mp3"
import sound from "../extra files/sound.png"
import news1 from "../extra files/news1.png"
import { useEffect, useRef, useState } from "react"
import HTMLFlipBook from "react-pageflip"
import newsstack from "../extra files/newsstack.png"
import solace from "../extra files/solace.png"



export default function MainPage(){
    const audref=useRef(null);
    const page=useRef(null);
    // const [isFlip,setIsFlip] = useState(false)
    const [isPlaying,setIsPlaying] = useState(false)
     const [isReady, setIsReady] = useState(false); 

    const playAudio=()=>{
        if(isPlaying){
            audref.current.play();
        }else{
            audref.current.pause();
        }
        setIsPlaying(!isPlaying)
    }
    const pageturn=()=>{
        page.current?.scrollIntoView({ behavior :"smooth"});
    }

     useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Setting isReady to true");
            setIsReady(true);
        }, 300); // wait for layout

        return () => clearTimeout(timer);
    }, []);



        // setTimeout(() => {
        //     setIsFlip(true);
        // }, 500);
    

   
    return(
        <>
        <h1 className="title">hey there folks! welcome to my land , handcrafted with creative interests and caffeine.</h1>
        <div className="homeimgcontainer">
        <video src={homevid} autoPlay muted loop className="homeimg"/>
        <audio  loop ref={audref}>
            <source src={birdsSong} type="audio/mpeg"/>
            ur browser does not support audio
        </audio>
        <div onClick={playAudio} className="sound">
            <img src={sound} alt="sound" className="soundimg"/>
        </div>
        <p className="p1">A pastel hush drapes the gentle room, where morning seeps through softened blind , each ray a whisper, 
        <br /> golden and slow, kissing pale walls with time unlined.</p>
        <button className="messybox" onClick={pageturn}>Read Newspaper</button>
        </div>
        <div className="paperdiv">
            <div className="newspaper-wrapper">
                <img src={newspap} alt="newspap" className="newspap" ref={page}/>
            </div>
                {/* <div className={isFlip?"flipbook-visible":"flipbook-hidden"}> */}
                {isReady && (
                    console.log("Rendering Flipbook") || (
                <div className="flipbook-container">
                    <HTMLFlipBook width={250} height={354} showCover={true} className="flipbook" usePortrait={false}>
                        <div className="page">
                            <img src={news1} alt="page1" className="page1"/>
                        </div>
                        <div className="page">
                            <img src={solace} alt="page2" className="page2"/>
                        </div>
                        <div className="page">
                            <p className="pagetext">hey there am third page</p>
                        </div>
                        <div className="page">
                            <p>my final page</p>
                        </div>
                    </HTMLFlipBook>
            </div>
                    )
    )}
            {/* </div> */}
            </div>
        
        </> 
    )
}