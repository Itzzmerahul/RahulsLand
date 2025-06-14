import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";
import homevid from "../extra files/homevid-vmake.mp4";
import newspap from "../extra files/Newspapimg.png";
import birdsSong from "../extra files/saudade.mp3";
import sound from "../extra files/sound.png";
import news1 from "../extra files/news1.png";
import newsstack from "../extra files/newsstack.png";
import solace from "../extra files/solace.png";
import flipSound from "../extra files/pagefilp.mp3"; // using uploaded mp3 directly

export default function MainPage() {
  const audref = useRef(null);
  const page = useRef(null);
  const flipRef = useRef(null);
  const flipAudioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showFlipbook, setShowFlipbook] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [showStack, setShowStack] = useState(false);

  const playAudio = () => {
    if (isPlaying) {
      audref.current.pause();
    } else {
      audref.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const pageturn = () => {
    page.current?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setShowStack(true), 300);
  };

  const handleStackClick = async () => {
    setShowFlipbook(true);
    setIsReady(true);
    setShowStack(false);
    
    const audio = flipAudioRef.current;
    if (audio) {
      try {
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
      } catch (err) {``
        console.log("Autoplay blocked or preload failed:", err);
      }
    }
  };

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        flipRef.current &&
        !flipRef.current.contains(event.target) &&
        showFlipbook
      ) {
        setShowFlipbook(false);
        setShowStack(true);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFlipbook]);

  return (
    <>
      <h1 className="title">
        hey there folks! welcome to my land , handcrafted with creative interests and caffeine.
      </h1>

      <div className="homeimgcontainer">
        <video src={homevid} autoPlay muted loop className="homeimg" />
        <audio loop ref={audref}>
          <source src={birdsSong} type="audio/mpeg" />
          ur browser does not support audio
        </audio>
        <div onClick={playAudio} className="sound">
          <img src={sound} alt="sound" className="soundimg" />
        </div>
        <p className="p1">
          A pastel hush drapes the gentle room, where morning seeps through softened blind, each ray a whisper,<br />
          golden and slow, kissing pale walls with time unlined.
        </p>
        <button className="messybox" onClick={pageturn}>Read Newspaper</button>
      </div>

      <audio ref={flipAudioRef} preload="auto">
        <source src={flipSound} type="audio/mpeg" />
      </audio>

      <div className="paperdiv">
        <div className={showFlipbook ? "newspaper-wrapper pointermode" : "newspaper-wrapper"} ref={page}>
          <img src={newspap} alt="newspap" className="newspap" />
        </div>

        <p className="p2">A morning hum, the sun pours wide,
through windows clear on <br/> either side. While outside life may dart and sway,
he reads the pulse  <br/> of the world today.</p>
        

        {showStack && !showFlipbook && (
          <div className="newsstack-container" onClick={handleStackClick}>
            <img src={newsstack} alt="stack" className="newsstack-img" />
          </div>
        )}

        {isReady && showFlipbook && (
          <div className="flipbook-container" ref={flipRef}>
            <HTMLFlipBook
              width={407}
              height={569}
              showCover={true}
              usePortrait={false} 
              className="flipbook"
              flippingTime={500}
              onFlip={() => {
                const audio = flipAudioRef.current;
                if (audio) {
                  try {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.play();
                  } catch (err) {
                    console.log("Playback error:", err);
                  }
                }
              }}
            >
              <div className="page">
                <img src={news1} alt="page1" className="page1" />
              </div>
              <div className="page">
                <img src={solace} alt="page2" className="page2" />
              </div>
              <div className="page">
                <p className="pagetext">hey there am third page</p>
              </div>
              <div className="page">
                <p>my final page</p>
              </div>
            </HTMLFlipBook>
          </div>
        )}
      </div>
    </>
  );
}
