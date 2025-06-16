import { useEffect, useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import hands1 from "../extra files/hands210.jpeg";
import hands2 from "../extra files/hands2.jpeg";
import gif from "../extra files/gif4.gif";
import ambient from "../extra files/ambient5.mp3";
import spin from "../extra files/fps.mp4";
import Glitcha from "../extra files/glitch.mp3";

export default function Cli() {
  const data = useRef(null);
  const vidplay = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [Mygif, setGif] = useState(false);
  const [distortgif, setDistortgif] = useState(false);
  const [playaudi, setPlayaud] = useState(false);
  const [playvid, setPlayvid] = useState(false);
  const [glitchaud, setGlitchaud] = useState(false);
  const [glitchpara, setGlitchpara] = useState(false);
  const [inp, setInp] = useState("");
  const [list, setList] = useState([]);

 const handleInput = (e) => {
  if (e.key === "Enter" && inp.trim()) {
    const command = inp.trim().toLowerCase();
    let response = "Unknown command";

    if (command === "help" || command === "?") {
      response = "Available commands: help, about, clear";
    } else if (command === "about") {
      response = `Rahul Krishna\n
A Full Stack Developer in the making — I build systems. End to end. Front to back. Pixel to packet.

Currently pursuing my B.E. in Computer Science and Engineering at Dhirajlal Gandhi College of Technology, I’m a passionate developer with hands-on experience in Java, Python, C, HTML, CSS, and JavaScript. I dont just write code — I architect chaos into clean design. I take broken ideas, gut them, and rebuild them stronger, faster, leaner.

Driven by a love for technology and its power to simplify life, I’ve worked on several academic and personal projects that shaped my skills in responsive web design, efficient algorithms, and user-friendly interfaces. I am constantly learning, experimenting, and pushing myself toward becoming a highly skilled full-stack developer.

I believe code is an art — and I am here to be the artist.`;
    } else if (command === "new") {
      response = "This is a CLI experience built by Rahul.";
    }else if (command === "clear") {
      setList([]);
      setInp("");
      return;
    }

    // Push both input and response to the list
    setList((prev) => [
      ...prev,
      { type: "input", text: command },
      { type: "response", text: response },
    ]);
    setInp(""); // Clear the input
  }
};

  useEffect(() => {
    if (playvid && vidplay.current) {
      const video = vidplay.current;

      const handleEnd = () => {
        setPlayvid(false);
      };

      video.addEventListener("ended", handleEnd);
      return () => video.removeEventListener("ended", handleEnd);
    }
  }, [playvid]);

  useEffect(() => {
    const time = setTimeout(() => setLoaded(true), 100);
    const gifTimer = setTimeout(() => setGif(true), 700);
    return () => {
      clearTimeout(time);
      clearTimeout(gifTimer);
    };
  }, []);

  return (
   <div className="cli">
  <img
    src={hands1}
    alt="left"
    className={`hands handsleft ${loaded && !distortgif ? "active" : ""}`}
  />
  {distortgif && <div className="fill-animation" />} {/* Moved here */}
  <div className="gif-wrapper">
    <img
      src={gif}
      alt="gif"
      className={`center-gif ${Mygif ? "visible" : ""} ${distortgif ? "shrink" : ""}`}
      onClick={() => {
        setDistortgif(true);
        setPlayaud(true);
        setTimeout(() => setPlayvid(true), 300);
        setTimeout(() => setGlitchaud(true), 310);
        setTimeout(() => setGlitchpara(true), 300);
      }}
    />
  </div>
  {playaudi && (
    <audio ref={data} autoPlay>
      <source src={ambient} type="audio/mpeg" />
    </audio>
  )}
  <img
    src={hands2}
    alt="right"
    className={`hands handsright ${loaded && !distortgif ? "active" : ""}`}
  />
      {playvid && (
        <video autoPlay className="vid" ref={vidplay}>
          <source src={spin} type="video/mp4" />
        </video>
      )}

      {glitchaud && (
        <audio autoPlay>
          <source src={Glitcha} type="audio/mp3" />
        </audio>
      )}

<div className="container">
      {glitchpara && (
        <p className={`climode ${!playvid ? "climodeoff" : ""}`}>
          <Typewriter
            key={playvid ? "full" : "short"}
            words={!playvid ? ["Cli Mode"] : ["U just entered the CLI Mode."]}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </p>
      )}
      </div>

   {!playvid && glitchpara && (
  <>
    <div className="mainpara">
      <p>
        Welcome to EXE Grid,<br />Type "help" or "?" to continue.
      </p>
    </div>
  </>
)}

{!playvid && glitchpara && (
  <div className="terminal">
    {list.map((line, idx) =>
  line.type === "response" ? (
    line.text.split("\n").map((part, i) => (
      <p key={`${idx}-${i}`} className={`cli-line ${line.type}`}>
        {part}
      </p>
    ))
  ) : (
    <p key={idx} className={`cli-line ${line.type}`}>
      cli@rahul~$ {line.text}
    </p>
  )
)}


    <div className="cli-line input">
      cli@rahul~$&nbsp;
      <input
        type="text"
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        onKeyDown={handleInput}
        className="boxy"
        
      />
    </div>
    </div>
    ) }

    </div>
);
}
